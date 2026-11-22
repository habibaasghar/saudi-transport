# RideSaudi — Internal Link Report

Date: 2026-11-22 · Measured on the live site (366 sitemap URLs) and re-measured on the new production build.

## 1. Method

Each page's HTML was fetched. "Contextual links" are `/en/` or `/ar/` links inside `<main>` (menus and footer excluded). Click depth was measured from `/en/` and `/ar/` by breadth-first search, once using all links and once using contextual links only.

## 2. Results

| Metric | Value |
|---|---|
| Orphan pages | **0** |
| Click depth (all links) | 63 pages at depth 1, 119 at depth 2, none deeper (per language) |
| Click depth (contextual links only) | depth 1: 19 · 2: 118 · 3: 28 · 4: 9 · 5: 8 (per language, before this change) |
| Contextual inlinks per page | ≤ 3: 52 · 4–5: 126 · 6–10: 100 · 11–30: 72 · 31+: 16 |
| Minimum contextual inlinks | 3 (SEO-RULES 7A minimum met by every page) |
| Contextual outlinks per page | min 5 · median 12 · max 60 |
| Cross-language links | Arabic pages link to Arabic pages; English to English (checked by path prefix) |

## 3. Problem found and fixed

**The home page did not link to the money pages.** Its `<main>` linked to 19 URLs: section hubs, Riyadh and Jeddah city pages, three Riyadh cross-border routes. It did **not** link to the highest-demand corridors or any airport page, and the intercity block showed placeholder text. For a site Google has barely crawled, the home page is the page most likely to be fetched first, so its links decide what is discovered next.

Fix (`src/components/Intercity.tsx`, `src/components/Airport.tsx`): the home page now links, in both languages, to

- Routes: Makkah→Madinah, Jeddah→Makkah, Jeddah→Madinah, Riyadh→Jeddah, Riyadh→Dammam, Riyadh→Makkah, Riyadh→Madinah, Madinah→Makkah, Jeddah→Riyadh, Jeddah→Taif.
- Airports: Jeddah, Riyadh, Madinah, Dammam, Jeddah Airport→Makkah, Taif.

Anchor text is each page's own short name ("Makkah to Madinah", "التوصيل من مطار جدة"). Links are generated from the content registry, so a removed page drops out automatically.

## 4. Pages with exactly 3 contextual inlinks (weakest, EN; AR mirrors)

`/luxury-transportation/luxury-airport-transfers/`, `luxury-event-transport/`, `luxury-family-transport/`, `vip-delegation-transport/`, `luxury-intercity-transfers/`; `/services/city-transport/jubail/`, `tabuk/`, `hafar-al-batin/`; `/services/event-transportation/dammam/`, `riyadh/`, `jeddah/`, `event-airport-transfers/`, `group-event-transport/`; `/services/group-transportation/group-airport-transfers/`; `/services/intercity-transfers/riyadh-to-hail/`, `riyadh-to-tabuk/`, `riyadh-to-hafar-al-batin/`, `dammam-to-jubail/`, `dammam-to-dubai/`; `/services/special-transportation/bilingual-chauffeur/`, `senior-friendly-transportation/`; `/services/tourism-transport/riyadh-sightseeing/`; `/services/umrah-transport/private-umrah-chauffeur/`; `/services/airport-transfers/qassim-airport/`, `al-ahsa-airport/`; `/services/recovery-heavy-transport/forklift-transport/`.

Several luxury pages here are also consolidation candidates (Indexing Recovery Report §6): resolve that decision before adding links to them.

## 5. Recommended next link work (not done in this pass)

| From | To | Anchor idea |
|---|---|---|
| `/services/city-transport/riyadh/` | `riyadh-to-hail/`, `riyadh-to-tabuk/` | "Riyadh to Hail by private car" |
| `/services/city-transport/dammam/` | `dammam-to-jubail/`, `dammam-to-dubai/` | "Dammam to Jubail transfer" |
| `/services/umrah-transport/` | `private-umrah-chauffeur/` | "a chauffeur for your whole Umrah stay" |
| `/services/event-transportation/` | the three city event pages | "event transport in Riyadh / Jeddah / Dammam" |
| `/services/airport-transfers/` | `qassim-airport/`, `al-ahsa-airport/` | airport names |

Avoid footer link stuffing; add these in body copy where the sentence is about that journey.
