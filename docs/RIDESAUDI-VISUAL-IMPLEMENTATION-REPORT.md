# RideSaudi — Visual Implementation Report

Date: 2026-11-23. Branch `claude/ridesaudi-visual-audit-636501`, based on `vercel-repo/main` (a8a5c80). **Not deployed and not committed.** Production deploy needs the owner's go-ahead (push to `vercel-repo/main`).

Reports: [Complete audit](RIDESAUDI-COMPLETE-VISUAL-AUDIT.md) · [Replacement plan](RIDESAUDI-IMAGE-REPLACEMENT-PLAN.md) · [New image requirements](RIDESAUDI-NEW-IMAGE-REQUIREMENTS.md).

## 1. Results

| Metric | Before | After |
|---|---|---|
| Service/route hero photos actually **visible** | 0 of ~288 URLs (hidden by stacked overlays) | 288 of 288 |
| Service pages with a page photo | 86 / 160 | 114 / 160 |
| Guides with a hero photo | 15 / 32 | 28 / 32 |
| Guide cards on blog index/hubs with a thumbnail | 0 | 28 guides |
| Fleet cards with a photo | 9 / 10 | 10 / 10 |
| URLs with an `og:image` | ~290 of 398 (raw WebP, some portrait, blog ones relative) | 398 / 398, all 1200×630 JPEG, absolute URLs |
| Twitter card type | `summary` on ~110 URLs | `summary_large_image` on all |
| `<image:image>` entries in sitemaps | 0 | 290 |
| Orphaned good photos | 7 | 2 (both deliberately unused: dealer branding / unconfirmed trim) |
| Broken image / OG paths | 0 | 0 |

## 2. What changed (code)

| File | Change |
|---|---|
| `src/app/globals.css` | **Hero visibility fix.** The image variant now uses one directional navy scrim (dark behind the text, light over the photo), mirrored for RTL, with a vertical scrim on phones (≤760px) for text contrast. Photo heroes get a min-height (30–42rem) so the photo reads on desktop. Adds `.svc-hero__caption`. Card and destination images zoom slightly on hover (disabled by the existing reduced-motion rule); overflow is clipped. |
| `src/content/images.ts` | `caption` field on `PageImage`. New real photos wired: Abu Dhabi ×2, Hegra, Dammam-coast variant, lowbed alias. New `vehicles` set (model photos with an "example of the model" caption in EN and AR). 45 page mappings added or replaced (listed in the replacement plan). |
| `src/components/ServicePageView.tsx` | Hero caption. New `CardImage`: cards show the linked page's photo (with its focus point) or, if none, the number. Previously both rendered and the image's negative margin overlapped the number. |
| `src/components/BlogView.tsx` | Hero caption for vehicle photos; guide cards show the guide's hero photo (decorative `alt=""`, because the card heading names it). |
| `src/content/blog/posts.ts` | `guideHeroes`: 13 guides get an on-topic existing photo. |
| `src/content/fleet.ts` | Sedan card photo (Sonata, owner-confirmed sedan, alt says "example"). |
| `src/lib/og.ts` (new) | `ogImage()`: the page's own 1200×630 JPEG, or the Riyadh share card for pages without a photo. |
| `src/app/[locale]/page.tsx`, `[...slug]/page.tsx`, `blog/page.tsx`, `blog/[slug]/page.tsx`, `src/components/LegalPageView.tsx` | Open Graph + Twitter images via `ogImage()` on every page type. |
| `src/lib/sitemap-entries.ts` | `image` on entries; `<image:image>` with the `image` namespace. |
| `scripts/og-images.mjs` (new) + `public/images/og/**` (61 JPEGs, 5.4 MB on disk, never loaded by pages) | Builds the share images with smart crop; metadata stripped. Re-run after adding a photo. |
| `.claude/launch.json` (new) | Local preview config (`next start` on port 3123). |

Unchanged on purpose: routes, URLs, page copy, metadata titles and descriptions, JSON-LD structure (`primaryImageOfPage` now simply resolves on more pages), internal links, enquiry and heavy-quote forms, WhatsApp, CRM/API/database code, EN/AR localisation and RTL. No new dependencies (`sharp` was already installed through Next).

## 3. Honesty and rules applied

- No new vehicle models, fleet claims, reviews, drivers or credentials. Vehicle photos are captioned on screen: *"Model shown as an example. Your actual vehicle is confirmed in the quotation."* / *"الصورة مثال على الطراز، وتُؤكَّد السيارة الفعلية في عرض السعر."*
- SUV and VIP pages show SUVs; family, group and van pages show the Staria; business pages show sedans.
- AI airport renders of non-existent terminals (Abha, AlUla, Tabuk) were **not** used. The Tahoe photo with a dealer plate was excluded.
- No placeholder images and no fake URLs. 46 pages keep a clean navy hero until a real asset exists (see the acquisition sheet).
- No images deleted.

## 4. QA performed

| Check | Result |
|---|---|
| `tsc --noEmit` | Pass |
| `eslint src` | Pass (0 warnings after removing one unused import) |
| `npm run build` (production) | Pass: 420 static pages generated |
| `vitest run` | 46 pass. 10 DB tests fail only because `DATABASE_URL` is not set in this worktree (same before this change; unrelated) |
| Crawl of all 398 sitemap URLs on the local production build | All 200. Every `<img>` and `og:image` returns 200 (103 distinct assets). Every `<img>` has an `alt` attribute. Exactly 1 `fetchpriority="high"` image on each of the 290 pages with a photo hero, none elsewhere |
| Browser: desktop EN (Riyadh→Jeddah, AlUla airport, Luxury hub, blog index), desktop AR (VIP car service), mobile 375px EN (Qatar) and AR (fleet) | Photo visible behind readable text; RTL scrim mirrors correctly; caption clear of the floating WhatsApp button; card thumbnails render |
| Live-site before state | Confirmed on www.ridesaudi.com: hero image loaded but not visible; it appeared once the overlays were removed in DevTools |

**Not verified:** real-device Lighthouse/Core Web Vitals on production (needs a deploy). Expected LCP effect: neutral to positive. The same single priority image is fetched as before, but now it is the visible LCP element instead of hidden bytes.

## 5. Still open (needs the owner)

1. Real airport photos for RUH, JED and MED (Critical), and DMM (High).
2. The owner's own heavy-transport job photos: flatbed car carrier (Critical), excavator, oversized, machinery relocation, heavy equipment, plus a separate crane photo.
3. 16:9 replacements for the portrait Makkah, Jeddah and Madinah photos and the 10 low-resolution city photos.
4. Service scenes: meet-and-greet, hotel arrival, VIP convoy, wedding, conference, senior assistance.
5. Confirmation before any Mercedes S/V-Class or Yukon XL/Denali imagery.
6. Homepage hero: kept as is (Riyadh skyline, already visible). A real "chauffeur + SUV at dusk" photo would be the single biggest brand upgrade once available (`services/private-chauffeur-hotel-arrival-dusk.webp`).
