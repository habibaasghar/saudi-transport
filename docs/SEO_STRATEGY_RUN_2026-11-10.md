# SEO / lead-gen run, 2026-11-10

Branch `claude/taxi-saudi-seo-strategy-6b0c8f`, rebased onto `vercel-repo/habiba` (the real Next.js site; the worktree started as the static stub). Nothing pushed or deployed.

## Audit finding
The site already had 114 bilingual registry pages (services, 21 Riyadh/Jeddah/Makkah routes, GCC cross-border, airports, cities, luxury, events), sitemap with hreflang, robots, llms.txt, JSON-LD, DB-backed enquiry API with spam protection, WhatsApp/call/email CTAs and GA4 events. Rebuilding any of that would duplicate and cannibalise it, so this run closed real gaps only.

## Done
| Item | Detail |
|---|---|
| Route prefill | `src/content/route-prefill.ts`: 30 route pages now pre-fill pickup and destination (EN and AR) in the quote form |
| New route pages (EN+AR) | `/services/intercity-transfers/dammam-to-bahrain/` (child of Bahrain cross-border; Bahrain Airport angle), `dammam-to-al-ahsa`, `dammam-to-jubail`. Distances from public sources, stated as approximate |
| Blog (EN+AR, 4 guides) | `/blog/` index + cross-border checklist, private car vs flight vs rental, vehicle size for five passengers, airport pickup tips. Article + Breadcrumb + FAQ schema, hreflang, sitemap, llms.txt, footer link |
| Checks | `tsc` clean, ESLint clean, `next build` passes (blog and new routes prerendered), sitemap/llms/canonical verified on a local production server |

## Not done / blocked
- Tests in `tests/inquiry.test.ts` and `enquiry-api.test.ts` need `DATABASE_URL`; they fail here only for that reason. Form submit end-to-end is untested against a live DB/email.
- Route prefill is client-side state; not visible in server HTML and not browser-tested this run.
- No Ahrefs/GSC access: no keyword volumes, CTR or position analysis. Competitor page-by-page review not performed.
- Vehicle pages (Yukon, Tahoe, Staria, S-Class...) not built: fleet unverified (SEO-RULES.md section 3).
- Remaining requested blogs (Riyadh-Doha guide, Bahrain, Dubai, Kuwait, AlUla...) not written: they would duplicate the route pages until GSC shows separate informational demand.
- No new Dammam to Doha/Dubai pages: covered by the Qatar and UAE pages; no distinct demand evidence.
- Arabic copy needs native review. The Dammam to Jubail distance is weakly sourced.
- Owner items unchanged: env vars (DATABASE_URL/RESEND/GA ID), licensed photos, privacy/terms.

## Next 30 days
1. Set env vars and send a live test enquiry (email + DB).
2. Export GSC + Ahrefs; build keyword-to-URL sheet; merge or prune cannibalising pages.
3. Owner confirms fleet and routes; then publish /fleet/ vehicle pages.
4. Add blog posts only for queries GSC/PAA confirm; add real photos and OG image.
