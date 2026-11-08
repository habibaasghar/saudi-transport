import { afterAll, describe, expect, it } from "vitest";
import { sqlClient } from "@/server/db/client";
import { POST } from "@/app/api/enquiry/route";
import { cleanup } from "./helpers";

const TAG = "vitest-api-" + Date.now();
let ipN = 0;
const URL_ = "https://www.ridesaudi.com/api/enquiry/";
const call = (body: Record<string, unknown>) =>
  POST(new Request(URL_, {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": `10.9.${Date.now() % 250}.${++ipN}` },
    body: JSON.stringify(body),
  }));
const valid = (extra = {}) => ({
  service: "airport", pickup: "RUH Airport " + TAG, dropoff: "Hotel", date: "2030-02-02", time: "10:30",
  passengers: "2", luggage: "1", vehicle: "", flight: "", name: "API Test", phone: "+966500000001",
  email: `${TAG}@example.com`, notes: TAG, consent: true, locale: "en", source: "/en/", website: "",
  startedAt: Date.now() - 10_000, ...extra,
});

afterAll(async () => {
  await cleanup(TAG);
  await sqlClient()`delete from rate_limits where key like 'enq-%' and expires_at < now() + interval '2 hours'`;
});

describe("POST /api/enquiry", () => {
  it("stores a valid enquiry and returns a reference", async () => {
    const res = await call(valid());
    expect(res.status).toBe(200);
    const j = await res.json();
    expect(j.ok).toBe(true);
    expect(j.reference).toMatch(/^RS-\d{4}-\d{4}$/);
    const rows = await sqlClient()`select status, adults, large_bags from inquiries where reference = ${j.reference}`;
    expect(rows[0]).toMatchObject({ status: "new", adults: 2, large_bags: 1 });
  });
  it("double submit returns the same reference, not a second row", async () => {
    const body = valid({ pickup: "Dup " + TAG });
    const a = await (await call(body)).json();
    const b = await (await call(body)).json();
    expect(b.duplicate).toBe(true);
    expect(b.reference).toBe(a.reference);
  });
  it("rejects invalid email (422)", async () => {
    const res = await call(valid({ email: "not-an-email" }));
    expect(res.status).toBe(422);
    expect((await res.json()).fields.email).toBe("email");
  });
  it("rejects missing required fields (422)", async () => {
    const res = await call(valid({ name: "", pickup: "", phone: "" }));
    expect(res.status).toBe(422);
    expect((await res.json()).fields).toMatchObject({ name: "required", pickup: "required", phone: "required" });
  });
  it("rejects honeypot and too-fast submissions (400)", async () => {
    expect((await call(valid({ website: "http://spam" }))).status).toBe(400);
    expect((await call(valid({ startedAt: Date.now() }))).status).toBe(400);
  });
  it("rejects foreign origins (403) and oversized bodies (413)", async () => {
    const r1 = await POST(new Request(URL_, { method: "POST", headers: { origin: "https://evil.example", "x-forwarded-for": "10.8.0.1" }, body: "{}" }));
    expect(r1.status).toBe(403);
    const r2 = await POST(new Request(URL_, { method: "POST", headers: { "x-forwarded-for": "10.8.0.2" }, body: "x".repeat(20_000) }));
    expect(r2.status).toBe(413);
  });
});
