import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";

const builtHtml = existsSync("dist/index.html") ? "dist/index.html" : "dist/app.html";

if (!existsSync(builtHtml)) {
  console.error("No built HTML found in dist/. Run `npm run build` first.");
  process.exit(1);
}

copyFileSync(builtHtml, "dist/index.html");
copyFileSync(builtHtml, "dist/404.html");

// Legacy bookmark support: /docs → /
mkdirSync("dist/docs", { recursive: true });
writeFileSync(
  "dist/docs/index.html",
  `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta http-equiv="refresh" content="0;url=/"/><link rel="canonical" href="/"/><script>location.replace("/"+location.search+location.hash);</script><title>Redirecting…</title></head><body><a href="/">Continue to 10X Wealth Creators</a></body></html>`
);

console.log(`Copied ${builtHtml} to dist/index.html and dist/404.html for SPA routing.`);
console.log("Added dist/docs/index.html redirect → /");
