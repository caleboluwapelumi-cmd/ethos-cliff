# CLAUDE.md — Ethos Cliff Website

This file is read automatically by Claude Code at the start of every session. Treat it as standing context, not a one-time instruction.

---

## What this project is

Marketing + portfolio website for **Ethos Cliff**, a branding/creative agency (run by The-Olu Bamigboye). 5-page site: Home, About, Portfolio, Services, Contact — plus dynamic portfolio detail pages.

**Bar for this build: premium, glossy, alive. Not a generic agency template.** Read `build-plan.md` section 2 ("Premium direction") before touching any component. "Fully functional" here means polish-functional: real hover/focus/active states on everything, genuine responsiveness, glass-morphism surfaces, real-time display elements, one signature interactive moment. It does NOT mean a working form backend — that's out of scope this phase.

---

## Stack

- Next.js 15, App Router, TypeScript strict mode
- Tailwind CSS
- Server Components by default; `"use client"` only where interactivity/hooks require it
- Data: Google Sheets (read-only, service account) — no Supabase, no database
- Images: Google Drive file IDs resolved to `lh3.googleusercontent.com` URLs
- Deployment: Vercel
- Package manager: npm

Do not introduce Supabase, Prisma, or any ORM. Do not add heavy animation libraries (GSAP, Framer Motion) — use CSS transitions and the Web Animations API. If a dependency is genuinely needed for something not covered here, flag it before installing.

---

## Non-negotiables

**Server/client boundary:**
- `lib/projects.ts` is server-only. Never import it from a `"use client"` file.
- Any component using `useState`, `useEffect`, `onSubmit`, `onClick`, browser APIs, or real-time updates needs `"use client"` at the top of its own dedicated file.
- Do not put event handlers or hooks directly in a Server Component (e.g. `app/page.tsx`). Extract them.

**Fail-soft data layer:**
- `getAllProjects()` must return `[]` (not throw) when env vars are missing or the Sheets API errors.
- `npm run build` must succeed with zero env vars set — `generateStaticParams` cannot throw.

**Performance:**
- Animate only `transform` and `opacity` (compositor-thread). Never animate `width`, `height`, `top`, `left`, `margin`, `padding`.
- Respect `prefers-reduced-motion: reduce` on every animation.
- Glass-morphism `backdrop-filter` can be expensive — test on mid-range hardware mentally; don't stack it on elements that are already animating.

**No hallucination:**
- Don't invent Next.js, Tailwind, or Google API methods that don't exist.
- If unsure whether something exists or what version is current, say so.

**No deprecated patterns:**
- No `getServerSideProps` (App Router project)
- No legacy Supabase auth helpers (not using Supabase)
- Use `params: Promise<{...}>` and `await params` in App Router dynamic routes (Next.js 15 async params)

---

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/portfolio` | Portfolio grid |
| `/portfolio/[slug]` | Project detail (was `/work/[slug]` in v1 — use `/portfolio/[slug]`) |
| `/services` | Services |
| `/contact` | Contact |

---

## Conventions

- File naming: kebab-case files, PascalCase component names
- Imports: absolute via `@/` alias only — no deep relative paths
- Styling: Tailwind utility classes; extract to a component when a pattern repeats 3+ times
- Error handling: explicit try/catch on all async operations, visible fallback states — no silent failures
- Comments: explain *why*, not *what*

---

## Definition of done (per page/component)

- `npx tsc --noEmit` — clean
- `npx eslint .` — clean
- `npm run build` — clean, including with zero env vars set
- Responsive: mobile (375px), tablet (768px), desktop (1280px+)
- Keyboard accessible: visible focus states, logical tab order
- `prefers-reduced-motion` respected on all animations

---

## Reference

- `build-plan.md` — full content spec, page-by-page structure, design system, copy, data schema. Source of truth for what to build. Read it before starting any page.
