import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import RotatingBadge from "@/components/RotatingBadge";
import Magnetic from "@/components/Magnetic";
import ImageReveal from "@/components/ImageReveal";
import { getProjects, getDriveImageUrl } from "@/lib/projects";

export const revalidate = 300;

const placeholderWork = [
  {
    img: "/images/work/placeholder-1.jpg",
    title: "Brand Identity System",
    category: "Branding",
  },
  {
    img: "/images/work/placeholder-2.jpg",
    title: "Digital Presence Refresh",
    category: "Web & SEO",
  },
  {
    img: "/images/work/placeholder-3.jpg",
    title: "Content & Campaign Design",
    category: "Social Media",
  },
];

const services = [
  {
    n: "01",
    name: "Video Editing",
    hook: "Your audience is scrolling. Fast.",
    img: "/images/services/video-editing.jpg",
  },
  {
    n: "02",
    name: "Personal Branding",
    hook: "People don't just buy products. They buy people.",
    img: "/images/services/personal-branding.jpg",
  },
  {
    n: "03",
    name: "Business Branding",
    hook: "First impressions are permanent.",
    img: "/images/services/business-branding.jpg",
  },
  {
    n: "04",
    name: "Search Engine Optimisation (SEO)",
    hook: "Your dream client is searching for you right now.",
    img: "/images/services/seo.jpg",
  },
  {
    n: "05",
    name: "Graphics Design",
    hook: "In a world full of noise, great design is silence.",
    img: "/images/services/graphic-design.jpg",
  },
  {
    n: "06",
    name: "Elevations",
    hook: "You've built something real. Now let's make it legendary.",
    img: "/images/services/elevations.jpg",
  },
  {
    n: "07",
    name: "Social Media Management",
    hook: "Consistency is a superpower most businesses underestimate.",
    img: "/images/services/social-media.jpg",
  },
] as const;

export default async function Home() {
  const allProjects = await getProjects();
  const featured = allProjects.filter((p) => p.featured).slice(0, 3);

  return (
    <main>
      {/* ─────────── Hero ─────────── */}
      <section
        className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 sm:pt-20"
        style={{ background: "#FFFFFF" }}
      >
        <div
          className="pointer-events-none absolute"
          style={{
            right: "-6%",
            bottom: "-10%",
            width: "760px",
            maxWidth: "70vw",
            zIndex: 0,
          }}
          aria-hidden="true"
        >
          <Image
            src="/images/hero-mark.png"
            alt=""
            width={1743}
            height={902}
            priority
            style={{ width: "100%", height: "auto", opacity: 0.1 }}
          />
        </div>

        <div className="container relative" style={{ zIndex: 1 }}>
          <div className="flex items-start justify-between gap-8">
            <TextReveal
              as="h1"
              className="text-hero"
              lines={[
                <span key="l1">Every Great Business</span>,
                <span key="l2">Starts With a Cliff-Edge</span>,
                <span key="l3">
                  Moment
                  <span style={{ color: "var(--ec-red)" }}>.</span>
                </span>,
              ]}
            />
            <Link
              href="/portfolio"
              aria-label="Explore our work"
              className="hidden shrink-0 lg:block motion-safe:animate-fade-in"
              style={{ animationDelay: "500ms" }}
            >
              <RotatingBadge text="EXPLORE OUR WORK" />
            </Link>
          </div>

          <p
            className="mt-8 text-body motion-safe:animate-fade-up"
            style={{
              maxWidth: "48ch",
              fontSize: "1.1rem",
              color: "#3a3a3a",
              animationDelay: "300ms",
            }}
          >
            That moment when you looked out and said &mdash; &ldquo;I&rsquo;m
            building something the world needs to see.&rdquo; We heard you.
            And we showed up with everything it takes to make them look.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 motion-safe:animate-fade-up"
            style={{ animationDelay: "380ms" }}
          >
            <Magnetic>
              <Link href="/contact" className="btn-primary">
                Let&rsquo;s Build It Together
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* ─────────── About teaser ─────────── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-20">
              {/* Text (60%) */}
              <div>
                <p className="eyebrow">Our Story Is About Yours</p>
                <h2 className="mt-4 text-h2">
                  We Were Built for Businesses Like Yours.
                </h2>
                <p className="mt-6 text-body" style={{ fontSize: "1.05rem" }}>
                  There&rsquo;s a particular kind of entrepreneur who keeps us
                  up at night &mdash; not out of worry, but out of
                  excitement.
                </p>
                <p className="mt-4 text-body" style={{ fontSize: "1.05rem" }}>
                  They have an idea that won&rsquo;t leave them alone. A
                  product their community needs. A service that could
                  genuinely change someone&rsquo;s life. But the world
                  doesn&rsquo;t know their name yet.
                </p>

                <blockquote className="pull-quote mt-8">
                  &ldquo;We don&rsquo;t just brand businesses. We give them a
                  voice, a face, and a fighting chance.&rdquo;
                </blockquote>

                <Link href="/about" className="link-sweep mt-8">
                  Learn more about us
                  <span aria-hidden="true" className="link-sweep-arrow">
                    &rarr;
                  </span>
                </Link>
              </div>

              {/* Logo mark (40%) */}
              <div
                className="relative w-full"
                style={{ height: "min(320px, 40vw)", padding: "2rem" }}
              >
                <Image
                  src="/images/logo-dark.png"
                  alt="Ethos Cliff"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────── Selected Work ─────────── */}
      <section className="section divider">
        <div className="container">
          <ScrollReveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Selected Work</p>
                <h2 className="mt-3 text-h2">
                  Brands We&rsquo;ve Helped Find Their Voice.
                </h2>
              </div>
              <Link href="/portfolio" className="link-sweep hidden shrink-0 sm:inline-flex">
                View all projects
                <span aria-hidden="true" className="link-sweep-arrow">
                  &rarr;
                </span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-14 flex flex-col gap-6">
            {featured.length > 0
              ? featured.map((project, i) => (
                  <ScrollReveal key={project.slug} delay={i * 60}>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="group relative block h-[60vh] w-full overflow-hidden"
                      style={{ border: "1px solid var(--ec-line)" }}
                    >
                      <ImageReveal className="h-full w-full">
                        <Image
                          src={
                            project.coverImageId
                              ? getDriveImageUrl(project.coverImageId)
                              : placeholderWork[i % placeholderWork.length].img
                          }
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                          unoptimized={Boolean(project.coverImageId)}
                        />
                      </ImageReveal>

                      {/* Bottom-left title/category scrim */}
                      <div
                        className="absolute inset-x-0 bottom-0 p-8"
                        style={{
                          background: "rgba(18,17,16,0.6)",
                        }}
                      >
                        {project.category && (
                          <span className="eyebrow" style={{ color: "var(--ec-on-ink-soft)" }}>
                            {project.category}
                          </span>
                        )}
                        <h3
                          className="mt-2 text-h3"
                          style={{ color: "var(--ec-on-ink)" }}
                        >
                          {project.title}
                        </h3>
                      </div>

                      {/* Hover — View Project */}
                      <span
                        className="absolute right-6 top-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          color: "var(--ec-red)",
                        }}
                      >
                        View Project &rarr;
                      </span>
                    </Link>
                  </ScrollReveal>
                ))
              : placeholderWork.map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 60}>
                    <div
                      className="group relative block h-[60vh] w-full overflow-hidden"
                      style={{ border: "1px solid var(--ec-line)" }}
                    >
                      <ImageReveal className="h-full w-full">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />
                      </ImageReveal>

                      <div
                        className="absolute inset-x-0 bottom-0 p-8"
                        style={{ background: "rgba(18,17,16,0.6)" }}
                      >
                        <span className="eyebrow" style={{ color: "var(--ec-on-ink-soft)" }}>
                          {item.category}
                        </span>
                        <h3 className="mt-2 text-h3" style={{ color: "var(--ec-on-ink)" }}>
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link href="/portfolio" className="text-link">
              View all projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────── Services teaser ─────────── */}
      <section className="section divider">
        <div className="container">
          <ScrollReveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">What We Do</p>
                <h2 className="mt-3 text-h2">The Arsenal.</h2>
              </div>
              <Link href="/services" className="link-sweep hidden shrink-0 sm:inline-flex">
                Full service details
                <span aria-hidden="true" className="link-sweep-arrow">
                  &rarr;
                </span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ n, name, hook, img }, i) => (
              <ScrollReveal key={n} delay={i * 30}>
                <Link href="/services" className="card group block h-full overflow-hidden">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <ImageReveal className="h-full w-full">
                      <Image
                        src={img}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />
                    </ImageReveal>
                    <span
                      className="absolute left-4 top-4"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        color: "var(--ec-on-ink)",
                        background: "rgba(18,17,16,0.55)",
                        padding: "0.3rem 0.65rem",
                      }}
                    >
                      {n}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-h3">{name}</h3>
                    <p
                      className="mt-2"
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: "var(--ec-ink-faint)",
                        fontSize: "0.9rem",
                      }}
                    >
                      {hook}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link href="/services" className="text-link">
              Full service details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────── CTA band ─────────── */}
      <section
        data-cursor-surface="ink"
        className="section"
        style={{ background: "var(--ec-ink)" }}
      >
        <ScrollReveal>
          <div className="container text-center">
            <h2
              className="text-h2"
              style={{ color: "var(--ec-on-ink)", maxWidth: "22ch", margin: "0 auto" }}
            >
              Your Story Doesn&rsquo;t Have to Wait Any Longer.
            </h2>
            <p
              className="mx-auto mt-6"
              style={{
                maxWidth: "40ch",
                color: "var(--ec-on-ink-soft)",
                fontFamily: "var(--font-sans)",
                fontSize: "1.05rem",
                lineHeight: 1.6,
              }}
            >
              Let&rsquo;s build something remarkable together.
            </p>
            <div className="mt-10 flex justify-center">
              <Magnetic>
                <Link href="/contact" className="btn-invert">
                  Consult with Me
                </Link>
              </Magnetic>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
