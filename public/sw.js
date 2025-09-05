const CACHE_NAME = 'hipower-v1';
const STATIC_CACHE = 'hipower-static-v1';
const DYNAMIC_CACHE = 'hipower-dynamic-v1';

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

  if (request.method !== 'GET' || !url.origin.includes('hipowercr.com')) {
    return;
  }

  if (request.url.includes('/assets/') || request.url.includes('/fonts/')) {
    event.respondWith(
      caches.match(request).then(response => {
        return response || fetch(request).then(fetchResponse => {
          return caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).then(response => {
        return caches.open(DYNAMIC_CACHE).then(cache => {
          cache.put(request, response.clone());
          return response;
        });
      }).catch(() => {
        return caches.match(request).then(response => {
          return response || caches.match('/');
        });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(response => {
      return response || fetch(request);
    })
  );
}); 