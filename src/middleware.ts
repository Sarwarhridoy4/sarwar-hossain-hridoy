import { NextRequest, NextResponse } from "next/server";

type AuthUser = {
  id: string;
  email: string;
  role: "ADMIN" | "USER";
};

const getAuthUser = async (req: NextRequest): Promise<AuthUser | null> => {
  const accessToken = req.cookies.get("accessToken")?.value;
  if (!accessToken) return null;

  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_API || "http://localhost:5000/api/v1";

    const res = await fetch(`${baseUrl}/auth/me`, {
      method: "GET",
      headers: {
        cookie: req.headers.get("cookie") || "",
      },
      cache: "no-store",
    });

    if (res.ok) {
      const json = await res.json();
      return json?.data || null;
    }

    if (res.status !== 401) return null;

    const refreshRes = await fetch(`${baseUrl}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie: req.headers.get("cookie") || "",
      },
      cache: "no-store",
    });

    if (!refreshRes.ok) return null;

    const retryRes = await fetch(`${baseUrl}/auth/me`, {
      method: "GET",
      headers: {
        cookie: req.headers.get("cookie") || "",
      },
      cache: "no-store",
    });

    if (!retryRes.ok) return null;
    const retryJson = await retryRes.json();
    return retryJson?.data || null;
  } catch (error) {
    console.error("Auth check failed", error);
    return null;
  }
};

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  const user = await getAuthUser(req);

  if (pathname === "/login" || pathname === "/signup") {
    if (user?.role === "ADMIN") {
      url.pathname = "/admin";
      return NextResponse.redirect(url);
    }
    if (user) {
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    if (!user) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
    if (user.role !== "ADMIN") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  if (pathname.startsWith("/dashboard")) {
    if (!user) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
    if (user.role === "ADMIN") {
      url.pathname = "/admin";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/signup"],
};
