import type { ReactNode } from "react";

export function SectionHead({ id, eyebrow, title, intro }: { id: string; eyebrow: string; title: string; intro?: ReactNode }) {
  return (
    <header className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {intro ? <p className="lede">{intro}</p> : null}
    </header>
  );
}
