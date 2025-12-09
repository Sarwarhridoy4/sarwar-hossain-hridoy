import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname;
  const secret = process.env.NEXTAUTH_SECRET;

  // 1️⃣ Get NextAuth JWT token
  const token = await getToken({ req, secret });

  // 2️⃣ Prepare response
  const res = NextResponse.next();

  // 3️⃣ If token exists, set accessToken cookie for backend requests
  if (token?.accessToken) {
    res.cookies.set({
      name: "accessToken",
      value: String(token.accessToken),
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });
  }

  // 4️⃣ Redirect logged-in users away from auth pages
  if (token && (pathname === "/login" || pathname === "/signup")) {
    // ✅ Admin goes to /admin
    if (token.role === "ADMIN") {
      url.pathname = "/admin";
    } else {
      url.pathname = "/dashboard";
    }
    return NextResponse.redirect(url);
  }

  // 5️⃣ Protect /admin routes (ADMIN only)
  if (pathname.startsWith("/admin")) {
    if (!token) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
    if (token.role !== "ADMIN") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  // 6️⃣ Protect /dashboard routes (USER or ADMIN)
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }

    // ✅ Admin should always go to /admin instead
    if (token.role === "ADMIN") {
      url.pathname = "/admin";
      return NextResponse.redirect(url);
    }

    if (!(token.role === "USER" || token.role === "ADMIN")) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  // 7️⃣ Allow access otherwise
  return res;
}

// 8️⃣ Match protected paths
export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/signup"],
};
