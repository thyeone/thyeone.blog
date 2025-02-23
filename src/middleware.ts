import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const ip = request.ip ?? request.headers.get('x-real-ip');
  const forwardedFor = request.headers.get('x-forwarded-for');

  console.log(`[User IP] ${ip}`);
  console.log(`[X-Forwarded-For] ${forwardedFor}`);

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
