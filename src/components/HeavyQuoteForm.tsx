"use client";

import { useId, useRef, useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { CONDITIONS, emptyHeavy, HEAVY_SERVICES, isVehicleService, LOAD_METHODS, validateHeavy, type HeavyErrors, type HeavyQuoteInput } from "@/lib/heavy-quote";
import { readAttribution } from "@/lib/attribution";
import { track } from "@/lib/analytics";
import { whatsappHref } from "@/config/contact";
import { Link } from "@/i18n/navigation";

type Status = "idle" | "sending" | "success" | "notConfigured" | "rateLimited" | "failed";

const noSubscribe = () => () => {};
const localToday = () => new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

/**
 * Heavy transport / satha quotation form. Fields change with the service: a car recovery request
 * never asks for machine dimensions, and a machinery request always asks for the weight.
 * No price is ever shown; the result is an enquiry with a reference number.
 */
export function HeavyQuoteForm({ locale, defaultService }: { locale: string; defaultService?: string }) {
  const t = useTranslations("heavy.form");
  const uid = useId();
  const [data, setData] = useState<HeavyQuoteInput>({ ...emptyHeavy(), locale, service: defaultService ?? "" });
  const [errors, setErrors] = useState<HeavyErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [receipt, setReceipt] = useState<{ reference?: string; wa: string } | null>(null);
  const [started, setStarted] = useState(false);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const sendingRef = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const today = useSyncExternalStore(noSubscribe, localToday, () => undefined);
  const vehicle = isVehicleService(data.service);
  const machine = !!data.service && !vehicle;

  const set = <K extends keyof HeavyQuoteInput>(k: K, v: HeavyQuoteInput[K]) => {
    if (!started) {
      setStarted(true);
      track("quote_form_start", { form: "heavy_quote", language: locale });
    }
    setData((d) => ({ ...d, [k]: v }));
  };

  const waText = (ref: string) =>
    t("whatsappMessage", {
      ref,
      service: data.service ? t(`services.${data.service}` as never) : "-",
      load: [data.loadType, data.makeModel].filter(Boolean).join(" ") || "-",
      pickup: data.pickup || "-",
      dropoff: data.dropoff || "-",
      date: data.date || "-",
      weight: data.weight || "-",
    });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (sendingRef.current) return;
    const errs = validateHeavy(data);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      track("form_error", { form: "heavy_quote", field: first });
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    sendingRef.current = true;
    setStatus("sending");
    track("quote_form_submit", { form: "heavy_quote", service: data.service, language: locale });
    try {
      const res = await fetch("/api/heavy-quote/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, startedAt, source: window.location.pathname, attribution: readAttribution() }),
      });
      if (res.ok) {
        const j = await res.json().catch(() => ({}));
        setReceipt({ reference: j.reference, wa: whatsappHref(waText(j.reference ?? "-")) });
        // No names, phone numbers or locations are sent to analytics.
        track("quote_form_success", { form: "heavy_quote", service: data.service, language: locale });
        track("generate_lead", { form: "heavy_quote", service: data.service, language: locale });
        track("quote_request", { service: `heavy_${data.service}`, language: locale });
        setStatus("success");
        setData({ ...emptyHeavy(), locale, service: data.service });
        setStartedAt(Date.now());
      } else if (res.status === 503) setStatus("notConfigured");
      else if (res.status === 429) setStatus("rateLimited");
      else if (res.status === 422) {
        const j = await res.json().catch(() => ({}));
        setErrors(j.fields || {});
        setStatus("failed");
      } else setStatus("failed");
    } catch {
      setStatus("failed");
    }
    sendingRef.current = false;
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const id = (n: string) => `h-${n}`;
  const err = (k: keyof HeavyQuoteInput) => (errors[k] ? t(`errors.${errors[k]}` as never) : null);
  const described = (k: string, hint?: boolean) =>
    [hint ? `${uid}-${k}-h` : "", errors[k as keyof HeavyQuoteInput] ? `${uid}-${k}-e` : ""].filter(Boolean).join(" ") || undefined;

  function Field(p: { name: keyof HeavyQuoteInput; label: string; hint?: string; type?: string; inputMode?: "tel" | "decimal" | "email" | "text"; autoComplete?: string; required?: boolean; maxLength?: number; dir?: "ltr"; wide?: boolean; min?: string }) {
    const { name, label, hint, type = "text", required, wide, ...rest } = p;
    const e = err(name);
    return (
      <div className={`field${wide ? " field--wide" : ""}`}>
        <label htmlFor={id(name)}>{label}{required && <span aria-hidden="true"> *</span>}</label>
        <input id={id(name)} name={name} type={type} value={String(data[name] ?? "")} onChange={(ev) => set(name, ev.target.value as never)}
          required={required} aria-invalid={e ? true : undefined} aria-describedby={described(name, !!hint)} {...rest} />
        {hint && <p id={`${uid}-${name}-h`} className="field__hint">{hint}</p>}
        {e && <p id={`${uid}-${name}-e`} className="field__error">{e}</p>}
      </div>
    );
  }

  function Select(p: { name: keyof HeavyQuoteInput; label: string; options: readonly string[]; prefix: string; required?: boolean; wide?: boolean; placeholder: string }) {
    const e = err(p.name);
    return (
      <div className={`field${p.wide ? " field--wide" : ""}`}>
        <label htmlFor={id(p.name)}>{p.label}{p.required && <span aria-hidden="true"> *</span>}</label>
        <select id={id(p.name)} name={p.name} value={String(data[p.name])} onChange={(ev) => set(p.name, ev.target.value as never)}
          required={p.required} aria-invalid={e ? true : undefined} aria-describedby={described(p.name)}>
          <option value="">{p.placeholder}</option>
          {p.options.map((o) => <option key={o} value={o}>{t(`${p.prefix}.${o}` as never)}</option>)}
        </select>
        {e && <p id={`${uid}-${p.name}-e`} className="field__error">{e}</p>}
      </div>
    );
  }

  const messageKey = status === "idle" || status === "sending" ? null : status;

  return (
    <form ref={formRef} className="form form--heavy" onSubmit={onSubmit} noValidate aria-labelledby={`${uid}-title`}>
      <h3 id={`${uid}-title`} className="form__title">{t("title")}</h3>
      {Object.keys(errors).length > 0 && status !== "success" && <p role="alert" className="form__summary">{t("errors.summary")}</p>}

      <fieldset>
        <legend>{t("load")}</legend>
        <div className="grid">
          {Select({ name: "service", label: t("service"), options: HEAVY_SERVICES, prefix: "services", required: true, wide: true, placeholder: t("servicePlaceholder") })}
          {Field({ name: "loadType", label: vehicle ? t("vehicleType") : t("machineType"), hint: vehicle ? t("vehicleTypeHint") : t("machineTypeHint"), required: true, maxLength: 80 })}
          {Field({ name: "makeModel", label: t("makeModel"), maxLength: 120 })}
          {vehicle && Select({ name: "condition", label: t("condition"), options: CONDITIONS, prefix: "conditions", required: true, wide: true, placeholder: t("choose") })}
          {machine && (
            <>
              {Field({ name: "weight", label: t("weight"), hint: t("weightHint"), inputMode: "decimal", required: true, maxLength: 8, dir: "ltr", wide: true })}
              {Field({ name: "length", label: t("length"), inputMode: "decimal", maxLength: 8, dir: "ltr" })}
              {Field({ name: "width", label: t("width"), inputMode: "decimal", maxLength: 8, dir: "ltr" })}
              {Field({ name: "height", label: t("height"), hint: t("dimsHint"), inputMode: "decimal", maxLength: 8, dir: "ltr", wide: true })}
              {Select({ name: "loading", label: t("loading"), options: LOAD_METHODS, prefix: "methods", placeholder: t("choose") })}
              {Select({ name: "unloading", label: t("unloading"), options: LOAD_METHODS, prefix: "methods", placeholder: t("choose") })}
            </>
          )}
        </div>
      </fieldset>

      <fieldset>
        <legend>{t("route")}</legend>
        <div className="grid">
          {Field({ name: "pickup", label: t("pickup"), hint: t("locationHint"), required: true, maxLength: 200, autoComplete: "off", wide: true })}
          {Field({ name: "dropoff", label: t("dropoff"), required: true, maxLength: 200, autoComplete: "off", wide: true })}
          {Field({ name: "date", label: t("date"), type: "date", required: true, min: today })}
        </div>
      </fieldset>

      <fieldset>
        <legend>{t("you")}</legend>
        <div className="grid">
          {Field({ name: "name", label: t("name"), required: true, autoComplete: "name", maxLength: 160 })}
          {Field({ name: "company", label: t("company"), autoComplete: "organization", maxLength: 160 })}
          {Field({ name: "phone", label: t("phone"), hint: t("phoneHint"), type: "tel", inputMode: "tel", required: true, autoComplete: "tel", maxLength: 20, dir: "ltr" })}
          {Field({ name: "email", label: t("email"), type: "email", inputMode: "email", autoComplete: "email", maxLength: 160, dir: "ltr" })}
          <div className="field field--wide">
            <label htmlFor={id("notes")}>{t("notes")}</label>
            <textarea id={id("notes")} name="notes" rows={3} maxLength={1500} value={data.notes} onChange={(e) => set("notes", e.target.value)} aria-describedby={`${uid}-notes-h`} />
            <p id={`${uid}-notes-h`} className="field__hint">{t("photosHint")}</p>
          </div>
        </div>
      </fieldset>

      <div className="hp" aria-hidden="true">
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" value={data.website} onChange={(e) => set("website", e.target.value)} /></label>
      </div>

      <div className="check">
        <input id={id("consent")} name="consent" type="checkbox" checked={data.consent} onChange={(e) => set("consent", e.target.checked)}
          aria-invalid={errors.consent ? true : undefined} aria-describedby={errors.consent ? `${uid}-consent-e` : undefined} />
        <label htmlFor={id("consent")}>{t.rich("consent", { privacy: (chunks) => <Link href="/privacy-policy">{chunks}</Link> })}</label>
      </div>
      {errors.consent && <p id={`${uid}-consent-e`} className="field__error">{t("errors.consent")}</p>}

      <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={status === "sending"}>
        {status === "sending" ? t("sending") : t("submit")}
      </button>

      <div ref={statusRef} tabIndex={-1} role="status" aria-live="polite" className="form__status">
        {messageKey && <p className={status === "success" ? "ok" : "bad"}>{t(`status.${messageKey}` as never)}</p>}
        {(status === "failed" || status === "notConfigured") && Object.keys(errors).length === 0 && (
          <p><a href={whatsappHref(waText("-"))} target="_blank" rel="noopener noreferrer" className="btn btn--primary">{t("sendOnWhatsApp")}</a></p>
        )}
        {status === "success" && receipt && (
          <p>
            {receipt.reference && <strong>{t("reference", { ref: receipt.reference })} </strong>}
            <a href={receipt.wa} target="_blank" rel="noopener noreferrer" className="btn btn--primary">{t("photosWhatsApp")}</a>
          </p>
        )}
      </div>
    </form>
  );
}
