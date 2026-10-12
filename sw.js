const CACHE_NAME = 'odinx-pwa-v8';
const SHELL = ['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch.png','./logo.png'];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(SHELL.map(async path => {
      try {
        const response = await fetch(path, {cache:'reload'});
        if (response.ok) await cache.put(path, response);
      } catch (_) {}
    }));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    if(response && response.status === 200 && new URL(event.request.url).origin === self.location.origin) {
      const copy=response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request,copy));
    }
    return response;
  }).catch(() => caches.match('./index.html'))));
});