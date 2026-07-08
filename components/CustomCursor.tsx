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

    let ringX = 0;
    let ringY = 0;
    let targetX = ringX;
    let targetY = ringY;
    let rafId: number;
    let hasMoved = false;

    dot.style.opacity = "0";
    ring.style.opacity = "0";

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;

      if (!hasMoved) {
        hasMoved = true;
        ringX = targetX;
        ringY = targetY;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        dot.style.opacity = "";
        ring.style.opacity = "";
      }
    };

    const tick = () => {
      if (hasMoved) {
        ringX += (targetX - ringX) * 0.18;
        ringY += (targetY - ringY) * 0.18;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
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
