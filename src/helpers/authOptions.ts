/* eslint-disable @typescript-eslint/no-explicit-any */
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

// Extend NextAuth types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
      provider?: string | null;
      accessToken?: string;
      refreshToken?: string;
      accessTokenExpires?: number;
    };
  }
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string | null;
    provider?: string | null;
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
  }
}

// Refresh access token helper

async function refreshAccessToken(token: any) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/refresh-token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken: token.refreshToken }),
      }
    );

    if (!res.ok) throw new Error("Refresh failed");

    const refreshed = await res.json();

    return {
      ...token,
      accessToken: refreshed.accessToken,
      refreshToken: refreshed.refreshToken ?? token.refreshToken,
      accessTokenExpires: Date.now() + refreshed.expiresIn * 1000,
    };
  } catch (err) {
    console.error("Error refreshing token", err);
    return { ...token, error: "RefreshAccessTokenError" };
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt", // Required for CredentialsProvider
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            credentials: "include", // ✅ receive backend cookies
          }
        );

        if (!res.ok) return null;

        const json = await res.json();
        const user = json.data;

        if (!user?.id || !user?.accessToken || !user?.refreshToken) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.profilePicture || null,
          role: user.role || "USER",
          provider: "CREDENTIAL",
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          accessTokenExpires: Date.now() + 60 * 60 * 1000, // or use expires from token
        };
      },
    }),
  ],

  secret: process.env.AUTH_SECRET,

  callbacks: {
    async jwt({ token, user, account, profile }) {
      // On initial sign in, NextAuth provides `user`.
      if (user) {
        // Determine provider from `account` (NextAuth provides account on OAuth sign-in)
        const provider = account?.provider?.toLowerCase();

        try {
          if (provider === "google" || provider === "github") {
            // Build payload for backend. Many backends expect an access token or profile.
            // Here we send both `account` and `profile` so backend can decide what it needs.
            const payload = { account, profile, user };

            const res = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API}/auth/${provider}`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
                credentials: "include",
              }
            );

            if (res.ok) {
              const json = await res.json();
              const u = json.data;
              token.id = u.id ?? user.id ?? token.sub;
              token.role = u.role ?? user.role;
              token.provider = provider.toUpperCase();
              token.accessToken = u.accessToken ?? token.accessToken;
              token.refreshToken = u.refreshToken ?? token.refreshToken;
              token.accessTokenExpires =
                Date.now() + (u.expiresIn ?? 3600) * 1000;
              return token;
            }
            // If backend exchange failed, continue and fall back to basic mapping
          }

          // Default behavior: map available user fields into token
          token.id = user.id ?? token.id;
          token.role = user.role ?? token.role;
          token.provider = token.provider ?? provider?.toUpperCase() ?? null;
          token.accessToken = token.accessToken ?? (user as any).accessToken;
          token.refreshToken = token.refreshToken ?? (user as any).refreshToken;
          token.accessTokenExpires =
            token.accessTokenExpires ?? (user as any).accessTokenExpires;
          return token;
        } catch (err) {
          console.error("Error exchanging provider tokens:", err);
          // Preserve any existing token fields
          return token;
        }
      }

      // If token valid, return
      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      // Else refresh
      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.provider = token.provider as string;
        session.user.accessToken = token.accessToken as string;
        session.user.refreshToken = token.refreshToken as string;
        session.user.accessTokenExpires = token.accessTokenExpires as number;
      }
      return session;
    },
  },

  cookies: {
    sessionToken: {
      name: "next-auth.session-token",
      options: {
        httpOnly: true,
        secure: true, // ✅ works on dev & prod
        sameSite: "lax",
        path: "/",
      },
    },
  },

  pages: {
    signIn: "/login",
  },
};
