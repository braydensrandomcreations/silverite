const appBaseUrl = new URL(".", self.location.href);
const appAssetUrl = path => new URL(path, appBaseUrl).href;
importScripts(appAssetUrl("uv/uv.bundle.js"), appAssetUrl("silverite-uv.config.js"), appAssetUrl("uv/uv.sw.js"));
const uvServiceWorker = new UVServiceWorker();
importScripts(appAssetUrl("controller/controller.sw.js"));

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
