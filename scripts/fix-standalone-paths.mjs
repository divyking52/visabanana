import fs from "node:fs";

const path = "standalone/index.html";
let h = fs.readFileSync(path, "utf8");
h = h.replaceAll("./public/", "./");
h = h.replaceAll('var ASSET = "./public";', 'var ASSET = ".";');
h = h.replaceAll("./public", ".");
fs.writeFileSync(path, h);
console.log("public left:", h.includes("public"));
console.log("ASSET line ok:", h.includes('var ASSET = ".";'));
console.log("logo:", (h.match(/\.\/visabanana-logo/g) || []).length);
console.log("hero video:", h.includes("./hero-bg.mp4"));
