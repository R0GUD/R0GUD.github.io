self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
event.waitUntil(
    caches.open("static")
    .then(function(cache) {
        console.log("precaching");
        cache.addAll(['/index.html',]);
        cache.add('/');
        cache.add('/css/style.css');
        cache.add('/css/adaptive.css');
    })
);
});
self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activating Service Worker ...',
    event);
    return self.clients.claim();
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response)
            return response;
            else 
            return fetch(event.request);
        }
        )
        );
});

self.addEventListener('push', event => {
    const notification = event.data.text();
    self.registration.showNotification(notification, {});
});