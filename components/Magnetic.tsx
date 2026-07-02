"use client";

import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function Magnetic({ children, className = "", strength = 0.35 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useRef(false);

  if (typeof window !== "undefined" && reduced.current === false) {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced.current) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  return (
    <div
      ref={ref}
      className={`magnetic ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
