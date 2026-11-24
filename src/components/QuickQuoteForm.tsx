"use client";

import { useId, useRef, useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { readAttribution } from "@/lib/attribution";
import { track, trackLead } from "@/lib/analytics";
import { validateQuick, type QuickErrors } from "@/lib/quick-quote";
import { whatsappHref } from "@/config/contact";

type Status = "idle" | "sending" | "success" | "failed" | "rateLimited";

const noSubscribe = () => () => {};
const localToday = () => new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

/**
 * Above-the-fold quick quote: route, date and WhatsApp number only. It sends a real enquiry (POST /api/enquiry/ with
 * quick: true); the team replies on WhatsApp for the remaining details. If delivery fails, the visitor gets the same
 * details as a pre-filled WhatsApp message, so no lead is lost.
 */
export function QuickQuoteForm({ locale, service, route: initialRoute = "", className = "" }: { locale: string; service?: string; route?: string; className?: string }) {
  const t = useTranslations("quickQuote");
  const uid = useId();
  const [route, setRoute] = useState(initialRoute);
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<QuickErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [reference, setReference] = useState<string | undefined>();
  const [startedAt] = useState(() => Date.now());
  const sending = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const today = useSyncExternalStore(noSubscribe, localToday, () => undefined);

  const waMessage = () => t("whatsappMessage", { route: route || "-", date: date || "-" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (sending.current) return;
    const errs = validateQuick({ route, date, phone });
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      track("form_error", { form: "quick", field: first });
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    sending.current = true;
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ quick: true, route, date, phone, service, locale, website, startedAt, source: window.location.pathname, attribution: readAttribution() }),
      });
      if (res.ok) {
        const j = await res.json().catch(() => ({}));
        setReference(j.reference);
        // Fired only after the backend accepted the enquiry. No route, phone or date is sent to analytics.
        track("quick_form_submit", { form: "quick", service: service ?? "", language: locale });
        trackLead({ form: "quick", service: service ?? "", language: locale, complete: false });
        setStatus("success");
      } else {
        track("quote_submission_error", { form: "quick", status: res.status, language: locale });
        setStatus(res.status === 429 ? "rateLimited" : "failed");
      }
    } catch {
      track("quote_submission_error", { form: "quick", status: 0, language: locale });
      setStatus("failed");
    }
    sending.current = false;
  }

  const err = (k: keyof QuickErrors) =>
    errors[k] ? <p id={`${uid}-${k}-e`} className="field__error">{t(`errors.${errors[k]}`)}</p> : null;

  if (status === "success") {
    return (
      <div className={`panel quick ${className}`.trim()} role="status" aria-live="polite">
        <p className="panel__title">{t("successTitle")}</p>
        {reference && <p><strong>{t("reference", { ref: reference })}</strong></p>}
        <p>{t("successText")}</p>
        <p className="quick__reply">{t("reply")}</p>
        {/* Continue the same enquiry on WhatsApp with its reference; a second form would create a duplicate lead. */}
        <a href={whatsappHref(t("whatsappDetails", { ref: reference ?? "-", route, date }))} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--block">{t("addDetails")}</a>
      </div>
    );
  }

  return (
    <form ref={formRef} className={`panel quick ${className}`.trim()} onSubmit={onSubmit} noValidate aria-labelledby={`${uid}-t`}>
      <h2 id={`${uid}-t`} className="panel__title">{t("title")}</h2>
      <div className="field">
        <label htmlFor={`${uid}-route`}>{t("route")}</label>
        <input id={`${uid}-route`} name="route" type="text" autoComplete="off" maxLength={160} placeholder={t("routePlaceholder")} value={route} onChange={(e) => setRoute(e.target.value)} required aria-invalid={errors.route ? true : undefined} aria-describedby={errors.route ? `${uid}-route-e` : undefined} />
        {err("route")}
      </div>
      <div className="field">
        <label htmlFor={`${uid}-date`}>{t("date")}</label>
        <input id={`${uid}-date`} name="date" type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} required aria-invalid={errors.date ? true : undefined} aria-describedby={errors.date ? `${uid}-date-e` : undefined} />
        {err("date")}
      </div>
      <div className="field">
        <label htmlFor={`${uid}-phone`}>{t("phone")}</label>
        <input id={`${uid}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" maxLength={20} placeholder="+966 5x xxx xxxx" value={phone} onChange={(e) => setPhone(e.target.value)} required aria-invalid={errors.phone ? true : undefined} aria-describedby={errors.phone ? `${uid}-phone-e` : undefined} />
        {err("phone")}
      </div>
      {/* Spam trap: never displayed (display: none), so people and screen readers never meet it. */}
      <div className="hp" hidden>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <button type="submit" className="btn btn--primary btn--block" disabled={status === "sending"}>
        {status === "sending" ? t("sending") : t("submit")}
      </button>
      <p className="quick__reply">{t("reply")}</p>
      <p className="panel__hint">{t.rich("privacy", { privacy: (chunks) => <Link href="/privacy-policy">{chunks}</Link> })}</p>
      {(status === "failed" || status === "rateLimited") && (
        <div role="alert" className="quick__fail">
          <p>{t(status === "rateLimited" ? "rateLimited" : "failed")}</p>
          <a href={whatsappHref(waMessage())} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--block">{t("sendOnWhatsApp")}</a>
        </div>
      )}
    </form>
  );
}
