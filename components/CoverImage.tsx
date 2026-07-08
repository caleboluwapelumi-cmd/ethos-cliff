"use client";

import Image from "next/image";
import ImageReveal from "@/components/ImageReveal";
import { useLightbox } from "@/components/LightboxProvider";

interface Props {
  src: string;
  alt: string;
}

export default function CoverImage({ src, alt }: Props) {
  const { open } = useLightbox();

  return (
    <button
      type="button"
      className="gallery-item relative aspect-[16/9] w-full overflow-hidden"
      style={{ border: "1px solid var(--ec-line)", borderRadius: "8px" }}
      onClick={() => open(0)}
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
