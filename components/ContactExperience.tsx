"use client";

import { useState } from "react";
import TextReveal from "@/components/TextReveal";
import ContactForm from "@/components/ContactForm";

type Step = 1 | 2 | 3;

const STEPS: { n: Step; label: string }[] = [
  { n: 1, label: "About You" },
  { n: 2, label: "The Project" },
  { n: 3, label: "Logistics" },
];

const directLinks = ["Email", "Instagram", "LinkedIn", "WhatsApp"];

export default function ContactExperience() {
  const [step, setStep] = useState<Step>(1);

  return (
    <div className="grid gap-16 lg:grid-cols-[2fr_3fr] lg:gap-0">
      {/* ── Left column — sticky ── */}
      <div className="lg:sticky lg:top-24 lg:h-fit lg:pr-16">
        <p className="eyebrow motion-safe:animate-fade-up">
          New Project Enquiry
        </p>
        <div className="mt-4">
          <TextReveal
            as="h1"
            className="text-hero"
            style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}
            lines={[
              <span key="l1">Let&rsquo;s build</span>,
              <span key="l2">something remarkable.</span>,
            ]}
          />
        </div>
        <p
          className="mt-6 text-body motion-safe:animate-fade-up"
          style={{
            maxWidth: "40ch",
            fontSize: "1.05rem",
            animationDelay: "300ms",
          }}
        >
          Fill out the brief and we&rsquo;ll get back to you within 24 hours.
        </p>

        {/* Step progress */}
        <div
          className="mt-12 flex flex-col gap-5"
          aria-label="Form progress"
        >
          {STEPS.map(({ n, label }) => {
            const state: "active" | "done" | "upcoming" =
              n === step ? "active" : n < step ? "done" : "upcoming";
            return (
              <div key={n} className="flex items-center gap-4">
                <span
                  className={`step-sidebar-num step-sidebar-num--${state}`}
                  aria-hidden="true"
                >
                  {state === "done" ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8.5l3.5 3.5L13 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    String(n).padStart(2, "0")
                  )}
                </span>
                <span
                  className={`step-sidebar-label step-sidebar-label--${state}`}
                  aria-current={state === "active" ? "step" : undefined}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Direct contact */}
        <div className="mt-12">
          <p className="eyebrow">Or connect directly</p>
          <ul className="mt-6 flex flex-col gap-3" role="list">
            {directLinks.map((label) => (
              <li key={label}>
                <span
                  className="text-link"
                  style={{ cursor: "default", fontSize: "0.95rem" }}
                >
                  &rarr; {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Right column — form ── */}
      <div className="lg:border-l lg:pl-16 lg:[border-color:var(--ec-line)]">
        <ContactForm step={step} onStepChange={setStep} />
      </div>
    </div>
  );
}
