import { describe, expect, it } from "vitest";
import { getPage } from "@/content/registry";
import { PRICE_FROM } from "@/content/prices";
import { quickToEnquiry, sanitizeQuick, validateQuick } from "@/lib/quick-quote";

describe("starting prices", () => {
  it("only lists pages that exist", () => {
    for (const path of Object.keys(PRICE_FROM)) expect(getPage(path), path).toBeTruthy();
  });
  it("holds positive whole SAR amounts or null (never invented defaults)", () => {
    for (const row of Object.values(PRICE_FROM))
      for (const v of Object.values(row)) expect(v === null || (Number.isInteger(v) && v > 0)).toBe(true);
  });
});

describe("quick quote", () => {
  const today = new Date(2026, 10, 23);
  it("requires route, date and a plausible phone", () => {
    expect(validateQuick({ route: "", date: "", phone: "" }, today)).toEqual({ route: "required", date: "required", phone: "required" });
    expect(validateQuick({ route: "Jeddah to Makkah", date: "2026-11-30", phone: "abc" }, today)).toEqual({ phone: "phone" });
    expect(validateQuick({ route: "Jeddah to Makkah", date: "2026-11-01", phone: "+966 53 000 0000" }, today)).toEqual({ date: "date" });
    expect(validateQuick({ route: "Jeddah to Makkah", date: "2026-11-30", phone: "+966 53 000 0000" }, today)).toEqual({});
  });
  it("ignores payloads that are not quick quotes and falls back to a valid service", () => {
    expect(sanitizeQuick({ route: "x" })).toBeNull();
    expect(sanitizeQuick({ quick: true, route: "x", service: "nope" })?.service).toBe("intercity");
    expect(sanitizeQuick({ quick: true, route: "x", service: "airport" })?.service).toBe("airport");
  });
  it("maps onto a full enquiry with the route in pickup and consent from the visible notice", () => {
    const q = sanitizeQuick({ quick: true, route: "Riyadh to Dammam", date: "2026-11-30", phone: "+966530000000", locale: "en", startedAt: 1 })!;
    const e = quickToEnquiry(q);
    expect(e.pickup).toBe("Riyadh to Dammam");
    expect(e.phone).toBe("+966530000000");
    expect(e.consent).toBe(true);
    expect(e.notes).toMatch(/quick quote/i);
  });
});
