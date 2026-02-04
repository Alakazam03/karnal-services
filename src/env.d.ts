// src/env.d.ts — Augment Window for GA4 gtag
interface Window {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
}
