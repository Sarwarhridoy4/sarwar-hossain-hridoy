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
    };
  }
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string | null;
    provider?: string | null;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    // ✅ Google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    // ✅ GitHub provider
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    // ✅ Credentials provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          if (!res.ok) return null;

          const user = await res.json();

          if (user?.id) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              image: user.profilePicture || null,
              role: user.role || "USER",
              provider: user.provider || "CREDENTIAL",
            };
          }

          return null;
        } catch (err) {
          console.error("Error in credentials authorize:", err);
          return null;
        }
      },
    }),
  ],

  // ✅ Sync Social Logins with backend
  events: {
    async signIn({ user, account }) {
      if (!account?.provider) return;

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/auth/${account.provider}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: user.id,
              name: user.name,
              email: user.email,
              profilePicture: user.image,
              provider: account.provider.toUpperCase(),
            }),
          }
        );

        if (!res.ok) {
          console.error(`❌ ${account.provider} backend failed`);
          return;
        }

        const dbUser = await res.json();

        // 🔑 overwrite with backend user info
        user.id = dbUser.id;
        user.role = dbUser.role;
        user.provider = dbUser.provider;
      } catch (err) {
        console.error("Error syncing social login:", err);
      }
    },
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
        token.provider = (user as any).provider;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.provider = token.provider as string;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // ✅ Always redirect after login to the intended page or dashboard
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      return `${baseUrl}/dashboard`;
    },
  },

  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login", // custom login page
  },
};
