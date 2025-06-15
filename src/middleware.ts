import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Protected routes that require authentication
const protectedRoutes = [
  '/user-dashboard',
  '/agent-dashboard',
  '/admin-dashboard',
  '/bookings',
  '/messages',
  '/favorites',
];

// Routes that require specific roles
const roleBasedRoutes = {
  '/agent-dashboard': ['AGENT', 'ADMIN'],
  '/admin-dashboard': ['ADMIN'],
};

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isAuthenticated = !!token;
  const { pathname } = request.nextUrl;

  // Check if the route requires authentication
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  
  // Check if the route requires a specific role
  const requiredRoles = Object.entries(roleBasedRoutes).find(([route]) => pathname.startsWith(route))?.[1];
  
  // If route requires authentication and user is not authenticated, redirect to login
  if (isProtectedRoute && !isAuthenticated) {
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(redirectUrl);
  }
  
  // If route requires a specific role and user doesn't have it, redirect to home
  if (requiredRoles && (!token?.role || !requiredRoles.includes(token.role as string))) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // If all checks pass, continue to the requested page
  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}; 