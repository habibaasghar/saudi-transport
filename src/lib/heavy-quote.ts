/**
 * Heavy transport / satha quotation: shared by the client form (UX) and the API (authority).
 * Kept separate from the passenger enquiry (src/lib/enquiry.ts) so private-transfer bookings are untouched.
 * Cargo details are stored as readable lines in `special_requirements`, so no database migration is needed.
 */

export const HEAVY_SERVICES = [
  "satha", "towing", "car_transport", "lowbed", "heavy_machinery", "excavator",
  "wheel_loader", "forklift", "crane", "flatbed", "oversized", "machinery_relocation", "other_heavy",
] as const;
export type HeavyService = (typeof HEAVY_SERVICES)[number];

/** Services where the load is a car: no machine weight or dimensions are asked. */
const VEHICLE_SERVICES: readonly string[] = ["satha", "towing", "car_transport"];
export const isVehicleService = (s: string) => VEHICLE_SERVICES.includes(s);

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
  notes: string;
  consent: boolean;
  locale: string;
  source: string;
  attribution: Record<string, string>;
  website: string;
  startedAt: number;
};

export type HeavyErrorCode = "required" | "service" | "phone" | "email" | "date" | "number" | "consent";
export type HeavyErrors = Partial<Record<keyof HeavyQuoteInput, HeavyErrorCode>>;

const PHONE_RE = /^\+?[0-9\s\-()]{7,20}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NUM_RE = /^\d{1,4}([.,]\d{1,2})?$/;

export const emptyHeavy = (): HeavyQuoteInput => ({
  service: "", loadType: "", makeModel: "", condition: "", pickup: "", dropoff: "", date: "",
  weight: "", length: "", width: "", height: "", loading: "", unloading: "",
  name: "", company: "", phone: "", email: "", notes: "", consent: false,
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
  if (!d.date) e.date = "required";
  else {
    const picked = new Date(`${d.date}T00:00:00`);
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    if (Number.isNaN(picked.getTime()) || picked < start) e.date = "date";
  }
  if (isVehicleService(d.service)) {
    if (!d.condition) e.condition = "required";
  } else if (d.service) {
    // Weight is the one figure every machinery quote depends on; dimensions are strongly asked for but optional.
    if (!d.weight.trim()) e.weight = "required";
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
  const att: Record<string, string> = {};
  if (r.attribution && typeof r.attribution === "object") {
    for (const [k, v] of Object.entries(r.attribution as Record<string, unknown>).slice(0, 12)) {
      if (typeof v === "string" && /^[a-z_]{2,20}$/.test(k)) att[k] = v.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 200);
    }
  }
  return {
    service, loadType: s("loadType", 80), makeModel: s("makeModel", 120),
    condition: vehicle ? pick(s("condition", 20), CONDITIONS) : "",
    pickup: s("pickup", 200), dropoff: s("dropoff", 200), date: s("date", 10),
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
