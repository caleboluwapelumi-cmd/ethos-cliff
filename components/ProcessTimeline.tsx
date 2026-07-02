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
    <div ref={ref} className="relative mt-16">
      {/* Connecting line — desktop only, draws left to right on scroll into view */}
      <div
        className="absolute top-6 hidden lg:block"
        style={{
          left: "12.5%",
          right: "12.5%",
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
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "var(--ec-red)",
              }}
            >
              {n}
            </span>
            <h3 className="mt-3 text-h3">{name}</h3>
            <p className="mt-2 text-body" style={{ maxWidth: "24ch" }}>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
