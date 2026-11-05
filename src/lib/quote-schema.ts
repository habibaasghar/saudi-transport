import { z } from "zod";

export const SERVICE_TYPES = ["airport", "chauffeur", "intercity", "hourly", "corporate", "vip"] as const;
export const VEHICLE_PREFS = ["any", "sedan", "suv", "van"] as const;

const trimmed = (max: number) => z.string().trim().max(max);

/** Error messages are stable codes; the UI maps them to localized text. */
export const quoteSchema = z.object({
  service: z.enum(SERVICE_TYPES, { errorMap: () => ({ message: "required" }) }),
  pickup: trimmed(160).min(2, "required"),
  destination: trimmed(160).min(2, "required"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "required")
    .refine((d) => {
      const t = Date.parse(`${d}T00:00:00Z`);
      return !Number.isNaN(t) && t >= Date.now() - 36 * 3600 * 1000;
    }, "past_date"),
  time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "required"),
  passengers: z.coerce.number({ invalid_type_error: "required" }).int("required").min(1, "required").max(50, "too_many"),
  luggage: z.preprocess((v) => (v === "" || v == null ? undefined : v), z.coerce.number().int().min(0).max(100).optional()),
  vehicle: z.enum(VEHICLE_PREFS).default("any"),
  flight: trimmed(12)
    .regex(/^[A-Za-z0-9 -]*$/, "invalid")
    .optional()
    .default(""),
  name: trimmed(100).min(2, "required"),
  phone: trimmed(24).regex(/^\+?[\d\s()-]{7,20}$/, "invalid_phone"),
  email: trimmed(160).email("invalid_email"),
  notes: trimmed(1000).optional().default(""),
  consent: z.literal(true, { errorMap: () => ({ message: "consent" }) }),
  locale: z.enum(["en", "ar"]).default("en"),
  // Spam traps
  website: z.string().max(0).optional().default(""), // honeypot: must stay empty
  startedAt: z.coerce.number().optional(),
  turnstile: z.string().optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
