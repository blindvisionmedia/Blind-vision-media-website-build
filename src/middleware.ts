import { NextResponse, type NextRequest } from 'next/server';
export function middleware(req: NextRequest){
  const res = NextResponse.next();
  if (req.nextUrl.pathname.startsWith('/portal') || req.nextUrl.pathname.startsWith('/admin')) {
    res.headers.set('X-Robots-Tag','noindex, nofollow');
  }
  return res;
}
export const config = { matcher: ['/portal/:path*','/admin/:path*'] };
