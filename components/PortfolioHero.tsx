"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TextReveal from "@/components/TextReveal";

const SLIDES = [
  "/images/POTFOLIO KIT/Atinuda/mockup alatinuda.png",
  "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/etanto naturals bottles-Recovered.png",
  "/images/POTFOLIO KIT/RINA DONE/Store Entrance Logo Mockup (2).png",
  "/images/POTFOLIO KIT/medsafe/Full Face MedSafe.png",
];

export default function PortfolioHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      data-cursor-surface="ink"
      className="relative flex overflow-hidden pt-24 sm:pt-20"
      style={{ minHeight: "90vh", background: "var(--ec-ink)" }}
    >
      {/* Slideshow layer */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 0 }} aria-hidden="true">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity"
            style={{
              opacity: i === active ? 0.7 : 0,
              transitionDuration: "400ms",
              transitionTimingFunction: "ease",
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              quality={50}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Legibility overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(135deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.15) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Foreground content */}
      <div className="container relative flex flex-1 flex-col justify-center" style={{ zIndex: 2 }}>
        <div className="flex items-start justify-between">
          <div>
            <p className="eyebrow motion-safe:animate-fade-up" style={{ color: "var(--ec-on-ink-soft)" }}>
              Selected Work
            </p>
            <div className="mt-4">
              <TextReveal
                as="h1"
                className="text-hero"
                style={{
                  fontSize: "clamp(3rem, 6vw, 6rem)",
                  color: "var(--ec-on-ink)",
                  textTransform: "none",
                }}
                lines={[
                  <span key="l1">Brands We&rsquo;ve Helped{" "}</span>,
                  <span key="l2">Find Their Voice.</span>,
                ]}
              />
            </div>
            <p
              className="mt-6 text-body motion-safe:animate-fade-up"
              style={{
                maxWidth: "48ch",
                fontSize: "1.05rem",
                color: "var(--ec-on-ink-soft)",
                animationDelay: "300ms",
              }}
            >
              Every project below is a real business we helped become
              unforgettable.
            </p>
          </div>

          <span
            className="hidden shrink-0 eyebrow sm:inline-flex"
            style={{ color: "var(--ec-on-ink-soft)" }}
          >
            {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>

        {/* Slide indicator dots */}
        <div className="absolute inset-x-0 bottom-10 flex justify-center gap-3">
          {SLIDES.map((src, i) => (
            <span
              key={src}
              className="transition-all"
              style={{
                width: i === active ? "1.75rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "999px",
                background: i === active ? "var(--ec-red)" : "rgba(255,255,255,0.35)",
                transitionDuration: "300ms",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
