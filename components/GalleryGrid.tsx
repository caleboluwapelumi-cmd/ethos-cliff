"use client";

import Image from "next/image";
import { useLightbox } from "@/components/LightboxProvider";

interface Props {
  images: string[];
  alt: string;
  /** offset into the shared lightbox images array (cover image occupies index 0) */
  indexOffset?: number;
}

export default function GalleryGrid({ images, alt, indexOffset = 0 }: Props) {
  const { open } = useLightbox();

  return (
    <div style={{ columnCount: 2, columnGap: "1rem" }}>
      {images.map((src, i) => (
        <div key={src} style={{ breakInside: "avoid", marginBottom: "1rem" }}>
          <button
            type="button"
            className="gallery-item"
            onClick={() => open(indexOffset + i)}
            aria-label={`View ${alt} gallery image ${i + 1} full-screen`}
          >
            <Image
              src={src}
              alt={alt}
              width={800}
              height={600}
              className="w-full object-cover"
              style={{ borderRadius: "4px" }}
            />
            <span className="gallery-item-expand" aria-hidden="true">
              &#8599;
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}
