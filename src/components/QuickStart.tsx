"use client";

import { useId } from "react";
import { useTranslations } from "next-intl";
import { serviceKeys } from "@/lib/site";
import { PREFILL_EVENT } from "@/lib/events";

/** Hero panel. Sends NOTHING to a server: it hands values to the full quote form below. */
export function QuickStart() {
  const t = useTranslations("quick");
  const f = useTranslations("form");
  const uid = useId();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget).entries());
    window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: d }));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("quote")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", "#quote");
    document.getElementById("f-pickup")?.focus({ preventScroll: true });
  }

  return (
    <form className="panel" onSubmit={onSubmit} aria-labelledby={`${uid}-t`}>
      <h2 id={`${uid}-t`} className="panel__title">{t("title")}</h2>
      <div className="field">
        <label htmlFor={`${uid}-s`}>{t("service")}</label>
        <select id={`${uid}-s`} name="service" defaultValue="airport">
          {serviceKeys.map((k) => <option key={k} value={k}>{f(`services.${k}`)}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor={`${uid}-p`}>{t("pickup")}</label>
        <input id={`${uid}-p`} name="pickup" type="text" autoComplete="off" maxLength={160} />
      </div>
      <div className="field">
        <label htmlFor={`${uid}-d`}>{t("dropoff")}</label>
        <input id={`${uid}-d`} name="dropoff" type="text" autoComplete="off" maxLength={160} />
      </div>
      <div className="field">
        <label htmlFor={`${uid}-dt`}>{t("date")}</label>
        <input id={`${uid}-dt`} name="date" type="date" />
      </div>
      <button type="submit" className="btn btn--primary btn--block">{t("continue")}</button>
      <p className="panel__hint">{t("hint")}</p>
    </form>
  );
}
