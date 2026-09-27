const CACHE_NAME = 'tarkov-surfers-v1';
const assetsToCache = [
    './index.html',
    './manifest.json',
    './Staff/Doctor.png',
    './Staff/Sanitar.png',
    './Staff/meshok.png',
    './Staff/Killa.png',
    './Staff/sj6.png',
    './Staff/pach.png',
    './Staff/obdolbos.png',
    './Staff/Location.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(assetsToCache))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.res = cacheFirst(event.request);
});

async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }
    try {
        const networkResponse = await fetch(request);
        return networkResponse;
    } catch (error) {
        return caches.match('./index.html');
    }
}