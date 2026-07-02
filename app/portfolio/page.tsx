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
      <section className="flex min-h-[40vh] flex-col justify-center">
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
