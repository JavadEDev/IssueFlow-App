import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as jose from 'jose'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // API auth guard (kept as-is, header presence check)
  if (pathname.startsWith('/api')) {
    const authHeader = request.headers.get('Authorization')
    if (!authHeader) {
      return NextResponse.json(
        { success: false, message: 'Authorization header is required' },
        { status: 401 }
      )
    }
    // Additional API JWT checks can be added here if needed
    return NextResponse.next()
  }

  // Dashboard auth guard (JWT cookie validation)
  if (
      pathname.startsWith('/dashboard') ||
      pathname.startsWith("/issues")
  ) {
    const token = request.cookies.get('auth_token')?.value
    if (!token) {
      return NextResponse.redirect(new URL('/signin', request.url))
    }

    try {
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || 'your-secret-key-min-32-chars-long!!!'
      )
      await jose.jwtVerify(token, secret)
      return NextResponse.next()
    } catch {
      return NextResponse.redirect(new URL('/signin', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/api/:path*",
    "/dashboard/:path*",
    "/issues/:path*",

],
}