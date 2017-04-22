var cacheName = "devmap-v4";
var toBeCached = [
    '/',
    '/lib.js',
    '/bundle.js',
    '/manifest.json'
];

this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(toBeCached);
        })
    );
});

this.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (names) {
            return Promise.all(
                names.filter(function (name) {
                    return name.startsWith('devmap') && name != cacheName;
                }).map(function (name) {
                    return caches.delete(name);
                })
            )
        })
    )
})

this.addEventListener('fetch', function (event) {
   event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        var fetchPromise = fetch(event.request).then(function(networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
        return response || fetchPromise;
      });
    })
  );
});

this.addEventListener('message', function (event) {
    //proceed with update
    if (event.data.action == 'skip')
        this.skipWaiting();
})