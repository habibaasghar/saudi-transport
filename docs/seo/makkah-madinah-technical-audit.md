# Makkah & Madinah — technical audit

Date: 2026-11-23. Run against a local production build (`next build` + `next start -p 3457`) of this branch.

## 1. Indexability audit (`node scripts/indexability-audit.mjs`)

| Bucket | Result |
|---|---|
| URLs crawled from the sitemap | 354 (352 before + `madinah-to-riyadh` EN and AR) |
| Non-200 status | 0 |
| robots meta not index/follow | 0 |
| X-Robots-Tag on pages | 0 |
| Canonical not self-referencing | 0 |
| Hreflang errors (missing or non-reciprocal en/ar/x-default) | 0 |
| next-intl Link header present | 0 |
| Pages with fewer than 3 contextual inlinks | 0 |
| Sitemap URLs missing from hreflang, or the reverse | 0 |

## 2. Checks on the changed pages (rendered HTML)

| URL | Status | Canonical | JSON-LD | In-text links | Raw link markup visible |
|---|---|---|---|---|---|
| /en/ and /ar/services/city-transport/makkah/ | 200 | self | Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage (valid JSON) | 13 | none |
| /en/ and /ar/services/city-transport/madinah/ | 200 | self | same | 11 | none |
| /en/ and /ar/services/intercity-transfers/madinah-to-riyadh/ | 200 | self | same | 7 | none |
| /en/services/airport-transfers/madinah-airport/ | 200 | self | same | 6 | none |
| /en/services/umrah-transport/jeddah-airport-to-makkah/ | 200 | self | same | 5 | none |

Every in-text link on an Arabic page points to `/ar/…`, and every one on an English page to `/en/…`. The only other link inside the prose blocks is the checklist's `#quote` button. Content similarity (5-word shingles): Makkah hub vs Madinah hub 0.195; Madinah → Riyadh vs Riyadh → Madinah 0.182. Both are under the 0.30 limit.

## 3. Sitemap, robots, llms.txt

- `madinah-to-riyadh` is in `/sitemaps/routes-en.xml` and `routes-ar.xml` with en/ar/x-default alternates and `lastmod 2026-11-23`. The changed hubs, MED and JED → Makkah carry `lastmod 2026-11-23`.
- robots.txt: `Allow: /`, `Disallow: /api/` and `/admin/`, sitemap declared. No crawler is blocked.
- `/sitemap.xml` and `/llms.txt` send `X-Robots-Tag: noindex`. `llms.txt` lists the new page in both languages (generated from the registry).

## 4. Build and code checks

| Check | Result |
|---|---|
| `tsc --noEmit` | Pass |
| `eslint .` | Pass |
| `next build` | Pass (all pages statically generated) |
| `validateRegistry()` | Pass. New rules: every inline link target must exist, no self-links, no link markup in titles, descriptions, answers or FAQs (FAQ text feeds FAQPage schema). |
| `vitest run` | 34 pass, 10 fail. The 10 failures are the database tests (`inquiry.test.ts`, `enquiry-api.test.ts`), which throw `DATABASE_URL is not set` because this worktree has no `.env.local`. No form, API or database code was changed in this pass. |

## 5. Images and Core Web Vitals

- Hero images use `next/image` with `priority` and `fetchPriority="high"` (the LCP element is not lazy-loaded). Related-card images use `loading="lazy"` with explicit width and height (no CLS).
- New page hero: the existing Riyadh skyline photo (destination city), reused with its own alt text. No new image files were added. Competitor images were not used.
- **Not measured:** LCP, INP and CLS field data. There is no CrUX data yet for a new domain, and PageSpeed Insights needs the deployed URL. After deploy, run PSI on the Makkah hub, the Madinah hub and madinah-to-riyadh (mobile).

## 6. Schema notes

- FAQPage stays in JSON-LD because the questions are visible on the page. Google no longer shows FAQ rich results (Phase 1 note), but the markup still describes the visible content accurately.
- No AggregateRating, Review, price, opening hours or address markup was added (none is verified).

## 7. Issues found, not fixed in this pass

| Issue | Impact | Action |
|---|---|---|
| "نقل خاص" in 10 Arabic titles, H1s or descriptions outside Makkah and Madinah (events, family transport, tourism, city-transport hub) | Arabic intent mismatch | Follow-up pass |
| GA4 not configured (`NEXT_PUBLIC_GA_ID` missing in Vercel) | Quote, WhatsApp and phone events are not collected | Owner adds the GA4 ID |
| No GSC data for Makkah or Madinah yet | Cannot measure positions or CTR | Export again about 4 weeks after deploy |
