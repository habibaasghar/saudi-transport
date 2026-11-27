import { formServiceKeys } from "./site";

export type EnquiryInput = {
  service: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: string;
  luggage: string;
  /** small bags / hand luggage ("" = not given) */
  smallBags: string;
  /** number of child seats needed ("0" if none) */
  childSeats: string;
  /** "one_way" or "round_trip" */
  tripType: string;
  returnDate: string;
  returnTime: string;
  vehicle: string;
  flight: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
  consent: boolean;
  locale: string;
  /** page the enquiry was sent from */
  source: string;
  /** hourly / chauffeur / event: how long the vehicle is needed (one of DURATIONS) */
  hours: string;
  /** corporate: company name */
  company: string;
  /** event / corporate: number of vehicles needed */
  vehicles: string;
  /** first-touch campaign data (utm_*, ad click IDs, landing page, referring host); never sent to analytics */
  attribution: Record<string, string>;
  /** honeypot — must be empty */
  website: string;
  /** ms epoch when the form was rendered */
  startedAt: number;
};

/** Which optional extra fields each service shows. Kept small on purpose: every extra field costs leads. */
export const DURATIONS = ["2", "4", "6", "8", "10", "12", "full_day", "multi_day"] as const;
const DURATION_SERVICES = ["hourly", "chauffeur", "event"];
const COMPANY_SERVICES = ["corporate"];
const VEHICLES_SERVICES = ["event", "corporate"];
export const usesDuration = (service: string) => DURATION_SERVICES.includes(service);
export const usesCompany = (service: string) => COMPANY_SERVICES.includes(service);
export const usesVehicleCount = (service: string) => VEHICLES_SERVICES.includes(service);

/** Attribution keys accepted from the browser; anything else is dropped. */
export const ATTRIBUTION_KEYS = [
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "gclid", "gbraid", "wbraid", "msclkid", "fbclid", "landing", "referrer",
] as const;

export type FieldErrorCode = "required" | "returnDate" | "service" | "phone" | "email" | "date" | "number" | "consent";
export type FieldErrors = Partial<Record<keyof EnquiryInput, FieldErrorCode>>;

const MAX = { short: 160, notes: 1500 };
const PHONE_RE = /^\+?[0-9\s\-()]{7,20}$/;
/** A real number has 8-15 digits (E.164 max 15), however it is spaced. "+966 5..." and a local "05..." both pass. */
export const validPhone = (p: string) => PHONE_RE.test(p.trim()) && (() => { const n = p.replace(/\D/g, "").length; return n >= 8 && n <= 15; })();
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const emptyEnquiry = (): EnquiryInput => ({
  service: "", pickup: "", dropoff: "", date: "", time: "", passengers: "", luggage: "", smallBags: "", childSeats: "0", tripType: "one_way", returnDate: "", returnTime: "",
  vehicle: "", flight: "", name: "", phone: "", email: "", notes: "", consent: false,
  locale: "en", source: "", hours: "", company: "", vehicles: "", attribution: {}, website: "", startedAt: 0,
});

/** Shared by client (UX) and server (authority). */
export function validateEnquiry(d: EnquiryInput, today = new Date()): FieldErrors {
  const e: FieldErrors = {};
  if (!(formServiceKeys as readonly string[]).includes(d.service)) e.service = "service";
  if (!d.pickup.trim()) e.pickup = "required";
  if (!d.dropoff.trim()) e.dropoff = "required";
  if (!d.name.trim()) e.name = "required";
  if (!d.phone.trim()) e.phone = "required";
  else if (!validPhone(d.phone)) e.phone = "phone";
  // Email is required on the full booking form: the quotation PDF is emailed to it. The three-field quick form
  // (src/lib/quick-quote.ts) stays WhatsApp-only and is validated on its own.
  if (!d.email.trim()) e.email = "required";
  else if (!EMAIL_RE.test(d.email.trim())) e.email = "email";
  if (!d.date) e.date = "required";
  else {
    const picked = new Date(`${d.date}T00:00:00`);
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    if (Number.isNaN(picked.getTime()) || picked < start) e.date = "date";
  }
  if (!d.time) e.time = "required";
  if (d.tripType === "round_trip") {
    if (!d.returnDate) e.returnDate = "required";
    else if (d.date && d.returnDate < d.date) e.returnDate = "returnDate";
    if (!d.returnTime) e.returnTime = "required";
  }
  const p = Number(d.passengers);
  if (!Number.isInteger(p) || p < 1 || p > 100) e.passengers = "number";
  // Luggage may be left blank ("not sure yet"); it is then asked for on WhatsApp.
  const l = Number(d.luggage || "0");
  if (!Number.isInteger(l) || l < 0 || l > 100) e.luggage = "number";
  const sb = Number(d.smallBags || "0");
  if (!Number.isInteger(sb) || sb < 0 || sb > 100) e.smallBags = "number";
  const cs = Number(d.childSeats || "0");
  if (!Number.isInteger(cs) || cs < 0 || cs > 10) e.childSeats = "number";
  if (d.service === "hourly" && !d.hours) e.hours = "required";
  if (d.vehicles) {
    const v = Number(d.vehicles);
    if (!Number.isInteger(v) || v < 1 || v > 50) e.vehicles = "number";
  }
  if (!d.consent) e.consent = "consent";
  return e;
}

/** Server-side: coerce unknown JSON into a trimmed, length-capped EnquiryInput. */
export function sanitizeEnquiry(raw: unknown): EnquiryInput | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const s = (k: string, max = MAX.short) => (typeof r[k] === "string" ? (r[k] as string).trim().slice(0, max) : "");
  const service = s("service");
  return {
    service, pickup: s("pickup"), dropoff: s("dropoff"), date: s("date", 10), time: s("time", 5),
    passengers: s("passengers", 3), luggage: s("luggage", 3), smallBags: s("smallBags", 3), childSeats: s("childSeats", 2) || "0",
    tripType: s("tripType", 10) === "round_trip" ? "round_trip" : "one_way", returnDate: s("returnDate", 10), returnTime: s("returnTime", 5), vehicle: s("vehicle"), flight: s("flight", 12).toUpperCase(),
    name: s("name"), phone: s("phone", 20), email: s("email"), notes: s("notes", MAX.notes),
    consent: r.consent === true, locale: s("locale", 2), source: s("source", 200),
    // Extra fields only survive for the services that show them, so stale values never reach the CRM.
    hours: usesDuration(service) && (DURATIONS as readonly string[]).includes(s("hours", 10)) ? s("hours", 10) : "",
    company: usesCompany(service) ? s("company") : "",
    vehicles: usesVehicleCount(service) ? s("vehicles", 2) : "",
    attribution: sanitizeAttribution(r.attribution),
    website: s("website"),
    startedAt: typeof r.startedAt === "number" ? r.startedAt : 0,
  };
}

export function sanitizeAttribution(raw: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  if (!raw || typeof raw !== "object") return out;
  const r = raw as Record<string, unknown>;
  for (const k of ATTRIBUTION_KEYS) {
    const v = r[k];
    // Strip control characters; cap length so a crafted link cannot bloat the row.
    if (typeof v === "string" && v.trim()) out[k] = v.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 200);
  }
  return out;
}

/** One readable block for the CRM row and the alert email. Empty string when nothing applies. */
export function extrasSummary(d: Pick<EnquiryInput, "hours" | "company" | "vehicles">): string {
  const dur = d.hours === "full_day" ? "Full day" : d.hours === "multi_day" ? "Several days" : d.hours ? `${d.hours} hours` : "";
  return [
    d.company ? `Company: ${d.company}` : "",
    dur ? `Duration: ${dur}` : "",
    d.vehicles ? `Vehicles needed: ${d.vehicles}` : "",
  ].filter(Boolean).join("\n");
}
