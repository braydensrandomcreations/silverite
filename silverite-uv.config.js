"use strict";

const uvAppBaseUrl = new URL(".", self.location.href);
const uvAppAssetPath = path => new URL(path, uvAppBaseUrl).pathname;
const uvPrefix = uvAppAssetPath("service/");
const uvConfig = {
  prefix: uvPrefix,
  bare: "",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: uvAppAssetPath("uv/uv.handler.js"),
  client: uvAppAssetPath("uv/uv.client.js"),
  bundle: uvAppAssetPath("uv/uv.bundle.js"),
  config: uvAppAssetPath("silverite-uv.config.js"),
  sw: uvAppAssetPath("uv/uv.sw.js")
};

self.__uv$config = uvConfig;
