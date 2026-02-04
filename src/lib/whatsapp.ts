// src/lib/whatsapp.ts — Build wa.me URL with pre-filled lead message (client-side only)

export interface WhatsAppLeadParams {
  name: string;
  phone: string;
  service: string;
  message?: string;
}

/**
 * Returns the full wa.me URL for click-to-chat lead capture.
 * Use PUBLIC_WHATSAPP_NUMBER (e.g. 919876543210) in env.
 */
export function getWhatsAppLeadUrl(params: WhatsAppLeadParams): string {
  const number = import.meta.env.PUBLIC_WHATSAPP_NUMBER || '919876543210';
  const text = [
    `Hi, I'm ${params.name}.`,
    `Phone: ${params.phone}.`,
    `Interested in: ${params.service}.`,
    params.message ? params.message : ''
  ]
    .filter(Boolean)
    .join(' ');
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${number}?text=${encoded}`;
}
