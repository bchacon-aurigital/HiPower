const CACHE_NAME = 'hipower-v2';
const STATIC_CACHE = 'hipower-static-v2';
const DYNAMIC_CACHE = 'hipower-dynamic-v2';

const STATIC_ASSETS = [
  '/',
  '/servicios/',
  '/proyectos/',
  '/sobrenosotros/',
  '/assets/landing/LogoHiPower.svg',
  '/assets/homepage/HeroBG.png',
  '/assets/fonts/Futura Bold font.ttf',
  '/assets/fonts/futura medium condensed bt.ttf',
  '/assets/fonts/FuturaMediumBT.ttf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      console.log('Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
          .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and cross-origin requests (except for fonts if needed)
  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  // Assets and Fonts: Cache-First strategy
  if (url.pathname.includes('/assets/') || url.pathname.includes('/fonts/')) {
    event.respondWith(
      caches.match(request).then(cachedResponse => {
        if (cachedResponse) return cachedResponse;
        
        return fetch(request).then(fetchResponse => {
          if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
            return fetchResponse;
          }
          const responseToCache = fetchResponse.clone();
          caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(request, responseToCache);
          });
          return fetchResponse;
        });
      })
    );
    return;
  }

  // Navigation and other requests: Stale-While-Revalidate strategy
  event.respondWith(
    caches.match(request).then(cachedResponse => {
      const fetchPromise = fetch(request).then(fetchResponse => {
        if (fetchResponse && fetchResponse.status === 200 && fetchResponse.type === 'basic') {
          const responseToCache = fetchResponse.clone();
          caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(request, responseToCache);
          });
        }
        return fetchResponse;
      }).catch(() => {
        // Fallback for offline navigation
        if (request.mode === 'navigate') {
          return caches.match('/') || caches.match('/offline.html');
        }
      });

      return cachedResponse || fetchPromise;
    })
  );
}); 