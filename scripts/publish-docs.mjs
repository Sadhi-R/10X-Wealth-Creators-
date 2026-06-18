import { cpSync, existsSync, rmSync } from "node:fs";

const distPath = "dist";
const docsPath = "docs";

if (!existsSync(distPath)) {
  console.error("dist/ not found. Run `npm run build` first.");
  process.exit(1);
}

rmSync(docsPath, { recursive: true, force: true });
cpSync(distPath, docsPath, { recursive: true });
console.log("Published production build to docs/.");
