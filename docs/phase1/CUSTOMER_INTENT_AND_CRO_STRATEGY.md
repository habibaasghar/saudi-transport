# Customer Intent and Conversion Strategy (Phase 1)

Research date: 2026-11-15. Each point is labelled **Evidence** (observed in a source) or **Recommendation** (strategy; not customer research). No testimonials, survey results or conversion rates exist for RideSaudi, and none are invented here. GA4 is not live, so there is no behavioural data from the site.

## 1. Why people choose a private car (evidence)

| Driver | Evidence |
|---|---|
| Door-to-door, hotel to hotel | HalalBooking's Makkah transport guide recommends private transfers because pickup and drop-off are at the hotel with no station transfer. Taxi Service KSA builds its Makkah to Madinah page around "hotel to hotel". |
| Luggage | The same guide notes train luggage limits; autocomplete shows vehicle-size searches ("staria makkah to madinah", "makkah to madinah gmc"). |
| Families, children, elderly travellers | Named as the main audience by HalalBooking and by Taxi Service KSA (sections for elderly relatives and children). |
| Own schedule | Blacklane and Daytrip both lead with schedule control; night travel and early departures appear in competitor FAQs. |
| Train and flight comparison | "riyadh to dammam train", "makkah to madinah train" are top suggestions. Competitors answer "car or train" directly. |
| Group size | Tourism statistics: 29.3 million inbound tourists in 2025 (Ministry of Tourism figure reported by Arab News / Argaam); GASTAT reported 11.29 million Umrah performers in Q4 2025 alone. Pilgrims commonly travel in family groups. |

## 2. Objections and questions before booking (evidence)

| Question | Where it shows up |
|---|---|
| What does it cost, and is it per car or per person? | "taxi price", "fare", "سعر" on nearly every route; first FAQ on every competitor route page |
| What is included (fuel, tolls, waiting)? | Competitor FAQs; OneClickDrive and Hire My Chauffeur list inclusions |
| How long does it take, how far is it? | "by car how many hours", "distance by road", "كم ساعة" |
| Is it really private? | "riyadh to dammam share taxi" exists as a query; Taxi Service KSA states "private transfers only" |
| Which car fits my group and bags? | GMC and Staria route searches; competitor seat and bag tables |
| Can the car reach my hotel near the Haram? | Taxi Service KSA FAQ; HalalBooking notes ride-hailing cars often cannot stop at the gates |
| Is the fare fixed, or will it change? | HalalBooking: intercity taxi pricing is unregulated and varies by season; advises pre-booking |
| Who is the driver, and when do I get the details? | Marketplace listings state driver contact is sent the day before |
| What happens at the border? | Hire My Chauffeur FAQ ("What does the border need from me?"); OneClickDrive FAQs on documents |
| Can I cancel? | Every competitor states a window (1 hour to 24 hours) |
| How do I pay? | Arabian Elite and Hire My Chauffeur list payment methods |

RideSaudi can already answer two of these from confirmed facts: cancellation at least 24 hours before pickup, and payment by link, STC Pay or cash. Everything else (inclusions, waiting time, flight tracking, reply time, 24/7) is unconfirmed and must stay off the site until the owner confirms it.

## 3. Current conversion path (from the Phase 0 audit)

- Above the fold: "Get a Quote" (anchor), "WhatsApp Us", "Call Now", and the note "Pre-booked only. An enquiry is not a confirmed reservation."
- The form is at the very bottom of each route page, after the FAQ.
- Nowhere does a page say the vehicle is exclusively for the customer's party.
- No price, no vehicle capacity, no cancellation or payment information on route pages.
- No reviews, licence, address or company identity.
- Tracking events exist in code but GA4 is not switched on.

## 4. Messaging strategy by segment (recommendations)

Every claim below must be limited to facts the owner has confirmed.

| Segment | What they need to hear first | Proof the page should carry | Primary CTA |
|---|---|---|---|
| VIP and executive | Privacy; a vehicle and driver confirmed in advance; discretion | Named vehicle class, exclusivity statement, direct contact | Request a private transfer quote |
| Families | One vehicle for your family only; room for bags; child seats on request (only if the owner confirms) | Vehicle guidance by group size; hotel-to-hotel wording | WhatsApp our team (families prefer chat) |
| Corporate coordinators | Repeat bookings, one contact, invoices, punctuality | Business page link; return and multi-day options in the form | Request corporate quote |
| International visitors | English-speaking coordination, airport meeting, clear confirmation before payment | How it works in 3 steps; payment methods; cancellation window | Request a quote |
| Umrah travellers | Hotel to hotel, Miqat stop on Makkah-bound trips, rest stops, respectful tone, no religious claims | Miqat information, luggage and Zamzam room, elderly comfort | WhatsApp our team |
| Long-distance intercity | Realistic drive time, rest stops, overnight option on very long routes, door to door | Distance, time and road facts; "car, train or flight" comparison | Request a quote |

## 5. The exclusivity statement (recommendation)

One short block, on every route page directly under the answer, in both languages:

> Your vehicle is reserved for your party only. RideSaudi does not sell shared seats or combine separate customers in one car.

It should also appear in the form heading, in the WhatsApp pre-filled message ("private vehicle for my party only") and in `llms.txt`. This is the single largest gap between the brief's positioning and the live site, and it filters out shared-ride and cheapest-fare enquiries before they are sent.

## 6. Page-level conversion recommendations

| # | Recommendation | Effort | Depends on |
|---|---|---|---|
| 1 | Add the exclusivity block and repeat it at the form | Low | Nothing |
| 2 | Add a route facts box (distance, time, road, typical pickup areas) under the answer | Medium | Phase 3 research sign-off |
| 3 | Rename CTAs to "Request a Private Transfer Quote" and "WhatsApp Our Team" (Arabic equivalents) | Low | Nothing |
| 4 | Put a compact quote starter (pickup, drop-off, date, passengers) near the top that opens the full form pre-filled | Medium | Design approval |
| 5 | Split luggage into large and small bags | Medium | API, database and email mapping must change together; needs a test database |
| 6 | Show confirmed terms beside the form: 24-hour cancellation, payment link / STC Pay / cash | Low | Already confirmed by the owner |
| 7 | Vehicle guidance by group size with links to fleet pages | Medium | Fleet verification |
| 8 | Decide the price policy: quote-only with explanation, "from" price, or range | Owner decision | Owner |
| 9 | Switch on GA4 and mark `generate_lead` as a key event; add route slug as an event parameter | Low | GA4 ID |
| 10 | Real trust signals: company identity, licence, address, genuine reviews when they exist | Owner input | Owner |

## 7. Lead quality controls (recommendations)

- Keep "taxi" out of titles and H1s; keep "cheap", "cheapest" and "budget" off the site entirely.
- Do not target "سائق خاص" or driver-hire phrases (job and household-driver intent).
- Make "Preferred vehicle" visible early in the form; it signals a vehicle-led service.
- State the minimum service plainly (pre-booked intercity and airport journeys), so short in-city hops self-select out.
- In GA4, record route, vehicle preference and trip type with each lead, so quality can be compared by page once the owner marks which enquiries became bookings.

## 8. What cannot be known yet

Which routes actually convert, the share of enquiries that are low value, average booking value by route, and the effect of showing prices. All four need GA4 plus the owner's booking records.
