"use strict";

const uvSwUrl = new URL(self.location.href);
const uvAppBaseUrl = new URL(".", uvSwUrl);
const uvRuntimeBase = self.__SILVERITE_PROXY_RUNTIME_BASE__ || uvAppBaseUrl.href;
const uvAssetUrl = (path, base = uvRuntimeBase) => new URL(path, base).href;
const uvPrefix = new URL("service/", uvAppBaseUrl).pathname;
const uvConfig = {
  prefix: uvPrefix,
  bare: "",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: uvAssetUrl("uv/uv.handler.js"),
  client: uvAssetUrl("uv/uv.client.js"),
  bundle: uvAssetUrl("uv/uv.bundle.js"),
  config: uvAssetUrl("silverite-uv.config.js"),
  sw: uvAssetUrl("uv/uv.sw.js")
};

self.__uv$config = uvConfig;
