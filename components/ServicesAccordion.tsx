"use client";

import { useState } from "react";

interface Service {
  n: string;
  name: string;
  hook: string;
  body: string;
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`accordion-chevron${open ? " is-open" : ""}`}
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="var(--ec-ink-faint)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesAccordion({
  services,
}: {
  services: readonly Service[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {services.map((s, i) => {
        const open = openIndex === i;
        return (
          <div key={s.n} className={`accordion-row${open ? " is-open" : ""}`}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-6 text-left"
            >
              <span className="flex items-baseline gap-6">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    color: "var(--ec-line-strong)",
                  }}
                >
                  {s.n}
                </span>
                <span className="text-h3">{s.name}</span>
              </span>
              <span className="flex items-center gap-6">
                <span
                  className="hidden text-right sm:block"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--ec-ink-faint)",
                    fontSize: "0.9rem",
                    maxWidth: "28ch",
                  }}
                >
                  {s.hook}
                </span>
                <Chevron open={open} />
              </span>
            </button>
            <div className={`accordion-body${open ? " is-open" : ""}`}>
              <p className="text-body mt-4" style={{ maxWidth: "60ch" }}>
                {s.body}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
