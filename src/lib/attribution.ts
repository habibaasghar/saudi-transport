/**
 * First-touch lead attribution (browser only).
 * On the first page of a visit we keep: campaign tags (utm_*), ad click IDs (gclid, gbraid, wbraid,
 * msclkid, fbclid), the landing page path, and the referring website's host name (never its full URL).
 * Stored in sessionStorage and sent with the enquiry so each lead shows where it came from.
 * Nothing here goes to analytics. Storage can be blocked: every access is wrapped and optional.
 */
import { ATTRIBUTION_KEYS } from "./enquiry";

const KEY = "rs_attr";
const PARAMS = ATTRIBUTION_KEYS.filter((k) => k !== "landing" && k !== "referrer");

function read(): Record<string, string> | null {
  try {
    const raw = window.sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : null;
  } catch {
    return null;
  }
}

/** Call once per page view. Keeps the first touch of the session, but a new campaign link replaces it. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  const fromUrl: Record<string, string> = {};
  for (const k of PARAMS) {
    const v = url.searchParams.get(k);
    if (v) fromUrl[k] = v.slice(0, 200);
  }
  const existing = read();
  if (existing && !Object.keys(fromUrl).length) return;

  let referrer = "";
  try {
    const r = document.referrer ? new URL(document.referrer) : null;
    if (r && r.host !== url.host) referrer = r.host;
  } catch {
    /* ignore malformed referrer */
  }
  const record: Record<string, string> = { ...fromUrl, landing: url.pathname.slice(0, 200) };
  if (referrer) record.referrer = referrer;
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(record));
  } catch {
    /* storage blocked: attribution is optional */
  }
}

export function readAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};
  return read() ?? {};
}
