/**
 * Conversion tracking. Page views are not leads: only these events count as lead actions.
 *  - quote_form_start   : first interaction with the quote form
 *  - quote_form_submit  : a valid form was submitted (attempt)
 *  - quote_form_success : the backend accepted the enquiry (same moment as generate_lead)
 *  - quote_cta_click    : tap on the mobile sticky-bar "Get a quote" button
 *  - generate_lead  : an enquiry was accepted by the backend (the only "qualified lead" event)
 *  - whatsapp_click : click on any wa.me link          (contact intent)
 *  - phone_click    : click on any tel: link           (contact intent)
 *  - email_click    : click on any mailto: link        (contact intent)
 *  - form_error : funnel diagnostics (field name only)
 * Parameters never contain names, phone numbers, emails, addresses or free text.
 * Nothing is sent unless NEXT_PUBLIC_GA_ID is configured (see components/Analytics.tsx).
 */
type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", event, { page_path: window.location.pathname, ...params });
  } catch {
    /* analytics must never break the page */
  }
}
