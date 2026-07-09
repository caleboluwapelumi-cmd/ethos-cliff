"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    n: "01",
    name: "Discover",
    desc: "We dig deep into your brand, audience, and goals.",
  },
  {
    n: "02",
    name: "Strategy",
    desc: "We build a roadmap that aligns creativity with business outcomes.",
  },
  {
    n: "03",
    name: "Create",
    desc: "We execute with precision — every asset, every detail.",
  },
  {
    n: "04",
    name: "Launch",
    desc: "We deliver a brand ready to make its mark in the world.",
  },
] as const;

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mt-16 pt-12">
      {/* Connecting line — desktop only, draws left to right on scroll into view */}
      <div
        className="absolute top-0 hidden lg:block"
        style={{
          left: "0%",
          right: "0%",
          height: "1px",
          background: "var(--ec-line)",
        }}
        aria-hidden="true"
      >
        <div
          className={`timeline-line${visible ? " is-visible" : ""}`}
          style={{ height: "1px", background: "var(--ec-red)" }}
        />
      </div>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ n, name, desc }) => (
          <div
            key={n}
            className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <span
              aria-hidden="true"
              className="absolute"
              style={{
                top: 0,
                left: 0,
                zIndex: 0,
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(3rem, 5vw, 5rem)",
                color: "var(--ec-red)",
                opacity: 0.15,
                lineHeight: 1,
              }}
            >
              {n}
            </span>
            <div
              className="relative flex flex-col items-center lg:items-start"
              style={{ zIndex: 1, marginTop: "clamp(3.5rem, 5.5vw, 5.5rem)" }}
            >
              <h3 className="text-h3">{name}</h3>
              <p className="mt-2 text-body" style={{ maxWidth: "24ch" }}>
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
