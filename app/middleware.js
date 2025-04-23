import { NextResponse } from 'next/server';

export function middleware(request) {
  const acceptEncoding = request.headers.get('accept-encoding') || '';

  const responseHeaders = new Headers();
  
  if (/br/.test(acceptEncoding)) {
    responseHeaders.set('Vary', 'Accept-Encoding');
  } else if (/gzip/.test(acceptEncoding)) {
    responseHeaders.set('Vary', 'Accept-Encoding');
  }
  
  responseHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
  
  return NextResponse.next({
    request: {
      headers: request.headers,
    },
    headers: responseHeaders,
  });
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 