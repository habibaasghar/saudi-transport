# TECHNICAL_SEO

## Implementation notes verified in source
- `next.config.ts`: `trailingSlash: true` (one URL form), AVIF/WebP images, security headers, `poweredByHeader: false`.
- `src/app/sitemap.ts`: all pages x locales with hreflang alternates and `x-default`; `src/app/robots.ts`: `Disallow: /api/`.
- Metadata per page: canonical, alternates.languages, OG (no image), `robots: index,follow`.
- `lang`/`dir` set per locale in `layout.tsx`; Arabic font variable.

## Required changes for the CRM (Phase 2 onward) — all SEO-neutral
| Change | Detail | Test |
|---|---|---|
| Exclude admin from i18n middleware | `matcher: ["/((?!api|admin|_next|_vercel|.*\\..*).*)"]` | `GET /admin/login/` returns 200/302 to login, never `/en/admin`. |
| Admin `noindex` | `src/app/admin/layout.tsx` metadata `robots: {index:false, follow:false}` + `X-Robots-Tag: noindex, nofollow` header for `/admin/:path*` in `next.config.ts`; `Cache-Control: no-store`. | Header present. |
| robots | add `/admin/` to disallow (admin pages are also noindex; disallow alone isn't enough, both are used). | robots output. |
| API | `/api/*` already disallowed; responses `no-store`. | |
| Sitemap | unchanged; assert it contains no `/admin` or `/api`. | sitemap test. |
| Modal | no extra `<h1>`/headings in static HTML; lazy chunk; no layout shift from sticky bar/floating button (fixed-position, reserved bottom padding on mobile). | Lighthouse before/after on home + 2 service pages. |
| CSP | Evaluate adding CSP in report-only first (Phase 11); don't break JSON-LD inline scripts (nonce/hash). | |

## Baseline measurements to capture before Phase 3 (not yet taken)
Lighthouse (mobile) for `/en/`, `/ar/`, one service page, one route page; CWV field data from GSC; crawl via `automation/seo_audit.py`; list of indexed URLs from GSC "Pages" report; redirects/status of non-www vs www (`ridesaudi.com` → `www`) and trailing-slash behaviour on the live domain.

## Regression gate for every phase
1. `npm run typecheck && npm run lint && npm run build` pass.
2. Sitemap URL count and set unchanged (188) unless intentionally changed and documented.
3. `seo_audit.py` + `sitemap_audit.py` show 0 new errors vs baseline.
4. Spot check 10 URLs (5 EN, 5 AR): status 200, canonical self, hreflang pair, no `noindex`, JSON-LD parses.
