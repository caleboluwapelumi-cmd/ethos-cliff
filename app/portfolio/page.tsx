import Link from "next/link";
import Image from "next/image";
import PortfolioHero from "@/components/PortfolioHero";
import ScrollReveal from "@/components/ScrollReveal";
import ImageReveal from "@/components/ImageReveal";
import { PROJECTS, getCategoryBySlug } from "@/lib/portfolio-data";

export const metadata = {
  title: "Portfolio — Ethos Cliff",
  description: "Brands we've helped find their voice.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />

      {/* ─────────── Project grid ─────────── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">All Work</p>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {PROJECTS.map((project, i) => {
              const category = getCategoryBySlug(project.category);

              return (
                <ScrollReveal key={project.slug} delay={i * 60}>
                  <Link href={`/portfolio/${project.slug}`} className="group block">
                    <div
                      className="relative aspect-[4/3] w-full overflow-hidden"
                      style={{ borderRadius: "8px", border: "1px solid var(--ec-line)" }}
                    >
                      <ImageReveal className="h-full w-full">
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </ImageReveal>

                      <div
                        className="absolute inset-x-0 bottom-0 flex items-end justify-start p-6 opacity-0 transition-opacity duration-[250ms] group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(0deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0) 60%)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontWeight: 600,
                            fontSize: "0.9rem",
                            color: "var(--ec-red)",
                          }}
                        >
                          View Project &rarr;
                        </span>
                      </div>
                    </div>

                    <p className="mt-5 eyebrow">{category?.label}</p>
                    <h3 className="portfolio-title mt-2 text-h3">{project.title}</h3>
                    <p className="mt-2 text-body" style={{ fontSize: "0.9rem" }}>
                      {project.client}
                    </p>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
