import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import LightboxProvider from "@/components/LightboxProvider";
import CoverImage from "@/components/CoverImage";
import GalleryGrid from "@/components/GalleryGrid";
import {
  PROJECTS,
  getCategoryBySlug,
  getProjectBySlug,
} from "@/lib/portfolio-data";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Ethos Cliff`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const category = getCategoryBySlug(project.category);

  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECTS[(idx + 1) % PROJECTS.length];

  const allImages = [project.coverImage, ...project.gallery];

  return (
    <main>
      <LightboxProvider images={allImages}>
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
          <CoverImage src={project.coverImage} alt={project.title} />
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
            <GalleryGrid images={project.gallery} alt={project.title} indexOffset={1} />
          </section>
        )}
      </LightboxProvider>

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
