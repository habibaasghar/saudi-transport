# RideSaudi: why there are few leads, and what to do (26 Nov 2026)

Source: Google Search Console for `sc-domain:ridesaudi.com`, read on 26 Nov 2026. No Semrush or Ahrefs data was available, so there are no keyword volumes here.

## What Search Console shows

| Measure | Value |
|---|---|
| Clicks, last 28 days | 14 (11 of them on the bare homepage, mostly brand searches) |
| Impressions, last 28 days | 374 |
| Pages indexed | **7 of 337** (5 real pages + 2 homepage/sitemap URLs) |
| Discovered, not indexed | **324** (Google knows the URL but has not crawled it) |
| Crawled, not indexed | 4 |
| Google crawl requests, 90 days | 264 in total; only 12% were HTML pages (about 32 page fetches) |
| Crawl purpose | 92% refresh of known pages, 8% discovery |
| External links (backlinks) | **0** |
| Sitemap | Submitted 23 Nov, read OK, 384 URLs |

Indexed pages: `/en/`, `/en/blog/private-transport-saudi-arabia-guide/`, `/en/blog/madinah-to-alula-by-road-guide/`, `/ar/blog/madinah-to-alula-by-road-guide/`, `/ar/luxury-transportation/luxury-family-transport/`. The Arabic homepage is not indexed yet.

Queries with impressions: almost all are "Madinah to AlUla distance" in Arabic and English (the guide ranks around position 5-10). These are information searches, and Google answers them on the results page, so they rarely click. "airport transfers saudi arabia" shows the homepage at about position 18.

## The real reason for few leads

1. **Google does not trust the domain yet.** It is new, has **zero backlinks**, no Google Business Profile reviews and no mentions elsewhere. Google spends very little crawl on such a site, so 324 good pages wait in the queue.
2. **Adding more pages will not help now.** The pages exist; Google is not fetching them. Authority and signals are the limit.
3. **Organic SEO alone will not produce 10 leads a day in the next weeks.** That needs the channels below while SEO builds.

## What brings leads fastest (owner actions, in order)

1. **Google Business Profile** (business.google.com). This is the biggest one for "سطحة قريبة", "رقم سطحة", "airport taxi Jeddah". Use the real business address or a service-area business; add the WhatsApp number, website, services, real photos, and ask every real customer for a review. Without it RideSaudi does not appear in Google Maps at all.
2. **Google Ads, small daily budget.** Start with recovery/satha in Riyadh and Jeddah (urgent, high value) and airport transfers Jeddah/Riyadh/Madinah. Send ads to the existing service pages: they now have the short form and WhatsApp. This is the only way to get leads in days, not months.
3. **Haraj (haraj.com.sa) listings** for satha, lowbed and car transport, with the WhatsApp number and a link to the matching page. Many Saudi customers search there first.
4. **Bing Webmaster Tools** (bing.com/webmasters): "Import from Google Search Console", one click. Bing feeds ChatGPT search, Copilot and DuckDuckGo. The site now supports IndexNow, so after deploy every page can be sent to Bing at once.
5. **Backlinks from real places:** Saudi business directories, social profiles (Instagram, X, TikTok, Snapchat, Facebook) that link to the site, partner companies, hotel or Umrah agents you work with. Ten real links are worth more than 100 new pages.
6. **Request indexing in Search Console** (URL Inspection → Request indexing) for about 10 money pages a day. Start with: `/ar/`, Jeddah airport, Riyadh airport, Madinah airport, Jeddah airport to Makkah, Makkah to Madinah, Riyadh to Jeddah, satha Riyadh, satha Jeddah, lowbed transport (each in both languages over the next days).
7. **A call number.** Recovery customers call; competitors show a phone link.

## What was changed in the code today (local, not deployed)

- Unknown URLs such as `/favicon.ico` and `/wp-login.php` answered **500** (Google logged a server error). They now answer 404, and `/favicon.ico` serves the real icon.
- **IndexNow** added: key file in `public/`, and `scripts/indexnow.mjs` sends every sitemap URL to Bing/Yandex after a deploy.

## First images needed (send these first)

Real photos only (your own, or from a partner with permission). Landscape, at least 1920×1080, no other company's logos. Put them in `Saudi ride/images-inbox/` in the folder named.

| # | Folder / name | What it shows | Used on |
|---|---|---|---|
| 1 | `services/satha-loading-car.jpg` | A satha loading a car, plate and faces not readable | Satha car recovery, Riyadh/Jeddah/Dammam satha |
| 2 | `services/lowbed-with-machine.jpg` | A lowbed carrying an excavator or loader | Lowbed transport, heavy equipment pages |
| 3 | `services/car-carrier-highway.jpg` | A car carrier or flatbed on a Saudi highway | Car transport between cities |
| 4 | `fleet/gmc-yukon-exterior.jpg` | Your GMC (or the SUV you use) outside, clean | Fleet, luxury SUV, airport pages |
| 5 | `services/airport-arrivals-name-board.jpg` | Driver holding a name board at arrivals (with the driver's OK) | Airport transfers hub and airport pages |

More can follow later (Staria interior, Makkah and Madinah views, terminals); the full list is in `docs/RIDESAUDI-NEW-IMAGE-REQUIREMENTS.md`.
