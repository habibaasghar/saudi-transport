# Riyadh image inventory (updated 2026-11-08)

Source: owner-supplied library `Documents/WEBSITES/project/taxidriver/public` (the TaxiSaudiArabia project). Copied selectively to `public/images/` (30 files, about 4 MB), resized to at most 1600 px and re-encoded as WebP q80. Mapping lives in `src/content/images.ts` (page path to image, EN and AR alt text). Hero images load with `priority`; card images are lazy; each page gets `og:image`, `twitter:summary_large_image` and `primaryImageOfPage` schema from the same entry.

**Licence status: owner-supplied, not independently verified.** Many files look like stock or AI-generated pictures. Confirm you may use them commercially on RideSaudi before wide promotion.

## Deliberately NOT copied
- Fleet, partner and "real vehicle" photos (`fleet/`, `gallery/`, `Partners/`): they would show specific vehicles as if RideSaudi operated them, which `SEO-RULES.md` forbids until `confirmed.fleet` is filled.
- Customer review screenshots (`reviews/`): private WhatsApp chats and unverifiable reviews.
- TSA logos, `.well-known/ai-plugin.json`, `llms*.txt`, price book and other TSA business files.
- Chauffeur, driver and passenger scene photos: not RideSaudi staff.

## Used
| File | Used on | Type | Notes |
|---|---|---|---|
| riyadh.webp | Riyadh hub hero, homepage hero and og:image | photo | 1600x900 |
| diriyah.webp | Riyadh sightseeing | photo | 1024x502, slightly low for a full-width hero |
| jeddah.webp | Riyadh to Jeddah, Jeddah city, home card | photo | portrait, cropped |
| makkah.webp | Riyadh to Makkah, Makkah city, Umrah hub | photo | portrait, cropped |
| madinah.webp | Riyadh to Madinah, Madinah city | photo | portrait, cropped |
| al-khobar.webp | Riyadh to Dammam | photo | 1600x900 |
| alula.webp, alula-elephant-rock.webp | Riyadh to AlUla, AlUla tourism | photo | |
| abha.webp, taif.webp, tabuk.webp | Riyadh to Abha / Taif / Tabuk, Abha and Tabuk city | photo | |
| yanbu.webp | Riyadh to Yanbu | render | 597x335: low resolution, replace |
| doha.webp, dubai.webp | Riyadh to Doha / Dubai | photo | |
| manama.webp, kuwait-city.webp | Riyadh to Manama / Kuwait City | photo | 796 and 768 px wide: low resolution, replace |
| king-fahd-causeway.webp | Bahrain country page | photo | |
| airport-ruh / jed / med / dmm / taif .webp | airport pages | illustration | AI-style illustrations, alt says "Illustration", not photos of the airports; replace with real photos |
| saudi-uae-highway.webp, border-crossings.webp | UAE country page, cross-border hub | illustration | alt says "Illustration" |
| abu-dhabi.webp, abu-dhabi-corniche.webp, airport-abha.webp, airport-alula.webp, airport-tabuk.webp, alula-hegra.webp | copied, not yet used | | for future Abu Dhabi, Abha, AlUla, Tabuk pages |

## Still missing
- Real photos for Al Ahsa, Buraydah, Hail and Jubail route pages (no image shown; honest gap).
- Real RUH and other airport photography.
- A brand-made 1200x630 social card and the logo file (TSA logos were not copied).
- Any RideSaudi vehicle photography, once vehicles are verified.
