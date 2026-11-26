/**
 * Conversion tracking. Page views are not leads: only these events count as lead actions.
 *  - quote_form_start   : first interaction with the quote form
 *  - quote_form_submit  : a valid form was submitted (attempt)
 *  - quote_form_success : the backend accepted the enquiry (same moment as generate_lead)
 *  - quote_cta_click    : tap on the mobile sticky-bar "Get a quote" button
 *  - generate_lead  : an enquiry was accepted by the backend; at most once per browser session, so a quick quote followed
 *                     by the full form is one conversion, not two
 *  - inquiry_complete   : the accepted enquiry had every detail a quotation needs
 *  - inquiry_incomplete : accepted, but the team must ask for more on WhatsApp
 *    Neither means "qualified": that is decided by staff in the CRM. "Booking confirmed" is a CRM status, not a page event.
 *  - whatsapp_click : click on any wa.me link          (contact intent)
 *  - phone_click    : click on any tel: link           (contact intent)
 *  - email_click    : click on any mailto: link        (contact intent)
 *  - form_error : funnel diagnostics (field name only)
 *  - quote_submission_error : the backend refused or failed the enquiry (HTTP status only; the visitor sees the WhatsApp fallback)
 *  - quote_form_view : the quote form scrolled into view (once per page view)
 * Parameters never contain names, phone numbers, emails, addresses or free text.
 * Events go to the dataLayer of the Google Tag Manager container (components/GoogleTag.tsx), and straight to GA4
 * as well when NEXT_PUBLIC_GA_ID is configured (components/Analytics.tsx).
 */
type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Owner and QA test visits (?rs_test=1 in the URL) never send events, so a test submission is never a conversion. */
const isTestVisit = () => new URLSearchParams(window.location.search).get("rs_test") === "1";

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined" || isTestVisit()) return;
  try {
    window.gtag?.("event", event, { page_path: window.location.pathname, ...params });
  } catch {
    /* analytics must never break the page */
  }
}

const LEAD_FLAG = "rs_lead_counted";

/** Call only after the backend accepted an enquiry. */
export function trackLead(params: Params & { complete: boolean }) {
  if (typeof window === "undefined" || isTestVisit()) return;
  const { complete, ...rest } = params;
  track(complete ? "inquiry_complete" : "inquiry_incomplete", rest);
  let counted = false;
  try {
    counted = window.sessionStorage.getItem(LEAD_FLAG) === "1";
    window.sessionStorage.setItem(LEAD_FLAG, "1");
  } catch {
    /* storage blocked: count the lead rather than lose it */
  }
  if (!counted) track("generate_lead", { ...rest, complete });
}
