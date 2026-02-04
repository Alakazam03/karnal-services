// src/lib/services.ts — Niche config for programmatic SEO (slug, meta, calculator, FAQ, OG)

export type CalculatorType = 'construction' | 'solar' | 'pest' | 'none';

export interface ServiceNiche {
  slug: string;
  title: string;
  description: string;
  calculatorType: CalculatorType;
  ogLabel: string;
  faqs: { question: string; answer: string }[];
}

/** Whitelist of valid slugs: /service/[slug] */
export const SERVICE_SLUGS = [
  'civil-construction-cost-karnal',
  'interior-design-false-ceiling-karnal',
  'solar-installation-karnal',
  'pest-control-karnal'
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

const SERVICES: ServiceNiche[] = [
  {
    slug: 'civil-construction-cost-karnal',
    title: 'Civil Construction Cost in Karnal – Per Sq.Ft Calculator & Rates 2026',
    description:
      'See labour + material per sq.ft for Karnal. Use the construction cost calculator, download the rate card, then call when you\'re ready. No jargon—just the numbers.',
    calculatorType: 'construction',
    ogLabel: 'Civil Construction Cost – Karnal',
    faqs: [
      {
        question: 'What is the construction cost per sq.ft in Karnal?',
        answer:
          'Rates vary by labour and material. Use our calculator with area and per sq.ft rates to get a total. Labour and material breakdown helps you compare contractor quotes.'
      },
      {
        question: 'Are labour rates different in Sector 13 vs other sectors in Karnal?',
        answer:
          'Rates can vary slightly by sector. Our rate card and calculator use Karnal-wide averages; you can adjust the per sq.ft rate in the calculator to match your area.'
      },
      {
        question: 'How do I use the construction cost calculator?',
        answer:
          'Enter your area in sq.ft and optionally labour and material rates per sq.ft. The calculator shows total cost and labour vs material breakdown so you can verify quotes.'
      }
    ]
  },
  {
    slug: 'interior-design-false-ceiling-karnal',
    title: 'False Ceiling & Interior Design Cost in Karnal – Rates 2026',
    description:
      'False ceiling and interior design rates in Karnal. POP, gypsum, and design types. One place for local rates—then call when you\'re ready.',
    calculatorType: 'none',
    ogLabel: 'False Ceiling & Interior – Karnal',
    faqs: [
      {
        question: 'What does false ceiling cost per sq.ft in Karnal?',
        answer:
          'Cost depends on material (POP, gypsum) and design. Check local contractors for current per sq.ft rates; we focus on civil construction calculator and rate card for Karnal.'
      },
      {
        question: 'Where can I get interior design quotes in Karnal?',
        answer:
          'Use our site to understand the kind of rates to expect, then reach out to local interior or false ceiling contractors when you\'re ready.'
      }
    ]
  },
  {
    slug: 'solar-installation-karnal',
    title: 'Solar Panel Installation Cost in Karnal – 1kW, 2kW, 3kW Guide 2026',
    description:
      'Solar installation and panel costs in Karnal. Capacity vs cost guide. Local rates and next steps—calculator and call when ready.',
    calculatorType: 'solar',
    ogLabel: 'Solar Installation – Karnal',
    faqs: [
      {
        question: 'How much does a 2kW solar system cost in Karnal?',
        answer:
          'Prices depend on panels and installation. Check with local solar installers for 2kW/3kW quotes; we help you stay informed on what to expect in Karnal.'
      },
      {
        question: 'Is there subsidy for solar in Karnal / Haryana?',
        answer:
          'Central and state schemes may apply. Confirm current subsidy and financing with installers or official portals when you decide to go solar.'
      }
    ]
  },
  {
    slug: 'pest-control-karnal',
    title: 'Pest Control Services in Karnal – Termite & Home Pest Treatment Cost',
    description:
      'Pest control and termite treatment costs in Karnal. What to ask, what it costs. Local services—call when you\'re ready.',
    calculatorType: 'pest',
    ogLabel: 'Pest Control – Karnal',
    faqs: [
      {
        question: 'What does termite treatment cost in Karnal?',
        answer:
          'Costs depend on area and treatment type (per sq.ft or full house). Get quotes from local pest control services; we help you know what to expect.'
      },
      {
        question: 'Which pest control companies serve Karnal?',
        answer:
          'Several local providers offer home pest and termite treatment. Use our lead form to get in touch when you have an idea of your requirement.'
      }
    ]
  }
];

const bySlug = new Map(SERVICES.map((s) => [s.slug, s]));

export function getServiceBySlug(slug: string): ServiceNiche | undefined {
  return bySlug.get(slug);
}

export function getAllServices(): ServiceNiche[] {
  return [...SERVICES];
}

export function isValidSlug(slug: string): slug is ServiceSlug {
  return SERVICE_SLUGS.includes(slug as ServiceSlug);
}
