const CACHE_NAME = 'studyflow-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/js/router.js',
  '/data/maths.js',
  '/data/maths-expertes.js',
  '/data/ses.js',
  '/data/philosophie.js',
  '/data/histoire-geo.js',
  '/data/emc.js',
  '/data/langues.js',
  '/data/enseignement-scientifique.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});