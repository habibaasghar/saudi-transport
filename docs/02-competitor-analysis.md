# Competitor analysis (RideSaudi homepage phase)

Sections are labelled: **[Measured]** = Ahrefs export/screenshot value, **[Analysis]** = my inference, **[Recommendation]**.
Ahrefs figures are modelled estimates, not exact Google traffic. See `research/manifest.md` for the file inventory.

## 1. taxisaudiarabia.com
**[Measured]** Organic keywords export has 14 rows (some "Lost"/"New"). Largest keyword: "riyadh to makkah distance" (vol 3,100, position 1, est. traffic 6). Everything else is ≤70 volume. Best-ranking commercial-ish keywords: "dammam to qatar by road" (50), "riyadh to bahrain by road" (20). A "القطيف تاكسي" (70) keyword was lost.
Top pages (9): `/routes/dammam-to-doha`, `/distance/riyadh-to-makkah`, `/distance/madinah-to-alula`, `/services/car-recovery/qatif` (lost), `/routes/riyadh-to-manama`, `/guides/miqat-jeddah-makkah`, `/routes/alkhobar-to-doha`, a car-towing blog, `/guides/riyadh-to-bahrain-taxi-vs-train` (lost). Page types per Ahrefs: Landing > Service, Article > How-to/Comparison. Max est. page traffic: 8.
**[Analysis]** Its organic footprint is tiny (est. tens of visits/month). The strategy is programmatic route/distance pages + guides, capturing informational "distance" queries rather than booking intent. It also mixes in car recovery (towing), a different service.

## 2. taxiserviceksa.com
**[Measured]** (overview screenshot) 5 organic keywords, est. organic traffic 23, DR 2.1, ~1.4K backlinks from ~993 referring domains, 172 AI responses (all platforms). Keywords export (7 rows): "jeddah airport to makkah taxi fare" (90), "jeddah beaches" (70, blog), "doha to makkah distance by road" (70), "dammam to makkah distance" (700, lost), "kuwait to makkah distance" (70), "jeddah to taif by car" (20). Largest ranked segments are /distance/ pages and blog posts.
**[Analysis]** Very weak organic presence; ~1,000 referring domains with DR 2.1 suggests low-quality/spam-like links (unverified – no backlink export). Not a strong benchmark for domain authority; it is a signal that the Saudi niche is **under-served by authoritative sites**.

## 3. Transfeero (international benchmark, not treated as a Saudi competitor)
**[Measured]** Overview: DR 46, 5K organic keywords, est. organic traffic 13.8K/month, 13.2K backlinks / 1.3K referring domains, 2.9K AI responses. Top ranking keywords on page 1 of the export are European airport-transfer queries (Barcelona, Corfu, Beauvais/Paris, Temuco, Side, in several languages) plus brand terms. **No Saudi-specific keyword appeared in the portion read.**
**[Analysis]** Useful as a model of the marketplace pattern (per-airport landing pages, multilingual). Evidence does **not** show it operating in Saudi Arabia; not classified as a direct Saudi competitor.

## 4. Keyword demand evidence (shared files, Saudi, Ahrefs Keywords Explorer)
**[Measured] English** (monthly SA volume): umrah taxi service 300; umrah taxi 250; makkah to madinah taxi fare 250; madinah to makkah taxi 150; jeddah airport transfer 60; airport transfer riyadh 40; private driver saudi arabia 30; riyadh airport transfer 20.
**[Measured] Arabic:** ليموزين الرياض 150; سائق خاص جدة 150; سائق خاص بالشهر الرياض 70; سعر ايجار سيارة ليموزين في الرياض 50; سائق خاص الرياض 50; توصيل مطار الملك خالد 40; شركة ليموزين الرياض 20. The majority of "سائق خاص" volume is **job-seeker / sponsorship intent** (مطلوب سائق خاص, وظائف, براتب, استقدام, كفالة).
**[Measured]** Private-driver and airport-transfer terms have low volumes (≤60) in the English set; Umrah-taxi terms are the largest commercial cluster.

## 5. How this shaped the homepage
- **[Analysis]** Broad commercial intent is small but real; the homepage should own the brand + "private chauffeur / airport transfers / intercity in Saudi Arabia" theme, not distance/route informational queries (those belong to later route pages).
- **[Decision]** English title/H1 centre on "private chauffeur … Saudi Arabia" + airport + intercity; Arabic copy uses "سائق خاص" only in a *chauffeur-hire* context ("خدمة سائق خاص ونقل") and avoids job-style phrasing; Arabic also uses "التوصيل من المطار" matching "توصيل مطار الملك خالد".
- **[Decision]** No Umrah/pilgrim positioning on the homepage: highest-volume cluster, but nothing in the supplied business information confirms RideSaudi serves it. **[Recommendation]** Confirm with the business, then plan a dedicated Umrah/Makkah–Madinah page (volume evidence above).
- **[Decision]** Not copying competitor route/distance programmatic pages now. **[Recommendation]** Phase 2: airport pages (Riyadh, Jeddah — volumes 40/60) and route pages only for routes the business confirms operating.
- **[Gap]** No backlink/content-gap exports were supplied; link-building recommendations are deferred until those are exported.
