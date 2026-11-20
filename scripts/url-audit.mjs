// Per-URL SEO/quality audit. Run against a production build: `npx next start -p 3457`, then
// `node scripts/url-audit.mjs [baseUrl] [out.csv]`. Writes one CSV row per sitemap URL.
import fs from "node:fs";
const base = process.argv[2] || "http://localhost:3457", out = process.argv[3] || "docs/phase2/URL_AUDIT_2026-11-19.csv", prod = "https://www.ridesaudi.com";
const sm = await (await fetch(base + "/sitemap.xml")).text();
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const set = new Set(urls);
const kw = {};
try {
  const rows = fs.readFileSync("docs/phase1/ROUTE_KEYWORD_MAPPING.csv", "utf8").replace(/^\uFEFF/, "").split(/\r?\n/).slice(1);
  for (const r of rows) { const m = r.match(/^"([^"]+)","[^"]*","[^"]*","([^"]*)",.*?"([^"]*)","[^"]*","[^"]*","[^"]*"/); if (m) kw[m[1]] = m[2]; }
} catch {}
const pick = (h, re) => (h.match(re) || [])[1] || "";
const dec = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const cat = (p) => /^\/(en|ar)\/?$/.test(p) ? "Homepage" : /\/blog\/$/.test(p) ? "Guides hub" : /\/blog\//.test(p) ? "Guide" : /privacy|terms|contact/.test(p) ? "Trust / legal" : /\/fleet\/$/.test(p) ? "Fleet" : /intercity-transfers\/.+/.test(p) ? "Route" : /airport-transfers\/.+/.test(p) ? "Airport" : /city-transport\/.+/.test(p) ? "City" : /umrah-transport\/.+/.test(p) ? "Umrah" : /luxury|event-transportation|chauffeur/.test(p) ? "Luxury / event / chauffeur" : /cross-border/.test(p) ? "Cross-border" : "Service / hub";
const intent = { Homepage: "Commercial: brand + private chauffeur", "Guides hub": "Informational hub", Guide: "Informational: comparison / how-to", "Trust / legal": "Trust / policy", Fleet: "Commercial: vehicle choice", Route: "Commercial: route transfer", Airport: "Commercial: airport transfer", City: "Commercial: city chauffeur", Umrah: "Commercial: Umrah transport", "Cross-border": "Commercial: cross-border", "Luxury / event / chauffeur": "Commercial: premium / event / chauffeur", "Service / hub": "Commercial: service hub" };
const inl = {}, data = [];
for (const u of urls) {
  const p = u.replace(prod, "");
  const r = await fetch(base + p, { redirect: "manual" });
  const h = await r.text();
  const main = pick(h, /(<main[\s\S]*<\/main>)/);
  for (const l of new Set([...main.matchAll(/href="(\/(?:en|ar)\/[^"#?]*)"/g)].map((m) => m[1]))) if (l !== p) inl[l] = (inl[l] || 0) + 1;
  const text = main.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g, " ").replace(/\s+/g, " ");
  const alts = [...h.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)].map((m) => m);
  const partner = p.replace(/^\/(en|ar)\//, (_, l) => `/${l === "en" ? "ar" : "en"}/`);
  data.push({
    u, p, status: r.status, robots: pick(h, /<meta name="robots" content="([^"]*)"/), canon: pick(h, /<link rel="canonical" href="([^"]*)"/),
    hre: alts.length === 3 && alts.every((a) => set.has(a[2])) && alts.some((a) => a[2] === prod + partner), title: dec(pick(h, /<title>([^<]*)<\/title>/)),
    desc: dec(pick(h, /<meta name="description" content="([^"]*)"/)), h1: dec(pick(h, /<h1[^>]*>([\s\S]*?)<\/h1>/).replace(/<[^>]+>/g, "")), h1n: (h.match(/<h1[\s>]/g) || []).length,
    words: text.split(" ").length, quote: /id="quote"/.test(h), schema: (h.match(/application\/ld\+json/g) || []).length, imgNoAlt: (h.match(/<img(?![^>]*\balt=)[^>]*>/g) || []).length,
  });
}
const seenT = {}, seenH = {};
for (const d of data) { (seenT[d.title] ||= []).push(d.u); (seenH[d.h1] ||= []).push(d.u); }
const q = (s) => `"${String(s).replace(/"/g, '""')}"`;
const lines = ["url,page_category,indexability,canonical_ok,hreflang_ok,primary_keyword,search_intent,title,title_len,meta_description,desc_len,h1,internal_inlinks,words,conversion_cta,technical_issues,recommended_action"];
const tally = {};
for (const d of data) {
  const c = cat(d.p), isAr = d.p.startsWith("/ar/");
  const slug = d.p.split("/").filter(Boolean).pop();
  const issues = [];
  if (d.status !== 200) issues.push(`status ${d.status}`);
  if (!/^index, follow$/.test(d.robots)) issues.push("not index,follow");
  if (d.canon !== d.u) issues.push("canonical mismatch");
  if (!d.hre) issues.push("hreflang not reciprocal");
  if (d.h1n !== 1) issues.push(`${d.h1n} H1`);
  if (d.title.length > 65) issues.push(`title ${d.title.length} chars`);
  if (d.desc.length < 100 || d.desc.length > 165) issues.push(`description ${d.desc.length} chars`);
  if (seenT[d.title].length > 1) issues.push("duplicate title");
  if (seenH[d.h1].length > 1) issues.push("duplicate H1");
  if (d.imgNoAlt) issues.push(`${d.imgNoAlt} img without alt`);
  if ((inl[d.p] || 0) < 3 && d.p.length > 4) issues.push("fewer than 3 contextual inlinks");
  if (!d.schema) issues.push("no JSON-LD");
  const thin = ["Route", "Airport", "City", "Umrah", "Guide"].includes(c) && d.words < 450;
  if (thin) issues.push(`thin (${d.words} words)`);
  const action = issues.length === 0 ? "KEEP" : "IMPROVE";
  tally[action] = (tally[action] || 0) + 1;
  const keyword = c === "Route" && !isAr ? kw[slug] || "" : isAr ? "(Arabic keyword: see docs/phase1/ARABIC_KEYWORD_RESEARCH.csv)" : "";
  lines.push([d.u, c, /^index, follow$/.test(d.robots) ? "indexable" : "NOT indexable", d.canon === d.u, d.hre, keyword, intent[c], d.title, d.title.length, d.desc, d.desc.length, d.h1, inl[d.p] || 0, d.words, d.quote ? "quote form + WhatsApp/call" : "contact links only", issues.join("; ") || "none", action].map(q).join(","));
}
fs.writeFileSync(out, "\uFEFF" + lines.join("\n") + "\n");
console.log("rows", data.length, tally, "->", out);
