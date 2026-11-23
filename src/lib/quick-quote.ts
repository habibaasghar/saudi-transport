import { formServiceKeys } from "./site";
import { emptyEnquiry, sanitizeAttribution, type EnquiryInput } from "./enquiry";

/**
 * Three-field quick quote (route, date, WhatsApp number) shown above the fold.
 * It creates a normal enquiry row so the team can follow up on WhatsApp; the full form below stays available.
 */
export type QuickInput = {
  route: string;
  date: string;
  phone: string;
  service: string;
  locale: string;
  source: string;
  attribution: Record<string, string>;
  /** honeypot — must be empty */
  website: string;
  startedAt: number;
};

export type QuickErrorCode = "required" | "phone" | "date";
export type QuickErrors = Partial<Record<"route" | "date" | "phone", QuickErrorCode>>;

const PHONE_RE = /^\+?[0-9\s\-()]{7,20}$/;

export function validateQuick(q: Pick<QuickInput, "route" | "date" | "phone">, today = new Date()): QuickErrors {
  const e: QuickErrors = {};
  if (!q.route.trim()) e.route = "required";
  if (!q.phone.trim()) e.phone = "required";
  else if (!PHONE_RE.test(q.phone.trim())) e.phone = "phone";
  if (!q.date) e.date = "required";
  else {
    const picked = new Date(`${q.date}T00:00:00`);
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    if (Number.isNaN(picked.getTime()) || picked < start) e.date = "date";
  }
  return e;
}

/** Server-side: coerce unknown JSON into a trimmed QuickInput, or null when it is not a quick-quote payload. */
export function sanitizeQuick(raw: unknown): QuickInput | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  if (r.quick !== true) return null;
  const s = (k: string, max = 160) => (typeof r[k] === "string" ? (r[k] as string).trim().slice(0, max) : "");
  const service = s("service", 20);
  return {
    route: s("route"),
    date: s("date", 10),
    phone: s("phone", 20),
    service: (formServiceKeys as readonly string[]).includes(service) ? service : "intercity",
    locale: s("locale", 2),
    source: s("source", 200),
    attribution: sanitizeAttribution(r.attribution),
    website: s("website"),
    startedAt: typeof r.startedAt === "number" ? r.startedAt : 0,
  };
}

/** Marker the CRM shows in place of fields the quick form does not ask for. */
export const QUICK_TBC = "TBC";

/**
 * Maps a quick quote onto the full enquiry shape. The route goes into pickup (free text, e.g. "Jeddah Airport to Makkah"),
 * and the notes say it came from the quick form so the team asks for time, passengers and luggage on WhatsApp.
 * Submitting the quick form is the consent: the form shows the privacy notice next to its button.
 */
export function quickToEnquiry(q: QuickInput): EnquiryInput {
  return {
    ...emptyEnquiry(),
    service: q.service,
    pickup: q.route,
    dropoff: QUICK_TBC,
    date: q.date,
    time: QUICK_TBC,
    name: "Quick quote (WhatsApp)",
    phone: q.phone,
    notes: "Sent from the 3-field quick quote form. Ask on WhatsApp for pickup time, passengers, luggage and vehicle.",
    consent: true,
    locale: q.locale,
    source: q.source,
    attribution: q.attribution,
    website: q.website,
    startedAt: q.startedAt,
  };
}
