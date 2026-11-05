# RideSaudi — Permanent Content, SEO, AIO, GEO & LLM Rules

These rules apply to **every page ever created** on https://www.ridesaudi.com/ — English and Arabic. They are mandatory, not suggestions. Read before adding or editing any page.

## Project baseline
- Brand: **RideSaudi** · Domain: `https://www.ridesaudi.com/`
- Stack: Next.js App Router, TypeScript, next-intl (English + Arabic, RTL)
- Design: Desert Dusk — `#0F1B2D` navy, `#F3ECE0` ivory, `#C9A877` sand/gold, `#1F4D3A` green, `#A4543B` terracotta
- Booking model: **enquiry-first**. Never imply instant/confirmed booking.
- Preserve and improve existing SEO content and Ahrefs-based work; never overwrite without inspecting first.

## 1. No thin content — ever
- A page exists only if it has a **distinct search intent**, **real business capability** behind it, and **enough unique, useful information** to satisfy that intent.
- Never publish a page just because a competitor lists it (e.g. the 28 competitor service names ≠ 28 pages). Map keyword → intent → URL first; merge pages with the same intent.
- If there is not enough verified, unique content: do **not** publish. Merge into the parent page, or keep it unpublished/noindex and out of the sitemap.
- No filler, no word-count padding, no repetitive intros. Length follows usefulness (guide: category 1,000–1,800 words; core service 800–1,500; specialised 600–1,200).
- No empty routes, placeholders, "coming soon", lorem ipsum or TODO content in production.

## 2. No duplicate content — ever
- **City/route/airport pages must not be find-and-replace clones.** Each needs genuinely different information (real locations, airports, venues, routes, traveller considerations, vehicle suitability, FAQs).
- Titles, meta descriptions, H1s, intros and FAQs must be **unique across the whole site**. No FAQ reused verbatim on another page.
- Before publishing any page, run a similarity check against sibling pages; rewrite if pages read as templates.
- One canonical URL per page. No duplicate indexable URLs (trailing slash variants, locale duplicates, params). Redirect (301) any changed URL.
- Never copy competitor text, structure verbatim, design or branding.

## 3. Truthfulness (non-negotiable)
Never invent: fleet size, vehicle availability, passenger/luggage capacities, distances, durations, fixed fares, discounts, 24/7 availability, response times, licences, insurance, driver qualifications, airport waiting policies, reviews, ratings, awards, partnerships, event contracts, wheelchair accessibility, or operating cities.
- Competitor claims are not proof of RideSaudi capability.
- If unverified: use accurate non-committal wording (e.g. "ask us to confirm availability") and log it in the **verification report** (`/docs/verification-report.md`).
- Umrah/pilgrimage pages: respectful tone; never imply religious endorsement or official affiliation.
- No licensed tour-guide claims unless verified.
- Structured data must match visible content exactly.

## 4. English + Arabic — every page, together
- **Every new page ships in both languages at the same time.** No English-only page; no Arabic page with English placeholder text.
- Arabic is **not** word-for-word translation: write natural Saudi-market Arabic with native search terms (e.g. توصيل من مطار جدة، سائق خاص، تاكسي عمرة، نقل فعاليات، سيارات فاخرة مع سائق) based on how Arabic users search.
- Arabic gets its own: unique title, meta description, H1, intro, FAQs, alt text, breadcrumbs, internal links (Arabic→Arabic), form labels/errors, and JSON-LD (`inLanguage: "ar"`).
- Follow the existing next-intl URL convention (inspect first). Both locale URLs must exist, be self-canonical, and reference each other with **hreflang** (`en`, `ar`, `x-default`). Do not canonicalise Arabic to English.
- Proper RTL: `dir="rtl"`, logical CSS properties (`margin-inline`, `padding-inline`, `text-align: start`), mirrored icons/arrows where directional, aligned forms and breadcrumbs, Arabic-appropriate font and line-height.
- Both language versions go in the sitemap with alternates.
- Arabic SEO quality must match English — keyword research for Arabic terms (Ahrefs Arabic data) is required, not optional.

## 5. URL & architecture rules
- Lowercase, hyphen-separated, descriptive, permanent, one trailing-slash convention site-wide, no unnecessary params, no dates.
- Logical parent → child hierarchy with breadcrumbs. No orphan pages: every page reachable from navigation or contextual internal links.
- Hierarchy: `/services/` (airport-transfers, intercity-transfers, umrah-transport, chauffeur-services, city-transport, tourism-transport, group-transportation, event-transportation, special-transportation), `/luxury-transportation/`, `/fleet/`.
- **Luxury Transportation and Event Transportation are first-class categories**: visible from homepage and main nav, not hidden in the footer.
- Vehicle pages in `/fleet/` only for vehicles that are verified.

## 6. On-page requirements (each page, each language)
- Unique title + meta description, one H1, logical H2/H3.
- Answer-first opening: a short, factual 40–60 word answer to the page's core question.
- Search-intent-matched content, specific use cases, practical info, semantic entities, long-tail and conversational phrases (natural, no stuffing).
- Genuine, page-specific FAQs (visible on page).
- Descriptive internal links (varied anchors, not exact-match spam), related services, clear CTAs: **Get a Quote** (primary), **Book on WhatsApp** (secondary), **Request Corporate Quote** (B2B).
- Don't force irrelevant sections; layout matches intent (airport = arrivals/departures; events = logistics; luxury = vehicle showcase; Umrah = pilgrimage planning; intercity = route planning; chauffeur = hourly/day booking).

## 7. AIO / GEO / LLM optimisation
- **Answer-first blocks**, short definitions, lists, comparison tables where they help, descriptive headings phrased like real questions.
- **Entity consistency**: identical brand name, description, contact details, service names and city/airport names across all pages and both languages. Link entities clearly (RideSaudi ↔ services ↔ cities ↔ airports ↔ vehicles).
- **GEO**: real, verified local detail (airports, districts, venues, routes) that adds value — not city names sprinkled into generic text.
- **Conversational coverage**: answer questions people ask AI assistants (e.g. "best way from Jeddah Airport to Makkah", "can I book a private car Riyadh to Jeddah", "wedding transport in Riyadh", "luxury transport in Saudi Arabia") accurately and only with true information.
- **Crawlers**: robots.txt must not accidentally block Googlebot, Bingbot or legitimate AI search crawlers; decide per-bot deliberately.
- **`/llms.txt`**: accurate, maintainable summary of brand, categories, key URLs, coverage and enquiry contact — updated whenever pages are added. (No claims that it guarantees citations or rankings.) Provide Arabic section/URLs too.
- Keep key content in server-rendered HTML (not hidden behind JS/tabs) so crawlers and LLMs can read it.
- Cite no fake statistics; any factual claim must be verifiable.

## 8. Technical SEO checklist per new page
- [ ] Metadata: title, description, canonical, hreflang, Open Graph, Twitter, robots, `lang`
- [ ] JSON-LD: Organization/LocalBusiness (if justified), WebSite, WebPage, Service, BreadcrumbList; FAQPage only when eligible and matching visible FAQs. **No invented ratings, reviews, prices, awards.**
- [ ] Added to dynamic sitemap (EN + AR with alternates); excluded if noindex/redirect/draft
- [ ] Internal links in and out (EN and AR)
- [ ] Images: `next/image`, descriptive alt (EN + AR), sized to avoid CLS, lazy-loaded below fold, priority for LCP only
- [ ] Accessibility: semantic HTML, labelled form fields, keyboard nav, contrast, reduced-motion
- [ ] Forms: validation, spam protection, clear success/error states, working WhatsApp prefill, **no fake booking confirmation**
- [ ] Performance: minimal client JS, no heavy animation libraries, good font loading
- [ ] `tsc`, ESLint and production build pass; rendered page checked on mobile/tablet/desktop and in Arabic RTL

## 9. Pre-publish gate (a page ships only if ALL are true)
1. Distinct search intent, not covered by another page.
2. Real, verified business capability.
3. Unique, useful, non-templated content (EN and AR).
4. Arabic version exists with native-quality SEO.
5. No unverified claims.
6. Passes the technical checklist above.
7. Linked from navigation/relevant pages and listed in sitemap and `llms.txt`.

If any item fails: fix it, merge the page, or don't publish it.

## 10. Process rules
- Work in batches; keep a persistent completion checklist and never report unfinished pages as complete.
- Keep a list of intentionally excluded pages with reasons.
- Keep a verification report of missing business information needing owner confirmation.
- Use Ahrefs data (in `Saudi ride/ahref reports`) plus intent, difficulty, relevance and conversion potential — not volume alone — to prioritise pages.
