import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import StatsCounter from "@/components/StatsCounter";
import TextReveal from "@/components/TextReveal";
import Magnetic from "@/components/Magnetic";
import BtnArrow from "@/components/BtnArrow";

export const metadata = {
  title: "About — Ethos Cliff",
  description:
    "We were built for businesses like yours. The story, the people, and the promise behind Ethos Cliff.",
};

const stats = [
  { value: 50, suffix: "+", label: "Brands Built" },
  { value: 5, suffix: "+", label: "Years" },
  { value: 7, suffix: "", label: "Services" },
  { value: 100, suffix: "%", label: "Committed" },
] as const;

export default function AboutPage() {
  return (
    <main>
      {/* ─────────── Hero ─────────── */}
      <section
        data-cursor-surface="ink"
        className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 sm:pt-28"
        style={{ background: "var(--ec-ink-gradient)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 motion-safe:animate-logo-in-12"
          style={{
            transform: "translate(-50%, -50%)",
            width: "min(900px, 80vw)",
            height: "65vh",
            zIndex: 0,
            opacity: 0.12,
            animationDelay: "200ms",
          }}
          aria-hidden="true"
        >
          <Image
            src="/images/logo-dark.png"
            alt=""
            fill
            priority
            style={{ objectFit: "contain", mixBlendMode: "screen" }}
          />
        </div>

        <div className="container relative" style={{ zIndex: 1 }}>
          <p
            className="eyebrow motion-safe:animate-fade-up"
            style={{ color: "var(--ec-on-ink-soft)" }}
          >
            Our Story Is About Yours
          </p>
          <div className="mt-4">
            <TextReveal
              as="h1"
              className="text-hero"
              style={{ color: "var(--ec-on-ink)" }}
              lines={[
                <span key="l1">We Were Built for</span>,
                <span key="l2">Businesses Like Yours.</span>,
              ]}
            />
          </div>
        </div>
      </section>

      {/* ─────────── Our Story ─────────── */}
      <section className="section divider">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[35%_1fr] lg:gap-16">
            {/* Big statement (35%) */}
            <ScrollReveal>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  lineHeight: 1.05,
                  color: "var(--ec-ink)",
                }}
              >
                5+ Years.
                <br />
                50+ Brands.
                <br />
                One Conviction.
              </p>
            </ScrollReveal>

            {/* Body copy (65%) */}
            <div style={{ maxWidth: "760px" }}>
              <ScrollReveal>
                <p className="eyebrow">How We Started</p>
                <h2 className="mt-5 text-h2">
                  Built for the Overlooked. Designed for the Bold.
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <p className="mt-10 text-body" style={{ fontSize: "1.15rem", maxWidth: "none" }}>
                  Ethos Cliff wasn&rsquo;t built in a boardroom. It was built
                  from watching brilliant businesses stay invisible &mdash; not
                  because they lacked quality, but because the world
                  couldn&rsquo;t see them clearly enough. We saw founders with
                  real vision struggling to communicate it. Creatives with
                  genuine talent being overlooked. Small businesses with big
                  potential stuck behind generic branding that said nothing
                  about who they really were. So we built the agency we wished
                  existed. One that listens before it designs. One that asks the
                  uncomfortable questions &mdash; and then builds something that
                  answers them.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Meet the CEO ─────────── */}
      <section
        data-cursor-surface="ink"
        className="section divider"
        style={{ background: "var(--ec-ink-gradient)" }}
      >
        <div className="container">
          <ScrollReveal>
            <p
              className="eyebrow text-center"
              style={{ color: "var(--ec-on-ink-soft)" }}
            >
              The Mind Behind the Brand
            </p>
          </ScrollReveal>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-center">
            {/* Portrait */}
            <ScrollReveal>
              <div>
                <h2 className="mb-8 text-h2 lg:hidden" style={{ color: "var(--ec-on-ink)" }}>
                  Meet the CEO.
                </h2>
                <div
                  className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden"
                  style={{ borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <Image
                    src="/images/ceo.jpeg"
                    alt="Israel Olumide Bamigboye — Founder & Creative Director, Ethos Cliff"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 380px, 80vw"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Bio copy */}
            <div>
              <ScrollReveal>
                <h2 className="hidden text-h2 lg:block" style={{ color: "var(--ec-on-ink)" }}>
                  Meet the CEO.
                </h2>
                <p className="mt-4" style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  color: "var(--ec-on-ink)",
                  fontSize: "1.05rem",
                }}>
                  Israel Olumide Bamigboye
                </p>
                <p
                  className="eyebrow mt-1"
                  style={{ textTransform: "none", letterSpacing: 0, color: "var(--ec-on-ink-soft)" }}
                >
                  @TheOlu_Bams &middot; Founder &amp; Creative Director, Ethos Cliff
                </p>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <p
                  className="mt-8"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    color: "var(--ec-on-ink-soft)",
                  }}
                >
                  Israel Olumide Bamigboye &mdash; known across the creative
                  world as TheOlu_Bams &mdash; is the founder and creative
                  director of Ethos Cliff. With over 5 years building brands
                  across industries, Israel founded Ethos Cliff on a single
                  conviction: that every serious business deserves to look
                  the part. His approach blends strategic thinking with
                  visual precision, building brands that don&rsquo;t just
                  look good &mdash; but mean something. When he&rsquo;s not
                  crafting brand identities, he&rsquo;s studying what makes
                  people stop scrolling, start believing, and choose a brand
                  for life.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Our Philosophy ─────────── */}
      <section className="section divider" style={{ background: "var(--ec-paper-deep)" }}>
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">What We Believe</p>
            <h2 className="mt-5 text-h2">A Few Things We Hold True.</h2>
          </ScrollReveal>

          <div className="relative mt-20" style={{ paddingBottom: "2rem" }}>
            <ScrollReveal>
              <p
                aria-hidden="true"
                className="hidden select-none sm:block"
                style={{
                  position: "absolute",
                  top: "-3.5rem",
                  left: "-1rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(6rem, 12vw, 11rem)",
                  lineHeight: 1,
                  color: "var(--ec-ink)",
                  opacity: 0.06,
                  zIndex: 0,
                }}
              >
                &ldquo;
              </p>
            </ScrollReveal>

            {/* Quote 1 — large, left */}
            <ScrollReveal>
              <p
                className="relative"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--ec-ink)",
                  fontSize: "clamp(1.9rem, 4vw, 3.4rem)",
                  lineHeight: 1.2,
                  maxWidth: "17ch",
                  zIndex: 1,
                }}
              >
                &ldquo;Brand is not decoration. It&rsquo;s communication.&rdquo;
              </p>
            </ScrollReveal>

            {/* Quote 2 — smaller, right-shifted, red accent */}
            <ScrollReveal delay={100}>
              <p
                className="relative"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--ec-red)",
                  fontSize: "clamp(1.2rem, 2.2vw, 1.85rem)",
                  lineHeight: 1.3,
                  maxWidth: "22ch",
                  marginTop: "clamp(1.75rem, 4vw, 3rem)",
                  marginLeft: "auto",
                  marginRight: "clamp(0px, 6vw, 4rem)",
                  textAlign: "right",
                }}
              >
                &ldquo;Visibility without strategy is just noise.&rdquo;
              </p>
            </ScrollReveal>

            {/* Quote 3 — large, centered, staggered down */}
            <ScrollReveal delay={200}>
              <p
                className="relative"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--ec-ink-soft)",
                  fontSize: "clamp(1.7rem, 3.4vw, 2.9rem)",
                  lineHeight: 1.22,
                  maxWidth: "20ch",
                  marginTop: "clamp(2.5rem, 6vw, 4.5rem)",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                }}
              >
                &ldquo;The right story, told right, changes everything.&rdquo;
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─────────── By the Numbers ─────────── */}
      <section className="section-sm divider">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">By the Numbers</p>
          </ScrollReveal>
          <div
            className="mt-8 grid grid-cols-2 sm:grid-cols-4"
            style={{ borderLeft: "1px solid var(--ec-line)" }}
          >
            {stats.map(({ value, suffix, label }, i) => (
              <ScrollReveal key={label} delay={i * 60}>
                <div
                  className="px-8 py-4"
                  style={{
                    borderLeft: i === 0 ? "none" : "1px solid var(--ec-line)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      color: "var(--ec-ink)",
                      lineHeight: 1,
                    }}
                  >
                    <StatsCounter value={value} suffix={suffix} />
                  </p>
                  <p className="eyebrow mt-3" style={{ textTransform: "none", letterSpacing: 0 }}>
                    {label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Why Work With Us ─────────── */}
      <section className="section divider">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">The Honest Truth</p>
            <h2 className="mt-5 text-h2">Why Ethos Cliff.</h2>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
            {[
              {
                n: "01",
                name: "We Listen First",
                desc: "Strategy before aesthetics, always. We don't touch a design tool until we understand your business.",
              },
              {
                n: "02",
                name: "We Think Long-Term",
                desc: "We're not building something for today's trend. We're building something you'll be proud of in five years.",
              },
              {
                n: "03",
                name: "We Show Up",
                desc: "Consistency is the real competitive edge. We deliver, we communicate, and we don't disappear after handoff.",
              },
            ].map(({ n, name, desc }, i) => (
              <ScrollReveal key={n} delay={i * 80}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    color: "var(--ec-red)",
                  }}
                >
                  {n}
                </span>
                <h3 className="mt-3 text-h3">{name}</h3>
                <p className="mt-2 text-body">{desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="section">
        <ScrollReveal>
          <div className="container text-center">
            <h2 className="text-h2" style={{ maxWidth: "20ch", margin: "0 auto" }}>
              Ready to build something the world will remember?
            </h2>
            <div className="mt-10 flex justify-center">
              <Magnetic>
                <Link href="/contact" className="btn-primary">
                  Book a Free Consultation
                  <BtnArrow />
                </Link>
              </Magnetic>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
