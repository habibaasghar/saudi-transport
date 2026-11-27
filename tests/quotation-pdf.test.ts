import { writeFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { renderQuotationPdf } from "@/server/pdf/quotation";
import type { QuotationBundle } from "@/server/services/crm";
import { checkValidity, quotationInput } from "@/lib/quotation";

const now = new Date("2026-11-27T10:00:00Z");
const bundle = (over: Partial<QuotationBundle["customer"]> = {}) => ({
  quote: { id: "00000000-0000-0000-0000-000000000001", reference: "QT-2611-0001", inquiryId: "x", status: "draft", vehicle: "GMC Yukon", amount: "1450.00", currency: "SAR", inclusions: "Private vehicle with driver for the journey described above\nFuel", exclusions: "Tolls", notes: "Driver meets you at arrivals.", validUntil: "2026-11-30", createdBy: null, sentAt: null, sentTo: null, createdAt: now, updatedAt: now },
  inquiry: { reference: "RS-2611-0099", pickup: "Riyadh King Khalid Airport (RUH)", dropoff: "Doha, Qatar", pickupDate: "2026-12-10", pickupTime: "09:30", tripType: "round_trip", returnDate: "2026-12-14", returnTime: "18:00", adults: 3, children: 1, infants: 0, largeBags: 4, smallBags: 2, flightNo: "SV1020", locale: "en" },
  customer: { name: "Test Customer", email: "test@example.com", phone: "+966500000000", ...over },
}) as unknown as QuotationBundle;

describe("quotation PDF", () => {
  it("renders a valid PDF for an English customer", async () => {
    const buf = await renderQuotationPdf(bundle(), now);
    expect(buf.subarray(0, 5).toString()).toBe("%PDF-");
    expect(buf.length).toBeGreaterThan(5000);
    if (process.env.PDF_OUT) writeFileSync(`${process.env.PDF_OUT}/quote-en.pdf`, buf);
  });
  it("renders Arabic customer text without crashing", async () => {
    const buf = await renderQuotationPdf(bundle({ name: "محمد العتيبي" }), now);
    expect(buf.subarray(0, 5).toString()).toBe("%PDF-");
    if (process.env.PDF_OUT) writeFileSync(`${process.env.PDF_OUT}/quote-ar.pdf`, buf);
  });
});

describe("quotation input", () => {
  it("accepts a normal quote and rejects bad amounts and past validity", () => {
    expect(quotationInput.safeParse({ vehicle: "GMC Yukon", amount: "450.50", validUntil: "2026-12-01" }).success).toBe(true);
    expect(quotationInput.safeParse({ vehicle: "GMC Yukon", amount: "0", validUntil: "2026-12-01" }).success).toBe(false);
    expect(quotationInput.safeParse({ vehicle: "GMC Yukon", amount: "abc", validUntil: "2026-12-01" }).success).toBe(false);
    expect(checkValidity("2026-11-26", now)).not.toBeNull();
    expect(checkValidity("2026-11-27", now)).toBeNull();
  });
});
