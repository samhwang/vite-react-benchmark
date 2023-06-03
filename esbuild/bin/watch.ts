import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const currentTime = Date.now();
console.log("START SCRIPT TIME", currentTime);

const root = path.resolve(__dirname, "..", "src", "App.tsx");
fs.watch(root, (_e, filename) => {
  const rootRenderTime = Date.now();
  const interval = rootRenderTime - currentTime;
  console.log({ filename, rootRenderTime, interval });
});

const leaf = path.resolve(__dirname, "..", "src", "components", "comp0.tsx");
fs.watch(leaf, (_e, filename) => {
  const leafRenderTime = Date.now();
  const interval = leafRenderTime - currentTime;
  console.log({ filename, leafRenderTime, interval });
});
