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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 sm:pt-20"
      style={{ background: "var(--ec-ink)" }}
    >
      {/* Slideshow layer */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity"
            style={{
              opacity: i === active ? 0.35 : 0,
              transitionDuration: "400ms",
              transitionTimingFunction: "ease",
            }}
          >
            <Image src={src} alt="" fill className="object-cover" priority={i === 0} />
          </div>
        ))}
        <div className="absolute inset-0" style={{ background: "var(--ec-ink-gradient)", opacity: 0.7 }} />
      </div>

      <div className="container relative" style={{ zIndex: 1 }}>
        <p className="eyebrow motion-safe:animate-fade-up" style={{ color: "var(--ec-on-ink-soft)" }}>
          Selected Work
        </p>
        <div className="mt-4">
          <TextReveal
            as="h1"
            className="text-hero"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", color: "var(--ec-on-ink)" }}
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
    </section>
  );
}
