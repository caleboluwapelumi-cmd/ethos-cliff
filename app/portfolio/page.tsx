import Link from "next/link";
import Image from "next/image";
import PortfolioHero from "@/components/PortfolioHero";
import ScrollReveal from "@/components/ScrollReveal";
import ImageReveal from "@/components/ImageReveal";
import { CATEGORIES, getProjectsByCategory } from "@/lib/portfolio-data";

export const metadata = {
  title: "Portfolio — Ethos Cliff",
  description: "Brands we've helped find their voice.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />

      {/* ─────────── Category cards ─────────── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">Browse by Category</p>
          </ScrollReveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {CATEGORIES.map((category, i) => {
              const projects = getProjectsByCategory(category.slug);
              const cover = projects[0]?.coverImage;

              return (
                <ScrollReveal key={category.slug} delay={i * 80}>
                  <Link
                    href={`/portfolio/${category.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden" style={{ borderRadius: "8px", border: "1px solid var(--ec-line)" }}>
                      {cover ? (
                        <ImageReveal className="h-full w-full">
                          <Image
                            src={cover}
                            alt={category.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </ImageReveal>
                      ) : (
                        <div className="h-full w-full" style={{ background: "var(--ec-ink-2)" }} />
                      )}

                      <span
                        className="absolute bottom-6 right-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          color: "var(--ec-red)",
                          background: "rgba(255,255,255,0.92)",
                          padding: "0.4rem 0.9rem",
                          borderRadius: "999px",
                        }}
                      >
                        Explore &rarr;
                      </span>
                    </div>

                    <h2 className="mt-6 text-h2">{category.title}</h2>
                    <p className="mt-3 text-body" style={{ fontSize: "1.05rem" }}>
                      {category.description}
                    </p>
                    <p className="mt-4 eyebrow">
                      {projects.length} {projects.length === 1 ? "Project" : "Projects"}
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
