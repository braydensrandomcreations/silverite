import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const source = file => readFile(path.join(projectRoot, file), "utf8");

const browserUserAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const [htmlSource, styles, app] = await Promise.all([
  source("source.html"),
  source("styles.css"),
  source("app.js")
]);

const fontImports = [...styles.matchAll(/@import\s+url\((['"]?)(https:\/\/fonts\.googleapis\.com\/[^'")]+)\1\)\s*;?/g)];
const cssWithoutImports = styles.replace(/@import\s+url\((['"]?)(https:\/\/fonts\.googleapis\.com\/[^'")]+)\1\)\s*;?/g, "");

async function inlineFonts(importUrls) {
  const chunks = [];

  for (const [, , url] of importUrls) {
    const cssResponse = await fetch(url, { headers: { "User-Agent": browserUserAgent } });
    if (!cssResponse.ok) throw new Error(`Could not fetch ${url} (${cssResponse.status})`);
    let fontCss = await cssResponse.text();

    const fontUrls = [...new Set([...fontCss.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)].map(match => match[1]))];
    const fontData = new Map();

    await Promise.all(
      fontUrls.map(async fontUrl => {
        const response = await fetch(fontUrl);
        if (!response.ok) throw new Error(`Could not fetch ${fontUrl} (${response.status})`);
        const buffer = Buffer.from(await response.arrayBuffer());
        fontData.set(fontUrl, `data:font/woff2;base64,${buffer.toString("base64")}`);
      })
    );

    for (const [fontUrl, dataUri] of fontData) {
      fontCss = fontCss.split(fontUrl).join(dataUri);
    }
    chunks.push(fontCss.trim());
  }

  return chunks.join("\n");
}

const embeddedCss = `${await inlineFonts(fontImports)}\n${cssWithoutImports}`;

const mimeTypes = {
  ".png": "image/png",
  ".gif": "image/gif",
  ".mp3": "audio/mpeg"
};

async function dataUri(file) {
  const buffer = await readFile(path.join(projectRoot, file));
  const extension = path.extname(file).toLowerCase();
  const mime = mimeTypes[extension] || "application/octet-stream";
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

const [logo, noThumbnail, gnIcon, silveriteIcon, truffledIcon] =
  await Promise.all([
    dataUri("assets/silverite-logo.png"),
    dataUri("assets/no-thumbnail.png"),
    dataUri("assets/icons/gn.png"),
    dataUri("assets/icons/silverite.png"),
    dataUri("assets/icons/truffled.png")
  ]);

const cdn = "https://cdn.jsdelivr.net/gh/braydensrandomcreations/silverite@main/";
const embeddedAssets = [
  ["assets/silverite-logo.png", logo],
  ["assets/no-thumbnail.png", noThumbnail],
  ["assets/icons/gn.png", gnIcon],
  ["assets/icons/silverite.png", silveriteIcon],
  ["assets/icons/truffled.png", truffledIcon]
];

let html = htmlSource;
let inlineApp = app;

for (const [assetPath, uri] of embeddedAssets) {
  const fullUrl = cdn + assetPath;
  html = html.split(fullUrl).join(uri);
  inlineApp = inlineApp.split(fullUrl).join(uri);
}
// A literal </script> inside app.js would close the inline script element early.
const inlineScript = inlineApp.replace(/<\/script/gi, () => "<\\/script");

const singleFileHtml = html
  .replace(/\s*<link\b[^>]*rel=["']stylesheet["'][^>]*>/i, () => `\n<style>${embeddedCss}</style>`)
  .replace(/\s*<script\b[^>]*src=["']app\.js["'][^>]*><\/script>/i, () => `\n<script>${inlineScript}</script>`);

if (/<script\b[^>]*\bsrc\s*=/i.test(singleFileHtml)) {
  throw new Error("Single-file build still references an external script");
}
if (/<link\b[^>]*\brel\s*=\s*["']stylesheet/i.test(singleFileHtml)) {
  throw new Error("Single-file build still references an external stylesheet");
}

const bytes = Buffer.byteLength(singleFileHtml);
if (bytes >= 10 * 1024 * 1024) {
  throw new Error(`Single-file build is ${(bytes / 1024 / 1024).toFixed(2)} MB (limit: 10 MB)`);
}

await writeFile(path.join(projectRoot, "silverite-single-file.html"), singleFileHtml);
await writeFile(path.join(projectRoot, "index.html"), singleFileHtml);
console.log(
  `index.html + silverite-single-file.html written (${(bytes / 1024).toFixed(1)} KB / ${(bytes / 1024 / 1024).toFixed(2)} MB)`
);
