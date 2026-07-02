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

interface Props {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: Props) {
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
