# Ethos Cliff — Design System (v4: Off-White / Ink / Red)

This is the current, live design system for the Ethos Cliff site. It supersedes the v3 black/white/red dark system originally described in this file. Structure (5 pages, routes, copy, Sheets data layer) is unchanged from `build-plan (2).md` — what changed is everything visual: color system, animation philosophy, layout rhythm, interaction design. Read this entire doc before touching styling.

---

## 1. Color system (`app/globals.css` tokens)

| Token | Value | Role |
|---|---|---|
| `--ec-paper` | `#F7F2E7` | Parent background — every page, every default section |
| `--ec-paper-deep` | `#EFE8D8` | Slightly deeper off-white — rare surface lifts, hover backgrounds on rows |
| `--ec-paper-raised` | `#FFFDF8` | Reserved for raised card surfaces on paper |
| `--ec-ink` | `#121110` | Primary text; also the background of *inverted* (secondary) surfaces |
| `--ec-ink-2` | `#1C1A17` | Lifted dark surface (cards on an ink background) |
| `--ec-ink-soft` | `#55514A` | Secondary text (body copy) |
| `--ec-ink-faint` | `#8D8878` | Tertiary/muted text — eyebrows, metadata, captions |
| `--ec-line` | `#DDD5C1` | Hairline borders on paper |
| `--ec-line-strong` | `#C9BEA4` | Slightly stronger hairline (large numerals, dot separators) |
| `--ec-line-on-ink` | `rgba(247,242,231,.16)` | Hairline borders on an ink surface |
| `--ec-red` | `#D4241A` | CTAs, active states, hover accents, the one typographic accent |
| `--ec-red-hover` | `#B31C13` | Red hover state |
| `--ec-on-ink` | `#F7F2E7` | Text/foreground color when sitting on an ink (black) surface |
| `--ec-on-ink-soft` | `rgba(247,242,231,.62)` | Muted text on an ink surface |

**Rules:**
- Off-white (`--ec-paper`) is the default. Every page background is paper unless a section deliberately inverts.
- Black (`--ec-ink`) is a **secondary surface color**, not just a text color — used deliberately for the footer, the mobile nav overlay, and CTA bands (Home, Services) to create contrast rhythm against the paper. When a section uses an ink background, tag its root element `data-cursor-surface="ink"` so `CustomCursor` swaps to an off-white ring, and use the `-on-ink` / `-inverted` variants of shared classes (`.btn-invert`, `.footer-link`, `.nav-link-inverted`) instead of the paper-theme ones.
- Red is reserved for CTAs, active-state underlines/borders, hover accents, and one typographic accent per page (the period at the end of the homepage hero headline). Not used decoratively.
- No gradients, no glass-morphism, no blur effects. A very faint SVG-noise grain sits on `body::before` (`opacity: 0.4`, `mix-blend-mode: multiply`) for paper texture — this is the one intentional decorative flourish, disabled under `prefers-reduced-motion`.
- No border-radius > 8px anywhere.

---

## 2. Typography

Fonts unchanged: **Space Grotesk Bold** for headlines, **Inter** for body/labels/nav/UI. Scale unchanged from v3 — only colors moved from `--ec-white`/`--ec-gray-*` to the tokens above:

- `.text-hero` — `clamp(3.5rem, 8vw, 8rem)`, line-height `0.92`, letter-spacing `-0.04em`, weight 700, `color: var(--ec-ink)`
- `.text-h2` — `clamp(2rem, 4vw, 4rem)`, line-height `1`, `color: var(--ec-ink)`
- `.text-h3` — `clamp(1.2rem, 2vw, 1.75rem)`, `color: var(--ec-ink)`
- `.text-body` — `1rem`/`1.65`, `color: var(--ec-ink-soft)`, `max-width: 62ch`
- `.eyebrow` — `0.7rem`, `0.15em` tracking, uppercase, `color: var(--ec-ink-faint)`
- `.pull-quote` — Space Grotesk Bold, `color: var(--ec-ink)`, `2px solid var(--ec-red)` left border

Left-align everything by default; only center a deliberate CTA moment (contact hero subhead excluded — that stays left).

---

## 3. Layout system

Unchanged from v3: `.container` (max-width 1200px, `padding-inline: clamp(1.5rem, 5vw, 4rem)`), `.section` (`padding-block: clamp(5rem, 10vw, 10rem)`), `.section-sm`, `.divider` (`1px solid var(--ec-line)`).

---

## 4. Wordmark (`components/WordMark.tsx`)

Same content and type treatment as before, but now tone-aware:
```tsx
<WordMark tone="ink" />     // default — paper background (nav, general use)
<WordMark tone="on-ink" />  // footer / any ink-background context
```
`tone` controls both the headline and byline color so the mark stays legible on either surface. No dot, no decoration.

---

## 5. Navigation (`components/Nav.tsx`)

- Fixed, transparent at top; after 80px scroll: `background: var(--ec-paper)`, `border-bottom: 1px solid var(--ec-line)`.
- Desktop links use `.nav-link` (ink-faint → ink on hover, red underline when active).
- Contact link renders as an outlined pill (`.nav-link-contact`) **wrapped in `<Magnetic strength={0.4}>`** — it pulls toward the cursor on hover.
- Mobile menu is a full-screen **inverted** overlay: `background: var(--ec-ink)`, `data-cursor-surface="ink"`, links use `.nav-link-inverted` (on-ink colors), close button uses `var(--ec-on-ink)`. Conditional render only — never alongside the desktop list.

---

## 6. Animation philosophy (Ramotion flow + Koto restraint)

Core principle unchanged: motion reveals, it doesn't decorate. Nothing bounces, nothing is playful. But the v4 system adds a real interaction layer on top of the v3 reveal patterns:

**Custom cursor (`components/CustomCursor.tsx`)** — mounted once in `app/layout.tsx`. A small ink dot tracks the pointer 1:1; a ring lags behind via `rAF` lerp (`0.18` factor). The ring grows and reddens (`.is-active`) over any `a, button, [role="button"], input, textarea, select, [data-cursor="active"]`. It flips to an off-white ring (`.is-dark`) when the pointer is over an element inside `[data-cursor-surface="ink"]`. Auto-disabled on touch/coarse pointers and hidden under `prefers-reduced-motion` (ring transitions only; the dot/ring elements are unmounted entirely via the `(hover: none), (pointer: coarse)` media query in CSS).

**Magnetic pull (`components/Magnetic.tsx`)** — wraps a button/link; on `mousemove` it translates the child toward the cursor (`strength` prop, default `0.35`), springs back via CSS transition on `mouseleave`. Used on: hero primary/secondary CTAs, nav contact pill, every CTA-band button, the contact form submit button. Skips the transform entirely under `prefers-reduced-motion`.

**Rotating badge (`components/RotatingBadge.tsx`)** — a circular SVG `textPath` label that spins continuously (16s linear), with a static arrow icon in the center. Used once, on the homepage hero, wrapped in a `Link` with `aria-label` (the badge SVG itself is `aria-hidden`). Spin disabled under `prefers-reduced-motion`.

**Curtain page transition (`components/PageTransition.tsx`)** — on every route change, a full-bleed `var(--ec-ink)` panel wipes away top-to-bottom (`scaleY(1) → scaleY(0)`, 700ms, `cubic-bezier(.76,0,.24,1)`) while the new page content fades/rises underneath (`.page-fade`, synced timing). Fully `display: none` under `prefers-reduced-motion` — content just appears.

**Image reveal (`components/ImageReveal.tsx`)** — wraps a real `next/image` (never a placeholder). An ink mask covers the image and wipes off to the left (`scaleX(1) → scaleX(0)`, 900ms) on `IntersectionObserver` entry — the same curtain motif as the page transition, applied to imagery. Used on: homepage featured-project tiles, `PortfolioGrid` cards, portfolio detail cover image.

**Favicon-based placeholders (`components/FaviconPlaceholder.tsx`)** — replaces every spot that would otherwise be an empty box or a "coming soon" label: the about-page portrait, the homepage about-teaser portrait, portfolio grid cards with no `coverImageId`, and the portfolio detail cover when there's no cover image. Renders the branded EC mark (from `app/favicon.svg`) centered over a diagonal-hairline background (`repeating-linear-gradient`), with an optional label underneath. Takes a `tone` prop (`"paper" | "ink"`) to match its surrounding surface.

**Text reveal / scroll reveal** — same line-by-line `translateY(100%→0)` and IntersectionObserver-triggered fade-up patterns as v3, just retimed to `cubic-bezier(0.16, 1, 0.3, 1)` (600–700ms) instead of plain `ease-out`, and `ScrollReveal` now pairs the fade with a subtle `scale(0.98→1)`.

**Marquee** — unchanged CSS-only ticker, recolored (`color: var(--ec-ink-faint)`, `background: var(--ec-paper)`).

**No animation library.** Everything above is CSS + `requestAnimationFrame` + `IntersectionObserver`. Do not install Framer Motion, GSAP, or similar.

---

## 7. Page-by-page notes (delta from v3)

- **Home** — hero pairs the `TextReveal` headline with a `RotatingBadge` link to `/portfolio` (desktop only, `hidden lg:block`). Both hero CTAs are `Magnetic`-wrapped. About-teaser portrait is `<FaviconPlaceholder label="Photo coming soon" />`. Featured project tiles wrap their image in `ImageReveal`, fall back to `<FaviconPlaceholder />` when there's no cover or no Sheets data. Text links ("Learn more about us", "View all projects") use the new `.link-sweep` class (red underline sweeps in from the left on hover) instead of a plain `hover:underline`. CTA band is now an **inverted ink section** (`data-cursor-surface="ink"`, `background: var(--ec-ink)`) with a `Magnetic`-wrapped `.btn-invert` button — not a solid red band anymore.
- **About** — portrait placeholder is `<FaviconPlaceholder label="The-Olu Bamigboye" />`. Philosophy section's surface lift is `var(--ec-paper-deep)` (was `--ec-gray-1`). Bottom CTA button is `Magnetic`-wrapped.
- **Services** — CTA band is inverted ink (same treatment as Home), button `Magnetic`-wrapped.
- **Portfolio** — grid cards route through `PortfolioGrid.tsx`: real covers get `ImageReveal`, missing covers get `FaviconPlaceholder` (replaces the old `.shimmer` loading-style placeholder — shimmer was a "no image" state disguised as a loading state, which was misleading).
- **Portfolio detail** — cover image container always renders (previously skipped entirely with no cover); shows `ImageReveal` + real image or `FaviconPlaceholder` if `coverImageId` is absent.
- **Contact** — direct-contact placeholder links use the new `.text-link` class (paper-theme equivalent of `.footer-link`, which is now ink-surface-only) — do not reuse `.footer-link` outside the footer/mobile-nav/ink-CTA contexts, its colors are on-ink and will be near-invisible on paper. Submit button is `Magnetic`-wrapped.

---

## 8. Class reference — paper vs. ink variants

Several shared classes now have two flavors depending on what surface they sit on. Don't mix them up:

| Paper-surface class | Ink-surface equivalent |
|---|---|
| `.nav-link` | `.nav-link-inverted` |
| `.text-link` | `.footer-link` |
| `.btn-secondary` | `.btn-invert` |
| (default `.eyebrow`, `.text-body`, etc. — pass `color: var(--ec-on-ink-soft)` inline) | — |

`.btn-primary` (red) and `.link-sweep` (red underline) work on either surface unchanged since red contrasts with both paper and ink.

---

## 9. Files

**Design system:** `app/globals.css` (tokens + all utilities), `app/favicon.svg` + `app/icon.svg` (brand mark, ink bg / off-white "EC").

**New interaction components:** `components/CustomCursor.tsx`, `components/Magnetic.tsx`, `components/RotatingBadge.tsx`, `components/FaviconPlaceholder.tsx`, `components/ImageReveal.tsx`.

**Updated for v4 tone-awareness:** `components/WordMark.tsx`, `components/Nav.tsx`, `components/Footer.tsx`, `components/PageTransition.tsx`, `components/ScrollReveal.tsx`, `components/Marquee.tsx`, `components/ServicesAccordion.tsx`, `components/ProcessTimeline.tsx`, `components/ContactForm.tsx`, `components/Lightbox.tsx`, `components/PortfolioGrid.tsx`, `components/LiveClock.tsx`, all six page files under `app/`.

**Unchanged:** `lib/projects.ts`, `components/StatsCounter.tsx`, `components/TextReveal.tsx` (logic identical, only the CSS transition it triggers was retimed), `next.config.ts`, `.env.local.example`.

---

## 10. Build requirements (non-negotiable before calling any phase done)

- `npx tsc --noEmit` — clean
- `npx eslint .` — clean
- `rm -rf .next && npm run build` — clean with zero env vars set
- `npm run dev` — every page loads with correct off-white background, single nav (no double render), curtain transition plays on route change, no layout overflow on mobile
- Every interactive element has a considered hover/focus state
- `prefers-reduced-motion: reduce` — cursor, magnetic pull, rotating badge, curtain transition, image reveal, marquee, and all reveal animations must check this and skip/reduce accordingly
- No browser automation tool is available in this Windows environment — verify visually via `npm run dev` + `curl` against rendered HTML (grep for double-nav, stale token names, single hero per page) unless a run-skill/Playwright setup is added later

---

## 11. What NOT to do

- Do not install Framer Motion, GSAP, AOS, or any animation library
- Do not use gradients or glass-morphism/backdrop-filter/blur
- Do not use drop shadows for decoration — only functional depth (e.g. `.card:hover`)
- Do not use border-radius > 8px anywhere
- Do not use yellow or the old v2 blue palette (`#2D6CDF`, `#5FA8FF`) anywhere
- Do not reintroduce the old v3 token names (`--ec-black`, `--ec-white`, `--ec-gray-1..4`) — they no longer exist in `globals.css`
- Do not apply `.footer-link` or `.nav-link-inverted` on a paper-background context, or `.nav-link`/`.text-link` on an ink-background context — see the class reference table in section 8
- Do not center-align headlines unless explicitly specified
- Do not build a "no image" state as a shimmer/loading skeleton — use `FaviconPlaceholder`, which is meant to read as an intentional, permanent placeholder, not a loading state
