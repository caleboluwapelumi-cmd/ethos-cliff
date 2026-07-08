"use client";

import { createContext, useContext, useState } from "react";
import Lightbox from "@/components/Lightbox";

interface LightboxContextValue {
  open: (index: number) => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within a LightboxProvider");
  return ctx;
}

interface Props {
  images: string[];
  children: React.ReactNode;
}

export default function LightboxProvider({ images, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const open = (i: number) => {
    setIndex(i);
    setIsOpen(true);
  };

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      <Lightbox
        images={images}
        initialIndex={index}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </LightboxContext.Provider>
  );
}
