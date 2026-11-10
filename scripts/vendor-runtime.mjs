import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// The proxy engines are loaded at runtime from the app's own directory. GitHub
// Pages gets them from build-pages.mjs, but jsDelivr only serves files that are
// committed to the repository, so vendor them next to index.html/index.svg too.
const projectRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

const runtimePackages = [
  ["@mercuryworkshop/scramjet", "scram"],
  ["@mercuryworkshop/scramjet-controller", "controller"],
  ["@mercuryworkshop/scramjet-utils", "utils"],
  ["@titaniumnetwork-dev/ultraviolet", "uv"],
  ["@mercuryworkshop/bare-mux", "baremux"],
  ["@mercuryworkshop/libcurl-transport", "libcurl"],
  ["@mercuryworkshop/epoxy-transport", "epoxy"],
  ["silverite-uv-libcurl", "uv-libcurl"],
  ["silverite-uv-epoxy", "uv-epoxy"]
];

for (const [packageName, publicPath] of runtimePackages) {
  const packageDist = path.join(projectRoot, "node_modules", packageName, "dist");
  const target = path.join(projectRoot, publicPath);

  await rm(target, { recursive: true, force: true });
  await mkdir(target, { recursive: true });
  await cp(packageDist, target, {
    recursive: true,
    filter: source => {
      const relative = path.relative(packageDist, source);
      if (relative.split(path.sep).includes("temp-types-build")) return false;
      return ![".map", ".ts"].includes(path.extname(source));
    }
  });
}

console.log("Proxy runtime files vendored for CDN hosting");
