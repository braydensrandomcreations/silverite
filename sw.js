importScripts("/uv/uv.bundle.js", "/silverite-uv.config.js", "/uv/uv.sw.js");
const uvServiceWorker = new UVServiceWorker();
importScripts("/controller/controller.sw.js");

self.addEventListener("fetch", event => {
  if (uvServiceWorker.route(event)) {
    event.respondWith(uvServiceWorker.fetch(event));
    return;
  }
  if ($scramjetController.shouldRoute(event)) {
    event.respondWith($scramjetController.route(event));
  }
});

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});
