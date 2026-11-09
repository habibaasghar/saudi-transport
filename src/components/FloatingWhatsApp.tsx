"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./Icons";

/**
 * Floating WhatsApp button shown on every page.
 * Hides itself while the quote form is on screen so it never covers the form fields or submit button.
 */
export function FloatingWhatsApp({ href, label, aria }: { href: string; label: string; aria: string }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = document.getElementById("quote");
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-float${hidden ? " wa-float--hidden" : ""}`}
      aria-label={aria}
      title={label}
      tabIndex={hidden ? -1 : 0}
    >
      <WhatsAppIcon className="wa-float__icon" />
      <span className="wa-float__label">{label}</span>
    </a>
  );
}
