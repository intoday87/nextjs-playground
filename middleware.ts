import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { parse } from 'query-string'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const query = parse(request.nextUrl.search)
  console.log("[trace] middleware", query)
  // if (query['_redirect-url']) {
  //   return NextResponse.rewrite(new URL('/b', request.url))
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}