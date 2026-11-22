// Indexability audit (SEO-RULES.md 7A). Run against a production build: `npx next start -p 3457`, then
// `node scripts/indexability-audit.mjs [baseUrl]`. Every bucket must print 0.
const base = process.argv[2] || "http://localhost:3457", prod = "https://www.ridesaudi.com";
// /sitemap.xml is a sitemap index: fetch every child sitemap (served from the same base).
let sm = await (await fetch(base + "/sitemap.xml")).text();
const children = [...sm.matchAll(/<sitemap>\s*<loc>([^<]+)<\/loc>/g)].map(m => m[1].replace(prod, base));
for (const c of children) { const r = await fetch(c); if (r.status !== 200) console.log("child sitemap", c, r.status); sm += await r.text(); }
const urls = [...sm.matchAll(/<url>\s*<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const inSitemap = new Set(urls);
const smHref = [...sm.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
const bad = { status: [], robots: [], xrobots: [], canonical: [], hreflang: [], linkHeader: [], fewInlinks: [], smHrefNotInSitemap: [] };
const inl = {};
for (const u of urls) {
  const p = u.replace(prod, "");
  const r = await fetch(base + p, { redirect: "manual" });
  const h = await r.text();
  if (r.status !== 200) bad.status.push(p + " " + r.status);
  if (r.headers.get("x-robots-tag")) bad.xrobots.push(p);
  if (r.headers.get("link")?.includes("hreflang")) bad.linkHeader.push(p);
  const robots = (h.match(/<meta name="robots" content="([^"]*)"/) || [])[1] || "";
  if (!/^index, follow$/.test(robots)) bad.robots.push(p + " [" + robots + "]");
  const canon = (h.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  if (canon !== u) bad.canonical.push(p + " -> " + canon);
  for (const m of h.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)) if (!inSitemap.has(m[2])) bad.hreflang.push(p + " " + m[1] + " " + m[2]);
  const main = (h.match(/<main[\s\S]*<\/main>/) || [""])[0];
  for (const l of new Set([...main.matchAll(/href="(\/(?:en|ar)\/[^"#?]*)"/g)].map(m => m[1]))) if (l !== p) inl[l] = (inl[l] || 0) + 1;
}
for (const u of urls) { const p = u.replace(prod, ""); if ((inl[p] || 0) < 3 && p.length > 4) bad.fewInlinks.push(p + " " + (inl[p] || 0)); }
for (const x of new Set(smHref)) if (!inSitemap.has(x)) bad.smHrefNotInSitemap.push(x);
console.log("URLs", urls.length);
for (const [k, v] of Object.entries(bad)) console.log(k, v.length, v.slice(0, 40).join("\n   "));
