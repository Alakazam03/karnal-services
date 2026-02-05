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

Construction calculator uses default rates for Karnal 2026 (basic finish):
- Labour: ₹450/sq.ft
- Material: ₹1,400/sq.ft
- Total: ₹1,850/sq.ft

For premium finish, rates can go up to ₹3,500/sq.ft total. Update in `src/lib/calculators/construction.ts`.

## Deployment

Built for Node.js (standalone mode). API routes (`/api/rate-card.pdf`, `/api/og.png`) run server-side; pages are pre-rendered static.

### Deploy for free

**Option A: Vercel (recommended)** — Free hobby tier, minimal config.

1. Install the Vercel adapter and switch to it (so API routes run as serverless):
   ```bash
   npx astro add vercel
   ```
2. Push your repo to GitHub and import the project at [vercel.com](https://vercel.com).
3. Add environment variables in the Vercel dashboard: `PUBLIC_WHATSAPP_NUMBER`, `PUBLIC_PHONE_NUMBER`, and optionally `PUBLIC_GA4_MEASUREMENT_ID`.
4. Deploy. Vercel will build and host the site; `/api/rate-card.pdf` and `/api/og.png` run as serverless functions.

**Option B: Render** — Free tier (service spins down after ~15 min inactivity; cold start on next visit).

1. Create a **Web Service** at [render.com](https://render.com), connect your GitHub repo.
2. **Build command:** `npm install && npm run build`
3. **Start command:** `node ./dist/server/entry.mjs`
4. Set env vars in the Render dashboard. Free tier uses 512 MB RAM.

**Option C: Railway** — Free $5/month credit; good for always-on.

1. Connect repo at [railway.app](https://railway.app), create a new project from the repo.
2. **Build:** `npm install && npm run build`
3. **Start:** `node ./dist/server/entry.mjs`
4. Add env vars in the Railway project. Expose the service via a generated domain.

**Option D: Keep Node adapter (any Node host)**  
Deploy to any Node.js host (VPS, Fly.io, etc.). Build with `npm run build`, then run `node ./dist/server/entry.mjs`. Set `HOST=0.0.0.0` and `PORT` as required by the host.
