self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('cosmic-v1').then(c => {
      return c.addAll(['./','./index.html','./manifest.json','./loading.jpg','./taptonext.jpg','./space.jpg']);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
