import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (url.pathname === '/store/buy') {
    return NextResponse.redirect(new URL('/store', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/store/buy/:path*'],
};
