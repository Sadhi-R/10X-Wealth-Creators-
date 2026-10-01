import {
  cpSync,
  existsSync,
  mkdirSync,
  rmSync,
  writeFileSync,
  readFileSync,
} from "node:fs";
import { join } from "node:path";

/**
 * Publish dist/ → repo root so GitHub Pages (branch / root) serves the SPA at `/`
 * without a /docs URL. Source entry remains app.html for Vite.
 */
const dist = "dist";
if (!existsSync(join(dist, "index.html"))) {
  console.error("dist/index.html missing. Run npm run build first.");
  process.exit(1);
}

const rootAssets = "assets";
if (existsSync(rootAssets)) rmSync(rootAssets, { recursive: true, force: true });
cpSync(join(dist, "assets"), rootAssets, { recursive: true });

if (existsSync(join(dist, "images"))) {
  if (existsSync("images")) rmSync("images", { recursive: true, force: true });
  cpSync(join(dist, "images"), "images", { recursive: true });
}

cpSync(join(dist, "index.html"), "index.html");
cpSync(join(dist, "404.html"), "404.html");
if (existsSync(join(dist, "favicon.png"))) {
  cpSync(join(dist, "favicon.png"), "favicon.png");
}
writeFileSync(".nojekyll", "");

// Legacy /docs bookmarks → /
mkdirSync("docs", { recursive: true });
writeFileSync(
  join("docs", "index.html"),
  `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta http-equiv="refresh" content="0;url=/"/><link rel="canonical" href="/"/><script>location.replace("/"+location.search+location.hash);</script><title>Redirecting…</title></head><body><a href="/">Continue to 10X Wealth Creators</a></body></html>`
);

// Keep DNS notes if present in working tree backup locations
const dnsCandidates = ["docs/DNS-SETUP.md", "DNS-SETUP.md"];
// no-op: DNS-SETUP should already live under docs/

console.log("Published dist/ to repo root for GitHub Pages (site URL = /).");
console.log("Built entry:", readFileSync("index.html", "utf8").includes("/assets/") ? "production bundle" : "check paths");
