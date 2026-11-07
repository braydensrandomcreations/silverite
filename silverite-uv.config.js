"use strict";

const uvPrefix = "/service/";
const uvConfig = {
  prefix: uvPrefix,
  bare: "",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/uv/uv.handler.js",
  client: "/uv/uv.client.js",
  bundle: "/uv/uv.bundle.js",
  config: "/silverite-uv.config.js",
  sw: "/uv/uv.sw.js"
};

self.__uv$config = uvConfig;
