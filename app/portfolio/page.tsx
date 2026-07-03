import { getProjects } from "@/lib/projects";
import PortfolioGrid from "@/components/PortfolioGrid";
import TextReveal from "@/components/TextReveal";

export const revalidate = 300;

export const metadata = {
  title: "Portfolio — Ethos Cliff",
  description: "Brands we've helped find their voice.",
};

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <main>
      {/* ─────────── Hero ─────────── */}
      <section className="flex min-h-[40vh] flex-col justify-center pt-24 sm:pt-28">
        <div className="container">
          <p className="eyebrow motion-safe:animate-fade-up">Selected Work</p>
          <div className="mt-4">
            <TextReveal
              as="h1"
              className="text-hero"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              lines={[
                <span key="l1">Brands We&rsquo;ve Helped</span>,
                <span key="l2">Find Their Voice.</span>,
              ]}
            />
          </div>
          <p
            className="mt-6 text-body motion-safe:animate-fade-up"
            style={{ maxWidth: "48ch", fontSize: "1.05rem", animationDelay: "300ms" }}
          >
            A growing collection of work across branding, content, and
            digital strategy.
          </p>
        </div>
      </section>

      {/* ─────────── Grid ─────────── */}
      <section className="section-sm">
        <div className="container">
          <PortfolioGrid projects={projects} />
        </div>
      </section>
    </main>
  );
}
