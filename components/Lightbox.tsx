"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  altPrefix: string;
}

export default function Lightbox({ images, altPrefix }: Props) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length],
  );

  /* keyboard nav + focus management */
  useEffect(() => {
    if (!open) return;
    prevFocusRef.current = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
      prevFocusRef.current?.focus();
    };
  }, [open, close, prev, next]);

  /* scroll lock */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (images.length === 0) return null;

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i);
              setOpen(true);
            }}
            className="group relative aspect-[4/3] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            style={{ border: "1px solid var(--ec-line)", borderRadius: "4px" }}
            aria-label={`View ${altPrefix} image ${i + 1} of ${images.length}`}
          >
            <Image
              src={src}
              alt={`${altPrefix} — gallery ${i + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/30">
              <svg
                className="text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${altPrefix} gallery`}
        >
          {/* Close */}
          <button
            ref={closeButtonRef}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={close}
            aria-label="Close gallery"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Counter */}
          {images.length > 1 && (
            <div className="absolute left-1/2 top-4 -translate-x-1/2 font-sans text-xs text-white/50">
              {current + 1} / {images.length}
            </div>
          )}

          {/* Prev / Next */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="relative h-[85vh] w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[current]}
              alt={`${altPrefix} — ${current + 1} of ${images.length}`}
              fill
              className="object-contain"
              unoptimized
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
