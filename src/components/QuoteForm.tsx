"use client";
import { useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { quoteSchema, SERVICE_TYPES } from "@/lib/quote-schema";
import { track } from "@/lib/analytics";

type Errors = Record<string, string>;
type Status = "idle" | "sending" | "success";

const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    turnstile?: { render: (el: HTMLElement, opts: Record<string, unknown>) => string; reset: (id?: string) => void };
  }
}

export default function QuoteForm({ locale }: { locale: string }) {
  const t = useTranslations("form");
  const s = useTranslations("services.items");
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const captchaRef = useRef<HTMLDivElement>(null);
  const startedAt = useRef<number>(0);
  const started = useRef(false);
  const token = useRef("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [failure, setFailure] = useState("");
  const [today, setToday] = useState("");

  useEffect(() => {
    startedAt.current = Date.now();
    const d = new Date();
    setToday(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`);
  }, []);

  useEffect(() => {
    if (!TURNSTILE_KEY) return;
    const render = () => {
      if (captchaRef.current && window.turnstile && !captchaRef.current.hasChildNodes()) {
        window.turnstile.render(captchaRef.current, { sitekey: TURNSTILE_KEY, callback: (tk: string) => (token.current = tk), "expired-callback": () => (token.current = "") });
      }
    };
    if (window.turnstile) return render();
    const el = document.createElement("script");
    el.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    el.async = true;
    el.onload = render;
    document.head.appendChild(el);
  }, []);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const id = (n: string) => `${uid}-${n}`;
  const KNOWN = ["required", "invalid_email", "invalid_phone", "invalid", "past_date", "too_many", "consent"];
  const err = (n: string) => (errors[n] ? t(`errors.${KNOWN.includes(errors[n]) ? errors[n] : "required"}` as never) : "");

  function field(n: string) {
    return {
      id: id(n),
      name: n,
      "aria-invalid": errors[n] ? (true as const) : undefined,
      "aria-describedby": errors[n] ? id(`${n}-err`) : undefined,
    };
  }
  const Err = ({ n }: { n: string }) => (errors[n] ? <span className="error" id={id(`${n}-err`)}>{err(n)}</span> : null);

  function onFirstInput() {
    if (!started.current) {
      started.current = true;
      track("quote_form_start");
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setFailure("");
    const fd = new FormData(e.currentTarget);
    const raw: Record<string, unknown> = Object.fromEntries(fd.entries());
    raw.consent = fd.get("consent") === "on";
    raw.locale = locale;
    raw.startedAt = startedAt.current;
    if (token.current) raw.turnstile = token.current;

    const parsed = quoteSchema.safeParse(raw);
    if (!parsed.success) {
      const next: Errors = {};
      for (const i of parsed.error.issues) next[String(i.path[0])] ??= i.message;
      setErrors(next);
      const first = Object.keys(next)[0];
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus());
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; errors?: Errors };
      if (res.ok && data.ok) {
        track("quote_submit_success", { service: String(parsed.data.service) });
        setStatus("success");
        return;
      }
      if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        return;
      }
      const known = ["not_configured", "rate_limited", "captcha"];
      setFailure(known.includes(data.error ?? "") ? (data.error as string) : "generic");
    } catch {
      setFailure("generic");
    }
    window.turnstile?.reset();
    token.current = "";
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div className="quote-card success" role="status">
        <h2 ref={successRef} tabIndex={-1}>{t("successTitle")}</h2>
        <p>{t("successBody")}</p>
        <button type="button" className="btn btn-dark" onClick={() => { setStatus("idle"); started.current = false; formRef.current?.reset(); }}>
          {t("newRequest")}
        </button>
      </div>
    );
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="quote-card">
      <h2>{t("title")}</h2>
      <p className="sub">{t("subtitle")}</p>
      <form ref={formRef} noValidate onSubmit={onSubmit} onInput={onFirstInput} onChange={onFirstInput} dir="auto">
        <div aria-live="assertive">
          {hasErrors && <div className="alert alert-error">{t("errorSummary")}</div>}
          {failure && <div className="alert alert-error">{t(`failures.${failure}` as never)}</div>}
        </div>
        <div className="form-grid">
          <div className="field full">
            <label htmlFor={id("service")}>{t("service")}</label>
            <select {...field("service")} required defaultValue="">
              <option value="" disabled>{t("servicePlaceholder")}</option>
              {SERVICE_TYPES.map((k) => (
                <option key={k} value={k}>{s(`${k}.title`)}</option>
              ))}
            </select>
            <Err n="service" />
          </div>
          <div className="field">
            <label htmlFor={id("pickup")}>{t("pickup")}</label>
            <input {...field("pickup")} type="text" autoComplete="off" required />
            <span className="hint">{t("pickupHint")}</span>
            <Err n="pickup" />
          </div>
          <div className="field">
            <label htmlFor={id("destination")}>{t("destination")}</label>
            <input {...field("destination")} type="text" autoComplete="off" required />
            <Err n="destination" />
          </div>
          <div className="field">
            <label htmlFor={id("date")}>{t("date")}</label>
            <input {...field("date")} type="date" min={today || undefined} required />
            <Err n="date" />
          </div>
          <div className="field">
            <label htmlFor={id("time")}>{t("time")}</label>
            <input {...field("time")} type="time" required />
            <Err n="time" />
          </div>
          <div className="field full">
            <label htmlFor={id("passengers")}>{t("passengers")}</label>
            <input {...field("passengers")} type="number" inputMode="numeric" min={1} max={50} defaultValue={1} required />
            <Err n="passengers" />
          </div>
          <div className="field">
            <label htmlFor={id("name")}>{t("name")}</label>
            <input {...field("name")} type="text" autoComplete="name" required />
            <Err n="name" />
          </div>
          <div className="field">
            <label htmlFor={id("phone")}>{t("phone")}</label>
            <input {...field("phone")} type="tel" inputMode="tel" autoComplete="tel" dir="ltr" required />
            <span className="hint">{t("phoneHint")}</span>
            <Err n="phone" />
          </div>
          <div className="field full">
            <label htmlFor={id("email")}>{t("email")}</label>
            <input {...field("email")} type="email" autoComplete="email" dir="ltr" required />
            <Err n="email" />
          </div>
        </div>

        <details className="more">
          <summary>{t("more")}</summary>
          <div className="form-grid">
            <div className="field">
              <label htmlFor={id("luggage")}>{t("luggage")}</label>
              <input {...field("luggage")} type="number" inputMode="numeric" min={0} max={100} />
            </div>
            <div className="field">
              <label htmlFor={id("vehicle")}>{t("vehicle")}</label>
              <select {...field("vehicle")} defaultValue="any">
                <option value="any">{t("vehicleAny")}</option>
                <option value="sedan">{t("vehicleSedan")}</option>
                <option value="suv">{t("vehicleSuv")}</option>
                <option value="van">{t("vehicleVan")}</option>
              </select>
              <span className="hint">{t("vehicleNote")}</span>
            </div>
            <div className="field full">
              <label htmlFor={id("flight")}>{t("flight")}</label>
              <input {...field("flight")} type="text" autoComplete="off" dir="ltr" maxLength={12} />
              <Err n="flight" />
            </div>
            <div className="field full">
              <label htmlFor={id("notes")}>{t("notes")}</label>
              <textarea {...field("notes")} maxLength={1000} />
              <span className="hint">{t("notesHint")}</span>
            </div>
          </div>
        </details>

        {/* Honeypot: hidden from users and assistive tech; bots fill it */}
        <div className="hp" aria-hidden="true">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="field full">
          <label className="consent" htmlFor={id("consent")}>
            <input {...field("consent")} type="checkbox" required />
            <span>
              {t("consent")}{" "}
              <Link href="/privacy" target="_blank">{t("privacyLink")}</Link>
            </span>
          </label>
          <Err n="consent" />
        </div>

        {TURNSTILE_KEY && <div ref={captchaRef} style={{ marginBlockStart: "1rem" }} aria-label={t("securityLabel")} />}

        <div className="form-actions">
          <button type="submit" className="btn btn-dark" disabled={status === "sending"} aria-busy={status === "sending"}>
            {status === "sending" ? t("sending") : t("submit")}
          </button>
        </div>
      </form>
    </div>
  );
}
