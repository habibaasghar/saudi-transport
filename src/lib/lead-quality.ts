import type { EnquiryInput } from "./enquiry";

/**
 * Lead completeness for passenger enquiries. "Complete" only says the customer gave everything a quotation needs; it is
 * never a claim that the lead is qualified. Qualified / unqualified / quote sent / booked stay human decisions, recorded
 * with the CRM status (src/server/db/schema.ts inquiryStatus):
 *   new                                        -> new inquiry
 *   waiting_for_details                        -> incomplete inquiry
 *   checking_availability, preparing_quotation -> qualified lead
 *   lost, cancelled                            -> unqualified or lost lead
 *   quotation_sent, follow_up_required         -> quote sent
 *   accepted, booked                           -> booking confirmed
 */
export type LeadField = "name" | "phone" | "pickup" | "dropoff" | "date" | "time" | "passengers" | "luggage" | "returnDate" | "flight";
export type LeadCheck = { complete: boolean; missing: LeadField[] };

const PLACEHOLDER = "TBC";
const given = (s: string | undefined) => Boolean(s && s.trim() && s.trim() !== PLACEHOLDER);

export function checkLead(d: Pick<EnquiryInput, "service" | "name" | "phone" | "pickup" | "dropoff" | "date" | "time" | "passengers" | "luggage" | "tripType" | "returnDate" | "flight">): LeadCheck {
  const missing: LeadField[] = [];
  for (const k of ["name", "phone", "pickup", "dropoff", "date", "time", "passengers", "luggage"] as const) if (!given(d[k])) missing.push(k);
  if (d.tripType === "round_trip" && !given(d.returnDate)) missing.push("returnDate");
  if (d.service === "airport" && !given(d.flight)) missing.push("flight");
  // A missing flight number delays nothing: it is asked for on WhatsApp, so it does not make the lead incomplete.
  return { complete: missing.every((m) => m === "flight"), missing };
}

const LABEL: Record<LeadField, string> = {
  name: "name", phone: "WhatsApp number", pickup: "pickup", dropoff: "destination", date: "date", time: "pickup time",
  passengers: "passengers", luggage: "luggage", returnDate: "return date", flight: "flight number",
};

/** One staff-facing line for the CRM row and the alert email. */
export function leadCheckLine(c: LeadCheck): string {
  const ask = c.missing.length ? ` Ask for: ${c.missing.map((m) => LABEL[m]).join(", ")}.` : "";
  return c.complete ? `Lead check: complete details.${ask}` : `Lead check: incomplete.${ask}`;
}
