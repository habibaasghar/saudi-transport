// IndexNow: tells Bing (which ChatGPT search, Copilot and DuckDuckGo use), Yandex, Seznam and Naver that URLs changed.
// Usage after a deploy: `node scripts/indexnow.mjs` (every sitemap URL) or `node scripts/indexnow.mjs <url> ...`.
// The key is public by design: it is served at /133bfae238aaf1669b45b491a2d3ca75.txt to prove the site owns it.
const KEY = "133bfae238aaf1669b45b491a2d3ca75", HOST = "www.ridesaudi.com", base = `https://${HOST}`;
let urls = process.argv.slice(2);
if (!urls.length) {
  const index = await (await fetch(base + "/sitemap.xml")).text();
  for (const c of [...index.matchAll(/<sitemap>\s*<loc>([^<]+)<\/loc>/g)].map((m) => m[1])) {
    const xml = await (await fetch(c)).text();
    urls.push(...[...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  }
}
urls = [...new Set(urls)].filter((u) => u.startsWith(base + "/"));
const check = await fetch(`${base}/${KEY}.txt`);
if (check.status !== 200 || (await check.text()).trim() !== KEY) throw new Error("Key file is not live yet: deploy first.");
for (let i = 0; i < urls.length; i += 10000) {
  const r = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST", headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${base}/${KEY}.txt`, urlList: urls.slice(i, i + 10000) }),
  });
  console.log(`IndexNow: ${urls.slice(i, i + 10000).length} URLs -> HTTP ${r.status}`);
}
