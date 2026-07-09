import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectGallery from "@/components/ProjectGallery";
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

  return (
    <main>
      <ProjectGallery project={project} category={category} />

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
