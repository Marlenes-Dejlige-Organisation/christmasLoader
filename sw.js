// sw.js

const CACHE_NAME = 'juleaften-taeller-v1';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.match(event.request).then((response) => {
                const fetchPromise = fetch(event.request).then((networkResponse) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
                return response || fetchPromise;
            });
        })
    );
});
