import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Add paths that require authentication
const protectedPaths = ['/mentor-dashboard']

// Add paths that are only for non-authenticated users
const authPaths = ['/login', '/register', '/forgot-password', '/reset-password', '/verify-otp']

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const userCookie = request.cookies.get('user')?.value
  const { pathname } = request.nextUrl

  // 1. Check if the path is protected
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path))
  
  if (isProtectedPath) {
    if (!token) {
      // No token, redirect to login
      const url = new URL('/login', request.url)
      url.searchParams.set('redirect', pathname)
      return NextResponse.redirect(url)
    }

    // If we have a token but no user cookie, something is wrong, redirect to login
    if (!userCookie) {
      const url = new URL('/login', request.url)
      url.searchParams.set('redirect', pathname)
      return NextResponse.redirect(url)
    }

    // Role-based protection
    try {
      // Handle potential URL encoding of the cookie value
      const decodedUser = decodeURIComponent(userCookie)
      const user = JSON.parse(decodedUser)
      
      if (pathname.startsWith('/mentor-dashboard') && user.role !== 'mentor') {
        // Logged in but not a mentor, redirect to home
        return NextResponse.redirect(new URL('/', request.url))
      }
    } catch (error) {
      console.error('Middleware: Error parsing user cookie', error)
      // If parsing fails, redirect to login to reset state
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // 2. Check if the path is an auth path (login/register)
  const isAuthPath = authPaths.some(path => pathname.startsWith(path))
  if (isAuthPath && token) {
    // Already logged in, redirect to home or dashboard
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/mentor-dashboard/:path*',
    '/login',
    '/register',
    '/forgot-password',
    '/reset-password',
    '/verify-otp'
  ],
}
