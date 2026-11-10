import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const source = (file) => readFile(path.join(projectRoot, file), "utf8");

const browserUserAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const [html, styles, app] = await Promise.all([
  source("index.html"),
  source("styles.css"),
  source("app.js")
]);

const fontImports = [...styles.matchAll(/@import\s+url\((['"]?)(https:\/\/fonts\.googleapis\.com\/[^'")]+)\1\)\s*;?/g)];
const css = styles.replace(/@import\s+url\((['"]?)(https:\/\/fonts\.googleapis\.com\/[^'")]+)\1\)\s*;?/g, "");

async function inlineFonts(importUrls) {
  const chunks = [];

  for (const [, , url] of importUrls) {
    const cssResponse = await fetch(url, { headers: { "User-Agent": browserUserAgent } });
    if (!cssResponse.ok) throw new Error(`Could not fetch ${url} (${cssResponse.status})`);
    let fontCss = await cssResponse.text();

    const fontUrls = [...new Set([...fontCss.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)].map((m) => m[1]))];
    const fontData = new Map();

    await Promise.all(
      fontUrls.map(async (fontUrl) => {
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

const embeddedCss = `${await inlineFonts(fontImports)}\n${css}`;

const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "Silverite";

// A literal </script> inside app.js would close the inline <script> element early.
const inlineScript = app.replace(/<\/script/gi, () => "<\\/script");

// Inside an SVG's srcdoc iframe, location.href is "about:srcdoc", which cannot be
// used as a base URL. The proxy controller (and the UV config) resolve relative
// URLs against location.href, so treat the SVG's real URL as the base instead.
const baseUrlShim = `<script>(()=>{const NativeURL=window.URL;const base=document.baseURI;if(!base||base.startsWith("about:"))return;const fix=value=>typeof value==="string"&&value.startsWith("about:")?base:value;class BaseAwareURL extends NativeURL{constructor(url,baseArg){super(fix(url),baseArg===undefined?undefined:fix(baseArg))}}window.URL=BaseAwareURL})();</script>`;

const inlinedHtml = html
  .replace(/<head\b[^>]*>/i, (head) => `${head}\n${baseUrlShim}`)
  .replace(/\s*<link\b[^>]*rel=["']stylesheet["'][^>]*>/i, () => `\n<style>${embeddedCss}</style>`)
  .replace(/\s*<script\b[^>]*src=["']app\.js["'][^>]*><\/script>/i, () => `\n<script>${inlineScript}</script>`);

const escapeAttribute = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/\r/g, "&#13;")
    .replace(/\n/g, "&#10;");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<!-- made with html to svg. open this file directly in a browser. -->
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
  <title>${title}</title>
  <foreignObject x="0" y="0" width="100%" height="100%">
    <iframe xmlns="http://www.w3.org/1999/xhtml" title="${title}" style="display:block;width:100%;height:100%;border:0;margin:0;padding:0;background:transparent" allow="fullscreen; autoplay; gamepad; clipboard-read; clipboard-write; web-share; accelerometer; gyroscope" allowfullscreen="true" srcdoc="${escapeAttribute(inlinedHtml)}"></iframe>
  </foreignObject>
</svg>
`;

await writeFile(path.join(projectRoot, "index.svg"), svg);
console.log(`index.svg written (${(Buffer.byteLength(svg) / 1024).toFixed(1)} KB)`);
