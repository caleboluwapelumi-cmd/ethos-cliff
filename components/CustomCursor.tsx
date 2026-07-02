"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
    };

    const tick = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    const isInteractive = (el: Element | null) =>
      !!el?.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="active"]',
      );

    const isOnInk = (el: Element | null) => !!el?.closest('[data-cursor-surface="ink"]');

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      ring.classList.toggle("is-active", isInteractive(target));
      ring.classList.toggle("is-dark", isOnInk(target));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
