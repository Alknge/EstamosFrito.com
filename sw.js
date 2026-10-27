const CACHE_NAME = 'inventario-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // Añade aquí otros archivos que uses, como CSS, JS si están separados
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});