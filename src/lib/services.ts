// src/lib/services.ts — Niche config for programmatic SEO (slug, meta, calculator, FAQ, OG)
// Content aligned with docs/PAGE_CONTENT.md

export type CalculatorType = 'construction' | 'solar' | 'pest' | 'none';

export interface ServiceNiche {
  slug: string;
  title: string;
  description: string;
  calculatorType: CalculatorType;
  ogLabel: string;
  navLabel: string;
  /** Homepage card title */
  cardTitle: string;
  /** Homepage card short description */
  cardDescription: string;
  /** Homepage card link text */
  cardLinkText: string;
  /** Service page hero h1 */
  heroHeadline: string;
  /** Service page hero lead (class="lead") */
  heroLead: string;
  /** Service page intro paragraphs (below hero) */
  introText: string[];
  /** Rate card CTA heading (before related services) */
  rateCardHeading: string;
  /** Rate card CTA body */
  rateCardBody: string;
  /** Rate card CTA button text */
  rateCardButton: string;
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
    title: 'Karnal Mein Construction Cost per Sq Ft 2026 | Labour + Material Calculator',
    description:
      'Karnal ke real construction rates. Hamara per sq.ft calculator use karo aur 2026 rate card download karo. Labour + material breakdown dekho—phir jab ready ho tab call karo.',
    calculatorType: 'construction',
    ogLabel: 'Construction Cost in Karnal',
    navLabel: 'Construction Cost',
    cardTitle: 'Karnal mein construction cost',
    cardDescription: 'Per sq.ft calculator aur rate card. Call karne se pehle range jaano.',
    cardLinkText: 'Rates & calculator dekho',
    heroHeadline: 'Karnal mein construction cost—pehle hisaab dekho',
    heroLead:
      'Labour + material per sq.ft. Koi jargon nahi. Calculator use karo, phir quotes compare karo confidence se.',
    introText: [
      'Contractors alag alag rates batate hain. Hum samajhte hain. Isliye humne Karnal ke construction rates ek jagah rakhe hain: area × rate, labour aur material alag. Calculator aur rate card check karo. Jab number samajh aaye tab call karo.',
      'Rates 2026 ke liye updated hain. Karnal ke liye bana—Sector 13, Sector 12, aur nearby areas.',
      'Hum leads personally verify karte hain aur aapki project needs ke hisaab se khud services dete hain ya trusted local vendors se connect karte hain.'
    ],
    rateCardHeading: 'Karnal Material Rate Card 2026 Download Karo',
    rateCardBody: 'Labour, material, aur per sq.ft ek PDF mein. Koi sign-up pressure nahi—sirf clarity.',
    rateCardButton: 'Rate card download karo (PDF)',
    faqs: [
      {
        question: 'Karnal mein 2026 mein construction cost per sq ft kitna hai?',
        answer:
          'Karnal mein construction cost typically ₹1,800 se ₹3,500 per sq.ft hoti hai, finish pe depend karta hai (basic se premium). Labour alone ₹400-600/sq.ft ke around hai, baaki material ka hai. Hamara calculator use karo Karnal rates ke saath estimate ke liye.'
      },
      {
        question: 'Karnal ke different sectors mein labour rates alag hain?',
        answer:
          'Labour rates sector aur demand ke hisaab se thoda vary kar sakti hain. Hamara calculator average Karnal rates use karta hai; sector-specific quotes ke liye rate card dekho aur local contractors se confirm karo.'
      },
      {
        question: 'Construction cost calculator kaise use karein?',
        answer:
          'Area sq.ft mein enter karo aur labour aur material rates (ya Karnal ke defaults use karo). Calculator total cost aur labour vs material breakdown deta hai taaki aap contractor quotes compare kar sako.'
      },
      {
        question: 'Karnal material rate card 2026 kahan se milega?',
        answer:
          'Is page se Karnal Material Rate Card 2026 download karo. Isme labour aur material rates ek jagah hain taaki andhe mein na jao.'
      },
      {
        question: 'Labour aur material alag kyun dikhate ho?',
        answer:
          'Jab dono dikhe, tab pata chalta hai quote fair hai ya nahi. Contractors alag alag batate hain—pehle basis dekho, phir compare karo aur choose karo.'
      }
    ]
  },
  {
    slug: 'interior-design-false-ceiling-karnal',
    title: 'Karnal Mein False Ceiling & Interior Design Cost 2026 | POP, Gypsum Rates',
    description:
      'Karnal mein false ceiling aur interior design rates. POP, gypsum, aur designs ka cost per sq.ft. Dekho kya expect karna hai—phir jab ready ho tab call karo.',
    calculatorType: 'none',
    ogLabel: 'False Ceiling & Interior in Karnal',
    navLabel: 'False Ceiling & Interior',
    cardTitle: 'False ceiling & interior',
    cardDescription: 'Karnal mein POP, gypsum, aur designs ka cost per sq.ft.',
    cardLinkText: 'Rates dekho',
    heroHeadline: 'Karnal mein false ceiling & interior cost',
    heroLead:
      'POP, gypsum, aur design types—per sq.ft. Contractors se baat karne se pehle range jaano.',
    introText: [
      'False ceiling aur interior kaam confusing lag sakta hai. Humne Karnal rates ek jagah rakhe hain: POP, gypsum, aur common designs ka cost per sq.ft. Pehle numbers dekho. Phir jab ready ho tab call karo.',
      'Karnal ke liye bana. 2026 ke liye updated.',
      'Hum leads personally verify karte hain aur aapki project needs ke hisaab se khud services dete hain ya trusted local vendors se connect karte hain.'
    ],
    rateCardHeading: 'Full rate card lo',
    rateCardBody: 'False ceiling, material, aur labour rates Karnal ke liye ek PDF mein.',
    rateCardButton: 'Rate card download karo (PDF)',
    faqs: [
      {
        question: 'Karnal mein false ceiling cost per sq ft kitna hai?',
        answer:
          'Karnal mein false ceiling cost ₹65 se ₹180 per sq.ft ke beech hoti hai, material (POP, gypsum) aur design pe depend karta hai. Basic POP ₹65-90/sq.ft se start hota hai; gypsum ₹90-150/sq.ft; designer/layered work ₹180/sq.ft tak ja sakta hai.'
      },
      {
        question: 'Karnal mein POP vs gypsum ceiling cost—kaunsa sasta hai?',
        answer:
          'Karnal mein basic kaam ke liye POP aksar sasta padta hai per sq.ft; gypsum mehnga hai par install jaldi hota hai. Dono hamari rate card pe compare karo aur contractors se breakdown maango.'
      },
      {
        question: 'Karnal mein false ceiling contractors kaise quote dete hain?',
        answer:
          'Bohot log per sq.ft (labour + material) quote karte hain. Labour aur material split maango taaki compare kar sako. Hamari rate card Karnal ke liye baseline deti hai.'
      },
      {
        question: 'Karnal ke interior design rates kahan milenge?',
        answer:
          'Is page aur hamari Karnal rate card mein false ceiling aur interior-related rates hain. Civil, interior, solar, aur pest control—sab Karnal ke liye ek jagah.'
      }
    ]
  },
  {
    slug: 'solar-installation-karnal',
    title: 'Karnal Mein Solar Panel Cost 2026 | 1kW, 2kW, 3kW Installation Prices',
    description:
      'Karnal mein solar installation prices. 1kW, 2kW, 3kW guide aur kya poochna hai. Local rates—phir jab ready ho tab call karo.',
    calculatorType: 'none',
    ogLabel: 'Solar Prices in Karnal',
    navLabel: 'Solar Installation',
    cardTitle: 'Karnal mein solar installation',
    cardDescription: '1kW, 2kW, 3kW—prices aur kya poochna hai.',
    cardLinkText: 'Solar prices dekho',
    heroHeadline: 'Karnal mein solar installation cost',
    heroLead: '1kW, 2kW, 3kW—kitna lagega aur kya poochna hai. Karnal ke local prices.',
    introText: [
      'Solar soch rahe ho? Humne Karnal installation prices ek jagah rakhe hain. Capacity vs cost dekho, installers se kya poochna hai, aur subsidy options. Pehle range jaano. Phir jab ready ho tab call karo.',
      'Karnal ke liye bana. 2026 ke liye updated.',
      'Hum leads personally verify karte hain aur aapki project needs ke hisaab se khud services dete hain ya trusted local vendors se connect karte hain.'
    ],
    rateCardHeading: 'Construction rates bhi chahiye?',
    rateCardBody:
      'Hamari Karnal rate card mein labour aur material rates hain. Solar ke saath civil work kar rahe ho toh kaam aayegi.',
    rateCardButton: 'Rate card download karo (PDF)',
    faqs: [
      {
        question: 'Karnal mein 1kW, 2kW, 3kW solar panel cost kitna hai?',
        answer:
          'Karnal mein solar cost capacity aur equipment pe depend karta hai. Roughly, 1kW ₹60,000-70,000 ke around, 2kW ₹1.1-1.3 lakh, 3kW ₹1.5-1.8 lakh (subsidy se pehle). PM Surya Ghar subsidy ke baad cost 30-40% kam ho sakti hai. Local installers se written quotes lo.'
      },
      {
        question: 'Karnal / Haryana mein solar ke liye subsidy milti hai?',
        answer:
          'Haan. Central aur state schemes se cost kam ho sakti hai. Installers se subsidy eligibility aur paperwork ke baare mein poocho. Humne jahan possible hai local info link ki hai.'
      },
      {
        question: 'Karnal ke ghar ke liye solar capacity kaise choose karein?',
        answer:
          'Monthly units aur roof space ke hisaab se. Gharon ke liye 2–3 kW common hai. Hamara guide use karo aur installer se confirm karo.'
      },
      {
        question: 'Karnal mein solar installation quotes kahan se milenge?',
        answer:
          'Is page se pehle prices samjho. Phir jab ready ho tab call ya WhatsApp karo—hum Karnal ke local solar installers se connect karte hain.'
      }
    ]
  },
  {
    slug: 'pest-control-karnal',
    title: 'Karnal Mein Pest Control & Termite Treatment Cost 2026',
    description:
      'Karnal mein pest control aur termite treatment rates. Kitna lagega aur kya poochna hai. Local services—phir jab ready ho tab call karo.',
    calculatorType: 'none',
    ogLabel: 'Pest Control in Karnal',
    navLabel: 'Pest Control',
    cardTitle: 'Karnal mein pest control',
    cardDescription: 'Termite aur home pest control. Kitna lagega aur kya poochna hai.',
    cardLinkText: 'Pest control dekho',
    heroHeadline: 'Karnal mein pest control & termite cost',
    heroLead: 'Kitna lagega aur kya poochna hai. Karnal ke local pest control services.',
    introText: [
      'Termite treatment aur home pest control—prices aur questions ek jagah. Dekho Karnal mein kya expect karna hai. Phir jab ready ho tab call karo.',
      'Karnal ke liye bana. 2026 ke liye updated.',
      'Hum leads personally verify karte hain aur aapki project needs ke hisaab se khud services dete hain ya trusted local vendors se connect karte hain.'
    ],
    rateCardHeading: 'Construction ya renovation bhi kar rahe ho?',
    rateCardBody:
      'Hamari Karnal rate card mein construction aur material rates hain. Civil, interior, solar, aur pest control—ek jagah.',
    rateCardButton: 'Rate card download karo (PDF)',
    faqs: [
      {
        question: 'Karnal mein termite treatment cost kitna hai?',
        answer:
          'Karnal mein termite treatment aksar per sq.ft ya package mein quote hoti hai. Cost area aur product pe depend karta hai. Is page ko baseline maano aur 2–3 quotes lo.'
      },
      {
        question: 'Karnal mein home pest control kitne ka padta hai?',
        answer:
          'General pest control (cockroach, ant, etc.) usually per visit ya per room hoti hai. Termite typically per sq.ft. Providers se clear breakdown maango.'
      },
      {
        question: 'Karnal mein pest control providers se kya poochna chahiye?',
        answer:
          'Poocho: per sq.ft ya per room, kya include hai, warranty, aur follow-up visits. Hamari baseline se compare karo taaki range pata rahe.'
      },
      {
        question: 'Karnal mein pest control quotes kahan se milenge?',
        answer:
          'Is page se pehle costs samjho. Phir jab ready ho tab call ya WhatsApp karo—hum Karnal ke local pest control services se connect karte hain.'
      },
      {
        question: 'Kya aap khud bhi pest control karte ho?',
        answer:
          'Haan, kuch services hum khud bhi provide karte hain, including pest control. WhatsApp karo, baat karte hain aur best option decide karte hain—chahe hum karein ya trusted vendor.'
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
