import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import StatsCounter from "@/components/StatsCounter";
import TextReveal from "@/components/TextReveal";
import Magnetic from "@/components/Magnetic";

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
      <section className="flex min-h-[70vh] flex-col justify-center">
        <div className="container">
          <p className="eyebrow motion-safe:animate-fade-up">
            Our Story Is About Yours
          </p>
          <div className="mt-4">
            <TextReveal
              as="h1"
              className="text-hero"
              lines={[
                <span key="l1">We Were Built for</span>,
                <span key="l2">Businesses Like Yours.</span>,
              ]}
            />
          </div>
        </div>
      </section>

      {/* ─────────── Portrait + Bio ─────────── */}
      <section className="section divider">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            {/* Portrait */}
            <ScrollReveal>
              <div
                className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden"
                style={{
                  border: "1px solid var(--ec-line)",
                  borderRadius: "8px",
                }}
              >
                <Image
                  src="/images/ceo.jpeg"
                  alt="The-Olu Bamigboye — Founder, Ethos Cliff"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 380px, 80vw"
                  priority
                />
              </div>
            </ScrollReveal>

            {/* Bio copy */}
            <div>
              <ScrollReveal>
                <div className="space-y-6">
                  <p className="text-body" style={{ fontSize: "1.15rem" }}>
                    There&rsquo;s a particular kind of entrepreneur who keeps
                    us up at night &mdash; not out of worry, but out of
                    excitement.
                  </p>
                  <p className="text-body" style={{ fontSize: "1.15rem" }}>
                    They have an idea that won&rsquo;t leave them alone. A
                    product their community needs. A service that could
                    genuinely change someone&rsquo;s life. But the world
                    doesn&rsquo;t know their name yet.
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 700,
                      color: "var(--ec-ink)",
                      fontSize: "1.15rem",
                    }}
                  >
                    That&rsquo;s where Ethos Cliff was born.
                  </p>
                  <p className="text-body" style={{ fontSize: "1.15rem" }}>
                    We created this agency for the startup still finding its
                    footing. For the founder who knows their why but
                    hasn&rsquo;t found the words. For the small business
                    ready to stop being small in the way people think about
                    it.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <blockquote className="pull-quote mt-10">
                  &ldquo;We don&rsquo;t just brand businesses. We give them a
                  voice, a face, and a fighting chance.&rdquo;
                </blockquote>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Stats row ─────────── */}
      <section className="section-sm divider">
        <div className="container">
          <div
            className="grid grid-cols-2 sm:grid-cols-4"
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

      {/* ─────────── Philosophy / Why Us ─────────── */}
      <section className="section" style={{ background: "var(--ec-paper-deep)" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <ScrollReveal>
            <p className="eyebrow">The Honest Truth</p>
            <h2 className="mt-5 text-h2">
              Anyone Can Make You a Logo. We Make You a Brand People Believe
              In.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <p className="mt-12 text-body" style={{ fontSize: "1.15rem" }}>
              There are a hundred agencies that will take your money, hand
              you a pretty design, and call it a day.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <blockquote className="pull-quote mt-10">
              &ldquo;We&rsquo;re not them.&rdquo;
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="mt-10 space-y-6">
              <p className="text-body" style={{ fontSize: "1.15rem" }}>
                At Ethos Cliff, we sit down, we listen, we ask the
                uncomfortable questions &mdash; What do you actually stand
                for? Who are you really talking to? What does success look
                like in a year? In five?
              </p>
              <p className="text-body" style={{ fontSize: "1.15rem" }}>
                Because a brand built without that foundation doesn&rsquo;t
                last. And we&rsquo;re not in the business of short-term wins.
              </p>
              <p className="text-body" style={{ fontSize: "1.15rem" }}>
                We&rsquo;re in the business of building something
                you&rsquo;ll be proud of for years to come. Something that
                grows with you. Something that, one day, people will look at
                and say &mdash; &ldquo;I&rsquo;ve always known that
                name.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <blockquote className="pull-quote mt-10">
              &ldquo;That&rsquo;s the Ethos Cliff promise.&rdquo;
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="section">
        <ScrollReveal>
          <div className="container text-center">
            <h2 className="text-h2">Ready to work together?</h2>
            <div className="mt-10 flex justify-center">
              <Magnetic>
                <Link href="/contact" className="btn-primary">
                  Let&rsquo;s Build It Together
                </Link>
              </Magnetic>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
