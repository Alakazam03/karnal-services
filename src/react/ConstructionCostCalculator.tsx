// src/react/ConstructionCostCalculator.tsx — Per sq.ft × area calculator with labour/material split
import { useState, useCallback } from 'react';
import {
  DEFAULT_LABOUR_RATE_PER_SQFT,
  DEFAULT_MATERIAL_RATE_PER_SQFT,
  computeConstructionCost,
  type ConstructionResult
} from '../lib/calculators/construction';
import { gaCalculatorSubmit } from '../lib/analytics';

export default function ConstructionCostCalculator() {
  const [areaSqft, setAreaSqft] = useState<string>('');
  const [labourPerSqft, setLabourPerSqft] = useState<string>(String(DEFAULT_LABOUR_RATE_PER_SQFT));
  const [materialPerSqft, setMaterialPerSqft] = useState<string>(String(DEFAULT_MATERIAL_RATE_PER_SQFT));
  const [result, setResult] = useState<ConstructionResult | null>(null);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const area = parseFloat(areaSqft);
      if (!Number.isFinite(area) || area <= 0) {
        setResult(null);
        return;
      }
      const r = computeConstructionCost({
        areaSqft: area,
        labourPerSqft: parseFloat(labourPerSqft) || undefined,
        materialPerSqft: parseFloat(materialPerSqft) || undefined
      });
      setResult(r);
      gaCalculatorSubmit({
        area_sqft: r.areaSqft,
        total_cost: r.total,
        labour_total: r.labourTotal,
        material_total: r.materialTotal
      });
    },
    [areaSqft, labourPerSqft, materialPerSqft]
  );

  return (
    <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm" aria-labelledby="calculator-heading">
      <h2 id="calculator-heading" className="mb-4 text-lg font-semibold text-stone-900">
        Construction cost estimate karo
      </h2>
      <p className="mb-4 text-sm text-stone-600">
        Area sq.ft mein dalo. Hum Karnal ke default labour + material rates use karte hain; aap change kar sakte ho. Result approximate hai—quotes compare karne ke liye use karo.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="area-sqft" className="mb-1 block text-sm font-medium text-stone-700">
            Area (sq.ft)
          </label>
          <input
            id="area-sqft"
            type="number"
            min="1"
            step="1"
            value={areaSqft}
            onChange={(e) => setAreaSqft(e.target.value)}
            className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="jaise 1200"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="labour-rate" className="mb-1 block text-sm font-medium text-stone-700">
              Labour (₹/sq.ft)
            </label>
            <input
              id="labour-rate"
              type="number"
              min="0"
              step="1"
              value={labourPerSqft}
              onChange={(e) => setLabourPerSqft(e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="material-rate" className="mb-1 block text-sm font-medium text-stone-700">
              Material (₹/sq.ft)
            </label>
            <input
              id="material-rate"
              type="number"
              min="0"
              step="1"
              value={materialPerSqft}
              onChange={(e) => setMaterialPerSqft(e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-emerald-600 px-4 py-3 font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Cost calculate karo
        </button>
      </form>
      {result && (
        <div className="mt-6 rounded-lg bg-stone-100 p-4">
          <p className="mb-2 font-medium text-stone-900">Total estimated cost</p>
          <p className="text-2xl font-bold text-stone-900">
            ₹{result.total.toLocaleString('en-IN')}
          </p>
          <ul className="mt-2 space-y-1 text-sm text-stone-600">
            <li>Labour total: ₹{result.labourTotal.toLocaleString('en-IN')}</li>
            <li>Material total: ₹{result.materialTotal.toLocaleString('en-IN')}</li>
          </ul>
          <a
            href="/api/rate-card.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-emerald-600 hover:underline"
          >
            Full rate card 2026 download karo
          </a>
        </div>
      )}
    </section>
  );
}
