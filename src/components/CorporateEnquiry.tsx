"use client";

import { PREFILL_EVENT } from "@/lib/events";

/** Contact page: a direct route into the full form with "Corporate Transportation" pre-selected, plus a corporate WhatsApp template. */
export function CorporateEnquiry({ heading, text, formLabel, waLabel, waHref }: { heading: string; text: string; formLabel: string; waLabel: string; waHref: string }) {
  const start = () => {
    window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: { service: "corporate" } }));
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section>
      <h2>{heading}</h2>
      <p>{text}</p>
      <p className="corp-enquiry__actions">
        <a href="#quote" className="btn btn--primary" onClick={(e) => { e.preventDefault(); start(); }}>{formLabel}</a>{" "}
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">{waLabel}</a>
      </p>
    </section>
  );
}
