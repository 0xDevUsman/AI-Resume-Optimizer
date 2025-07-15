// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token =
    request.cookies.get("next-auth.session-token")?.value || // For default provider
    request.cookies.get("__Secure-next-auth.session-token")?.value; // For secure environments (like production)

  const { pathname } = request.nextUrl;

  const isAuthPage = pathname === "/signin" || pathname === "/signup";
  const isProtectedPage = pathname === "/optimizer";

  // ❌ Not logged in and trying to access protected page
  if (!token && isProtectedPage) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // ✅ Logged in but trying to go to login/signup
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/optimizer", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/optimizer", "/signin", "/signup"],
};
