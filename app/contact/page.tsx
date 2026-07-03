import ContactExperience from "@/components/ContactExperience";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Contact — Ethos Cliff",
  description:
    "Let's build something remarkable. Fill out the brief and we'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <main>
      <ScrollReveal>
        <div className="container pb-24 pt-32 sm:pb-32 sm:pt-40">
          <ContactExperience />
        </div>
      </ScrollReveal>
    </main>
  );
}
