"use strict";

const appBaseUrl = new URL(".", self.location.href);
const appAssetPath = path => new URL(path, appBaseUrl).pathname;
const uvPrefix = appAssetPath("service/");
const uvConfig = {
  prefix: uvPrefix,
  bare: "",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: appAssetPath("uv/uv.handler.js"),
  client: appAssetPath("uv/uv.client.js"),
  bundle: appAssetPath("uv/uv.bundle.js"),
  config: appAssetPath("silverite-uv.config.js"),
  sw: appAssetPath("uv/uv.sw.js")
};

self.__uv$config = uvConfig;
