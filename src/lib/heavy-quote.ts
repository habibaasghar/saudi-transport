/**
 * Heavy transport / satha quotation: shared by the client form (UX) and the API (authority).
 * Kept separate from the passenger enquiry (src/lib/enquiry.ts) so private-transfer bookings are untouched.
 * Cargo details are stored as readable lines in `special_requirements`, so no database migration is needed.
 */

export const HEAVY_SERVICES = [
  "satha", "hydraulic_satha", "towing", "truck_recovery", "car_transport", "lowbed", "heavy_machinery", "excavator",
  "wheel_loader", "forklift", "crane", "flatbed", "oversized", "machinery_relocation", "other_heavy",
] as const;
export type HeavyService = (typeof HEAVY_SERVICES)[number];

/** Services where the load is a car: no machine weight or dimensions are asked. */
const VEHICLE_SERVICES: readonly string[] = ["satha", "hydraulic_satha", "towing", "car_transport"];
export const isVehicleService = (s: string) => VEHICLE_SERVICES.includes(s);

/** A broken-down truck or bus needs its condition like a car, and its weight like a machine. */
export const isTruckRecovery = (s: string) => s === "truck_recovery";
export const asksCondition = (s: string) => isVehicleService(s) || isTruckRecovery(s);

/** CTA wording and WhatsApp template per kind of job (messages: heavy.ctas, heavy.form.submits, heavy.wa). */
export type HeavyGroup = "recovery" | "truck" | "lowbed" | "equipment" | "general";
export function heavyGroup(s?: string): HeavyGroup {
  if (!s || s === "other_heavy") return "general";
  if (isTruckRecovery(s)) return "truck";
  if (isVehicleService(s)) return "recovery";
  return s === "lowbed" ? "lowbed" : "equipment";
}

/** When a recovery is needed. "now" and "today" need no date from the customer. */
export const TIMINGS = ["now", "today", "date"] as const;
export const FREQUENCIES = ["once", "recurring", "project"] as const;

/** Today in Saudi Arabia (UTC+3, no daylight saving). */
export const ksaToday = (now = Date.now()) => new Date(now + 3 * 3600_000).toISOString().slice(0, 10);

export const CONDITIONS = ["runs", "not_running", "accident"] as const;
export const LOAD_METHODS = ["drive_on", "crane", "forklift", "winch", "not_sure"] as const;

export type HeavyQuoteInput = {
  service: string;
  /** machine or vehicle type, e.g. "Excavator" or "Sedan" */
  loadType: string;
  makeModel: string;
  condition: string;
  pickup: string;
  dropoff: string;
  date: string;
  /** tonnes, as typed */
  weight: string;
  length: string;
  width: string;
  height: string;
  loading: string;
  unloading: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  timing: string;
  /** Company or recurring request: adds company, quantity and frequency. */
  business: boolean;
  quantity: string;
  frequency: string;
  notes: string;
  consent: boolean;
  locale: string;
  source: string;
  attribution: Record<string, string>;
  website: string;
  startedAt: number;
};

export type HeavyErrorCode = "required" | "service" | "phone" | "email" | "date" | "number" | "weightOrModel" | "consent";
export type HeavyErrors = Partial<Record<keyof HeavyQuoteInput, HeavyErrorCode>>;

const PHONE_RE = /^\+?[0-9\s\-()]{7,20}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NUM_RE = /^\d{1,4}([.,]\d{1,2})?$/;

export const emptyHeavy = (): HeavyQuoteInput => ({
  service: "", loadType: "", makeModel: "", condition: "", pickup: "", dropoff: "", date: "",
  weight: "", length: "", width: "", height: "", loading: "", unloading: "",
  name: "", company: "", phone: "", email: "", timing: "", business: false, quantity: "", frequency: "", notes: "", consent: false,
  locale: "en", source: "", attribution: {}, website: "", startedAt: 0,
});

export function validateHeavy(d: HeavyQuoteInput, today = new Date()): HeavyErrors {
  const e: HeavyErrors = {};
  if (!(HEAVY_SERVICES as readonly string[]).includes(d.service)) e.service = "service";
  if (!d.loadType.trim()) e.loadType = "required";
  if (!d.pickup.trim()) e.pickup = "required";
  if (!d.dropoff.trim()) e.dropoff = "required";
  if (!d.name.trim()) e.name = "required";
  if (!d.phone.trim()) e.phone = "required";
  else if (!PHONE_RE.test(d.phone.trim())) e.phone = "phone";
  if (d.email.trim() && !EMAIL_RE.test(d.email.trim())) e.email = "email";
  const asksTiming = isVehicleService(d.service) || isTruckRecovery(d.service);
  if (asksTiming && !(TIMINGS as readonly string[]).includes(d.timing)) e.timing = "required";
  if (d.business && !d.company.trim()) e.company = "required";
  if (asksTiming && d.timing !== "date") {
    // "now" and "today" are dated by the server.
  } else if (!d.date) e.date = "required";
  else {
    const picked = new Date(`${d.date}T00:00:00`);
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    if (Number.isNaN(picked.getTime()) || picked < start) e.date = "date";
  }
  if (asksCondition(d.service) && !d.condition) e.condition = "required";
  if (d.service && !isVehicleService(d.service)) {
    // A machinery quote needs the weight class: either the weight itself or the model it can be looked up from.
    if (!isTruckRecovery(d.service) && !d.weight.trim() && !d.makeModel.trim()) e.weight = "weightOrModel";
    for (const k of ["weight", "length", "width", "height"] as const) {
      if (d[k].trim() && !NUM_RE.test(d[k].trim())) e[k] = "number";
    }
  }
  if (!d.consent) e.consent = "consent";
  return e;
}

const pick = (v: string, list: readonly string[]) => (list.includes(v) ? v : "");

export function sanitizeHeavy(raw: unknown): HeavyQuoteInput | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const s = (k: string, max = 160) => (typeof r[k] === "string" ? (r[k] as string).trim().slice(0, max) : "");
  const service = s("service", 40);
  const vehicle = isVehicleService(service);
  const recovery = asksCondition(service);
  const business = r.business === true;
  // A page opened before the timing field existed sends only a date.
  const timing = recovery ? pick(s("timing", 10), TIMINGS) || (s("date", 10) && r.quick !== true ? "date" : "") : "";
  const att: Record<string, string> = {};
  if (r.attribution && typeof r.attribution === "object") {
    for (const [k, v] of Object.entries(r.attribution as Record<string, unknown>).slice(0, 12)) {
      if (typeof v === "string" && /^[a-z_]{2,20}$/.test(k)) att[k] = v.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 200);
    }
  }
  return {
    service, loadType: s("loadType", 80), makeModel: s("makeModel", 120),
    condition: asksCondition(service) ? pick(s("condition", 20), CONDITIONS) : "",
    pickup: s("pickup", 200), dropoff: s("dropoff", 200), date: timing === "now" || timing === "today" ? ksaToday() : s("date", 10),
    timing, business, quantity: business ? s("quantity", 40) : "", frequency: business ? pick(s("frequency", 12), FREQUENCIES) : "",
    // Machine fields never survive on a car request, so stale values never reach the CRM.
    weight: vehicle ? "" : s("weight", 8), length: vehicle ? "" : s("length", 8),
    width: vehicle ? "" : s("width", 8), height: vehicle ? "" : s("height", 8),
    loading: vehicle ? "" : pick(s("loading", 20), LOAD_METHODS),
    unloading: vehicle ? "" : pick(s("unloading", 20), LOAD_METHODS),
    name: s("name"), company: s("company"), phone: s("phone", 20), email: s("email"),
    notes: s("notes", 1500), consent: r.consent === true, locale: s("locale", 2) === "ar" ? "ar" : "en",
    source: s("source", 200), attribution: att, website: s("website"),
    startedAt: typeof r.startedAt === "number" ? r.startedAt : 0,
  };
}

const LABEL: Record<string, string> = {
  runs: "Runs / drivable", not_running: "Not running", accident: "Accident damaged",
  drive_on: "Drives on by itself (ramps)", crane: "Crane lift", forklift: "Forklift", winch: "Winch", not_sure: "Not sure",
};

/** Readable cargo block for the CRM row, the alert email and the WhatsApp follow-up. English on purpose (staff-facing). */
export function cargoSummary(d: HeavyQuoteInput): string {
  const dims = [d.length, d.width, d.height].some(Boolean)
    ? `${d.length || "?"} x ${d.width || "?"} x ${d.height || "?"} m (L x W x H)` : "";
  return [
    d.timing === "now" ? "URGENT: needed now" : d.timing === "today" ? "Needed today" : "",
    d.business ? `Business request${d.frequency ? ` (${d.frequency})` : ""}${d.quantity ? `, quantity: ${d.quantity}` : ""}` : "",
    `Heavy transport service: ${d.service}`,
    `Load: ${d.loadType}${d.makeModel ? ` (${d.makeModel})` : ""}`,
    d.company ? `Company: ${d.company}` : "",
    d.condition ? `Condition: ${LABEL[d.condition] ?? d.condition}` : "",
    d.weight ? `Approx. weight: ${d.weight} t` : "",
    dims ? `Dimensions: ${dims}` : "",
    d.loading ? `Loading: ${LABEL[d.loading]}` : "",
    d.unloading ? `Unloading: ${LABEL[d.unloading]}` : "",
  ].filter(Boolean).join("\n");
}

/** Three required fields (load, pickup, WhatsApp) plus an optional destination: the above-the-fold form. */
export type HeavyQuickErrors = Partial<Record<"loadType" | "pickup" | "dropoff" | "phone", "required" | "phone">>;
export function validateHeavyQuick(q: { loadType: string; pickup: string; phone: string }): HeavyQuickErrors {
  const e: HeavyQuickErrors = {};
  if (!q.loadType.trim()) e.loadType = "required";
  if (!q.pickup.trim()) e.pickup = "required";
  if (!q.phone.trim()) e.phone = "required";
  else if (!PHONE_RE.test(q.phone.trim())) e.phone = "phone";
  return e;
}

/** Marker for fields the quick form does not ask for (same as the passenger quick quote). */
export const HEAVY_TBC = "TBC";
export const isHeavyQuick = (raw: unknown) => !!raw && typeof raw === "object" && (raw as Record<string, unknown>).quick === true;

/** Fills a sanitised quick payload so it is stored like any other heavy enquiry. Submitting is the consent (shown at the button). */
export function quickToHeavy(d: HeavyQuoteInput): HeavyQuoteInput {
  return {
    ...d,
    service: (HEAVY_SERVICES as readonly string[]).includes(d.service) ? d.service : "other_heavy",
    dropoff: d.dropoff || HEAVY_TBC, date: ksaToday(), name: "Quick quote (WhatsApp)", consent: true,
    notes: "Sent from the short form: the date shown is the day it was sent. Ask on WhatsApp when it is needed.",
  };
}

/** What staff still have to ask before a price can be given. Never a claim that the lead is qualified. */
export function checkHeavy(d: HeavyQuoteInput): { complete: boolean; line: string } {
  const missing = [
    d.dropoff === HEAVY_TBC ? "destination" : "",
    d.name.startsWith("Quick quote") ? "name and when it is needed" : "",
    asksCondition(d.service) ? (d.condition ? "" : "vehicle condition") : !d.weight && !d.makeModel ? "weight or model" : "",
    !asksCondition(d.service) && !(d.length && d.width && d.height) ? "dimensions" : "",
  ].filter(Boolean);
  // Dimensions are asked for but a price can be started from the model or weight.
  const complete = missing.every((m) => m === "dimensions");
  return { complete, line: `${complete ? "complete details." : "incomplete."}${missing.length ? ` Ask for: ${missing.join(", ")}.` : ""}` };
}
