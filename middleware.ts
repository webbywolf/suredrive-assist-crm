import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;

  // List of protected routes
  const protectedRoutes = ["/dashboard", "/admin"];

  if(token){
    if (req.nextUrl.pathname === "/login") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }}

  // If user tries to access a protected route without a token, redirect to login
  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/login"],
};
