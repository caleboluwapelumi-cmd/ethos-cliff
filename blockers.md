# Ethos Cliff — Blockers & Known Gaps

Items below must be resolved before the site is fully production-ready.
They are not code bugs — the site builds and deploys without them — but they
will leave placeholder content, missing data, or degraded functionality until
each is addressed.

---

## 1. Google Sheets / Drive setup (required for /work to show anything)

**Status:** Code complete; credentials not yet configured.

Three env vars must be set in Vercel (and locally in `.env.local`):

```
GOOGLE_SERVICE_ACCOUNT_EMAIL=   # service account client_email from JSON key
GOOGLE_PRIVATE_KEY=             # private_key value, \n as literal two-char escapes, wrapped in quotes
GOOGLE_SHEET_ID=                # long ID from the Sheet URL between /d/ and /edit
```

Manual steps required before these vars mean anything:
1. Create the Google Sheet with a tab named `Projects` using the column schema in `build-plan.md` section 4.
2. Share the Sheet with the service account email as **Viewer**.
3. Create a Drive folder for images; share each image as **Anyone with the link → Viewer**.
4. In Google Cloud Console: enable the **Sheets API** on the project, create a Service Account, download the JSON key.

Until set up, `/work` shows "No projects yet — check back soon." This is intentional (fail-soft), not a bug.

---

## 2. Footer contact info — placeholders not replaced

**File:** `components/Footer.tsx`

The footer currently renders literal bracketed placeholders:

```
[Email] · [Phone] · [Location]
```

Replace with real values once the client provides them. Do not invent values.

---

## 3. Contact form — no backend wired

**File:** `components/ContactForm.tsx`

Explicitly out of scope for this phase (see `build-plan.md` section 6). On submit, the form shows a "Thanks — we'll be in touch" confirmation but nothing is actually sent.

When ready to wire a backend:
- Options: Resend / Postmark for email, or a Sheets-write route handler.
- The component is isolated — backend integration requires only adding a `fetch` call inside `handleSubmit` without touching any server components.

---

## 4. Typography — Söhne not licensed

**File:** `app/layout.tsx`

The brand spec calls for **Söhne** (Klim Type Foundry, paid). The site currently loads **Space Grotesk** (Google Fonts, free) as the documented fallback. This is intentional per `build-plan.md` section 2a.

To swap in Söhne when purchased:
1. Self-host the font files (Klim's license allows this for web use).
2. Replace `Space_Grotesk` in `app/layout.tsx` with `next/font/local` pointing to the Söhne files.
3. No other files need to change — the rest of the codebase uses the `--font-display` / `font-display` Tailwind token.

---

## 5. Logo / favicon — no brand mark

The current favicon is the default Next.js favicon. No graphic logo mark has been provided.

When the client supplies a logo SVG/PNG:
- Replace `app/favicon.ico` with the brand favicon.
- Optionally replace the text "Ethos Cliff" in `components/Nav.tsx` with an `<Image>` of the logo SVG.

---

## 6. Nav links — anchor scrolling on non-homepage routes

`/#services`, `/#about`, and `/#contact` nav links work correctly from the homepage (scroll to section). From `/work` or `/work/[slug]`, clicking one of these navigates back to `/` with the anchor hash, which should scroll to the correct section on arrival. This works in browsers that support scroll-to-anchor after navigation — but there is no JS-driven scroll fallback for edge cases.

If smoother cross-page anchor scrolling is needed, add a `useEffect` in a client component that reads `window.location.hash` on mount and calls `scrollIntoView`. Not a priority unless clients report issues.

---

## 7. No 404 page customisation

`/work/[slug]` calls `notFound()` for unknown slugs. The fallback renders Next.js's default `/_not-found` page. A branded 404 page (`app/not-found.tsx`) is not yet built.

---

## 8. Image `unoptimized` — Drive CDN limitations

All `next/image` instances pointing at Google Drive (`lh3.googleusercontent.com`) use the `unoptimized` prop, bypassing Next.js image optimisation. Images are served at original resolution. This is acceptable for a low-traffic portfolio site but will become a performance concern at scale.

Resolution path when needed: migrate images to Supabase Storage, Cloudinary, or Vercel Blob, and remove the `unoptimized` flag.
