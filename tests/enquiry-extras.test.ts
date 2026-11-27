import { describe, expect, it } from "vitest";
import { emptyEnquiry, extrasSummary, sanitizeAttribution, sanitizeEnquiry, validateEnquiry } from "@/lib/enquiry";
import { inquiryAck } from "@/server/email/templates";

const base = (service: string) => ({
  ...emptyEnquiry(), passengers: "2", email: "test@example.com", service, pickup: "Olaya", dropoff: "KAFD", date: "2030-03-01", time: "09:00",
  name: "Test", phone: "+966500000000", consent: true,
});
const today = new Date("2030-01-01");

describe("service-specific fields", () => {
  it("requires a duration for hourly bookings only", () => {
    expect(validateEnquiry(base("hourly"), today).hours).toBe("required");
    expect(validateEnquiry({ ...base("hourly"), hours: "4" }, today)).toEqual({});
    expect(validateEnquiry(base("chauffeur"), today)).toEqual({});
  });
  it("rejects an out-of-range vehicle count", () => {
    expect(validateEnquiry({ ...base("event"), vehicles: "0" }, today).vehicles).toBe("number");
    expect(validateEnquiry({ ...base("event"), vehicles: "51" }, today).vehicles).toBe("number");
    expect(validateEnquiry({ ...base("event"), vehicles: "6" }, today)).toEqual({});
  });
  it("sanitizer drops extras that do not belong to the chosen service", () => {
    const s = sanitizeEnquiry({ service: "airport", hours: "4", company: "Acme", vehicles: "3" })!;
    expect([s.hours, s.company, s.vehicles]).toEqual(["", "", ""]);
    const c = sanitizeEnquiry({ service: "corporate", company: "Acme", vehicles: "3", hours: "4" })!;
    expect([c.company, c.vehicles, c.hours]).toEqual(["Acme", "3", ""]);
  });
  it("sanitizer only accepts known durations", () => {
    expect(sanitizeEnquiry({ service: "hourly", hours: "999" })!.hours).toBe("");
    expect(sanitizeEnquiry({ service: "hourly", hours: "full_day" })!.hours).toBe("full_day");
  });
  it("summarises extras as readable lines", () => {
    expect(extrasSummary({ company: "Acme", hours: "full_day", vehicles: "3" })).toBe("Company: Acme\nDuration: Full day\nVehicles needed: 3");
    expect(extrasSummary({ company: "", hours: "", vehicles: "" })).toBe("");
  });
});

describe("attribution", () => {
  it("keeps only known keys, trims and caps values", () => {
    const a = sanitizeAttribution({ utm_source: " google ", gclid: "x".repeat(500), evil: "drop me", landing: "/en/" });
    expect(Object.keys(a).sort()).toEqual(["gclid", "landing", "utm_source"]);
    expect(a.utm_source).toBe("google");
    expect(a.gclid).toHaveLength(200);
  });
  it("strips control characters and ignores non-strings", () => {
    expect(sanitizeAttribution({ utm_campaign: "a\nb\u0000c", utm_term: 5 })).toEqual({ utm_campaign: "abc" });
    expect(sanitizeAttribution("nope")).toEqual({});
  });
  it("is carried through sanitizeEnquiry", () => {
    expect(sanitizeEnquiry({ service: "airport", attribution: { utm_medium: "cpc" } })!.attribution).toEqual({ utm_medium: "cpc" });
  });
});

describe("acknowledgement email", () => {
  const d = { reference: "RS-2611-0001", name: "<b>Sara</b>", pickup: "JED", dropoff: "Makkah", date: "2030-03-01", time: "09:00", passengers: 2 };
  it("says it is not a confirmed booking and escapes customer input (EN)", () => {
    const m = inquiryAck({ ...d, locale: "en" });
    expect(m.text).toContain("not a confirmed booking");
    expect(m.html).toContain("&lt;b&gt;Sara&lt;/b&gt;");
    expect(m.html).not.toContain("<b>Sara</b>");
    expect(m.subject).toContain("RS-2611-0001");
  });
  it("renders Arabic right-to-left", () => {
    const m = inquiryAck({ ...d, locale: "ar" });
    expect(m.html).toContain('dir="rtl"');
    expect(m.text).toContain("ليس حجزًا مؤكدًا");
  });
});
