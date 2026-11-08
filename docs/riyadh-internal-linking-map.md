# Riyadh internal linking map

Links are rendered from each page's `related` array (cards titled by the target's `nav`) plus parent/child cards. The build fails on any broken target or orphan.

| Source (path) | Target | Anchor (EN card label) | Purpose |
|---|---|---|---|
| city-transport/riyadh | airport-transfers/riyadh-airport | Riyadh airport transfer | airport intent |
| city-transport/riyadh | chauffeur-services/hourly-driver, full-day-driver, business-chauffeur | hourly / full-day / business | time and B2B intent |
| city-transport/riyadh | event-transportation/riyadh | Riyadh events | events |
| city-transport/riyadh | luxury-transportation/luxury-chauffeur | luxury chauffeur | VIP |
| city-transport/riyadh | tourism-transport/riyadh-sightseeing | Riyadh sightseeing | tourism |
| city-transport/riyadh | intercity-transfers/riyadh-to-{dammam,jeddah,makkah,madinah,al-ahsa} | Riyadh to X | route cluster |
| riyadh-airport | city-transport/riyadh | Riyadh City Transport | back to hub |
| event-transportation/riyadh | tourism-transport/riyadh-sightseeing | Riyadh sightseeing | cross-sell |
| riyadh-to-dammam | riyadh-to-al-ahsa, city-transport/riyadh | | sibling + hub |
| riyadh-to-jeddah | riyadh-to-makkah, riyadh-to-madinah, city-transport/riyadh | | sibling + hub |
| riyadh-to-makkah / madinah | each other, jeddah, umrah-transport pages, hub | | Umrah path |
| riyadh-to-al-ahsa | riyadh-to-dammam, private-intercity-chauffeur, day-trip-transport, hub | | |
| riyadh-sightseeing | hub, hourly-driver, private-sightseeing-driver, day-trip-transport | | |

Gaps: destination city pages (`city-transport/dammam`, `makkah`, `madinah`) do not yet link back to the Riyadh route pages; add when those pages are next edited. Reverse-direction links are not needed (one bidirectional page per route).
