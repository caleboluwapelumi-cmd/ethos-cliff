import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjects, getDriveImageUrl } from "@/lib/projects";
import Lightbox from "@/components/Lightbox";
import ScrollReveal from "@/components/ScrollReveal";
import ImageReveal from "@/components/ImageReveal";
import FaviconPlaceholder from "@/components/FaviconPlaceholder";

export const revalidate = 300;

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const allProjects = await getProjects();
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Ethos Cliff`,
    description: project.summary || project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const allProjects = await getProjects();
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = allProjects.indexOf(project);
  const nextProject =
    idx >= 0 && idx < allProjects.length - 1 ? allProjects[idx + 1] : null;

  const coverUrl = project.coverImageId
    ? getDriveImageUrl(project.coverImageId)
    : null;
  const galleryUrls = project.galleryImageIds.map(getDriveImageUrl);

  const hasStructured =
    project.problem ||
    project.approach ||
    project.processNotes ||
    project.results;

  return (
    <main>
      {/* ─────────── Breadcrumb ─────────── */}
      <div className="container pt-28 sm:pt-32">
        <p className="eyebrow" style={{ textTransform: "none", letterSpacing: 0 }}>
          Portfolio / {project.title}
        </p>
      </div>

      {/* ─────────── Header ─────────── */}
      <header className="container pb-10 pt-6">
        <h1 className="text-hero" style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}>
          {project.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {project.category && (
            <span className="eyebrow">{project.category}</span>
          )}
          {project.client && (
            <>
              <span style={{ color: "var(--ec-line-strong)" }} aria-hidden="true">
                &middot;
              </span>
              <span className="eyebrow">{project.client}</span>
            </>
          )}
          {project.year && (
            <>
              <span style={{ color: "var(--ec-line-strong)" }} aria-hidden="true">
                &middot;
              </span>
              <span className="eyebrow">{project.year}</span>
            </>
          )}
        </div>
      </header>

      {/* ─────────── Cover image ─────────── */}
      <div className="container">
        <div
          className="relative aspect-[16/9] overflow-hidden"
          style={{ border: "1px solid var(--ec-line)", borderRadius: "8px" }}
        >
          {coverUrl ? (
            <ImageReveal className="h-full w-full">
              <Image
                src={coverUrl}
                alt={project.title}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </ImageReveal>
          ) : (
            <FaviconPlaceholder />
          )}
        </div>
      </div>

      {/* ─────────── Case study body ─────────── */}
      {(hasStructured || project.description || project.summary) && (
        <div className="container" style={{ maxWidth: "760px" }}>
          <div className="section-sm space-y-14">
            {hasStructured ? (
              <>
                {project.problem && (
                  <ScrollReveal>
                    <CaseSection label="The Challenge" content={project.problem} />
                  </ScrollReveal>
                )}
                {project.approach && (
                  <ScrollReveal>
                    <CaseSection label="Our Approach" content={project.approach} />
                  </ScrollReveal>
                )}
                {project.processNotes && (
                  <ScrollReveal>
                    <CaseSection
                      label="The Process"
                      content={project.processNotes}
                    />
                  </ScrollReveal>
                )}
                {project.results && (
                  <ScrollReveal>
                    <OutcomeSection content={project.results} />
                  </ScrollReveal>
                )}
              </>
            ) : project.description ? (
              <ScrollReveal>
                <p className="text-body whitespace-pre-line" style={{ fontSize: "1.1rem" }}>
                  {project.description}
                </p>
              </ScrollReveal>
            ) : (
              <ScrollReveal>
                <p className="text-body" style={{ fontSize: "1.1rem" }}>
                  {project.summary}
                </p>
              </ScrollReveal>
            )}
          </div>
        </div>
      )}

      {/* ─────────── Gallery ─────────── */}
      {galleryUrls.length > 0 && (
        <section className="container section-sm divider">
          <ScrollReveal>
            <p className="eyebrow mb-8">Gallery</p>
          </ScrollReveal>
          <Lightbox images={galleryUrls} altPrefix={project.title} />
        </section>
      )}

      {/* ─────────── Next project ─────────── */}
      {nextProject && (
        <ScrollReveal>
          <div className="divider">
            <div className="container flex items-center justify-between gap-6 py-14">
              <span className="eyebrow">Next Project</span>
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="group inline-flex items-center gap-3 text-h3"
                style={{ color: "var(--ec-ink)" }}
              >
                {nextProject.title}
                <span aria-hidden="true" className="next-project-arrow">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      )}
    </main>
  );
}

/* ── Server-only helper components ── */

function CaseSection({ label, content }: { label: string; content: string }) {
  return (
    <section>
      <p className="eyebrow">{label}</p>
      <p className="mt-5 text-body whitespace-pre-line" style={{ fontSize: "1.1rem" }}>
        {content}
      </p>
    </section>
  );
}

function OutcomeSection({ content }: { content: string }) {
  return (
    <section>
      <p className="eyebrow">The Outcome</p>
      <p className="pull-quote mt-5">{content}</p>
    </section>
  );
}
