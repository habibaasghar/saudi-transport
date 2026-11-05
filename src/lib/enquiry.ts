import { formServiceKeys } from "./site";

export type EnquiryInput = {
  service: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: string;
  luggage: string;
  vehicle: string;
  flight: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
  consent: boolean;
  locale: string;
  /** honeypot — must be empty */
  website: string;
  /** ms epoch when the form was rendered */
  startedAt: number;
};

export type FieldErrorCode = "required" | "service" | "phone" | "email" | "date" | "number" | "consent";
export type FieldErrors = Partial<Record<keyof EnquiryInput, FieldErrorCode>>;

const MAX = { short: 160, notes: 1500 };
const PHONE_RE = /^\+?[0-9\s\-()]{7,20}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const emptyEnquiry = (): EnquiryInput => ({
  service: "", pickup: "", dropoff: "", date: "", time: "", passengers: "1", luggage: "0",
  vehicle: "", flight: "", name: "", phone: "", email: "", notes: "", consent: false,
  locale: "en", website: "", startedAt: 0,
});

/** Shared by client (UX) and server (authority). */
export function validateEnquiry(d: EnquiryInput, today = new Date()): FieldErrors {
  const e: FieldErrors = {};
  if (!(formServiceKeys as readonly string[]).includes(d.service)) e.service = "service";
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
  if (!d.time) e.time = "required";
  const p = Number(d.passengers);
  if (!Number.isInteger(p) || p < 1 || p > 100) e.passengers = "number";
  const l = Number(d.luggage);
  if (!Number.isInteger(l) || l < 0 || l > 100) e.luggage = "number";
  if (!d.consent) e.consent = "consent";
  return e;
}

/** Server-side: coerce unknown JSON into a trimmed, length-capped EnquiryInput. */
export function sanitizeEnquiry(raw: unknown): EnquiryInput | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const s = (k: string, max = MAX.short) => (typeof r[k] === "string" ? (r[k] as string).trim().slice(0, max) : "");
  return {
    service: s("service"), pickup: s("pickup"), dropoff: s("dropoff"), date: s("date", 10), time: s("time", 5),
    passengers: s("passengers", 3), luggage: s("luggage", 3), vehicle: s("vehicle"), flight: s("flight", 12),
    name: s("name"), phone: s("phone", 20), email: s("email"), notes: s("notes", MAX.notes),
    consent: r.consent === true, locale: s("locale", 2), website: s("website"),
    startedAt: typeof r.startedAt === "number" ? r.startedAt : 0,
  };
}
