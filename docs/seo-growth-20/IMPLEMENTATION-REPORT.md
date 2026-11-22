# RideSaudi 20-article growth project: implementation report

Date: 2026-11-23. Branch `claude/ridesaudi-seo-growth-ca4df2`, based on `vercel-repo/main` @ 96317e3. **Not committed and not deployed.**
Full per-article data (URLs, titles, meta, hero image, links): `CONTENT-INVENTORY.csv`. Plan and cannibalization decisions: `PHASE1-AUDIT-AND-PLAN.md`. Photo checklist: `IMAGE-CHECKLIST.csv`.

## 1–2. URLs (EN and AR, same slug)

Every guide exists at `https://www.ridesaudi.com/en/blog/<slug>/` and `https://www.ridesaudi.com/ar/blog/<slug>/`.

| Cluster | Slug |
|---|---|
| Hub | `towing-heavy-transport` |
| Towing/heavy | car-towing-service-saudi-arabia · flatbed-vs-hydraulic-towing-saudi-arabia · roadside-assistance-vehicle-recovery-saudi-arabia · intercity-car-transport-saudi-arabia · heavy-machinery-transportation-saudi-arabia · lowbed-trailer-transport-saudi-arabia · excavator-transportation-saudi-arabia · bulldozer-wheel-loader-transport-saudi-arabia · crane-industrial-equipment-transport-saudi-arabia · choose-heavy-equipment-transport-company-saudi-arabia |
| Hub | `private-transfers` |
| Private transfers | private-airport-transfers-saudi-arabia · umrah-private-transport-plan-jeddah-makkah-madinah · riyadh-to-jeddah-by-road-guide · riyadh-to-dammam-private-transfer · makkah-to-taif-private-car-day-trip · private-chauffeur-service-saudi-arabia · luxury-suv-gmc-transfer-saudi-arabia · saudi-arabia-to-qatar-private-transfer · saudi-arabia-to-bahrain-private-transfer · saudi-arabia-to-uae-private-transfer |

In total: 40 guide pages and 4 hub pages. The sitemap grew from 366 to 410 URLs.

## 3–4. Keywords and intent

Keywords and intent for each article are listed in `PHASE1-AUDIT-AND-PLAN.md`, section 3. Each article is angled at the planning or comparison question rather than the service keyword. That avoids cannibalizing the existing service pages; the 12 overlaps are listed in section 2 there.

Arabic copy is written natively using Saudi terms: سطحة، سحب سيارات، لوبد، حفارة/بوكلين، شيول، جمس يوكن، منفذ سلوى، البطحاء. "نقل خاص" and "سائق خاص" are avoided.

No search volume or difficulty is claimed, because no keyword export was supplied.

## 5–6. Internal links and strengthened pages

Every guide has:
- 4–7 commercial links in its "Plan this job" block;
- up to 6 related guides (hand-picked first, then guides from the same cluster);
- a link to its hub;
- a hub breadcrumb.

Service pages pick up the guides automatically through their existing "Planning guides" block (`ServicePageView`, `guides = blogPosts.filter(b => b.links.includes(page.path))`). This was verified on the rendered pages, for example:
- satha-car-recovery links to 4 new guides;
- excavator-transport links to the excavator guide;
- cross-border/qatar (AR) links to the Qatar guide;
- riyadh-to-dammam links to the business guide;
- luxury-suv links to the GMC guide.

Pages strengthened: the satha hub and city pages, the heavy-equipment pages, lowbed, flatbed, excavator, wheel-loader, crane, industrial relocation, oversized, the airport pages (RUH/JED/MED/DMM/VIP), Umrah, Riyadh–Jeddah, Riyadh–Dammam/Khobar/Jubail, Makkah–Taif, the chauffeur pages, luxury SUV, fleet, and cross-border Qatar/Bahrain/UAE with their routes.

The `/blog/` index now groups guides under the two hubs. The old behaviour linked every guide to every other guide; with 32 guides that would have meant 31 links per page, so related guides are now capped at 6.

The 12 existing guides now belong to the private-transfers hub.

## 7. Images

Every article has its own hero image, and none repeats within the blog:
- **Heavy guides:** existing original illustrations, already labelled "Illustration of…".
- **Transfer guides:** existing owner-supplied photos (Doha, Dubai, the causeway, Riyadh, Makkah, Taif, Al Khobar, GMC Yukon, Camry) and the JED illustration.

Some of these heroes also appear on the related service page. The 27 new photos in `IMAGE-CHECKLIST.csv` are meant to replace them.

Images are served through `next/image`: priority hero, `fill` + `sizes` (no CLS), and AVIF/WebP from the Next optimizer. The hero is also used as `og:image` and Article `image`.

## 8–9. Metadata and schema

- Every EN and AR title is ≤ 60 characters including " | RideSaudi".
- Descriptions are 110–165 characters.
- Each page has one H1.
- Titles, descriptions and H1s are unique site-wide (checked against every registry page and the other guides).
- Open Graph uses type `article`, an image and published/modified dates; Twitter uses `summary_large_image`.
- Guides carry Article + BreadcrumbList (with the hub level) + FAQPage + Organization/WebSite. The JSON-LD was parsed successfully on the rendered pages.
- Hubs carry CollectionPage + ItemList + BreadcrumbList + FAQPage.
- There are no ratings, reviews, prices, LocalBusiness or Service markup.
- FAQPage is kept for consistency with the existing guides. Google shows no FAQ rich results for this kind of site, so it won't produce a rich result.

## 10–12. Sitemap, canonical, hreflang and indexability

Hubs and guides are in `/sitemaps/guides-{en,ar}.xml` with a real lastmod.

Local production build, `node scripts/indexability-audit.mjs` result: **410 URLs; status, robots, x-robots, canonical, hreflang, Link header, fewInlinks and sitemap all 0**. Every page is self-canonical and has an EN/AR/x-default hreflang set.

## 13. Performance

The pages are static (SSG) with no new client JavaScript; the only interactive parts are the existing forms. On a mobile 375 px viewport there is no horizontal overflow on 6 sampled pages, and the RTL layout is correct.

No Lighthouse run was done. That should happen on the live site after deploy.

## 14. Forms and CRM

No new form or API was built. Existing systems are reused:
- **Heavy guides and the heavy hub** show `HeavyQuoteSection`, which posts to `/api/heavy-quote/` with the service preselected (satha, car_transport, heavy_machinery, lowbed, excavator, wheel_loader, crane). It asks for machinery type, make/model, weight, L/W/H, both addresses, loading method, date and photos via WhatsApp after submit.
- **Transfer guides** show the existing `EnquiryForm`, which posts to `/api/enquiry/` and the CRM.

The forms render on each page type. An end-to-end submit was **not** done locally because this worktree has no `DATABASE_URL`. The live pipeline was fixed on 2026-11-23 (RS-2611-0002). Run one test submit on a heavy guide and one on a transfer guide after deploy.

Analytics: the existing events (`quote_form_start`, `quote_form_submit`, `generate_lead`, `whatsapp_click`) cover these pages.

## 15. Remaining issues

1. **Owner confirmations still open:**
   - satha-only or also on-site help;
   - wheel-lift trucks;
   - lowbed/crane availability;
   - cities;
   - call number;
   - which border crossings partners have actually done;
   - GMC seats and luggage;
   - real author name.

   The copy is written conservatively for all of these ("arranged through partners", "confirmed per enquiry").
2. Real photos (27, see the checklist) to replace the reused heroes.
3. `quote_form_view` and `phone_click` events don't exist. There's no phone number, and a view event would need a small client observer.
4. The DB integration tests (10) fail locally only because `DATABASE_URL` is unset. They're unrelated to this work.
5. No keyword data was supplied, so priorities rest on intent analysis, not measured demand.

## 16. Next 30 days

1. Deploy, then submit the sitemap and request indexing for the 2 hubs and the 20 EN guides first (spread over several days).
2. Run live test enquiries on one heavy guide and one transfer guide.
3. Swap in real photos as they arrive. Start with excavator-on-lowbed, satha loading and GMC interior.
4. After 2–3 weeks, export GSC Performance for `/blog/` and rewrite titles for pages with impressions but low CTR.
5. Answer the 8 open questions. Then add specifics, such as cities and crossings actually served, to strengthen the pages.
6. Add a few links to the new guides from the homepage heavy section and the airport hub, if GSC shows they are slow to be discovered.
