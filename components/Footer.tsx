import Link from "next/link";
import WordMark from "@/components/WordMark";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    label: "Email",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="m4 6.5 8 6.5 8-6.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10.5v6M8 7.75v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M11.5 16.5v-3.75c0-1.24 1-2.25 2.25-2.25S16 11.51 16 12.75v3.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M11.5 12.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-cursor-surface="ink"
      style={{
        background: "var(--ec-ink-gradient)",
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

          {/* Contact / social */}
          <div>
            <p className="eyebrow" style={{ color: "var(--ec-on-ink-soft)" }}>
              Contact
            </p>
            <div className="mt-4 flex items-center gap-3" role="list">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="footer-social-icon"
                >
                  {icon}
                </a>
              ))}
            </div>
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
