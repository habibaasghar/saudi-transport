import { describe, expect, it } from "vitest";
import { cargoSummary, checkHeavy, emptyHeavy, isHeavyQuick, ksaToday, quickToHeavy, validateHeavyQuick, HEAVY_SERVICES, heavyGroup, sanitizeHeavy, validateHeavy } from "../src/lib/heavy-quote";
import en from "../messages/en.json";
import ar from "../messages/ar.json";

const today = new Date("2026-11-22T10:00:00");
const base = { ...emptyHeavy(), pickup: "Riyadh, 2nd Industrial City", dropoff: "Jubail", date: "2026-11-25", timing: "date", name: "Test", phone: "+966 50 000 0000", consent: true };

describe("heavy quote validation", () => {
  it("requires weight or model for machinery but not dimensions", () => {
    const e = validateHeavy({ ...base, service: "excavator", loadType: "Crawler excavator" }, today);
    expect(e.weight).toBe("weightOrModel");
    expect(e.length).toBeUndefined();
    expect(validateHeavy({ ...base, service: "excavator", loadType: "Crawler excavator", makeModel: "CAT 320" }, today)).toEqual({});
    expect(validateHeavy({ ...base, service: "excavator", loadType: "Crawler excavator", weight: "21.5" }, today)).toEqual({});
  });

  it("asks car requests for condition, never weight", () => {
    const e = validateHeavy({ ...base, service: "satha", loadType: "Sedan" }, today);
    expect(e.condition).toBe("required");
    expect(e.weight).toBeUndefined();
    expect(validateHeavy({ ...base, service: "satha", loadType: "Sedan", condition: "accident" }, today)).toEqual({});
  });

  it("asks truck recovery for condition and keeps an optional weight", () => {
    expect(validateHeavy({ ...base, service: "truck_recovery", loadType: "Tractor head" }, today).condition).toBe("required");
    const truck = { ...base, service: "truck_recovery", loadType: "Tractor head", condition: "not_running" };
    expect(validateHeavy(truck, today)).toEqual({});
    expect(validateHeavy({ ...truck, weight: "abc" }, today).weight).toBe("number");
    const d = sanitizeHeavy({ ...truck, weight: "9" })!;
    expect([d.condition, d.weight]).toEqual(["not_running", "9"]);
  });

  it("treats hydraulic satha as a car request and maps CTA groups", () => {
    expect(validateHeavy({ ...base, service: "hydraulic_satha", loadType: "Coupe", condition: "runs" }, today)).toEqual({});
    expect(["hydraulic_satha", "truck_recovery", "lowbed", "excavator", "", "other_heavy"].map(heavyGroup)).toEqual(["recovery", "truck", "lowbed", "equipment", "general", "general"]);
  });

  it("has a label, CTA, submit text and WhatsApp template for every service in both languages", () => {
    for (const m of [en, ar]) {
      for (const g of ["business"] as const) expect(m.heavy.wa[g]).toContain("{topic}");
      for (const s of HEAVY_SERVICES) {
        expect(m.heavy.form.services[s], s).toBeTruthy();
        const g = heavyGroup(s);
        expect(m.heavy.ctas[g] && m.heavy.form.submits[g] && m.heavy.wa[g].includes("{topic}"), s).toBeTruthy();
      }
    }
  });

  it("rejects unknown services, bad numbers and past dates", () => {
    expect(validateHeavy({ ...base, service: "airport", loadType: "x" }, today).service).toBe("service");
    expect(validateHeavy({ ...base, service: "lowbed", loadType: "Dozer", weight: "abc" }, today).weight).toBe("number");
    expect(validateHeavy({ ...base, service: "lowbed", loadType: "Dozer", weight: "30", date: "2026-01-01" }, today).date).toBe("date");
  });
});

describe("heavy quote sanitising", () => {
  it("drops machine fields on a car request and unknown enum values", () => {
    const d = sanitizeHeavy({ ...base, service: "satha", loadType: "SUV", condition: "runs", weight: "40", loading: "crane" })!;
    expect(d.weight).toBe("");
    expect(d.loading).toBe("");
    expect(d.condition).toBe("runs");
    const m = sanitizeHeavy({ ...base, service: "lowbed", loadType: "Loader", weight: "18", loading: "teleport" })!;
    expect(m.loading).toBe("");
    expect(m.condition).toBe("");
  });

  it("builds a readable cargo block for the CRM", () => {
    const s = cargoSummary({ ...base, service: "wheel_loader", loadType: "Wheel loader", makeModel: "CAT 950", weight: "19", length: "8.2", width: "2.9", height: "3.5", loading: "drive_on", unloading: "drive_on", company: "ACME" });
    expect(s).toContain("Load: Wheel loader (CAT 950)");
    expect(s).toContain("Approx. weight: 19 t");
    expect(s).toContain("8.2 x 2.9 x 3.5 m");
    expect(s).toContain("Company: ACME");
  });
});

describe("lead qualification", () => {
  it("dates an urgent recovery itself and needs a company name only for business requests", () => {
    const d = sanitizeHeavy({ ...base, service: "satha", loadType: "Camry", condition: "not_running", timing: "now", date: "" })!;
    expect(d.date).toBe(ksaToday());
    expect(cargoSummary(d)).toContain("URGENT: needed now");
    expect(validateHeavy({ ...base, service: "lowbed", loadType: "Dozer", weight: "30", business: true }, today).company).toBe("required");
    const b = sanitizeHeavy({ ...base, service: "lowbed", loadType: "Dozer", weight: "30", business: true, company: "ACME", quantity: "3", frequency: "recurring" })!;
    expect(cargoSummary(b)).toContain("Business request (recurring), quantity: 3");
  });

  it("keeps a page opened before the timing field existed working", () => {
    expect(sanitizeHeavy({ ...base, timing: undefined, service: "satha", loadType: "Camry", condition: "runs" })!.timing).toBe("date");
  });

  it("accepts the short form and tells staff what to ask, never passenger details", () => {
    expect(validateHeavyQuick({ loadType: "", pickup: "x", phone: "abc" })).toEqual({ loadType: "required", phone: "phone" });
    const raw = { quick: true, service: "lowbed", loadType: "Excavator", pickup: "Jeddah", phone: "+966500000000", startedAt: 1 };
    expect(isHeavyQuick(raw)).toBe(true);
    const d = quickToHeavy(sanitizeHeavy(raw)!);
    expect([d.dropoff, d.consent, d.date]).toEqual(["TBC", true, ksaToday()]);
    const c = checkHeavy(d);
    expect(c.complete).toBe(false);
    expect(c.line).toContain("weight or model");
    expect(c.line).not.toMatch(/passenger|luggage/);
    expect(checkHeavy({ ...base, service: "excavator", loadType: "x", makeModel: "CAT 320" }).complete).toBe(true);
  });
});
