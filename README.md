# Karnal Local Services MVP

Karnal's go-to for real construction rates and trusted local services—so you know what to expect before you build or renovate.

## Stack

- **Astro 5** (static + SSR for API routes)
- **Tailwind CSS** (styling)
- **React** (interactive calculator)
- **Node adapter** (server-side rendering for PDF/OG image endpoints)
- **No database, no Supabase, no S3** — lead form → WhatsApp click-to-chat

## Features

- ✅ **Construction Cost Calculator** — Per sq.ft × area with labour/material breakdown
- ✅ **4 Service Niches** — Civil construction, interior/false ceiling, solar, pest control
- ✅ **Programmatic SEO** — `/service/[slug]-karnal` pages with JSON-LD, OG images, FAQs
- ✅ **Rate Card PDF** — Downloadable lead magnet (generated server-side)
- ✅ **WhatsApp Lead Form** — Client-side form → `wa.me` click-to-chat (no backend)
- ✅ **Sticky Call CTA** — Mobile-friendly "Call when ready" button
- ✅ **GA4** — Custom events: `calculator_submit`, `file_download` (rate card), `generate_lead` (WhatsApp)
- ✅ **Blog (programmatic SEO)** — Content collection at `/blog`; add `.md` files in `src/content/blog/` to scale.

## Setup

```bash
npm install
cp env.example .env
# Edit .env with your PUBLIC_WHATSAPP_NUMBER and PUBLIC_PHONE_NUMBER
```

## Development

```bash
npm run dev
```

Visit `http://localhost:4321`

## Build

```bash
npm run build
npm run preview  # Preview production build
```

## Environment Variables

- `PUBLIC_WHATSAPP_NUMBER` — WhatsApp number for lead form (e.g. `919876543210`, no + or spaces)
- `PUBLIC_PHONE_NUMBER` — Phone number for sticky call CTA (same format)
- `PUBLIC_GA4_MEASUREMENT_ID` — Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`). Omit to disable analytics.

## Project Structure

```
src/
  components/     # Shared (Header, StickyCall, FAQ, LeadForm)
  layouts/        # BaseLayout.astro
  pages/
    index.astro
    service/[slug].astro   # Programmatic niche pages
    api/
      rate-card.pdf.ts     # PDF generation
      og.png.ts            # Dynamic OG image
  lib/
    services.ts            # Niche config + slugs
    calculators/           # Calculator logic (construction.ts)
    whatsapp.ts            # Build wa.me URL
  react/
    ConstructionCostCalculator.tsx
```

## Blog (programmatic SEO)

- **Index:** `/blog` — lists all posts (newest first).
- **Posts:** `/blog/[id]` — one page per post; URL `id` = filename without `.md`.
- **Content:** Add Markdown files in `src/content/blog/` with frontmatter:
  - `title`, `description`, `pubDate` (required)
  - `serviceSlug` (optional) — links post to a service page and shows a CTA.
  - `keywords` (optional) — for meta.
- **SEO:** Each post gets Article JSON-LD, dynamic OG image, canonical URL, and internal links to service pages. Add a new `.md` file to scale; no code changes.

## Service Niches

1. **Civil Construction Cost** (`/service/civil-construction-cost-karnal`)
   - Construction cost calculator (per sq.ft)
   - Labour + material breakdown

2. **Interior Design & False Ceiling** (`/service/interior-design-false-ceiling-karnal`)
   - False ceiling rates and interior design info

3. **Solar Installation** (`/service/solar-installation-karnal`)
   - Solar panel cost guide (1kW, 2kW, 3kW)

4. **Pest Control** (`/service/pest-control-karnal`)
   - Termite treatment and pest control services

## Brand Voice

- **Local & specific** — "Karnal", "Sector X", not generic "India"
- **Clear, not clever** — Short sentences, numbers, no jargon
- **Helpful, not pushy** — Calculator → rate card → call (in that order)
- **No fake urgency** — Useful information builds trust

## Default Rates

Construction calculator uses default rates (replace in `src/lib/calculators/construction.ts`):
- Labour: ₹50/sq.ft
- Material: ₹60/sq.ft

Update these with real Karnal rates.

## Deployment

Built for Node.js (standalone mode). Deploy to:
- Vercel (with Node.js runtime)
- Railway
- Any Node.js host

API routes (`/api/rate-card.pdf`, `/api/og.png`) run server-side; pages are pre-rendered static.
