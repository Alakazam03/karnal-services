// src/lib/analytics.ts — GA4 custom event helpers (client-side only)

/**
 * Send a GA4 custom event. No-op if gtag is not loaded (e.g. GA4 not configured).
 */
export function gaEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  const clean = params
    ? Object.fromEntries(
        Object.entries(params).filter(([, v]) => v !== undefined && v !== '')
      ) as Record<string, string | number | boolean>
    : undefined;
  window.gtag('event', eventName, clean);
}

/** Fired when user submits the construction cost calculator. */
export function gaCalculatorSubmit(params: {
  area_sqft: number;
  total_cost: number;
  labour_total: number;
  material_total: number;
}): void {
  gaEvent('calculator_submit', {
    ...params,
    currency: 'INR',
    item_category: 'construction_cost'
  });
}

/** Fired when user clicks to download the rate card PDF. */
export function gaRateCardDownload(): void {
  gaEvent('file_download', {
    file_name: 'Karnal-Material-Rate-Card-2026.pdf',
    link_url: '/api/rate-card.pdf'
  });
}

/** Fired when user submits the WhatsApp lead form (before opening WhatsApp). */
export function gaWhatsAppLead(params: { service_slug: string; service_label: string }): void {
  gaEvent('generate_lead', {
    method: 'whatsapp',
    service_slug: params.service_slug,
    service_label: params.service_label
  });
}
