import fs from "node:fs";

const CDN = "https://cdn.storebox.ai";

let byFilename = new Map();
if (fs.existsSync("standalone/asset-map.json")) {
  const map = JSON.parse(fs.readFileSync("standalone/asset-map.json", "utf8"));
  byFilename = new Map(Object.entries(map));
} else if (fs.existsSync("standalone/media-all.json")) {
  const media = JSON.parse(fs.readFileSync("standalone/media-all.json", "utf8"));
  for (const item of media.results || []) {
    if (!item.filename || !item.file_url) continue;
    byFilename.set(item.filename, item.file_url.startsWith("http") ? item.file_url : CDN + item.file_url);
  }
  fs.writeFileSync(
    "standalone/asset-map.json",
    JSON.stringify(Object.fromEntries(byFilename), null, 2),
  );
} else {
  console.error("No asset-map.json or media-all.json found");
  process.exit(1);
}

const destImageMap = {};
for (const [filename, url] of byFilename) {
  const m = filename.match(/^([a-z]{2})\.(jpg|png)$/i);
  if (m) destImageMap[m[1].toLowerCase()] = url;
}

const logo = byFilename.get("visabanana-logo.png");
const hero = byFilename.get("hero-bg.mp4");
const globe = byFilename.get("globe.jpg");

let html = fs.readFileSync("standalone/index.html", "utf8");

if (logo) html = html.replaceAll("./visabanana-logo.png", logo);
if (hero) html = html.replaceAll("./hero-bg.mp4", hero);
if (globe) {
  html = html.replaceAll("./images/globe.jpg", globe);
  html = html.replaceAll(`url(./images/globe.jpg)`, `url(${globe})`);
}

if (!html.includes("STOREBOX_IMAGES")) {
  html = html.replace(
    /var ASSET = "[^"]*";/,
    `var ASSET = ".";
  var STOREBOX_IMAGES = ${JSON.stringify(destImageMap)};`,
  );
} else {
  html = html.replace(
    /var STOREBOX_IMAGES = \{[\s\S]*?\};/,
    `var STOREBOX_IMAGES = ${JSON.stringify(destImageMap)};`,
  );
}

if (!html.includes("STOREBOX_IMAGES[code]")) {
  html = html.replace(
    /image: ASSET \+ "\/images\/destinations\/" \+ code \+ \(pngCodes\[code\] \? "\.png" : "\.jpg"\),/,
    `image: STOREBOX_IMAGES[code] || (ASSET + "/images/destinations/" + code + (pngCodes[code] ? ".png" : ".jpg")),`,
  );
}

for (const [code, url] of Object.entries(destImageMap)) {
  html = html.replaceAll(`./images/destinations/${code}.jpg`, url);
  html = html.replaceAll(`./images/destinations/${code}.png`, url);
}

fs.writeFileSync("standalone/index.html", html);
console.log("standalone updated, dest images", Object.keys(destImageMap).length, "cdn hits", (html.match(/cdn\.storebox\.ai/g) || []).length);
