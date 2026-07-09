"use client";

import Image from "next/image";
import ImageReveal from "@/components/ImageReveal";

interface Props {
  src: string;
  alt: string;
  onOpen: () => void;
}

export default function CoverImage({ src, alt, onOpen }: Props) {
  return (
    <button
      type="button"
      className="gallery-item relative aspect-[16/9] w-full overflow-hidden"
      style={{ border: "1px solid var(--ec-line)", borderRadius: "8px" }}
      onClick={onOpen}
      aria-label={`View ${alt} cover image full-screen`}
    >
      <ImageReveal className="h-full w-full">
        <Image src={src} alt={alt} fill className="object-cover" priority sizes="100vw" />
      </ImageReveal>
      <span className="gallery-item-expand" aria-hidden="true">
        &#8599;
      </span>
    </button>
  );
}
