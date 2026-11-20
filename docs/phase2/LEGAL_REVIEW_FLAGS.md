# Legal and business-owner review before publishing (2026-11-19)

The Privacy Policy, Terms and Conditions and Contact pages are written (`src/content/legal.ts`, EN + AR) but have **not been reviewed by a lawyer or the owner**. Nothing was invented: no company name, licence, address, jurisdiction, refund percentage, retention period or reply time appears on the pages. Do not deploy until the items below are decided.

## Confirmed facts used (owner, 2026-11-12 and site config)
- Free cancellation at least 24 hours before pickup.
- Payment by payment link, STC Pay or cash.
- Phone/WhatsApp +966 54 354 4560 and inforidesaudi@gmail.com (`src/config/contact.ts`).
- Vehicles come with a driver supplied by transport partners; journeys are private, never shared (already stated on the live fleet page and `llms.txt`).
- Staria: up to 7 passengers, 10+ bags (owner-confirmed 2026-11-18).

## Needs a decision (placeholders deliberately omitted)
| # | Item | Where | What to supply |
|---|---|---|---|
| 1 | Legal entity name, CR/licence number, registered address | Privacy "Who we are", Terms intro | Add only if you want it public. Saudi e-commerce rules may require it; ask a lawyer. |
| 2 | Governing law and dispute forum | Terms (omitted) | Lawyer to supply the clause. |
| 3 | Charges or refunds for cancellation inside 24 hours and no-shows | Terms "Changes and cancellations" | Pages say "set out in your quotation or confirmation". Give a fixed rule if you have one. |
| 4 | When payment is due (deposit, on confirmation, on the day) | Terms "Payment" | Currently "stated in your quotation and confirmation". |
| 5 | Quotation validity period | Terms "Quotations" | Currently "the period stated in it". |
| 6 | Airport waiting time, tolls, flight tracking | Terms "Pickup and drop-off" | Not claimed anywhere. |
| 7 | Data retention period | Privacy | Currently "as long as needed". A lawyer should state a period. |
| 8 | Saudi Personal Data Protection Law (PDPL) wording: rights, a named data-protection contact, cross-border transfer basis (hosting and email providers are outside KSA), SDAIA registration if applicable | Privacy | Pages say "subject to applicable law" and name no statute. |
| 9 | Limitation of liability for delays | Terms "Delays" | Soft wording "to the extent the law allows". Lawyer to confirm it is enforceable. |
| 10 | Whether Google Analytics (or any analytics) is live | Privacy "Analytics" | Text says "if analytics is switched on". `NEXT_PUBLIC_GA_ID` is currently unset in `.env.example`. If cookies are set, a cookie notice may be needed. |
| 11 | Partner arrangement wording ("supplied by the transport partners RideSaudi books with") | Terms, Fleet | Confirm it is accurate for every vehicle. Already on the live fleet page. |
| 12 | Anti-fraud line telling customers to pay only via RideSaudi's official WhatsApp/email | Terms "Payment" | Confirm you agree. |
| 13 | Arabic legal wording | All three pages | Native Arabic legal reviewer. |

## Not done
- No cookie banner (none needed unless analytics cookies are enabled; see item 10).
- No "About" page: the homepage About section and the Contact page cover it. A standalone About page would repeat the homepage; only add one when there is real company information (team, years, licence).
