// src/pages/api/og.png.ts — Dynamic OG image with niche label (SVG for broad compatibility)
import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const label = url.searchParams.get('label') || 'Karnal Local Services';
  const decoded = decodeURIComponent(label);

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#064e3b"/>
  <text x="600" y="280" font-family="system-ui, sans-serif" font-size="48" font-weight="bold" fill="#fff" text-anchor="middle">${escapeXml(decoded)}</text>
  <text x="600" y="340" font-family="system-ui, sans-serif" font-size="24" fill="#a7f3d0" text-anchor="middle">See the maths first. Then call when ready.</text>
  <text x="600" y="400" font-family="system-ui, sans-serif" font-size="20" fill="#6ee7b7" text-anchor="middle">Karnal's go-to for real construction rates</text>
</svg>`.trim();

  return new Response(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400'
    }
  });
};

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
