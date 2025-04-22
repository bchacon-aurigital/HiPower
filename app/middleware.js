// Nota: Este middleware no se ejecutará en el sitio estático exportado
// pero lo mantenemos como referencia para cuando se sirva el sitio
// con un servidor que soporte middleware (como Vercel, Netlify, etc.)

import { NextResponse } from 'next/server';

export function middleware(request) {
  // Obtiene información de aceptación de encodings del cliente
  const acceptEncoding = request.headers.get('accept-encoding') || '';

  // Prepara los headers de respuesta
  const responseHeaders = new Headers();
  
  // Verifica los tipos de compresión que acepta el navegador
  if (/br/.test(acceptEncoding)) {
    // Cliente acepta compresión Brotli
    responseHeaders.set('Vary', 'Accept-Encoding');
  } else if (/gzip/.test(acceptEncoding)) {
    // Cliente acepta compresión GZIP
    responseHeaders.set('Vary', 'Accept-Encoding');
  }
  
  // Agrega headers adicionales para optimización
  responseHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
  
  // Continúa con la respuesta, agregando los headers configurados
  return NextResponse.next({
    request: {
      headers: request.headers,
    },
    headers: responseHeaders,
  });
}

// Configuración para indicar a qué rutas se aplica este middleware
export const config = {
  matcher: [
    // Aplicar a archivos estáticos
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 