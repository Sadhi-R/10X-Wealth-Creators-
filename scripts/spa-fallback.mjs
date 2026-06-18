import { copyFileSync, existsSync } from "node:fs";

const builtHtml = existsSync("dist/index.html") ? "dist/index.html" : "dist/app.html";

if (!existsSync(builtHtml)) {
  console.error("No built HTML found in dist/. Run `npm run build` first.");
  process.exit(1);
}

copyFileSync(builtHtml, "dist/index.html");
copyFileSync(builtHtml, "dist/404.html");
console.log(`Copied ${builtHtml} to dist/index.html and dist/404.html for SPA routing.`);
