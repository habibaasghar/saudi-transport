# Image audit and shopping list (2026-11-15)

## Audit result
- 140 content pages. Before this audit 40 had a hero image and 100 had none. After reusing existing destination photos on 16 route and city pages, **84 pages still have none**.
- `/public/images` holds 30 files. Unused today: `abu-dhabi.webp`, `abu-dhabi-corniche.webp`, `airport-abha.webp`, `airport-tabuk.webp`, `alula-hegra.webp` (kept for future pages).
- Images only appear as page heroes (`ServicePageView`) and homepage/destination cards. Blog posts have no images.
- Rules: your own photo or properly licensed (Unsplash, Pexels, Pixabay, Wikimedia Commons with credit if required); no competitor images; image must show the place named on the page; no hotel/airline/government logos; no photo presented as a RideSaudi vehicle, driver or staff. Min width 1600 px, landscape, no watermark.

## A. Must-have: places with no picture at all (one landscape hero each)
| # | Page | What the photo should show | Search words |
|---|---|---|---|
| 1 | Al Baha | Raghadan Forest Park or mountain road with greenery | Raghadan Forest Al Baha |
| 2 | Khamis Mushait | City or Asir highland road | Khamis Mushait city |
| 3 | King Abdullah Economic City | KAEC waterfront or skyline | King Abdullah Economic City KAEC |
| 4 | Jazan (also used on Jeddah to Jazan) | Jazan Corniche, Red Sea coast or Farasan ferry port | Jazan Corniche |
| 5 | Najran | Najran old mud-brick fort or valley | Najran Al Ukhdood or Najran fort |
| 6 | Hail | Aarif Fort or Hail old town or Jubbah | Hail Saudi Arabia Aarif fort |
| 7 | Buraydah / Qassim (also Riyadh to Buraydah) | Date market or Qassim skyline | Buraydah Qassim dates festival |
| 8 | Jubail (also Riyadh/Dammam to Jubail) | Jubail waterfront or industrial city skyline | Jubail Saudi Arabia |
| 9 | Dhahran | Dhahran skyline or Ithra cultural centre | Dhahran Ithra |
| 10 | Al Ahsa (also Riyadh/Dammam to Al Ahsa, Al Ahsa airport) | Al Ahsa oasis palms or Jabal Qarah | Al Ahsa oasis |
| 11 | Hafar Al Batin (also Riyadh to Hafar Al Batin) | Town or northern desert highway | Hafar Al Batin |
| 12 | Dammam city (page uses none yet) | Dammam Corniche or Gulf waterfront | Dammam Corniche |
| 13 | Jeddah Islamic Port / cruise (Cruise port transfers) | Red Sea cruise terminal, no ship branding | Jeddah Islamic Port cruise |
| 14 | Jeddah to Makkah route (optional second image) | Highway toward Makkah | Makkah Jeddah highway |

## B. Replace poor existing images
| Current | Problem | New photo wanted |
|---|---|---|
| `yanbu.webp` (597x335, render) | Too small, a rendering | Yanbu waterfront or old town (Yanbu Al Bahr) |
| `manama.webp` (796x385) | Low resolution | Manama skyline, 1600 px |
| `kuwait-city.webp` (768x576) | Low resolution | Kuwait Towers, 1600 px |
| `airport-jed/ruh/med/dmm/taif.webp` | Illustrations, not photos | Exterior of each airport terminal (no airline logos) |
| Qatar, Kuwait cross-border pages | No picture | Doha skyline (have `doha.webp`) and Kuwait Towers |

## C. Lifestyle images for service pages (nice to have; 1 image can serve several pages)
These are generic, so each photo can be used on a group of pages. They must not be described as RideSaudi vehicles.
| Photo | Pages it would serve | Search words |
|---|---|---|
| Dark SUV on a Saudi highway at sunset (no visible brand/plate) | Intercity hub, Private intercity chauffeur, Luxury intercity | SUV desert highway Saudi |
| Chauffeur opening a rear door for a passenger (face not needed) | Chauffeur services, Executive transport, VIP car service, Business chauffeur | chauffeur opening car door |
| Hotel arrival at night, luxury entrance (no logo) | Hotel transport, Airport to hotel, Luxury airport transfers | hotel entrance arrival luxury |
| Airport arrivals hall, traveller with luggage | Private airport pickup, Family airport transfer, VIP airport transfer | airport arrivals hall luggage |
| Family with suitcases beside a van or SUV | Family transport, Family Umrah, Luxury family | family luggage airport |
| White van or minibus on a road | Group transport, Van and minibus, Group Umrah | minibus tourists |
| Decorated wedding car | Wedding transport | wedding car decoration |
| Conference or business event entrance | Conference, Corporate events, Business travel | conference entrance delegates |
| Concert or festival crowd, evening | Concert, Festival transport | festival crowd night Saudi |
| Elderly traveller assisted by a younger person | Senior-friendly transport | elderly traveller assistance |
| Makkah / Madinah ziyarat site (mosque exterior) | Makkah and Madinah Ziyarat | Madinah Quba Mosque, Makkah |
| Haramain train at a platform | Jeddah-Makkah pages (optional) | Haramain high speed train |

## D. How to hand them over
Save into one folder and tell me the folder path. Rename each file with the number from the tables (for example `A1-al-baha.jpg`, `A4-jazan.jpg`, `C3-hotel-arrival.jpg`) or tell me which page each belongs to. I will convert to WebP, resize, add EN and AR alt text and attach them. Start with table A (items 1-3 first: the new pages).
