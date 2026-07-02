import Link from "next/link";
import WordMark from "@/components/WordMark";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-cursor-surface="ink"
      style={{
        background: "var(--ec-ink)",
        borderTop: "1px solid var(--ec-line-on-ink)",
      }}
    >
      <div className="container section-sm">
        <div className="grid gap-12 sm:grid-cols-3">
          {/* Wordmark + tagline */}
          <div>
            <Link
              href="/"
              className="block rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <WordMark size="lg" tone="on-ink" />
            </Link>
            <p
              className="mt-4"
              style={{
                maxWidth: "28ch",
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                lineHeight: 1.65,
                color: "var(--ec-on-ink-soft)",
              }}
            >
              Every great business starts with a cliff-edge moment.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <p className="eyebrow" style={{ color: "var(--ec-on-ink-soft)" }}>
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-3" role="list">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact placeholders */}
          <div>
            <p className="eyebrow" style={{ color: "var(--ec-on-ink-soft)" }}>
              Contact
            </p>
            <address className="mt-4 flex flex-col gap-3 not-italic">
              <span className="footer-link" style={{ cursor: "default" }}>
                [Email]
              </span>
              <span className="footer-link" style={{ cursor: "default" }}>
                [Instagram]
              </span>
              <span className="footer-link" style={{ cursor: "default" }}>
                [LinkedIn]
              </span>
            </address>
          </div>
        </div>

        <div
          className="mt-14 pt-6"
          style={{ borderTop: "1px solid var(--ec-line-on-ink)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              color: "var(--ec-on-ink-soft)",
            }}
          >
            &copy; {year} Ethos Cliff. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
