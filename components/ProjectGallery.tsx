"use client";

import { useState } from "react";
import Link from "next/link";
import Lightbox from "@/components/Lightbox";
import CoverImage from "@/components/CoverImage";
import GalleryGrid from "@/components/GalleryGrid";
import ScrollReveal from "@/components/ScrollReveal";
import type { Category, Project } from "@/lib/portfolio-data";

interface Props {
  project: Project;
  category: Category | null;
}

export default function ProjectGallery({ project, category }: Props) {
  const allImages = [project.coverImage, ...project.gallery];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const open = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);
  const next = () => setCurrentIndex((i) => (i + 1) % allImages.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + allImages.length) % allImages.length);

  return (
    <>
      {/* ─────────── Breadcrumb ─────────── */}
      <div className="container pt-28 sm:pt-32">
        <p className="eyebrow" style={{ textTransform: "none", letterSpacing: 0 }}>
          <Link href="/portfolio" className="text-link">
            Portfolio
          </Link>{" "}
          / {project.title}
        </p>
      </div>

      {/* ─────────── Header ─────────── */}
      <header className="container pb-10 pt-6">
        <p className="eyebrow">{category?.label}</p>
        <h1 className="mt-4 text-hero" style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}>
          {project.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="eyebrow">{project.client}</span>
          <span style={{ color: "var(--ec-line-strong)" }} aria-hidden="true">
            &middot;
          </span>
          <span className="eyebrow">{category?.title}</span>
          <span style={{ color: "var(--ec-line-strong)" }} aria-hidden="true">
            &middot;
          </span>
          <span className="eyebrow">{project.year}</span>
        </div>
      </header>

      {/* ─────────── Cover image ─────────── */}
      <div className="container">
        <CoverImage src={project.coverImage} alt={project.title} onOpen={() => open(0)} />
      </div>

      {/* ─────────── Case study body ─────────── */}
      <div className="container" style={{ maxWidth: "760px" }}>
        <div className="section-sm space-y-14">
          <ScrollReveal>
            <section>
              <p className="eyebrow">The Challenge</p>
              <p className="mt-5 text-body" style={{ fontSize: "1.1rem" }}>
                {project.challenge}
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section>
              <p className="eyebrow">Our Approach</p>
              <p className="mt-5 text-body" style={{ fontSize: "1.1rem" }}>
                {project.approach}
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section>
              <p className="eyebrow">The Outcome</p>
              <p className="pull-quote mt-5">{project.results}</p>
            </section>
          </ScrollReveal>
        </div>
      </div>

      {/* ─────────── Gallery ─────────── */}
      {project.gallery.length > 0 && (
        <section className="container section-sm divider">
          <ScrollReveal>
            <p className="eyebrow mb-8">Gallery</p>
          </ScrollReveal>
          <GalleryGrid images={project.gallery} alt={project.title} indexOffset={1} onOpen={open} />
        </section>
      )}

      <Lightbox
        images={allImages}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={close}
        onNext={next}
        onPrev={prev}
      />
    </>
  );
}
