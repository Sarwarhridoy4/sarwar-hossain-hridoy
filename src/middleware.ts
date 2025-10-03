import { withAuth } from "next-auth/middleware";

export default withAuth({
  // Redirect users to login if not authenticated
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: [
    "/dashboard/:path*", // protect all /dashboard routes
    "/login",
    "/signup",
  ],
};

// Optional: Redirect logic for auth pages
// Users who are already logged in trying to access /login or /signup
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("next-auth.session-token");

  // If user is logged in and tries to access /login or /signup, redirect to home
  if (token && (url.pathname === "/login" || url.pathname === "/signup")) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
