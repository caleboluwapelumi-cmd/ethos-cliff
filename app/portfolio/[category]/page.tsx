import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import ImageReveal from "@/components/ImageReveal";
import Magnetic from "@/components/Magnetic";
import {
  CATEGORIES,
  getCategoryBySlug,
  getProjectsByCategory,
} from "@/lib/portfolio-data";

type Params = Promise<{ category: string }>;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};
  return {
    title: `${category.title} — Ethos Cliff`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const projects = getProjectsByCategory(category.slug);

  return (
    <main>
      {/* ─────────── Breadcrumb ─────────── */}
      <div className="container pt-28 sm:pt-32">
        <p className="eyebrow" style={{ textTransform: "none", letterSpacing: 0 }}>
          <Link href="/portfolio" className="text-link">
            Portfolio
          </Link>{" "}
          / {category.title}
        </p>
      </div>

      {/* ─────────── Hero ─────────── */}
      <section className="flex min-h-[50vh] flex-col justify-center">
        <div className="container">
          <p className="eyebrow">{category.label}</p>
          <h1 className="mt-4 text-hero" style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}>
            {category.title}
          </h1>
          <p className="mt-6 text-body" style={{ maxWidth: "56ch", fontSize: "1.05rem" }}>
            {category.description}
          </p>
        </div>
      </section>

      {/* ─────────── Challenge ─────────── */}
      <section className="section-sm divider">
        <div className="container" style={{ maxWidth: "760px" }}>
          <ScrollReveal>
            <p className="eyebrow">The Challenge</p>
            <p className="mt-5 text-body" style={{ fontSize: "1.1rem" }}>
              {category.challenge}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────── Approach ─────────── */}
      <section className="section-sm">
        <div className="container" style={{ maxWidth: "760px" }}>
          <ScrollReveal>
            <p className="eyebrow">Our Approach</p>
            <p className="mt-5 text-body" style={{ fontSize: "1.1rem" }}>
              {category.approach}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────── Projects showcase ─────────── */}
      <section className="section-sm divider">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">Selected Works</p>
            <h2 className="mt-3 text-h2">Project Showcase</h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {projects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 60}>
                <Link
                  href={`/portfolio/${category.slug}/${project.slug}`}
                  className="group block"
                >
                  <div
                    className="relative aspect-[4/3] w-full overflow-hidden"
                    style={{ borderRadius: "8px" }}
                  >
                    <ImageReveal className="h-full w-full">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </ImageReveal>

                    <div
                      className="absolute inset-x-0 bottom-0 flex items-center justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "linear-gradient(0deg, rgba(18,17,16,0.6) 0%, rgba(18,17,16,0) 60%)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          color: "var(--ec-on-ink)",
                        }}
                      >
                        View Project &rarr;
                      </span>
                    </div>
                  </div>

                  <h3 className="portfolio-title mt-5 text-h3">{project.title}</h3>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="eyebrow" style={{ letterSpacing: "0.1em" }}>
                      {project.client}
                    </span>
                    <span className="eyebrow" style={{ letterSpacing: "0.1em" }}>
                      &middot; {project.year}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section
        data-cursor-surface="ink"
        className="section"
        style={{ background: "var(--ec-ink-gradient)" }}
      >
        <ScrollReveal>
          <div className="container text-center">
            <h2
              className="text-h2"
              style={{ color: "var(--ec-on-ink)", maxWidth: "22ch", margin: "0 auto" }}
            >
              Ready to Start a Project?
            </h2>
            <div className="mt-10 flex justify-center">
              <Magnetic>
                <Link href="/contact" className="btn-invert">
                  Consult with Me
                </Link>
              </Magnetic>
            </div>
            <Link href="/portfolio" className="link-sweep mt-10 inline-flex" style={{ color: "var(--ec-on-ink)" }}>
              <span aria-hidden="true">&larr;</span> Back to all projects
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
