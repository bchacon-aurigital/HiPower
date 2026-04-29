// Bump this version on every deploy to force cache invalidation
const CACHE_VERSION = 'v5';
const STATIC_CACHE = `hipower-static-${CACHE_VERSION}`;
const ASSETS_CACHE = `hipower-assets-${CACHE_VERSION}`;

const PRECACHE_ASSETS = [
  '/assets/landing/LogoHiPower.svg',
  '/assets/homepage/HeroBG.png',
  '/assets/fonts/Futura Bold font.ttf',
  '/assets/fonts/futura medium condensed bt.ttf',
  '/assets/fonts/FuturaMediumBT.ttf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(ASSETS_CACHE).then(cache => cache.addAll(PRECACHE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== STATIC_CACHE && key !== ASSETS_CACHE)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  // _next/static/ files have content-hash in their name → safe to cache forever (cache-first)
  // BUT: never serve stale HTML pages — they reference chunk hashes that must stay in sync
  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(
      caches.open(STATIC_CACHE).then(async cache => {
        const cached = await cache.match(request);
        if (cached) return cached;
        const fresh = await fetch(request);
        if (fresh.ok) cache.put(request, fresh.clone());
        return fresh;
      })
    );
    return;
  }

  // Static assets (images, fonts, videos) → cache-first with network fallback
  if (url.pathname.startsWith('/assets/')) {
    event.respondWith(
      caches.open(ASSETS_CACHE).then(async cache => {
        const cached = await cache.match(request);
        if (cached) return cached;
        const fresh = await fetch(request);
        if (fresh.ok) cache.put(request, fresh.clone());
        return fresh;
      })
    );
    return;
  }

  // HTML pages → network-first so users always get fresh HTML with correct chunk references.
  // Fall back to cache only when offline.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(async response => {
          if (response.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(request, response.clone());
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached || caches.match('/');
        })
    );
    return;
  }
});
