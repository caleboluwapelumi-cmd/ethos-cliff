"use client";

import { useEffect, useRef, useState } from "react";

type Tag = "h1" | "h2" | "h3" | "p" | "div";

interface TextRevealProps {
  lines: React.ReactNode[];
  as?: Tag;
  className?: string;
  style?: React.CSSProperties;
}

export default function TextReveal({
  lines,
  as: Component = "h1",
  className,
  style,
}: TextRevealProps) {
  const elRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const setRef = (node: HTMLElement | null) => {
    elRef.current = node;
  };

  useEffect(() => {
    const el = elRef.current;
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
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component ref={setRef} className={className} style={style}>
      {lines.map((line, i) => (
        <span className="text-reveal-wrap" key={i}>
          <span
            className={`text-reveal-line${visible ? " is-visible" : ""}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </Component>
  );
}
