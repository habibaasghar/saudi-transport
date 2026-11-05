/** Privacy-conscious event helper. No-op unless GA4 loaded after consent. NEVER pass personal data. */
type GtagFn = (...args: unknown[]) => void;

export type TrackEvent = "quote_cta_click" | "quote_form_start" | "quote_submit_success" | "whatsapp_click" | "language_select";

export function track(event: TrackEvent, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  gtag?.("event", event, params);
}
