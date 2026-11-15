"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import type { ResolvedNavItem } from "@/lib/nav";

/**
 * Desktop primary navigation with dropdown menus.
 * Opens on hover (mouse) or on click/Enter (touch and keyboard); closes on Escape, outside click or focus leaving.
 * Submenu links are always in the HTML, so crawlers and assistive tech can reach them.
 */
export function DesktopNav({ items, navLabel }: { items: ResolvedNavItem[]; navLabel: string }) {
  const [open, setOpen] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      ref.current?.querySelector<HTMLButtonElement>(`button[data-key="${open}"]`)?.focus();
      setOpen(null);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const canHover = () => typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  return (
    <nav
      ref={ref}
      className="nav-desktop"
      aria-label={navLabel}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(null);
      }}
    >
      <ul>
        {items.map((n) =>
          n.children?.length ? (
            <li
              key={n.key}
              className={`nav-dd${n.optional ? " nav-optional" : ""}`}
              onMouseEnter={() => canHover() && setOpen(n.key)}
              onMouseLeave={() => canHover() && setOpen(null)}
            >
              <button
                type="button"
                data-key={n.key}
                className="nav-dd__btn"
                aria-expanded={open === n.key}
                aria-controls={`nav-dd-${n.key}`}
                onClick={() => setOpen((o) => (o === n.key ? null : n.key))}
              >
                {n.label}
                <span aria-hidden="true" className="nav-dd__caret" />
              </button>
              <ul id={`nav-dd-${n.key}`} className="nav-dd__menu" hidden={open !== n.key}>
                {n.children.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} onClick={() => setOpen(null)}>{c.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={n.key} className={n.optional ? "nav-optional" : undefined}>
              <Link href={n.href}>{n.label}</Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
