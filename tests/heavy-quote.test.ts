import { describe, expect, it } from "vitest";
import { cargoSummary, emptyHeavy, sanitizeHeavy, validateHeavy } from "../src/lib/heavy-quote";

const today = new Date("2026-11-22T10:00:00");
const base = { ...emptyHeavy(), pickup: "Riyadh, 2nd Industrial City", dropoff: "Jubail", date: "2026-11-25", name: "Test", phone: "+966 50 000 0000", consent: true };

describe("heavy quote validation", () => {
  it("requires weight for machinery but not dimensions", () => {
    const e = validateHeavy({ ...base, service: "excavator", loadType: "Crawler excavator" }, today);
    expect(e.weight).toBe("required");
    expect(e.length).toBeUndefined();
    expect(validateHeavy({ ...base, service: "excavator", loadType: "Crawler excavator", weight: "21.5" }, today)).toEqual({});
  });

  it("asks car requests for condition, never weight", () => {
    const e = validateHeavy({ ...base, service: "satha", loadType: "Sedan" }, today);
    expect(e.condition).toBe("required");
    expect(e.weight).toBeUndefined();
    expect(validateHeavy({ ...base, service: "satha", loadType: "Sedan", condition: "accident" }, today)).toEqual({});
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
