import http from "node:http";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { server as wisp } from "@mercuryworkshop/wisp-js/server";
import { scramjetPath } from "@mercuryworkshop/scramjet/path";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";

const require = createRequire(import.meta.url);
const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const dirOf = packageName => path.dirname(require.resolve(packageName));
const distOf = packageName => path.resolve(dirOf(packageName), "..", "dist");
const app = express();

app.use((_request, response, next) => {
  response.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  response.setHeader("Cross-Origin-Embedder-Policy", "credentialless");
  next();
});

app.use("/scram/", express.static(scramjetPath));
app.use("/uv/", express.static(uvPath));
app.use("/baremux/", express.static(baremuxPath));
app.use("/controller/", express.static(dirOf("@mercuryworkshop/scramjet-controller")));
app.use("/utils/", express.static(dirOf("@mercuryworkshop/scramjet-utils")));
app.use("/libcurl/", express.static(dirOf("@mercuryworkshop/libcurl-transport")));
app.use("/epoxy/", express.static(dirOf("@mercuryworkshop/epoxy-transport")));
app.use("/uv-libcurl/", express.static(distOf("silverite-uv-libcurl")));
app.use("/uv-epoxy/", express.static(distOf("silverite-uv-epoxy")));
app.use("/assets/", express.static(path.join(projectRoot, "assets")));

app.get("/api/changelogs", async (_request, response) => {
  try {
    const contents = await readFile(path.join(projectRoot, "data", "changelogs.json"), "utf8");
    const entries = JSON.parse(contents);
    if (!Array.isArray(entries)) throw new Error("Changelog data must be a JSON array");
    response.setHeader("Cache-Control", "no-store");
    response.json(entries);
  } catch (error) {
    console.error("Could not load changelogs:", error);
    response.status(500).json({ error: "Could not load changelogs" });
  }
});

app.get("/", (_request, response) => response.sendFile(path.join(projectRoot, "index.html")));
app.get("/index.html", (_request, response) => response.sendFile(path.join(projectRoot, "index.html")));
app.get("/app.js", (_request, response) => response.sendFile(path.join(projectRoot, "app.js")));
app.get("/styles.css", (_request, response) => response.sendFile(path.join(projectRoot, "styles.css")));
app.get("/sw.js", (_request, response) => response.sendFile(path.join(projectRoot, "sw.js")));
app.get("/silverite-uv.config.js", (_request, response) => response.sendFile(path.join(projectRoot, "silverite-uv.config.js")));
app.use((_request, response) => response.status(404).type("text/plain").send("Not found"));

const server = http.createServer(app);
server.on("upgrade", (request, socket, head) => {
  const pathname = new URL(request.url || "/", "http://localhost").pathname;
  if (pathname === "/wisp/") {
    request.url = pathname;
    wisp.routeRequest(request, socket, head);
    return;
  }
  socket.destroy();
});

const requestedPort = Number(process.env.PORT) || 8080;
function listenOnAvailablePort(port) {
  const onError = error => {
    server.off("listening", onListening);
    if (error.code === "EADDRINUSE" && !process.env.PORT && port < requestedPort + 20) {
      console.warn(`Port ${port} is busy; trying ${port + 1}…`);
      listenOnAvailablePort(port + 1);
      return;
    }
    throw error;
  };
  const onListening = () => {
    server.off("error", onError);
    console.log(`Silverite with Scramjet is running at http://localhost:${port}`);
  };
  server.once("error", onError);
  server.once("listening", onListening);
  server.listen(port, "0.0.0.0");
}
listenOnAvailablePort(requestedPort);

function shutdown() {
  server.close(() => process.exit(0));
}
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
