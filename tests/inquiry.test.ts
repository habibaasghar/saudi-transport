import { afterAll, describe, expect, it } from "vitest";
import { sql } from "drizzle-orm";
import { db, schema, sqlClient } from "@/server/db/client";
import { createInquiry, dedupeHash, listInquiries } from "@/server/services/inquiry";
import { allow } from "@/server/services/ratelimit";
import { cleanup } from "./helpers";

const TAG = "vitest-" + Date.now();
const base = (n: string, extra = {}) => ({
  name: "Test " + n, phone: `+9660000${n}`, email: `${TAG}-${n}@example.com`,
  pickup: "Riyadh " + TAG, dropoff: "Jeddah", pickupDate: "2030-01-01", pickupTime: "09:00",
  customerNotes: TAG, ...extra,
});

afterAll(async () => {
  await cleanup(TAG);
  await sqlClient()`delete from rate_limits where key like ${"vt:vt-" + TAG + "%"}`;
});

describe("database", () => {
  it("has RLS enabled on every public table", async () => {
    const rows = await sqlClient()`select relname, relrowsecurity from pg_class c join pg_namespace n on n.oid = c.relnamespace where n.nspname = 'public' and c.relkind = 'r'`;
    expect(rows.length).toBeGreaterThanOrEqual(10);
    expect(rows.filter((r) => !r.relrowsecurity)).toEqual([]);
  });
  it("defines no RLS policies, so anon/authenticated browser roles get nothing", async () => {
    const pol = await sqlClient()`select count(*)::int n from pg_policies where schemaname = 'public'`;
    expect(pol[0].n).toBe(0);
  });
});

describe("createInquiry", () => {
  it("saves customer + inquiry + activity with RS-YYMM-NNNN reference", async () => {
    const r = await createInquiry(base("0001"));
    expect(r.duplicate).toBe(false);
    expect(r.reference).toMatch(/^RS-\d{4}-\d{4}$/);
    const [row] = await db().select().from(schema.inquiries).where(sql`${schema.inquiries.id} = ${r.id}`);
    expect(row.status).toBe("new");
    expect(row.source).toBe("website");
    const acts = await db().select().from(schema.inquiryActivities).where(sql`${schema.inquiryActivities.inquiryId} = ${r.id}`);
    expect(acts).toHaveLength(1);
  });
  it("returns the same record for an identical resubmission", async () => {
    const a = await createInquiry(base("0002"));
    const b = await createInquiry(base("0002"));
    expect(b.duplicate).toBe(true);
    expect(b.reference).toBe(a.reference);
  });
  it("is race-safe: 6 concurrent identical submissions create exactly one row", async () => {
    const results = await Promise.all(Array.from({ length: 6 }, () => createInquiry(base("0003"))));
    expect(new Set(results.map((r) => r.reference)).size).toBe(1);
    expect(results.filter((r) => !r.duplicate)).toHaveLength(1);
  });
  it("reuses the customer by email and gives distinct references", async () => {
    const a = await createInquiry(base("0004"));
    const b = await createInquiry(base("0004", { dropoff: "Madinah" }));
    expect(b.duplicate).toBe(false);
    expect(b.reference).not.toBe(a.reference);
    const n = await sqlClient()`select count(*)::int n from customers where email = ${`${TAG}-0004@example.com`}`;
    expect(n[0].n).toBe(1);
  });
  it("rejects invalid data at the database (passengers < 1)", async () => {
    await expect(createInquiry(base("0005", { adults: 0 }))).rejects.toThrow();
  });
  it("lists and searches", async () => {
    const { rows, total } = await listInquiries({ q: TAG, limit: 100 });
    expect(total).toBeGreaterThanOrEqual(4);
    expect(rows.every((r) => r.pickup.includes(TAG) || r.email?.includes(TAG))).toBe(true);
  });
});

describe("helpers", () => {
  it("dedupe hash ignores case and phone formatting", () => {
    const a = dedupeHash({ email: "A@x.com", phone: "+966 50 123", pickup: "Riyadh", dropoff: "Jeddah", pickupDate: "d", pickupTime: "t" });
    const b = dedupeHash({ email: "a@x.com", phone: "96650123", pickup: "riyadh", dropoff: "JEDDAH", pickupDate: "d", pickupTime: "t" });
    expect(a).toBe(b);
  });
  it("db rate limiter blocks after the limit", async () => {
    const res = [];
    for (let i = 0; i < 4; i++) res.push(await allow("vt", "vt-" + TAG, 3, 60));
    expect(res).toEqual([true, true, true, false]);
  });
});
