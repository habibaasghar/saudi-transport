# SEO_AUDIT (baseline, from source + local production build)

Scope: code-level audit of `vercel-repo/main` as built locally on 2026-11-08. **Not yet done:** live crawl of https://www.ridesaudi.com/, Google Search Console, Ahrefs, PageSpeed/CrUX (no access from this session). Those are Phase 10 inputs and are listed in TECHNICAL_SEO.md. Nothing here claims rankings.

## Inventory
- Locales: `en`, `ar`, prefix always (`/en/…`, `/ar/…`), trailing slash, no auto-redirect by language.
- Pages: 2 homepages + 93 content pages x 2 languages = **188 sitemap URLs** (`.next/server/app/sitemap.xml.body`), 194 static pages generated incl. 404/robots/llms.
- Categories (from `docs/service-architecture.md`): airport, intercity, cross-border, Umrah, luxury, events, chauffeur, city transport, tourism, group, special, fleet hub, services hub, plus six extra city pages (Yanbu, Jubail, Najran, Jazan, Hail, Buraidah).

## What is already good
| Item | Finding |
|---|---|
| Canonicals | Self-canonical per page/locale via `alternates.canonical` (home and slug pages). |
| hreflang | `en`, `ar`, `x-default` in metadata **and** sitemap alternates. |
| Robots | `robots.ts`: allow `/`, disallow `/api/`, sitemap declared. Pages set `robots: index, follow`. |
| Structured data | `Organization`, `WebSite`, `WebPage`, `Service`, `FAQPage`, `BreadcrumbList` (`src/lib/schema.ts`); rules require JSON-LD to match visible copy. |
| Content QA | Build-time guards in `registry.ts`: missing AR, duplicate title/description/H1, duplicate FAQs, <4 FAQs, broken internal links, orphans, Latin in Arabic answers. |
| AIO/GEO/LLM | `/llms.txt` generated from the registry; answer-first copy rule. |
| Truthfulness | No invented fleet/prices/contacts/reviews; `confirmed` data empty by design. |
| Security headers | nosniff, referrer policy, X-Frame-Options, permissions policy. |

## Issues / risks found
| # | Severity | Issue | Action |
|---|---|---|---|
| 1 | High (for CRM work) | `proxy.ts` matcher would locale-rewrite `/admin` | Exclude `admin` from matcher (Phase 2); add test that `/admin/login` stays at its URL. |
| 2 | Medium | No `public/` assets: no favicon, no OG image, no logo; `og:image` absent | Needs licensed/brand assets from owner (already in missing-business-info). |
| 3 | Medium | Privacy Policy / Terms don't exist (footer says "To be published"); a booking form collecting personal data and AI processing needs them | Owner supplies legal text; add EN/AR pages (these are *new legitimate pages*, not thin SEO pages) — Phase 3/12. |
| 4 | Medium | No contact email/WhatsApp configured → no `ContactPoint` in schema, CTA hidden | Owner to confirm numbers; set env. |
| 5 | Low | Arabic copy not yet reviewed by a native copywriter (own docs say so) | Owner. |
| 6 | Low | Sitemap `lastModified` only on content pages (home has none) | Add for home in Phase 10. |
| 7 | Info | Keyword mapping / cannibalisation can't be assessed without Ahrefs/GSC exports | Phase 10 inputs requested. |

## Preservation rules for all later phases
1. No change to existing URL paths, slugs, titles, descriptions, H1s, canonicals or JSON-LD unless a specific defect is documented and tested.
2. New public routes: none for SEO; only legal pages (privacy/terms) if owner provides text. `/admin/*` and `/api/*` are `noindex`/disallowed and absent from sitemap.
3. Booking modal markup must not add duplicate H1/headings to pages (dialog uses its own heading inside `role=dialog`, rendered only when open) and must not change LCP elements.
4. Add automated check (Phase 10): crawl sitemap before/after each phase; diff titles, canonicals, status codes.

Further documents (`SEO_URL_INVENTORY`, `KEYWORD_MAPPING`, `CONTENT_GAP_ANALYSIS`, `CANNIBALIZATION_REPORT`, `INTERNAL_LINKING_PLAN`, `SCHEMA_AUDIT`, `CORE_WEB_VITALS`) are scheduled for Phase 10; they need live-site/GSC/Ahrefs data and are intentionally not fabricated now.
