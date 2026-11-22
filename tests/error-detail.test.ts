import { describe, expect, it } from "vitest";
import { errorDetail } from "../src/lib/error-detail";

describe("errorDetail", () => {
  it("surfaces the Postgres cause behind a Drizzle 'Failed query' and drops params", () => {
    const pg = Object.assign(new Error('relation "rate_limits" does not exist'), { code: "42P01" });
    const wrapped = new Error('Failed query: insert into "rate_limits" ("key") values ($1)\nparams: enq-ip:1.2.3.4:99,1', { cause: pg });
    const s = errorDetail(wrapped);
    expect(s).toContain('42P01 relation "rate_limits" does not exist');
    expect(s).not.toContain("1.2.3.4");
  });

  it("handles non-Error values", () => {
    expect(errorDetail("boom")).toBe("boom");
  });
});
