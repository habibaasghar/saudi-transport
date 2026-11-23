/**
 * Company and trust details for the trust block (components/TrustDetails.tsx).
 *
 * OWNER TO FILL IN. Nothing here is published until it has a real value (SEO-RULES.md section 3). Each `null`
 * row is left out of the production page; in `next dev` it shows as a visible placeholder so it is easy to review.
 * Strings are { en, ar } so both languages ship together.
 */
type L = { en: string; ar: string };

export const COMPANY: {
  /** Registered legal name as on the Commercial Registration. */
  legalName: L | null;
  /** Commercial Registration (CR / السجل التجاري) number. */
  cr: string | null;
  /** VAT registration number (15 digits). */
  vat: string | null;
  /** Registered address. */
  address: L | null;
  /** Email on the ridesaudi.com domain (e.g. bookings@ridesaudi.com). Replace CONTACT.email in config/contact.ts too. */
  domainEmail: string | null;
  /**
   * How transport partners are checked before they receive bookings. Write only steps that really happen.
   * Suggested wording to confirm or edit (do not publish until true):
   *  - en: "Partners are checked before their first booking: commercial registration, vehicle registration (istimara),
   *         valid insurance and driver licence. Vehicles are matched to the booking by size and condition."
   *  - ar: "نتحقق من الشركاء قبل أول حجز: السجل التجاري، استمارة المركبة، التأمين الساري، ورخصة السائق،
   *         ونختار المركبة المناسبة لعدد الركاب والأمتعة."
   */
  vetting: L[] | null;
  /**
   * Review widget: a link to the public review profile (Google Business Profile, Trustpilot...). Only real,
   * third-party reviews. No rating numbers are written into the page or schema by hand.
   */
  reviewsUrl: string | null;
  reviewsLabel: L | null;
} = {
  legalName: null,
  cr: null,
  vat: null,
  address: null,
  domainEmail: null,
  vetting: null,
  reviewsUrl: null,
  reviewsLabel: null,
};
