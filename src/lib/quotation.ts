import { z } from "zod";

/**
 * Quotation input entered by staff in the CRM. Prices are NEVER computed or shown publicly: the amount is typed by
 * an admin after checking availability and supplier cost.
 */
export const CURRENCIES = ["SAR"] as const;

export const quotationInput = z.object({
  vehicle: z.string().trim().min(2, "Enter the vehicle").max(120),
  amount: z.string().trim()
    .regex(/^\d{1,9}(\.\d{1,2})?$/, "Enter an amount like 450 or 450.50")
    .refine((v) => Number(v) > 0, "Amount must be more than 0"),
  currency: z.enum(CURRENCIES).default("SAR"),
  validUntil: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a validity date"),
  inclusions: z.string().trim().max(2000).optional().default(""),
  exclusions: z.string().trim().max(2000).optional().default(""),
  notes: z.string().trim().max(2000).optional().default(""),
});
export type QuotationInput = z.infer<typeof quotationInput>;

/** Today's date in Saudi Arabia (UTC+3, no DST) as YYYY-MM-DD. */
export const ksaToday = (now = new Date()) => new Date(now.getTime() + 3 * 3600_000).toISOString().slice(0, 10);
export const addDays = (ymd: string, n: number) => {
  const d = new Date(`${ymd}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
};

/** Validity must be today or later (Saudi date). */
export function checkValidity(validUntil: string, now = new Date()): string | null {
  return validUntil < ksaToday(now) ? "Validity cannot be in the past" : null;
}

/**
 * Starting text for a new quotation. Only owner-confirmed facts (src/content/legal.ts: 24h free cancellation, payment by
 * link / STC Pay / cash). Everything else (tolls, waiting time, parking) is for staff to add per job.
 */
export const DEFAULT_INCLUSIONS = "Private vehicle with driver for the journey described above";
export const DEFAULT_EXCLUSIONS = "Anything not listed under Included";
export const QUOTE_TERMS = [
  "This quotation is subject to vehicle availability at the time of confirmation.",
  "Free cancellation up to 24 hours before pickup.",
  "Payment by payment link, STC Pay or cash.",
  "Please quote the reference when you confirm.",
];

export const money = (amount: string | number, currency = "SAR") =>
  `${currency} ${Number(amount).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;

/** CRM status groups for the list tabs. Values are inquiry_status enum members. */
export const STATUS_GROUPS = {
  new: ["new"],
  pending: ["contacted", "waiting_for_details", "checking_availability", "preparing_quotation"],
  quoted: ["quotation_sent", "follow_up_required"],
  confirmed: ["accepted", "booked"],
  cancelled: ["lost", "cancelled"],
} as const;
export type StatusGroup = keyof typeof STATUS_GROUPS;
export const GROUP_LABEL: Record<StatusGroup, string> = {
  new: "New", pending: "Pending quotation", quoted: "Quotation sent", confirmed: "Confirmed", cancelled: "Cancelled / lost",
};
export const INQUIRY_STATUSES = [
  "new", "contacted", "waiting_for_details", "checking_availability", "preparing_quotation",
  "quotation_sent", "follow_up_required", "accepted", "booked", "lost", "cancelled",
] as const;
export type InquiryStatus = (typeof INQUIRY_STATUSES)[number];
export const statusLabel = (s: string) => s.replace(/_/g, " ").replace(/^./, (c) => c.toUpperCase());
