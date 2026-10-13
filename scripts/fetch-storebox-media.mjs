import fs from "node:fs";

const token = process.env.STOREBOX_TOKEN;
if (!token) {
  console.error("Set STOREBOX_TOKEN env var");
  process.exit(1);
}
const base =
  "https://admin.storebox.ai/api/websites/08a90ad3-d492-4026-9b81-4124cb68e5fe/media/";

async function fetchPage(page) {
  const url = `${base}?page_size=100&page=${page}`;
  const res = await fetch(url, {
    headers: {
      accept: "application/json, text/plain, */*",
      authorization: `Bearer ${token}`,
      origin: "https://app.storebox.ai",
      referer: "https://app.storebox.ai/",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${await res.text()}`);
  return res.json();
}

function pickUrl(item) {
  return (
    item.url ||
    item.file ||
    item.file_url ||
    item.src ||
    item.cdn_url ||
    item.media_url ||
    item.image ||
    item.original ||
    item.download_url ||
    (item.file && item.file.url) ||
    null
  );
}

function walkUrls(obj, out = []) {
  if (!obj) return out;
  if (typeof obj === "string") {
    if (/^https?:\/\//i.test(obj) && /\.(png|jpe?g|webp|gif|svg|avif|mp4|webm)(\?|$)/i.test(obj)) {
      out.push(obj);
    } else if (/^https?:\/\/.+\.(cloudinary|storebox|cdn|media)/i.test(obj) || /\/media\//i.test(obj)) {
      if (/\.(png|jpe?g|webp|gif|svg|avif|mp4)/i.test(obj) || /image/i.test(obj)) out.push(obj);
    }
    return out;
  }
  if (Array.isArray(obj)) {
    obj.forEach((x) => walkUrls(x, out));
    return out;
  }
  if (typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (typeof v === "string" && /^https?:\/\//i.test(v)) {
        if (/url|src|file|image|thumb|cdn|media|path/i.test(k) || /\.(png|jpe?g|webp|gif|svg|avif|mp4)/i.test(v)) {
          out.push(v);
        }
      } else {
        walkUrls(v, out);
      }
    }
  }
  return out;
}

const first = await fetchPage(1);
const results = [...(first.results || first.data || first.items || [])];
const count = first.count ?? results.length;
const pageSize = 100;
const pages = Math.max(1, Math.ceil(count / pageSize));
for (let p = 2; p <= pages; p++) {
  const page = await fetchPage(p);
  results.push(...(page.results || page.data || page.items || []));
}

const urls = [...new Set(walkUrls(results))];
const sample = results[0] || first;
fs.writeFileSync("standalone/media-all.json", JSON.stringify({ count, pages, results, urls }, null, 2));
console.log("count", count, "results", results.length, "urls", urls.length);
console.log("sample keys", sample && typeof sample === "object" ? Object.keys(sample) : sample);
console.log("urls:");
urls.forEach((u, i) => console.log(i + 1, u));
if (results[0]) console.log("first item", JSON.stringify(results[0], null, 2).slice(0, 1500));
