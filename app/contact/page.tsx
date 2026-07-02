import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";

export const metadata = {
  title: "Contact — Ethos Cliff",
  description:
    "Let's build something remarkable. Fill out the brief and we'll get back to you within 24 hours.",
};

const directLinks = ["Email", "Instagram", "LinkedIn", "WhatsApp"];

export default function ContactPage() {
  return (
    <main>
      {/* ─────────── Header ─────────── */}
      <div className="container pb-12 pt-32 sm:pt-40">
        <p className="eyebrow motion-safe:animate-fade-up">
          New Project Enquiry
        </p>
        <div className="mt-4">
          <TextReveal
            as="h1"
            className="text-hero"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            lines={[
              <span key="l1">Let&rsquo;s build</span>,
              <span key="l2">something remarkable.</span>,
            ]}
          />
        </div>
        <p
          className="mt-6 text-body motion-safe:animate-fade-up"
          style={{ maxWidth: "48ch", fontSize: "1.05rem", animationDelay: "300ms" }}
        >
          Fill out the brief and we&rsquo;ll get back to you within 24 hours.
        </p>
      </div>

      {/* ─────────── Form + Sidebar ─────────── */}
      <ScrollReveal>
        <div className="container pb-24 sm:pb-32">
          <div className="grid gap-16 lg:grid-cols-[3fr_2fr] lg:gap-0">
            {/* Form (60%) */}
            <div className="lg:border-r lg:pr-16 lg:[border-color:var(--ec-line)]">
              <ContactForm />
            </div>

            {/* Direct contact (40%) */}
            <aside className="lg:pl-16">
              <p className="eyebrow">Or reach us directly</p>
              <ul className="mt-8 flex flex-col gap-4" role="list">
                {directLinks.map((label) => (
                  <li key={label}>
                    <span
                      className="text-link"
                      style={{ cursor: "default", fontSize: "0.95rem" }}
                    >
                      &rarr; [{label}]
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </ScrollReveal>
    </main>
  );
}
