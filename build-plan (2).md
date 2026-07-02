# Ethos Cliff — Build Plan v2

Source of truth for content, structure, and visual direction. Copy in this doc is final — use it verbatim, don't paraphrase or "improve" it. This is v2 — replaces the single-page spec entirely. The site is now 5 distinct pages.

---

## 1. Site map

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hero, about teaser, selected work (3 cards), services teaser, CTA band |
| `/about` | About | Full portrait hero, bio, philosophy, stats/credentials |
| `/portfolio` | Portfolio | Full work grid from Google Sheets, filterable by category |
| `/portfolio/[slug]` | Project detail | Full case-study page |
| `/services` | Services | Numbered full-service breakdown, pricing teaser, CTA |
| `/contact` | Contact | 3-step multi-part form |

Nav links (in order): Home · About · Portfolio · Services · Contact

---

## 2. Premium direction (read before building anything)

**The bar:** Glossy, alive, commanding. Not minimal/quiet — Ethos Cliff is a bold brand. But not garish either — expensive-looking. Think: Apple-meets-creative-agency, not SaaS landing page.

**What "glossy" means technically:**
- Glass-morphism cards: `backdrop-filter: blur(12-16px)` + `background: rgba(255,255,255,0.08)` + `border: 1px solid rgba(255,255,255,0.15)` — use on service cards, portfolio cards overlaid on the gradient, stat blocks
- Gradient surfaces that feel lit, not flat — use the brand gradient with subtle noise texture overlay (CSS grain via SVG filter or `@apply` utility) to prevent the banding that makes gradients look cheap
- Button gloss: gradient background + `box-shadow: inset 0 1px 0 rgba(255,255,255,0.2)` + hover state that shifts the gradient direction slightly
- Image treatment: CEO portrait and project images get subtle `box-shadow` depth + slight rounded corners (12-16px) — not square crops, not circular

**Signature moment — cursor-reactive gradient (homepage hero only):**
Radial spotlight that follows the cursor within the hero section. Implementation: CSS custom properties (`--mouse-x`, `--mouse-y`) updated via a throttled `rAF` mousemove listener, applied as a `radial-gradient` overlaid on the blue gradient background. Subtle — it should feel like the gradient is alive, not like a flashlight. No-op on touch devices. This already exists in `CursorGradient.tsx` from phase 1 — preserve and refine it.

**Real-time display elements (add these, they make a site feel alive):**
- A live clock or the current date in the hero or nav — `new Date()` updated on an interval, formatted cleanly (e.g. "Lagos, NG · 14:32")
- A subtle animated gradient border on the primary CTA button — CSS `@keyframes` rotating the gradient angle, compositor-only
- Number count-up animation on stat figures in the About page (years experience, projects completed, etc.) — trigger on IntersectionObserver entry, keep it fast (600-800ms)

**Typography behavior:**
- Hero headline: very large (clamp between 3rem and 7rem based on viewport), tight leading (0.9-1.0), slight negative letter-spacing (-0.02em to -0.04em) — this is the single biggest thing that separates premium sites from generic ones at a glance
- Body: comfortable line-height (1.6-1.7), max-width ~65ch for readability
- Section eyebrow labels: uppercase, 0.12-0.15em letter-spacing, small (0.7-0.8rem), muted opacity

**Motion rules:**
- Scroll reveal: fade + translateY(30px → 0), 400ms ease-out, staggered on grid children (50ms between each)
- Page transitions: a subtle fade (opacity 0→1, 300ms) on route change — use Next.js layout animation or a simple CSS transition
- No scroll-jacking, no parallax on text, no bouncy easing anywhere
- Hover on cards: translateY(-4px) + box-shadow deepens — compositor only
- All animations respect `prefers-reduced-motion: reduce`

---

## 2a. Visual design system

### Color tokens
| Name | Hex | Role |
|---|---|---|
| White | `#FFFFFF` | Primary background |
| Deep Blue | `#2D6CDF` | Gradient start, primary brand |
| Light Blue | `#5FA8FF` | Gradient end |
| Yellow | `#FFD23F` | Accent — CTAs, active states, highlights |
| Ink | `#0F1729` | Dark text, dark backgrounds |
| Glass White | `rgba(255,255,255,0.08)` | Glass card backgrounds |
| Glass Border | `rgba(255,255,255,0.15)` | Glass card borders |

Brand gradient: `linear-gradient(135deg, #2D6CDF 0%, #5FA8FF 100%)`

Dark gradient (for dark sections): `linear-gradient(135deg, #0F1729 0%, #1a2d5a 100%)`

### Typography
- Display/Headlines: **Space Grotesk**, Bold — loaded via `next/font/google`
- Body: **Inter**, Regular — loaded via `next/font/google`
- Structured so swapping in licensed Söhne later is a one-line change in `app/layout.tsx`

### Wordmark component (`components/WordMark.tsx`)
```
Ethos Cliff          ← Space Grotesk Bold, larger
by The-Olu Bamigboye ← Inter, light/regular, smaller, muted
```
No dot. Used in Nav and Footer — both import `<WordMark />`.

---

## 3. Page-by-page spec

### 3.1 — Home (`/`)

**Nav:** Sticky, transparent over hero gradient, transitions to white/ink background with shadow once scrolled. Mobile hamburger. Active link underlined in yellow.

**Hero section:**
- Full-viewport height, blue gradient background + CursorGradient overlay
- Live location/time display: "Lagos, NG · [live time]" — small, top-right of hero or beneath the subhead, updates every second
- Wordmark or "Ethos Cliff" as a large display element (can be larger than nav wordmark)
- Headline: "Every Great Business Starts With a Cliff-Edge Moment."
- Subhead: "That moment when you looked out and said — 'I'm building something the world needs to see.' We heard you. And we showed up with everything it takes to make them look."
- Two buttons: "Let's Build It Together" (yellow, primary) + "View Our Work" (ghost/outline, white)
- Scroll indicator: animated chevron or "Scroll" label with a subtle bounce

**About teaser (homepage only — not the full about page):**
- Two-column: left = CEO portrait image (placeholder: `/images/ceo-placeholder.jpg` — note in blockers.md that real photo needed), right = short intro text
- Pull quote in blue: "We don't just brand businesses. We give them a voice, a face, and a fighting chance."
- CTA: "Meet The Team →" linking to `/about`

**Selected work (3 cards):**
- Pull top 3 `featured: TRUE` projects from Google Sheets
- Glass-morphism cards overlaid on a dark gradient background section
- Each card: cover image, category tag, title, summary, hover state lifts card + yellow border
- "View All Projects →" link to `/portfolio`
- Empty state (no Sheets data yet): show 3 skeleton placeholder cards, not a broken section

**Services teaser:**
- 3 of the 7 services, numbered (01, 02, 03), white cards on light blue wash background
- Each: number, service name, one-line hook only (not full body copy — that's on `/services`)
- "See All Services →" link to `/services`

**CTA band:**
- Full-bleed blue gradient, white headline, yellow CTA button
- "Your Story Doesn't Have to Wait Any Longer."
- Button: "Claim Your Free Consultation" → links to `/contact`

**Footer:**
- Dark background (`#0F1729`)
- WordMark component left, nav links center/right, social links
- "© [current year] Ethos Cliff. All rights reserved."
- Contact placeholders: [Email] · [Phone] · [Location] — leave bracketed, don't invent

---

### 3.2 — About (`/about`)

**Hero:**
- Split layout: left = large CEO portrait (full-height, slightly cropped from top on mobile), right = hero text
- Eyebrow: "Our Story Is About Yours"
- Headline: "We Were Built for Businesses Like Yours."
- Portrait: placeholder image path `/images/ceo.jpg` — note in blockers.md that real photo needed. Use a styled placeholder div (gradient background + initials "TOB") until real photo is supplied — don't use a random stock photo

**Bio section (full copy):**
There's a particular kind of entrepreneur who keeps us up at night — not out of worry, but out of excitement.

They have an idea that won't leave them alone. A product their community needs. A service that could genuinely change someone's life. But the world doesn't know their name yet.

That's where Ethos Cliff was born.

We created this agency for the startup still finding its footing. For the founder who knows their why but hasn't found the words. For the small business ready to stop being small in the way people think about it.

Pull quote (blue, large): "We don't just brand businesses. We give them a voice, a face, and a fighting chance."

**Stats row (count-up animation on scroll):**
- 3–4 stat blocks in a row: e.g. "50+ Brands Built", "5+ Years Experience", "7 Services", "100% Passion" — use these exact placeholder stats; client can update later
- Glass-morphism cards on gradient band background
- Count-up animation triggers on IntersectionObserver entry (600–800ms, ease-out)

**Philosophy / Why Us (full copy):**
Eyebrow: "The Honest Truth"
Headline: "Anyone Can Make You a Logo. We Make You a Brand People Believe In."

There are a hundred agencies that will take your money, hand you a pretty design, and call it a day.

Pull quote (blue): "We're not them."

At Ethos Cliff, we sit down, we listen, we ask the uncomfortable questions — What do you actually stand for? Who are you really talking to? What does success look like in a year? In five?

Because a brand built without that foundation doesn't last. And we're not in the business of short-term wins.

We're in the business of building something you'll be proud of for years to come. Something that grows with you. Something that, one day, people will look at and say — "I've always known that name."

Pull quote (blue): "That's the Ethos Cliff promise."

**CTA at bottom:** "Ready to work together?" → button to `/contact`

---

### 3.3 — Portfolio (`/portfolio`)

**Hero:**
- Dark gradient background, white headline
- Eyebrow: "Selected Work"
- Headline: "Brands We've Helped Find Their Voice."

**Filter bar:**
- Category filter buttons: "All" + the 7 service category names
- Active state: yellow background, ink text
- Filter is client-side (JS filter on the already-fetched project array — no refetch on filter change)
- Animate filtered cards out/in with a subtle opacity + scale transition

**Project grid:**
- 3-column desktop, 2-column tablet, 1-column mobile
- Glass-morphism cards on dark/gradient background
- Each card: cover image (aspect-ratio 4/3), category tag, title, summary, year
- Hover: lift + yellow border + overlay with "View Project →" text fading in
- Empty state: "No projects yet — check back soon." styled intentionally, not broken-looking

**Pagination or load-more:**
- If > 9 projects, show a "Load More" button rather than paginating (all data is already client-side after the server fetch, so this is just a JS slice, not a new fetch)

---

### 3.4 — Portfolio detail (`/portfolio/[slug]`)

Route is `/portfolio/[slug]` — NOT `/work/[slug]`. Update the data layer accordingly.

**Header:**
- Breadcrumb: Home → Portfolio → [Project Title]
- Project title, client, category, year — display font, large

**Cover image:** full-width, aspect-ratio 16/9, rounded corners, subtle shadow

**Case-study body (graceful fallback rendering — same logic as before):**
- If `problem` is present → render "The Challenge" section
- If `approach` is present → render "Our Approach" section
- If `process_notes` is present → render "The Process" section
- If `results` is present → render "The Outcome" section (styled prominently — large stat or pull-quote treatment)
- If none of the above → fall back to `description`, then `summary`
- Never show an empty labeled section with no content

**Gallery:** masonry or 2-column grid of gallery images, lightbox on click (use a simple CSS/JS lightbox — no heavy library dependency unless it genuinely earns its weight)

**Next project:** at the bottom, a "Next Project →" link that navigates to the next project by position in the Sheets row order

---

### 3.5 — Services (`/services`)

**Hero:**
- Blue gradient background
- Eyebrow: "The Arsenal"
- Headline: "Here's What Happens When You Work With Us."
- Subhead: "Picture this — it's six months from now. Your business looks different. It feels different. People are finding you, following you, talking about you. Here's exactly how we make that happen:"

**Services list (numbered, full copy, all 7):**

All seven services on this page get the full hook + body copy. Layout: alternating or stacked, numbered 01–07. Each service is a substantial block, not a card — this is a dedicated page so give each one room.

01. **Video Editing** — *Your audience is scrolling. Fast.* — We create video content so compelling it makes them stop, watch, and want more. Because in today's world, if you're not on screen — you're not in the room.

02. **Personal Branding** — *People don't just buy products. They buy people.* — We craft a personal brand so magnetic that your name becomes your greatest business asset. Whether you're a founder, a creative, or an expert in your field — we make you unforgettable.

03. **Business Branding** — *First impressions are permanent.* — We design brands that don't just look good — they mean something. Your logo, your colours, your identity — built to communicate trust before you say a single word.

04. **Search Engine Optimisation (SEO)** — *Your dream client is searching for you right now.* — Are they finding you — or your competitor? We put you exactly where you need to be: at the top, at the right time, in front of the right people.

05. **Graphics Design** — *In a world full of noise, great design is silence — and silence gets noticed.* — From social posts to pitch decks, we design visuals that speak your brand's language fluently and make people feel something.

06. **Elevations** — *You've built something real. Now let's make it legendary.* — This is for the brand that already exists but knows it's capable of more. We audit, refine, reposition, and re-energise — turning a good business into an iconic one.

07. **Social Media Management** — *Consistency is a superpower most businesses underestimate.* — We show up every day on your behalf — posting, engaging, growing — so your audience never wonders where you went. Because out of sight really is out of mind.

**Process section (below the services list):**
- 4-step horizontal timeline: Discover → Strategy → Create → Launch
- Each step: number, name, 1-sentence description
- Connected with a line/arrow between steps
- Copy for each step:
  - Discover: "We dig deep into your brand, audience, and goals."
  - Strategy: "We build a roadmap that aligns creativity with business outcomes."
  - Create: "We execute with precision — every asset, every detail."
  - Launch: "We deliver a brand ready to make its mark in the world."

**CTA at bottom:** full-bleed yellow band (rare use of yellow as a background — high contrast moment)
- Dark ink headline: "Ready to get started?"
- Button: "Book a Free Consultation" → `/contact`

---

### 3.6 — Contact (`/contact`)

**Header:**
- Eyebrow: "New Project Enquiry"
- Headline: "Let's build something remarkable."
- Subhead: "Fill out the brief and we'll get back to you within 24 hours."

**Multi-step form (3 steps, client-side state only — no backend this phase):**

Step 1 — About You:
- Full Name (required)
- Email Address (required)
- Company / Project Name (required)
- Website / Social Links (optional)
- "Continue →" button

Step 2 — The Project:
- Service needed (select/radio: the 7 service names)
- Project description (textarea, required)
- Budget range (select: Under $500 / $500–$1,500 / $1,500–$5,000 / $5,000+)
- Timeline (select: ASAP / 1–2 months / 3–6 months / Flexible)
- "Continue →" and "← Back" buttons

Step 3 — Logistics:
- How did you hear about us? (select: Instagram / LinkedIn / Referral / Google / Other)
- Anything else? (textarea, optional)
- Submit button: "Send Enquiry"

On submit: replace form with a confirmation message — "Thanks [name], we'll be in touch within 24 hours." No backend, no actual send. State managed entirely in the client component.

**Step indicator:** "1 · 2 · 3" with active step highlighted in yellow — visible above the form, updates as user progresses.

**Direct contact column (beside the form on desktop):**
- "Or connect directly"
- [Email placeholder], [Instagram placeholder], [LinkedIn placeholder]
- These are placeholders — client fills in real links later

---

## 4. Data layer — Google Sheets

### Updated schema (tab name: `Projects`)

```
slug | title | client | category | year | featured | cover_image_id | gallery_image_ids | summary | problem | approach | process_notes | results | description
```

Same as before with full case-study fields. See section 3.4 for rendering logic.

### Route change: `/work/[slug]` → `/portfolio/[slug]`

Update `lib/projects.ts` and all `Link href` references. The data layer itself doesn't change — just the route.

### Fail-soft requirement (non-negotiable):
If env vars are missing or the API call fails → return `[]` + `console.warn`. The site must build and deploy cleanly with zero env vars set. `generateStaticParams` must not throw.

### ISR: `revalidate = 300` (5 min) on both `/portfolio` and `/portfolio/[slug]`

### Image handling: same as before
Drive file ID → `https://lh3.googleusercontent.com/d/{fileId}`
Allowed in `next.config.ts` under `images.remotePatterns` for `lh3.googleusercontent.com`.

---

## 5. File/folder structure (target state)

```
app/
  layout.tsx              ← root layout, fonts, nav, footer
  page.tsx                ← Home
  about/
    page.tsx
  portfolio/
    page.tsx
    [slug]/
      page.tsx
  services/
    page.tsx
  contact/
    page.tsx
  globals.css
  favicon.svg

components/
  WordMark.tsx            ← shared wordmark, used in Nav + Footer
  Nav.tsx                 ← sticky nav, mobile hamburger
  Footer.tsx
  CursorGradient.tsx      ← hero signature moment (homepage only)
  ScrollReveal.tsx        ← IntersectionObserver wrapper
  LiveClock.tsx           ← live time display for hero ("use client")
  StatsCounter.tsx        ← count-up animation ("use client")
  ContactForm.tsx         ← 3-step form ("use client")
  PortfolioGrid.tsx       ← client-side filtered grid ("use client")
  Lightbox.tsx            ← simple image lightbox for project gallery ("use client")

lib/
  projects.ts             ← server-only Sheets data layer

.env.local.example
CLAUDE.md
build-plan.md
```

---

## 6. Out of scope (this phase)

- Contact form backend (UI/state only)
- Authentication
- CMS write access
- Real CEO photo (placeholder until supplied — see blockers note)
- Social media links (placeholders until client provides)
- Söhne font (Space Grotesk fallback until licensed)
