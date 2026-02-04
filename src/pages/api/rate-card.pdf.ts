// src/pages/api/rate-card.pdf.ts — Generate Karnal Material Rate Card 2026 PDF
import type { APIRoute } from 'astro';

export const prerender = false;
import { jsPDF } from 'jspdf';
import {
  DEFAULT_LABOUR_RATE_PER_SQFT,
  DEFAULT_MATERIAL_RATE_PER_SQFT
} from '../../lib/calculators/construction';

export const GET: APIRoute = async () => {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageW = doc.internal.pageSize.getWidth();
  let y = 20;

  doc.setFontSize(18);
  doc.text('Karnal Material Rate Card 2026', pageW / 2, y, { align: 'center' });
  y += 12;

  doc.setFontSize(10);
  doc.text('Labour + material per sq.ft — indicative rates for Karnal. Use the calculator on our site for your area.', pageW / 2, y, { align: 'center' });
  y += 16;

  doc.setFontSize(12);
  doc.text('Per sq.ft rates (₹)', 14, y);
  y += 8;
  doc.setFontSize(10);
  doc.text('Labour (₹/sq.ft)', 14, y);
  doc.text(String(DEFAULT_LABOUR_RATE_PER_SQFT), 80, y);
  y += 7;
  doc.text('Material (₹/sq.ft)', 14, y);
  doc.text(String(DEFAULT_MATERIAL_RATE_PER_SQFT), 80, y);
  y += 7;
  doc.text('Total (Labour + Material)', 14, y);
  doc.text(String(DEFAULT_LABOUR_RATE_PER_SQFT + DEFAULT_MATERIAL_RATE_PER_SQFT), 80, y);
  y += 16;

  doc.setFontSize(10);
  doc.text('Rates are indicative. Use our construction cost calculator for your area in sq.ft.', 14, y);
  y += 8;
  doc.text('Karnal\'s go-to for real construction rates — see the maths first, then call when ready.', 14, y);

  const pdf = doc.output('arraybuffer');
  return new Response(pdf, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="Karnal-Material-Rate-Card-2026.pdf"'
    }
  });
};
