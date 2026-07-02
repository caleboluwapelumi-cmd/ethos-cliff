"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import WordMark from "@/components/WordMark";
import Magnetic from "@/components/Magnetic";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIsDark, setHeroIsDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const firstSection = document.querySelector("main > section:first-child");
    setHeroIsDark(firstSection?.getAttribute("data-cursor-surface") === "ink");
  }, [pathname]);

  const showInverted = heroIsDark && !scrolled;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        height: "64px",
        background: scrolled ? "var(--ec-paper)" : "transparent",
        borderBottom: scrolled
          ? "1px solid var(--ec-line)"
          : "1px solid transparent",
      }}
    >
      <nav
        className="container flex h-full items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="block rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
        >
          <WordMark showMark tone={showInverted ? "on-ink" : "ink"} />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {navLinks.map(({ href, label }) => {
            const active = isActive(href);
            const isContact = href === "/contact";
            return (
              <li key={href}>
                {isContact ? (
                  <Magnetic strength={0.4}>
                    <Link
                      href={href}
                      className={showInverted ? "nav-link-contact-inverted" : "nav-link-contact"}
                      aria-current={active ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </Magnetic>
                ) : (
                  <Link
                    href={href}
                    className={`${showInverted ? "nav-link-inverted" : "nav-link"}${active ? " is-active" : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-md text-ec-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 md:hidden"
          style={showInverted ? { color: "var(--ec-on-ink)" } : undefined}
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-current transition-all duration-200 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-current transition-all duration-200 ${
              menuOpen ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-current transition-all duration-200 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu — conditional overlay, never rendered alongside desktop list */}
      {menuOpen && (
        <div
          id="mobile-menu"
          data-cursor-surface="ink"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center md:hidden"
          style={{ background: "var(--ec-ink)" }}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="absolute right-6 top-5 flex h-9 w-9 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            style={{ color: "var(--ec-on-ink)" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <ul className="flex flex-col items-center gap-8" role="list">
            {navLinks.map(({ href, label }, i) => {
              const active = isActive(href);
              return (
                <li
                  key={href}
                  className="motion-safe:animate-fade-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <Link
                    href={href}
                    className={`nav-link-inverted${active ? " is-active" : ""}`}
                    style={{ fontSize: "2rem" }}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
