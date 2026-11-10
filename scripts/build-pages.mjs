import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const outputRoot = path.join(projectRoot, "dist-pages");

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

for (const entry of ["index.html", "app.js", "styles.css", "sw.js", "silverite-uv.config.js", "index.svg", "assets", "data"]) {
  await cp(path.join(projectRoot, entry), path.join(outputRoot, entry), { recursive: true });
}

await writeFile(path.join(outputRoot, ".nojekyll"), "");

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
  await cp(packageDist, path.join(outputRoot, publicPath), { recursive: true });
}

console.log(`GitHub Pages files prepared in ${outputRoot}`);
