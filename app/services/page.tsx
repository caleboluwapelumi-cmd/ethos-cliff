import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ServicesList from "@/components/ServicesList";
import ProcessTimeline from "@/components/ProcessTimeline";
import TextReveal from "@/components/TextReveal";
import Magnetic from "@/components/Magnetic";
import BtnArrow from "@/components/BtnArrow";

export const metadata = {
  title: "Services — Ethos Cliff",
  description:
    "Here's what happens when you work with us — all 7 services explained in full.",
};

const services = [
  {
    n: "01",
    name: "Video Editing",
    hook: "Your audience is scrolling. Fast.",
    body: "We create video content so compelling it makes them stop, watch, and want more. Because in today's world, if you're not on screen — you're not in the room.",
  },
  {
    n: "02",
    name: "Personal Branding",
    hook: "People don't just buy products. They buy people.",
    body: "We craft a personal brand so magnetic that your name becomes your greatest business asset. Whether you're a founder, a creative, or an expert in your field — we make you unforgettable.",
  },
  {
    n: "03",
    name: "Business Branding",
    hook: "First impressions are permanent.",
    body: "We design brands that don't just look good — they mean something. Your logo, your colours, your identity — built to communicate trust before you say a single word.",
  },
  {
    n: "04",
    name: "Search Engine Optimisation (SEO)",
    hook: "Your dream client is searching for you right now.",
    body: "Are they finding you — or your competitor? We put you exactly where you need to be: at the top, at the right time, in front of the right people.",
  },
  {
    n: "05",
    name: "Graphics Design",
    hook: "In a world full of noise, great design is silence — and silence gets noticed.",
    body: "From social posts to pitch decks, we design visuals that speak your brand's language fluently and make people feel something.",
  },
  {
    n: "06",
    name: "Elevations",
    hook: "You've built something real. Now let's make it legendary.",
    body: "This is for the brand that already exists but knows it's capable of more. We audit, refine, reposition, and re-energise — turning a good business into an iconic one.",
  },
  {
    n: "07",
    name: "Social Media Management",
    hook: "Consistency is a superpower most businesses underestimate.",
    body: "We show up every day on your behalf — posting, engaging, growing — so your audience never wonders where you went. Because out of sight really is out of mind.",
  },
] as const;

export default function ServicesPage() {
  return (
    <main>
      {/* ─────────── Hero ─────────── */}
      <section className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20">
        <span className="hero-decorative-number" aria-hidden="true">
          01&mdash;07
        </span>
        <div className="container relative" style={{ zIndex: 1 }}>
          <p className="eyebrow motion-safe:animate-fade-up">The Arsenal</p>
          <div className="mt-4">
            <TextReveal
              as="h1"
              className="text-hero"
              style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
              lines={[
                <span key="l1">Here&rsquo;s What Happens</span>,
                <span key="l2">When You Work With Us.</span>,
              ]}
            />
          </div>
          <p
            className="mt-8 text-body motion-safe:animate-fade-up"
            style={{ maxWidth: "56ch", fontSize: "1.1rem", animationDelay: "300ms" }}
          >
            Picture this &mdash; it&rsquo;s six months from now. Your
            business looks different. It feels different. People are
            finding you, following you, talking about you. Here&rsquo;s
            exactly how we make that happen:
          </p>
        </div>
      </section>

      {/* ─────────── Services list ─────────── */}
      <section className="section-sm divider">
        <div className="container">
          <ServicesList services={services} />
        </div>
      </section>

      {/* ─────────── Process timeline ─────────── */}
      <section className="section divider">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-4 text-h2">From First Call to Final Launch.</h2>
          </ScrollReveal>

          <ProcessTimeline />
        </div>
      </section>

      {/* ─────────── CTA band ─────────── */}
      <section
        data-cursor-surface="ink"
        className="section relative overflow-hidden"
        style={{ background: "var(--ec-red)" }}
      >
        <span className="cta-decorative-arrow" aria-hidden="true">
          &rarr;
        </span>
        <ScrollReveal>
          <div className="container relative text-center" style={{ zIndex: 1 }}>
            <h2 className="text-h2" style={{ color: "var(--ec-on-ink)" }}>
              Ready to get started?
            </h2>
            <p
              className="mx-auto mt-6"
              style={{
                maxWidth: "42ch",
                color: "var(--ec-on-ink-soft)",
                fontFamily: "var(--font-sans)",
                fontSize: "1.05rem",
                lineHeight: 1.6,
              }}
            >
              Let&rsquo;s build a brand the world will remember.
            </p>
            <div className="mt-10 flex justify-center">
              <Magnetic>
                <Link href="/contact" className="btn-invert-red">
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
