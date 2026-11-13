const swUrl = new URL(self.location.href);
const appBaseUrl = new URL(".", swUrl);
const runtimeBase = swUrl.searchParams.get("runtimeBase") || appBaseUrl.href;
const runtimeVersion = swUrl.searchParams.get("v");
self.__SILVERITE_PROXY_RUNTIME_BASE__ = runtimeBase;
const runtimeAssetUrl = path => {
  const url = new URL(path, runtimeBase);
  if (runtimeVersion) url.searchParams.set("v", runtimeVersion);
  return url.href;
};
importScripts(runtimeAssetUrl("uv/uv.bundle.js"), runtimeAssetUrl("silverite-uv.config.js"), runtimeAssetUrl("uv/uv.sw.js"));
const uvServiceWorker = new UVServiceWorker();
importScripts(runtimeAssetUrl("controller/controller.sw.js"));

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
