
self.addEventListener('activate', function(event) {
    var cacheWhitelist = ['v2'];

    /*event.waitUntil(
        caches.forEach(function(cache, cacheName) {
            if (cacheWhitelist.indexOf(cacheName) == -1) {
                return caches.delete(cacheName);
            }
        })
    );*/
});
