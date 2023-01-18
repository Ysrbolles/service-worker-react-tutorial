let cashData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cashData).then((cache) => {
      cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/bundle.js",
        "/index.html",
        "/favicon.ico",
        "/manifest.json",
        "/logo192.png",
        "/logo512.png",
        "/static/media/logo.5d5d9eef.svg",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});
