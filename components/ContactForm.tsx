"use client";

import { useState } from "react";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

type Step = 1 | 2 | 3;

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  websiteLinks: string;
  service: string;
  description: string;
  budget: string;
  timeline: string;
  referral: string;
  anythingElse: string;
}

const INIT: FormData = {
  fullName: "",
  email: "",
  companyName: "",
  websiteLinks: "",
  service: "",
  description: "",
  budget: "",
  timeline: "",
  referral: "",
  anythingElse: "",
};

const SERVICES = [
  "Video Editing",
  "Personal Branding",
  "Business Branding",
  "Search Engine Optimisation (SEO)",
  "Graphics Design",
  "Elevations",
  "Social Media Management",
];

interface Props {
  step: Step;
  onStepChange: (step: Step) => void;
}

export default function ContactForm({ step, onStepChange }: Props) {
  const [data, setData] = useState<FormData>(INIT);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const set =
    (k: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setData((p) => ({ ...p, [k]: e.target.value }));
      setErrors((p) => ({ ...p, [k]: undefined }));
    };

  const selectService = (service: string) => {
    setData((p) => ({ ...p, service }));
    setErrors((p) => ({ ...p, service: undefined }));
  };

  const validate = (): Partial<Record<keyof FormData, string>> => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (step === 1) {
      if (!data.fullName.trim()) e.fullName = "Required.";
      if (!data.email.trim()) e.email = "Required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        e.email = "Enter a valid email address.";
      if (!data.companyName.trim()) e.companyName = "Required.";
    }
    if (step === 2) {
      if (!data.service) e.service = "Please select a service.";
      if (!data.description.trim()) e.description = "Required.";
      if (!data.budget) e.budget = "Please select a budget.";
      if (!data.timeline) e.timeline = "Please select a timeline.";
    }
    if (step === 3) {
      if (!data.referral) e.referral = "Please make a selection.";
    }
    return e;
  };

  const advance = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    if (step < 3) {
      onStepChange((step + 1) as Step);
      setErrors({});
    } else {
      setSubmitted(true);
    }
  };

  const back = () => {
    onStepChange((step - 1) as Step);
    setErrors({});
  };

  /* ── Confirmation ── */
  if (submitted) {
    const firstName = data.fullName.split(" ")[0];
    return (
      <div className="py-8 motion-safe:animate-fade-in">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="22" stroke="var(--ec-red)" strokeWidth="2" />
          <path
            d="M15 24.5l6 6 12-13"
            stroke="var(--ec-red)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2
          className="mt-6 text-h2"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
        >
          You&rsquo;re on our radar.
        </h2>
        <p className="mt-4 text-body" style={{ fontSize: "1.05rem" }}>
          Thanks {firstName}. We&rsquo;ll review your brief and get back to
          you within 24 hours.
        </p>
        <Link href="/" className="link-sweep mt-8" style={{ display: "inline-flex" }}>
          <span className="link-sweep-arrow">&larr;</span> Back to home
        </Link>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <div>
      <form noValidate onSubmit={advance} className="space-y-8">
        <div
          key={step}
          className="motion-safe:animate-fade-in space-y-8"
          style={{ animationDuration: "200ms" }}
        >
          {/* ── Step 1 — About You ── */}
          {step === 1 && (
            <>
              <div className="grid gap-8 sm:grid-cols-2">
                <Field label="Full Name" id="fullName" required error={errors.fullName}>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Jane Smith"
                    autoComplete="name"
                    value={data.fullName}
                    onChange={set("fullName")}
                    aria-invalid={!!errors.fullName}
                    className="field-input"
                  />
                </Field>
                <Field label="Email Address" id="email" required error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    autoComplete="email"
                    value={data.email}
                    onChange={set("email")}
                    aria-invalid={!!errors.email}
                    className="field-input"
                  />
                </Field>
              </div>
              <Field
                label="Company / Project Name"
                id="companyName"
                required
                error={errors.companyName}
              >
                <input
                  id="companyName"
                  type="text"
                  placeholder="Acme Brand Co."
                  value={data.companyName}
                  onChange={set("companyName")}
                  aria-invalid={!!errors.companyName}
                  className="field-input"
                />
              </Field>
              <Field label="Website / Social Links" id="websiteLinks" error={undefined}>
                <input
                  id="websiteLinks"
                  type="text"
                  placeholder="https://yoursite.com (optional)"
                  value={data.websiteLinks}
                  onChange={set("websiteLinks")}
                  className="field-input"
                />
              </Field>
            </>
          )}

          {/* ── Step 2 — The Project ── */}
          {step === 2 && (
            <>
              <div>
                <label className="eyebrow" style={{ display: "block" }}>
                  Service needed
                  <span style={{ color: "var(--ec-red)" }} aria-hidden="true">
                    {" "}
                    *
                  </span>
                </label>
                <div className="mt-3 flex flex-wrap gap-3" role="group" aria-label="Service needed">
                  {SERVICES.map((s) => {
                    const active = data.service === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => selectService(s)}
                        aria-pressed={active}
                        className={`pill-button${active ? " is-active" : ""}`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
                {errors.service && (
                  <p
                    role="alert"
                    className="mt-1.5"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
                      color: "var(--ec-red)",
                    }}
                  >
                    {errors.service}
                  </p>
                )}
              </div>
              <Field
                label="Project description"
                id="description"
                required
                error={errors.description}
              >
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Tell us about your project — what you're building, what you need, and what success looks like."
                  value={data.description}
                  onChange={set("description")}
                  aria-invalid={!!errors.description}
                  className="field-input resize-none"
                />
              </Field>
              <div className="grid gap-8 sm:grid-cols-2">
                <Field label="Budget range" id="budget" required error={errors.budget}>
                  <select
                    id="budget"
                    value={data.budget}
                    onChange={set("budget")}
                    aria-invalid={!!errors.budget}
                    className="field-input"
                  >
                    <option value="">Select a range</option>
                    <option>Under $500</option>
                    <option>$500–$1,500</option>
                    <option>$1,500–$5,000</option>
                    <option>$5,000+</option>
                  </select>
                </Field>
                <Field label="Timeline" id="timeline" required error={errors.timeline}>
                  <select
                    id="timeline"
                    value={data.timeline}
                    onChange={set("timeline")}
                    aria-invalid={!!errors.timeline}
                    className="field-input"
                  >
                    <option value="">Select a timeline</option>
                    <option>ASAP</option>
                    <option>1–2 months</option>
                    <option>3–6 months</option>
                    <option>Flexible</option>
                  </select>
                </Field>
              </div>
            </>
          )}

          {/* ── Step 3 — Logistics ── */}
          {step === 3 && (
            <>
              <Field
                label="How did you hear about us?"
                id="referral"
                required
                error={errors.referral}
              >
                <select
                  id="referral"
                  value={data.referral}
                  onChange={set("referral")}
                  aria-invalid={!!errors.referral}
                  className="field-input"
                >
                  <option value="">Select one</option>
                  <option>Instagram</option>
                  <option>LinkedIn</option>
                  <option>Referral</option>
                  <option>Google</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Anything else?" id="anythingElse" error={undefined}>
                <textarea
                  id="anythingElse"
                  rows={4}
                  placeholder="Any additional context, questions, or things we should know (optional)."
                  value={data.anythingElse}
                  onChange={set("anythingElse")}
                  className="field-input resize-none"
                />
              </Field>
            </>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 pt-2">
          {step > 1 ? (
            <button type="button" onClick={back} className="btn-text" style={{ paddingLeft: 0 }}>
              &larr; Back
            </button>
          ) : (
            <div />
          )}
          <Magnetic strength={0.25}>
            <button
              type="submit"
              className="btn-primary"
              style={{ paddingInline: "2.5rem" }}
            >
              {step < 3 ? "Continue →" : "Send Enquiry"}
            </button>
          </Magnetic>
        </div>
      </form>
    </div>
  );
}

/* ── Module-level helpers (not exported) ── */

function Field({
  label,
  id,
  required,
  error,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  error: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow" style={{ display: "block" }}>
        {label}
        {required && (
          <span style={{ color: "var(--ec-red)" }} aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p
          role="alert"
          className="mt-1.5"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            color: "var(--ec-red)",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
