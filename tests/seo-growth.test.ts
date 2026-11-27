import { describe, expect, it } from "vitest";
import { linkSections } from "../src/content/auto-links";
import { blogPosts, getPost } from "../src/content/blog/posts";
import { blogHubs } from "../src/content/blog/hubs";
import { linkTargets } from "../src/content/inline-links";
import { getPage, pages, validateRegistry } from "../src/content/registry";
import { emptyEnquiry, validateEnquiry } from "../src/lib/enquiry";
import { checkLead, leadCheckLine } from "../src/lib/lead-quality";
import { quickToEnquiry } from "../src/lib/quick-quote";

const locales = ["en", "ar"] as const;

describe("contextual links", () => {
  it("registry is valid and every inline link, guides included, resolves", () => {
    expect(() => validateRegistry()).not.toThrow();
    const all = [...pages, ...blogPosts, ...blogHubs];
    for (const p of all) for (const l of locales) for (const s of p.copy[l].sections) {
      for (const t of [...s.p, ...(s.list ?? [])].flatMap(linkTargets)) {
        const ok = t.startsWith("blog/") ? Boolean(getPost(t.slice(5))) : Boolean(getPage(t));
        expect(ok, t).toBe(true);
      }
    }
  });

  it("links the first real mention only, never a partial or different route", () => {
    const run = (text: string) => linkSections([{ h: "x", p: [text] }], ["services/intercity-transfers/dammam-to-dubai"], "", "en")[0].p[0];
    expect(run("See Dammam to Dubai for that.")).toBe("See [Dammam to Dubai](services/intercity-transfers/dammam-to-dubai) for that.");
    expect(run("Riyadh or Dammam to Dubai is long.")).not.toContain("](");
    const ar = linkSections([{ h: "x", p: ["راجع صفحة مكة إلى المدينة."] }], ["services/intercity-transfers/makkah-to-madinah"], "", "ar")[0].p[0];
    expect(ar).toContain("[مكة إلى المدينة](");
  });

  it("a page with a reverse page does not advertise both directions", () => {
    for (const p of pages) {
      const m = p.path.match(/^(.*\/)([a-z-]+)-to-([a-z-]+)$/);
      if (m && getPage(`${m[1]}${m[3]}-to-${m[2]}`)) for (const l of locales) expect(p.copy[l].eyebrow, p.path).not.toContain("⇄");
    }
  });

  it("titles fit 60 characters with the brand suffix", () => {
    for (const p of [...pages, ...blogPosts]) for (const l of locales) expect(`${p.copy[l].title} | RideSaudi`.length, p.copy[l].title).toBeLessThanOrEqual(60);
  });
});

describe("lead completeness", () => {
  const full = { ...emptyEnquiry(), service: "intercity", name: "A", email: "test@example.com", phone: "+966500000000", pickup: "Madinah", dropoff: "AlUla", date: "2030-01-01", time: "09:00", passengers: "4", luggage: "3", consent: true };
  it("complete only when every quotation detail is present", () => {
    expect(checkLead(full)).toEqual({ complete: true, missing: [] });
    expect(checkLead({ ...full, luggage: "" }).missing).toEqual(["luggage"]);
    expect(checkLead({ ...full, tripType: "round_trip" }).missing).toEqual(["returnDate"]);
    expect(checkLead({ ...full, service: "airport" })).toEqual({ complete: true, missing: ["flight"] });
  });
  it("a three-field quick quote is always incomplete", () => {
    const q = quickToEnquiry({ route: "Madinah to AlUla", date: "2030-01-01", phone: "+966500000000", service: "intercity", locale: "en", source: "", attribution: {}, website: "", startedAt: 1 });
    const c = checkLead(q);
    expect(c.complete).toBe(false);
    expect(c.missing).toEqual(["dropoff", "time", "passengers", "luggage"]);
    expect(leadCheckLine(c)).toContain("incomplete");
  });
  it("passengers must be answered, luggage may be left blank", () => {
    expect(validateEnquiry({ ...full, passengers: "" }).passengers).toBe("number");
    expect(validateEnquiry({ ...full, luggage: "" })).toEqual({});
  });
});
