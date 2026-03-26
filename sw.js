// DISTORT — Service Worker
// Caches the app shell for offline play (audio excluded due to size)

const CACHE = 'distort-v1';
const ASSETS = [
  '/index.html',
  '/manifest.json'
  // Add '/Psyop_Disinformation_Game.mp3' here if you want offline audio
  // (note: large audio files will slow first install)
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
