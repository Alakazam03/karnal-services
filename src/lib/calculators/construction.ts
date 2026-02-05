// src/lib/calculators/construction.ts — Per sq.ft construction cost (labour + material) for Karnal

/** Default labour and material rates (₹/sq.ft) for Karnal 2026 — basic finish */
export const DEFAULT_LABOUR_RATE_PER_SQFT = 450;
export const DEFAULT_MATERIAL_RATE_PER_SQFT = 1400;

export interface ConstructionInput {
  areaSqft: number;
  labourPerSqft?: number;
  materialPerSqft?: number;
}

export interface ConstructionResult {
  labourTotal: number;
  materialTotal: number;
  total: number;
  areaSqft: number;
  labourPerSqft: number;
  materialPerSqft: number;
}

/**
 * Computes total cost and labour vs material breakdown: (labour + material) × area.
 */
export function computeConstructionCost(input: ConstructionInput): ConstructionResult {
  const areaSqft = Math.max(0, Number(input.areaSqft) || 0);
  const labourPerSqft = Math.max(0, Number(input.labourPerSqft) ?? DEFAULT_LABOUR_RATE_PER_SQFT);
  const materialPerSqft = Math.max(0, Number(input.materialPerSqft) ?? DEFAULT_MATERIAL_RATE_PER_SQFT);
  const labourTotal = areaSqft * labourPerSqft;
  const materialTotal = areaSqft * materialPerSqft;
  return {
    areaSqft,
    labourPerSqft,
    materialPerSqft,
    labourTotal,
    materialTotal,
    total: labourTotal + materialTotal
  };
}
