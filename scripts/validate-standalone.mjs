import fs from "node:fs";
import { spawnSync } from "node:child_process";

const h = fs.readFileSync("visabanana.html", "utf8");
const m = h.match(/<script>([\s\S]*?)<\/script>/);
if (!m) {
  console.error("no script");
  process.exit(1);
}
fs.writeFileSync("scripts/_tmp.js", m[1]);
const result = spawnSync(process.execPath, ["--check", "scripts/_tmp.js"], { encoding: "utf8" });
if (result.status !== 0) {
  console.error(result.stderr || result.stdout);
  // find bad character near common issues
  const src = m[1];
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (c === "`" || c === "\u2018" || c === "\u2019" || c === "\u201c" || c === "\u201d") {
      console.error("special at", i, JSON.stringify(src.slice(i - 40, i + 40)));
    }
  }
  process.exit(1);
}
console.log("JS OK");
console.log("relative css urls", (h.match(/url\(\.\//g) || []).length);
console.log("size KB", Math.round(h.length / 1024));
fs.unlinkSync("scripts/_tmp.js");
