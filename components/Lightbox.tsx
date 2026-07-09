"use client";

import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || !isOpen || !images[currentIndex]) return null;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(0,0,0,0.95)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "zoom-out",
      }}
    >
      {/* Counter */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.8rem",
          fontFamily: "var(--font-sans)",
          letterSpacing: "0.1em",
          zIndex: 100001,
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>

      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close gallery"
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          zIndex: 100001,
          width: "44px",
          height: "44px",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "4px",
          background: "rgba(255,255,255,0.08)",
          color: "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
          style={{
            position: "absolute",
            left: "1.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 100001,
            width: "48px",
            height: "48px",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "4px",
            background: "rgba(255,255,255,0.08)",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
          style={{
            position: "absolute",
            right: "1.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 100001,
            width: "48px",
            height: "48px",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "4px",
            background: "rgba(255,255,255,0.08)",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "90vw",
          height: "85vh",
          maxWidth: "1400px",
          cursor: "default",
        }}
      >
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1} of ${images.length}`}
          fill
          unoptimized
          priority
          style={{ objectFit: "contain" }}
          sizes="90vw"
        />
      </div>
    </div>,
    document.body
  );
}
