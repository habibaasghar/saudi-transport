# Recovery lead generation audit: ridesaudi.com (24 November 2026)

## Where the project really is
| Item | Verified |
|---|---|
| Repository | github.com/habibaasghar/saudi-transport (git remote `vercel-repo`) |
| Production branch | `main`, live commit f1ae203, built by Vercel |
| My branch | `claude/recovery-lowbed-seo`, with f1ae203 merged in **locally**. Not pushed, not deployed |
| My earlier work | It was on ridesaudi.com, not TaxiSaudiArabia. TSA was not touched; one owner-held satha photo came from its folder |
| Live site check | The hub, satha and lowbed pages return 200; `hydraulic-satha` and `truck-recovery` return 404 live because nothing has been deployed |

The TSA points in the brief (24/7 claim, Khobar/Qatif/Abqaiq pages, jump-start, SAR ranges) are not on ridesaudi.com. RideSaudi publishes no 24/7, fleet, jump-start or price claim.

## Existing URLs
18 live service pages per language (36 URLs), all under `/en|ar/services/recovery-heavy-transport/`: hub; satha-car-recovery + riyadh, jeddah, dammam; car-transport-between-cities; lowbed-transport; flatbed-trailer-transport; heavy-equipment-transport + riyadh, jeddah, dammam; excavator-, wheel-loader-, forklift-, crane-, oversized-load-transport; industrial-machinery-relocation. Plus 10 guides and one guide hub. Two pages (4 URLs) are ready but not live: hydraulic-satha, truck-recovery.

## Why customers are not contacting us
1. **Almost nobody can find the pages.** GSC 28-day export: 25 queries listed, none about satha, towing, lowbed or machinery, and no recovery page among the pages with impressions. The site is under a month old in GSC; on 18 Nov, 220 URLs were "Discovered – not indexed". Copy cannot fix this. Indexing, links and time can.
2. **No phone to call.** Saudi suggestions include رقم سطحة, رقم سطحة الرياض, رقم سطحة الدمام, رقم لوبد, "satha contact number". 18 of the 18 competitor pages that loaded show a call link or WhatsApp; 17 show a call link. RideSaudi is WhatsApp-only, and the number was not visible in the hero.
3. **The form was too long for a roadside.** Up to 17 fields, below a long page, and no form above the fold on these pages.
4. **Leads were mislabelled and some lost** (bugs, below).
5. **Nothing is measured.** No GA4 ID was found in the live page or its scripts, so no click or form event is recorded.
6. **No proof.** No real job photos, reviews, company registration or address.

## Bugs found and fixed
| Bug (live today) | Effect | Fix on branch |
|---|---|---|
| Every heavy lead email says "Incomplete… Ask for passengers, luggage, pickup time" | A ready lowbed lead looks like a bad one | Own check: weight/model, condition, dimensions, destination |
| Duplicate check ignores the machine and the service | A second machine, same site, same date, within 10 minutes was dropped silently | Service and load are part of the check |
| Customer waits for the email server | The live test took 8.1 s | Once stored, the alert is sent after the reply. Speed gain not measured live |
| Floating, sticky, header and footer WhatsApp sent "private transfer quotation" on recovery pages | Wrong conversation from the first message | Page's own message everywhere |
| Success text did not say a truck is not on its way | Risk of false expectation | "This is a quotation request, not a dispatched truck" |

## Backend test (real)
Submitted once to the live API on 24 Nov with test data: HTTP 200, reference **RS-2611-0005**, stored. The alert email goes to the business mailbox, which I cannot open: **owner must confirm it arrived**. Delete that test row. An earlier live test (RS-2611-0004, passenger form) was confirmed by the owner.

## Five biggest revenue opportunities
1. Lowbed and machinery in Riyadh, Jeddah, Dammam/Jubail: B2B, repeat, planned, so WhatsApp-only hurts less. Competitor pages are thin (about 400–1,300 words).
2. Intercity car transport: "car transport Riyadh to Jeddah (price)", شحن سيارات. Planned, so no call is needed. The old page did not use شحن or car shipping.
3. Hydraulic / full-down satha: سطحة هيدروليك + city.
4. Company and fleet requests: nothing on the old form asked for them.
5. Satha Riyadh, Jeddah, Dammam: biggest demand by suggestions, but needs a call number and real dispatch to win.

## Five biggest conversion problems
1. Not indexed or ranking. 2. No call number. 3. Long form below the fold. 4. No measurement. 5. No proof.

## Pages that need attention first
satha-car-recovery (+3 cities), lowbed-transport, heavy-equipment riyadh/jeddah/dammam, car-transport-between-cities, hydraulic-satha, truck-recovery (the last only after partner confirmation).
