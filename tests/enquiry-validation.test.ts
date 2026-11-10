import { describe, expect, it } from "vitest";
import { emptyEnquiry, sanitizeEnquiry, validateEnquiry } from "@/lib/enquiry";

const base = () => ({
  ...emptyEnquiry(), service: "intercity", pickup: "Jeddah", dropoff: "Yanbu", date: "2030-03-01", time: "09:00",
  name: "Test", phone: "+966500000000", consent: true,
});

describe("validateEnquiry trip type", () => {
  it("accepts a one-way enquiry without return fields", () => {
    expect(validateEnquiry(base(), new Date("2030-01-01"))).toEqual({});
  });
  it("requires return date and time for round trips", () => {
    const e = validateEnquiry({ ...base(), tripType: "round_trip" }, new Date("2030-01-01"));
    expect(e).toMatchObject({ returnDate: "required", returnTime: "required" });
  });
  it("rejects a return date before the outbound date", () => {
    const e = validateEnquiry({ ...base(), tripType: "round_trip", returnDate: "2030-02-28", returnTime: "10:00" }, new Date("2030-01-01"));
    expect(e.returnDate).toBe("returnDate");
  });
  it("accepts a valid round trip", () => {
    expect(validateEnquiry({ ...base(), tripType: "round_trip", returnDate: "2030-03-03", returnTime: "10:00" }, new Date("2030-01-01"))).toEqual({});
  });
  it("sanitizer coerces unknown trip types to one_way", () => {
    expect(sanitizeEnquiry({ tripType: "multi_stop; drop table" })?.tripType).toBe("one_way");
    expect(sanitizeEnquiry({ tripType: "round_trip" })?.tripType).toBe("round_trip");
  });
});
