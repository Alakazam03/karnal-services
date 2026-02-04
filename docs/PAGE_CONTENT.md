# Page Content Design – Karnal Local Services

Ready-to-use copy for HTML/Astro pages. Aligned with [BRAND_STRATEGY.md](./BRAND_STRATEGY.md): local, clear, helpful, no fake urgency.

---

## Shared / global

Use across header, footer, and sticky CTA.

| Key | Content |
|-----|--------|
| **Site name** | Karnal Local Services |
| **Tagline (short)** | Real rates. One place. Karnal. |
| **Tagline (full)** | Karnal's go-to for real construction rates and trusted local services—so you know what to expect before you build or renovate. |
| **Nav: Home** | Home |
| **Nav: Civil** | Construction Cost |
| **Nav: Interior** | False Ceiling & Interior |
| **Nav: Solar** | Solar Installation |
| **Nav: Pest** | Pest Control |
| **Sticky CTA label** | Call when you're ready |
| **Sticky CTA subtext** | Talk to a local expert |
| **Footer line** | Built for Karnal. No spam, no pressure—just clarity. |

---

## Homepage (`index.astro`)

### Hero

```html
<h1>See the maths first. Then call.</h1>
<p class="lead">Real construction rates and trusted local services for Karnal—so you know what to expect before you talk to a single contractor.</p>
<p>Use the calculator, download the rate card, then get in touch when you're ready. No pressure.</p>
```

**CTA primary:** “Check construction cost” (links to `/service/civil-construction-cost-karnal`)  
**CTA secondary:** “Download rate card 2026” (links to `/api/rate-card.pdf` or PDF route)

---

### Value block (3 points)

| Heading | Body |
|--------|------|
| **No guesswork** | Labour + material per sq.ft in one place. Compare quotes with confidence. |
| **Built for Karnal** | Sector 13, Sector 12—local rates, not Delhi NCR. Updated for 2026. |
| **One place, four needs** | Civil, false ceiling, solar, pest control. All here. |

---

### Services grid (4 cards)

| Service | Title | Short description | Link text |
|---------|--------|-------------------|-----------|
| Civil | Construction cost in Karnal | Per sq.ft calculator and rate card. Know the range before you call. | See rates & calculator |
| Interior | False ceiling & interior | Cost per sq.ft for POP, gypsum, and designs in Karnal. | See rates |
| Solar | Solar installation in Karnal | 1kW, 2kW, 3kW—prices and what to ask. | See solar prices |
| Pest | Pest control in Karnal | Termite and home pest control. What it costs, what to ask. | See pest control |

---

### Pre-footer CTA

**Heading:** Know the range. Then choose who to call.  
**Body:** Download the Karnal Material Rate Card 2026. Labour, material, per sq.ft—so you're not going in blind.  
**Button:** Download rate card (PDF)

---

## Service page template (programmatic `service/[slug].astro`)

Structure: **Hero → Intro (belief hook) → Calculator or feature block → FAQs → Rate card CTA → Related services.**

Use the niche-specific content below for each slug; keep the same section order.

---

## 1. Civil construction cost – `/service/civil-construction-cost-karnal`

### Meta (title, description)

- **Title:** Construction Cost per Sq Ft in Karnal 2026 | Labour + Material Calculator
- **Description:** Real construction rates for Karnal. Use our per sq.ft calculator and download the 2026 rate card. See labour + material breakdown—then call when you're ready.

### Hero

```html
<h1>Construction cost in Karnal—see the maths first</h1>
<p class="lead">Labour + material per sq.ft. No jargon. Use the calculator, then compare quotes with confidence.</p>
```

### Intro (below hero)

```html
<p>Contractors quote different numbers. We get it. So we put Karnal's construction rates in one place: area × rate, with labour and material split. Check the calculator and rate card. Call when you have a number in mind.</p>
<p>Rates are updated for 2026. Built for Karnal—Sector 13, Sector 12, and nearby.</p>
```

### Calculator block

**Heading:** Estimate your construction cost  
**Subtext:** Enter area in sq.ft. We use default labour + material rates for Karnal; you can change them. Result is approximate—use it to compare quotes.  
**Labels:** Area (sq.ft), Labour (₹/sq.ft), Material (₹/sq.ft)  
**Output:** Total estimated cost, Labour total, Material total  
**CTA below result:** “Download full rate card 2026” (link to PDF)

### FAQ (for FAQPage schema + accordion UI)

| Question | Answer |
|----------|--------|
| What is the construction cost per sq ft in Karnal in 2026? | Construction cost in Karnal typically ranges from ₹X to ₹Y per sq.ft depending on finish (basic to premium). Labour and material are often split; use our calculator with current Karnal rates to get an estimate. |
| Are labour rates different in different sectors of Karnal? | Labour rates can vary slightly by sector and demand. Our calculator uses average Karnal rates; for sector-specific quotes, use the rate card and then confirm with local contractors. |
| How do I use the construction cost calculator? | Enter your area in sq.ft and the labour and material rates (or use our defaults for Karnal). The calculator gives you total cost and a labour vs material breakdown so you can compare contractor quotes. |
| Where can I get the Karnal material rate card 2026? | Download the Karnal Material Rate Card 2026 from this page. It includes labour and material rates in one place so you're not going in blind. |
| Why show labour and material separately? | When you see both, you can tell if a quote is fair. Contractors quote different numbers—seeing the basis first helps you compare and choose. |

*(Replace X, Y with real ranges when you have them.)*

### Rate card CTA (before related services)

**Heading:** Download Karnal Material Rate Card 2026  
**Body:** Labour, material, and per sq.ft in one PDF. No sign-up pressure—just clarity.  
**Button:** Download rate card (PDF)

---

## 2. Interior design & false ceiling – `/service/interior-design-false-ceiling-karnal`

### Meta

- **Title:** False Ceiling & Interior Design Cost in Karnal 2026 | POP, Gypsum Rates
- **Description:** False ceiling and interior design rates in Karnal. Cost per sq.ft for POP, gypsum, and designs. See what to expect—then call when you're ready.

### Hero

```html
<h1>False ceiling & interior cost in Karnal</h1>
<p class="lead">POP, gypsum, and design types—per sq.ft. Know the range before you talk to contractors.</p>
```

### Intro

```html
<p>False ceiling and interior work can feel confusing. We've put Karnal rates in one place: cost per sq.ft for POP, gypsum, and common designs. See the numbers first. Then call when you're ready.</p>
<p>Built for Karnal. Updated for 2026.</p>
```

### Feature block (no calculator on this page in MVP; optional later)

**Heading:** What drives false ceiling cost in Karnal  
**Bullets:** Design complexity (simple vs layered), material (POP vs gypsum), area, labour. Use our rate card for ballpark per sq.ft.

### FAQ

| Question | Answer |
|----------|--------|
| What is the false ceiling cost per sq ft in Karnal? | False ceiling cost in Karnal varies from around ₹X to ₹Y per sq.ft depending on material (POP, gypsum) and design. Basic POP is usually lower; gypsum and intricate designs cost more. |
| POP vs gypsum ceiling cost in Karnal—which is cheaper? | In Karnal, POP is often cheaper per sq.ft for basic work; gypsum costs more but can be faster to install. Compare both on our rate card and ask contractors for a breakdown. |
| How do false ceiling contractors in Karnal quote? | Many quote per sq.ft (labour + material). Ask for labour and material split so you can compare. Our rate card gives you a baseline for Karnal. |
| Where can I get interior design rates for Karnal? | This page and our Karnal rate card include false ceiling and interior-related rates. One place for civil, interior, solar, and pest control—all for Karnal. |

*(Replace X, Y with real ranges when you have them.)*

### Rate card CTA

**Heading:** Get the full rate card  
**Body:** False ceiling, material, and labour rates for Karnal in one PDF.  
**Button:** Download rate card (PDF)

---

## 3. Solar installation – `/service/solar-installation-karnal`

### Meta

- **Title:** Solar Panel Cost in Karnal 2026 | 1kW, 2kW, 3kW Installation Prices
- **Description:** Solar installation prices in Karnal. 1kW, 2kW, 3kW guide and what to ask. Local rates—then call when you're ready.

### Hero

```html
<h1>Solar installation cost in Karnal</h1>
<p class="lead">1kW, 2kW, 3kW—what it costs and what to ask. Local prices for Karnal.</p>
```

### Intro

```html
<p>Thinking solar? We've put Karnal installation prices in one place. See capacity vs cost, what to ask installers, and subsidy options. Know the range first. Then call when you're ready.</p>
<p>Built for Karnal. Updated for 2026.</p>
```

### Feature block

**Heading:** What affects solar cost in Karnal  
**Bullets:** Capacity (1kW, 2kW, 3kW), panel type, inverter, labour. Subsidy and financing can change the final number—ask installers for a written quote.

### FAQ

| Question | Answer |
|----------|--------|
| What is the solar panel cost in Karnal for 1kW, 2kW, 3kW? | Solar cost in Karnal depends on capacity and equipment. Roughly, 1kW is around ₹X, 2kW ₹Y, 3kW ₹Z (approximate). Get written quotes from local installers; our page gives you a baseline. |
| Is there subsidy for solar in Karnal / Haryana? | Yes. Central and state schemes can reduce cost. Ask installers for subsidy eligibility and paperwork. We've linked to local info where possible. |
| How do I choose solar capacity for my Karnal home? | Based on monthly units and roof space. 2–3 kW is common for homes. Use our guide and then confirm with an installer. |
| Where can I get solar installation quotes in Karnal? | Use this page to understand prices first. Then call or WhatsApp when you're ready—we connect you with local solar installers in Karnal. |

*(Replace X, Y, Z with real ranges when you have them.)*

### Rate card CTA

**Heading:** Need construction rates too?  
**Body:** Our Karnal rate card has labour and material rates. Useful if you're doing civil work along with solar.  
**Button:** Download rate card (PDF)

---

## 4. Pest control – `/service/pest-control-karnal`

### Meta

- **Title:** Pest Control & Termite Treatment Cost in Karnal 2026
- **Description:** Pest control and termite treatment rates in Karnal. What it costs, what to ask. Local services—then call when you're ready.

### Hero

```html
<h1>Pest control & termite cost in Karnal</h1>
<p class="lead">What it costs and what to ask. Local pest control services for Karnal.</p>
```

### Intro

```html
<p>Termite treatment and home pest control—prices and questions in one place. See what to expect in Karnal. Then call when you're ready.</p>
<p>Built for Karnal. Updated for 2026.</p>
```

### Feature block

**Heading:** What affects pest control cost in Karnal  
**Bullets:** Area or number of rooms, type (termite vs general pest), chemical and warranty. Ask for per-room or per-sq.ft quote and what's included.

### FAQ

| Question | Answer |
|----------|--------|
| What is the termite treatment cost in Karnal? | Termite treatment in Karnal is often quoted per sq.ft or as a package. Cost depends on area and product. Use this page as a baseline and get 2–3 quotes. |
| How much does home pest control cost in Karnal? | General pest control (cockroach, ant, etc.) is usually per visit or per room. Termite is typically per sq.ft. Ask providers for a clear breakdown. |
| What should I ask pest control providers in Karnal? | Ask: per sq.ft or per room, what's included, warranty, and follow-up visits. Compare with our baseline so you know the range. |
| Where can I get pest control quotes in Karnal? | Use this page to understand costs. Then call or WhatsApp when you're ready—we connect you with local pest control services in Karnal. |

### Rate card CTA

**Heading:** Building or renovating too?  
**Body:** Our Karnal rate card has construction and material rates. One place for civil, interior, solar, and pest control.  
**Button:** Download rate card (PDF)

---

## Related services block (all service pages)

**Heading:** Other services in Karnal  
**Subtext:** One place for civil, interior, solar, and pest control.  
**Links:** 4 cards same as homepage (Construction cost, False ceiling & interior, Solar, Pest control) with “See rates” / “See prices” link text.

---

## Implementation notes

- **services.ts:** Pull from this doc: per-niche `title`, `description`, `ogLabel`, and the FAQ table rows (question + answer) for each slug. See **Services config (for `lib/services.ts`)** below for copy-paste structure.
- **Meta:** Use the Meta section for each page in `<title>` and `<meta name="description">`.
- **Voice:** Keep sentences short. Use “Karnal” and “2026” where natural. No “limited slots” or fake urgency.
- **CTAs:** Order is always “calculator / rate card first, then call.” Sticky CTA = “Call when you're ready.”

---

## Services config (for `lib/services.ts`)

Use these in your niche config. Replace `X`, `Y`, `Z` in FAQ answers with real rate ranges when you have them.

### civil-construction-cost-karnal

```ts
{
  slug: 'civil-construction-cost-karnal',
  title: 'Construction Cost per Sq Ft in Karnal 2026 | Labour + Material Calculator',
  description: 'Real construction rates for Karnal. Use our per sq.ft calculator and download the 2026 rate card. See labour + material breakdown—then call when you\'re ready.',
  ogLabel: 'Construction Cost in Karnal',
  hasCalculator: 'construction',
  faqs: [
    { q: 'What is the construction cost per sq ft in Karnal in 2026?', a: 'Construction cost in Karnal typically ranges from ₹X to ₹Y per sq.ft depending on finish (basic to premium). Labour and material are often split; use our calculator with current Karnal rates to get an estimate.' },
    { q: 'Are labour rates different in different sectors of Karnal?', a: 'Labour rates can vary slightly by sector and demand. Our calculator uses average Karnal rates; for sector-specific quotes, use the rate card and then confirm with local contractors.' },
    { q: 'How do I use the construction cost calculator?', a: 'Enter your area in sq.ft and the labour and material rates (or use our defaults for Karnal). The calculator gives you total cost and a labour vs material breakdown so you can compare contractor quotes.' },
    { q: 'Where can I get the Karnal material rate card 2026?', a: 'Download the Karnal Material Rate Card 2026 from this page. It includes labour and material rates in one place so you\'re not going in blind.' },
    { q: 'Why show labour and material separately?', a: 'When you see both, you can tell if a quote is fair. Contractors quote different numbers—seeing the basis first helps you compare and choose.' },
  ],
}
```

### interior-design-false-ceiling-karnal

```ts
{
  slug: 'interior-design-false-ceiling-karnal',
  title: 'False Ceiling & Interior Design Cost in Karnal 2026 | POP, Gypsum Rates',
  description: 'False ceiling and interior design rates in Karnal. Cost per sq.ft for POP, gypsum, and designs. See what to expect—then call when you\'re ready.',
  ogLabel: 'False Ceiling & Interior in Karnal',
  hasCalculator: null,
  faqs: [
    { q: 'What is the false ceiling cost per sq ft in Karnal?', a: 'False ceiling cost in Karnal varies from around ₹X to ₹Y per sq.ft depending on material (POP, gypsum) and design. Basic POP is usually lower; gypsum and intricate designs cost more.' },
    { q: 'POP vs gypsum ceiling cost in Karnal—which is cheaper?', a: 'In Karnal, POP is often cheaper per sq.ft for basic work; gypsum costs more but can be faster to install. Compare both on our rate card and ask contractors for a breakdown.' },
    { q: 'How do false ceiling contractors in Karnal quote?', a: 'Many quote per sq.ft (labour + material). Ask for labour and material split so you can compare. Our rate card gives you a baseline for Karnal.' },
    { q: 'Where can I get interior design rates for Karnal?', a: 'This page and our Karnal rate card include false ceiling and interior-related rates. One place for civil, interior, solar, and pest control—all for Karnal.' },
  ],
}
```

### solar-installation-karnal

```ts
{
  slug: 'solar-installation-karnal',
  title: 'Solar Panel Cost in Karnal 2026 | 1kW, 2kW, 3kW Installation Prices',
  description: 'Solar installation prices in Karnal. 1kW, 2kW, 3kW guide and what to ask. Local rates—then call when you\'re ready.',
  ogLabel: 'Solar Prices in Karnal',
  hasCalculator: null,
  faqs: [
    { q: 'What is the solar panel cost in Karnal for 1kW, 2kW, 3kW?', a: 'Solar cost in Karnal depends on capacity and equipment. Roughly, 1kW is around ₹X, 2kW ₹Y, 3kW ₹Z (approximate). Get written quotes from local installers; our page gives you a baseline.' },
    { q: 'Is there subsidy for solar in Karnal / Haryana?', a: 'Yes. Central and state schemes can reduce cost. Ask installers for subsidy eligibility and paperwork. We\'ve linked to local info where possible.' },
    { q: 'How do I choose solar capacity for my Karnal home?', a: 'Based on monthly units and roof space. 2–3 kW is common for homes. Use our guide and then confirm with an installer.' },
    { q: 'Where can I get solar installation quotes in Karnal?', a: 'Use this page to understand prices first. Then call or WhatsApp when you\'re ready—we connect you with local solar installers in Karnal.' },
  ],
}
```

### pest-control-karnal

```ts
{
  slug: 'pest-control-karnal',
  title: 'Pest Control & Termite Treatment Cost in Karnal 2026',
  description: 'Pest control and termite treatment rates in Karnal. What it costs, what to ask. Local services—then call when you\'re ready.',
  ogLabel: 'Pest Control in Karnal',
  hasCalculator: null,
  faqs: [
    { q: 'What is the termite treatment cost in Karnal?', a: 'Termite treatment in Karnal is often quoted per sq.ft or as a package. Cost depends on area and product. Use this page as a baseline and get 2–3 quotes.' },
    { q: 'How much does home pest control cost in Karnal?', a: 'General pest control (cockroach, ant, etc.) is usually per visit or per room. Termite is typically per sq.ft. Ask providers for a clear breakdown.' },
    { q: 'What should I ask pest control providers in Karnal?', a: 'Ask: per sq.ft or per room, what\'s included, warranty, and follow-up visits. Compare with our baseline so you know the range.' },
    { q: 'Where can I get pest control quotes in Karnal?', a: 'Use this page to understand costs. Then call or WhatsApp when you\'re ready—we connect you with local pest control services in Karnal.' },
  ],
}
```
