/**
 * Legacy helper — site now deploys from dist/ via GitHub Actions (base `/`).
 * Kept so old npm scripts do not fail; copies dist → docs only for local preview.
 */
import { cpSync, existsSync, rmSync, writeFileSync, mkdirSync } from "node:fs";

const distPath = "dist";
const docsPath = "docs";

if (!existsSync(distPath)) {
  console.error("dist/ not found. Run `npm run build` first.");
  process.exit(1);
}

rmSync(docsPath, { recursive: true, force: true });
cpSync(distPath, docsPath, { recursive: true });

// Prefer root serving: leave a redirect note if someone opens /docs on branch deploy
mkdirSync(docsPath, { recursive: true });
writeFileSync(
  `${docsPath}/README.md`,
  `# Deprecated path

The live site is served from the repository root via GitHub Actions (\`dist/\` → Pages).

Do not use \`/docs\` as the site URL. Open https://10xwealthcreators.com/

DNS notes: see \`DNS-SETUP.md\` in this folder if present, or the repo root docs.
`
);

console.log("Copied production build to docs/ (legacy). Prefer GitHub Actions deploy from dist/.");
