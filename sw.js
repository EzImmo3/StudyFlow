const CACHE_NAME = 'studyflow-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/js/router.js',
  '/js/store.js',
  '/data/maths.js',
  '/data/maths-expertes.js',
  '/data/ses.js',
  '/data/philosophie.js',
  '/data/histoire-geo.js',
  '/data/emc.js',
  '/data/langues.js',
  '/data/enseignement-scientifique.js'
];

// Installation : mise en cache initiale de tous les actifs essentiels
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activation : nettoyage des anciens caches si le numéro de version change
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interception des requêtes : stratégie "Cache First, falling back to network"
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          // Optionnel : on peut mettre en cache dynamiquement les nouvelles requêtes réussies
          return networkResponse;
        });
      }).catch(() => {
        // En cas de panne totale de réseau et de ressource absente du cache
        if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('/index.html');
        }
      });
    })
  );
});