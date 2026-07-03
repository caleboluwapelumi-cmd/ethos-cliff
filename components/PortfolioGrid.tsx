"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import FaviconPlaceholder from "@/components/FaviconPlaceholder";
import ImageReveal from "@/components/ImageReveal";

function driveUrl(fileId: string) {
  return `https://lh3.googleusercontent.com/d/${fileId}`;
}

const PAGE_SIZE = 9;

// PLACEHOLDER — replace with real Sheets data when available
const placeholderProjects = [
  { title: "The Apex Rebrand", category: "Business Branding", year: "2024" },
  { title: "Verve Social Campaign", category: "Social Media Management", year: "2024" },
  { title: "Luminary Personal Brand", category: "Personal Branding", year: "2025" },
  { title: "NovaCraft SEO Overhaul", category: "SEO", year: "2024" },
  { title: "Pulse Video Series", category: "Video Editing", year: "2025" },
  { title: "Terra Elevation Project", category: "Elevations", year: "2024" },
  { title: "Orbit Graphics Suite", category: "Graphics Design", year: "2025" },
  { title: "Beacon Brand Identity", category: "Business Branding", year: "2025" },
  { title: "Rize Personal Brand", category: "Personal Branding", year: "2024" },
] as const;

const placeholderCategories = [
  "All",
  "Video Editing",
  "Personal Branding",
  "Business Branding",
  "SEO",
  "Graphics Design",
  "Elevations",
  "Social Media Management",
];

interface Props {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: Props) {
  if (projects.length === 0) return <PlaceholderPortfolioGrid />;
  return <LivePortfolioGrid projects={projects} />;
}

function PlaceholderPortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? placeholderProjects
        : placeholderProjects.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-6" role="group" aria-label="Filter by category">
        {placeholderCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            aria-pressed={activeFilter === cat}
            className="pb-1 transition-colors duration-200"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9rem",
              color: activeFilter === cat ? "var(--ec-red)" : "var(--ec-ink)",
              borderBottom:
                activeFilter === cat
                  ? "1px solid var(--ec-red)"
                  : "1px solid transparent",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <Link
            key={project.title}
            href="/portfolio"
            className="group block motion-safe:animate-fade-up"
            style={{ animationDelay: `${(i % PAGE_SIZE) * 50}ms` }}
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              <div
                className="ph-card-tile absolute inset-0 flex items-center justify-center"
                style={{ background: "var(--ec-ink-2)" }}
              >
                <span
                  className="eyebrow"
                  style={{ color: "var(--ec-on-ink-soft)", letterSpacing: "0.1em" }}
                >
                  {project.title}
                </span>
              </div>
              <span
                className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "var(--ec-on-ink)",
                }}
              >
                View &rarr;
              </span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="eyebrow" style={{ letterSpacing: "0.1em" }}>
                {project.category}
              </span>
              <span className="eyebrow" style={{ letterSpacing: "0.1em" }}>
                &middot; {project.year}
              </span>
            </div>
            <h3 className="ph-card-title mt-2 text-h3">{project.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

function LivePortfolioGrid({ projects }: Props) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isFiltering, setIsFiltering] = useState(false);
  const filterTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(() => {
    return () => clearTimeout(filterTimeout.current);
  }, []);

  const categories = useMemo(() => {
    const cats = [...new Set(projects.map((p) => p.category).filter(Boolean))];
    return ["All", ...cats];
  }, [projects]);

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [projects, activeFilter],
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  const applyFilter = (cat: string) => {
    if (cat === activeFilter) return;
    clearTimeout(filterTimeout.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActiveFilter(cat);
      setVisibleCount(PAGE_SIZE);
      return;
    }
    setIsFiltering(true);
    filterTimeout.current = setTimeout(() => {
      setActiveFilter(cat);
      setVisibleCount(PAGE_SIZE);
      setIsFiltering(false);
    }, 200);
  };

  return (
    <div>
      {/* Filter bar */}
      {categories.length > 1 && (
        <div
          className="flex flex-wrap gap-6"
          role="group"
          aria-label="Filter by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => applyFilter(cat)}
              aria-pressed={activeFilter === cat}
              className="pb-1 transition-colors duration-200"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                color: "var(--ec-ink)",
                borderBottom:
                  activeFilter === cat
                    ? "1px solid var(--ec-red)"
                    : "1px solid transparent",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div
        className="mt-10 transition-opacity duration-200"
        style={{
          opacity: isFiltering ? 0 : 1,
          pointerEvents: isFiltering ? "none" : "auto",
        }}
      >
        {visible.length > 0 ? (
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {visible.map((project, i) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group block motion-safe:animate-fade-up"
                style={{ animationDelay: `${(i % PAGE_SIZE) * 50}ms` }}
              >
                <div className="card relative aspect-[3/2] overflow-hidden">
                  {project.coverImageId ? (
                    <ImageReveal className="h-full w-full">
                      <Image
                        src={driveUrl(project.coverImageId)}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                        unoptimized
                      />
                    </ImageReveal>
                  ) : (
                    <FaviconPlaceholder />
                  )}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  {project.category && (
                    <span className="eyebrow" style={{ letterSpacing: "0.1em" }}>
                      {project.category}
                    </span>
                  )}
                  {project.year && (
                    <span className="eyebrow" style={{ letterSpacing: "0.1em" }}>
                      &middot; {project.year}
                    </span>
                  )}
                </div>
                <h3 className="portfolio-title mt-2 text-h3">
                  {project.title}
                </h3>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div
            className="flex min-h-[320px] flex-col items-center justify-center text-center"
            style={{ border: "1px solid var(--ec-line)" }}
          >
            <p className="text-h3" style={{ color: "var(--ec-ink-faint)" }}>
              {activeFilter === "All"
                ? "No projects yet. Check back soon."
                : `No projects in "${activeFilter}" yet.`}
            </p>
            {activeFilter !== "All" && (
              <button
                onClick={() => applyFilter("All")}
                className="footer-link mt-6"
              >
                View all projects
              </button>
            )}
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="btn-secondary"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
