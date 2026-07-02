"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ImageReveal({ children, className = "" }: Props) {
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
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`img-reveal ${className}`}>
      {children}
      <span className={`img-reveal-mask${visible ? " is-open" : ""}`} aria-hidden="true" />
    </div>
  );
}
