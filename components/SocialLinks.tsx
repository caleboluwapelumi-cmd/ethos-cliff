import type { ReactNode } from "react";

type SocialLinksProps = {
  color?: string;
};

type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
  icon: ReactNode;
};

const LINKS: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:ethoscliff@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ethoscliff?igsh=MWJ5YXU0MmFndnhuZg%3D%3D&utm_source=qr",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "https://www.behance.net/bamigboyeisrael1",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 7h5.5a2.5 2.5 0 0 1 0 5H2z" />
        <path d="M2 12h6a2.5 2.5 0 0 1 0 5H2z" />
        <path d="M14 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" />
        <path d="M14.5 10h7" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2348160784712",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export default function SocialLinks({ color = "var(--ec-on-ink-soft)" }: SocialLinksProps) {
  return (
    <div className="social-links flex items-center" style={{ gap: "1.5rem", color }}>
      {LINKS.map(({ label, href, external, icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="social-link-icon"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
