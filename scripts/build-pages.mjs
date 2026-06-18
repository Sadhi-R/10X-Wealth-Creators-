import { spawnSync } from "node:child_process";

const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";
const result = spawnSync(npmCmd, ["run", "build"], {
  stdio: "inherit",
  env: { ...process.env, VITE_BASE_PATH: "/docs/" },
  shell: true,
});

process.exit(result.status ?? 1);
