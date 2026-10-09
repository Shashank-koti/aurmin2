import freshOnionsImg from '../assets/freshOnions.jpg';
import cashewNutsImg from '../assets/cashewNuts.jpg';
import gingerImg from '../assets/ginger.jpg';
import turmericImg from '../assets/turmeric.jpg';
import riceImg from '../assets/rice.jpg';
import redChilliImg from '../assets/redChilli.jpg';

export const productsData = {
  'fresh-onions': {
    title: 'Fresh Onions',
    slug: 'fresh-onions',
    path: '/products/fresh-onions',
    image: freshOnionsImg,
    intro: [
      'India is the second-largest onion-growing country in the world, and Indian onions are internationally known for their strong pungency, uniform sizing, and long shelf life. With two crop cycles annually — the first harvest from November to January and the second from January to May — India can supply fresh onions almost year-round, backed by modern pack houses for sorting, grading, and packing at production zones.'
    ],
    sections: [
      {
        title: 'Popular Varieties',
        type: 'list',
        items: [
          'Agrifound Dark Red / Agrifound Light Red — the most widely grown and exported red onion varieties',
          'NHRDF Red — high-yielding, good storage quality',
          'Agrifound White / Agrifound Rose — used for fresh consumption and processing',
          'Pusa Ratnar, Pusa Red, Pusa White Round — popular research-developed varieties',
          'Yellow onion varieties for Europe — Tana F1, Arad-H, Suprex, Granex 55, HA 60, Granex 429'
        ]
      },
      {
        title: 'Quality Parameters (Export Grade)',
        type: 'list',
        items: [
          'Bulb size and uniformity graded to buyer specification (commonly 40–80mm diameter range)',
          'Moisture and dry-matter content controlled for shelf stability',
          'Outer skin should be dry, intact, and free from sprouting, rot, or mechanical damage',
          'Compliance with Maximum Residue Levels (MRLs) for identified pesticides, per government guidelines',
          'Grade designation and quality parameters set for identifying export-quality onions'
        ]
      }
    ]
  },

  'cashew-nuts-kernels': {
    title: 'Cashew Nuts & Kernels',
    slug: 'cashew-nuts-kernels',
    path: '/products/cashew-nuts-kernels',
    image: cashewNutsImg,
    intro: [
      'Cashew (Anacardium occidentale L.) was introduced to India in the 16th century by the Portuguese, first in Goa, and has since become one of the country\'s most important cash crops. As a resilient, drought-tolerant tree adaptable to poor soils, cashew cultivation also delivers environmental benefits, helping combat deforestation and soil erosion — earning it the nickname "Gold Mine of Waste Land."',
      'India ranks 4th globally in exports of fresh/dried shelled cashew kernels, holding a 6.6% share of the world market.'
    ],
    sections: [
      {
        title: 'Cashew Kernel Grading (International Standard, per CEPC/AFI)',
        type: 'table',
        subtitle: 'Grading is based on colour, shape, and size — expressed as approximate kernel count per pound:',
        headers: ['Grade', 'Description'],
        rows: [
          ['W180', 'Largest whole white kernels ("King of Cashews"); premium/gifting grade'],
          ['W210', '"Jumbo" — large, premium'],
          ['W240', 'Global benchmark grade; excellent balance of size and price'],
          ['W320', 'Most widely traded grade worldwide; mid-sized, versatile'],
          ['W450 / W500', 'Smaller whole kernels; value-oriented'],
          ['SW (Scorched Wholes)', 'Light-brown, heat-toasted but sound kernels'],
          ['Splits, Butts, Pieces', 'Broken grades, used in baking, confectionery, and processed foods']
        ]
      },
      {
        title: 'Quality Parameters (beyond the W-grade size charts)',
        type: 'list',
        items: [
          'Moisture: international AFI spec is 3–5%; Indian exporters commonly target below 5–8% depending on transit duration, since higher moisture accelerates mould/aflatoxin risk in-container.',
          'Free Fatty Acid (FFA): max ~1.5% as oleic acid.',
          'Peroxide Value: max ~5 meq/kg.',
          'Aflatoxin: must meet the importing country’s limit, not a single global number — e.g., EU caps aflatoxin B1 at 4 ppb (total 4–10 ppb depending on product), US FDA around 20 ppb total, and Japan is the strictest at B1 ≤1 ppb.',
          'Microbiology: Salmonella negative/375g, E. coli non-detectable, Listeria negative/125g, Staph aureus <10 CFU/g.',
          'Foreign material: zero tolerance for hair, glass, metal, stones, or other hard/sharp objects.'
        ]
      }
    ]
  },

  'ginger': {
    title: 'Ginger',
    slug: 'ginger',
    path: '/products/ginger',
    image: gingerImg,
    intro: [
      'Ginger of commerce is the dried (or fresh) underground rhizome of a slender tropical perennial herb, valued worldwide as both a spice and a traditional remedy. India is the centre of origin for ginger along with Malaysia, and today ranks among the world\'s largest producers, alongside Nigeria and China.',
      'The whole plant is refreshingly aromatic, and its rhizome — used raw, dried, or processed — is a staple in cuisines, beverages, and pharmaceutical formulations globally.'
    ],
    sections: [
      {
        title: 'Growing Conditions & Origin',
        type: 'paragraph',
        content: 'Ginger is a tropical crop requiring a warm, humid climate and thrives from sea level up to 1,500 metres above MSL. It needs well-distributed rainfall (150–300 cm) during the growing season, with dry spells during land preparation and harvest. While it grows on a wide range of soils, lateritic loams give the highest yields. Major Indian growing states include Kerala, Meghalaya, Karnataka, Odisha, Sikkim, and West Bengal.'
      },
      {
        title: 'Quality Parameters (Export Grade)',
        subtitle: 'Bureau of Indian Standards (BIS) Quality Standards - IS 1988:1993',
        type: 'list',
        items: [
          'Essential oil content: typically 1–3%, a key indicator of aroma strength',
          'Oleoresin content and pungency (gingerol) levels assessed for processing-grade material',
          'Moisture content controlled to prevent mould during storage and transit',
          'Free from insect damage, extraneous matter, and mould',
          'Tested for pesticide residues and microbiological safety for export markets'
        ]
      }
    ]
  },

  'turmeric': {
    title: 'Turmeric',
    slug: 'turmeric',
    path: '/products/turmeric',
    image: turmericImg,
    intro: [
      'Turmeric is the boiled, dried, cleaned and polished rhizome of Curcuma longa, a herbaceous perennial plant belonging to the ginger family. India is the world\'s largest producer, contributing over 75% of global turmeric output, cultivated across more than 20 states including Tamil Nadu, Andhra Pradesh, Maharashtra, Madhya Pradesh, and Meghalaya.',
      'Known globally as the "Golden Spice," turmeric is prized for its colour, flavour, and curcumin content, and is a key ingredient in food, pharmaceutical, cosmetic, and textile industries.'
    ],
    sections: [
      {
        title: 'Popular Varieties',
        type: 'list',
        items: [
          'Alleppey Finger (Kerala) — premium grade, curcumin 4.0–7.0%, high volatile oil (3.5–5.5%); preferred for US and health-product markets',
          'Erode & Salem (Tamil Nadu) — widely traded, good colour and consistency',
          'Nizamabad (Telangana) — one of India\'s largest turmeric trading hubs',
          'Lakadong (Meghalaya) — exceptionally high curcumin content, regarded among the finest in the world'
        ]
      },
      {
        title: 'Quality Parameters (Export Grade)',
        subtitle: 'Bureau of Indian Standards (BIS) Quality Standards - IS 3576:1994',
        type: 'list',
        items: [
          'Curcumin content: minimum 2% (FSSAI); premium grades 4–7%+.',
          'ASTA colour value: indicates depth of yellow-orange colour, higher value = better commercial grade.',
          'Moisture content: kept within 6–10% to prevent fungal growth.',
          'Free from artificial colouring, extraneous matter, insect damage, and mould.',
          'Tested for heavy metals (lead, cadmium), pesticide residues, and microbiological safety at Spices Board–approved/NABL-accredited laboratories.'
        ]
      }
    ]
  },

  'rice': {
    title: 'Rice — Basmati & Non-Basmati',
    slug: 'rice',
    path: '/products/rice',
    image: riceImg,
    intro: [
      'India is the world\'s largest rice producer, accounting for over a quarter of global output. The country supplies both the world-famous aromatic Basmati rice and a wide range of high-quality non-Basmati varieties, meeting diverse culinary needs across international markets.',
      'India\'s rice export sector is regulated and supported by APEDA (Agricultural and Processed Food Products Export Development Authority), Ministry of Commerce & Industry.'
    ],
    sections: [
      {
        title: 'Basmati Rice',
        type: 'structured',
        entries: [
          {
            label: 'What Makes It Unique',
            value: 'Basmati is a long-grain aromatic rice grown for centuries in a specific geographical belt at the foothills of the Himalayas. It is prized for extra-long, slender grains that elongate to at least twice their original length on cooking, along with a soft, fluffy texture, delicious taste, and a distinctive aroma and flavour unmatched by other aromatic long-grain rice.'
          },
          {
            label: 'Geographical Indication (GI) Area',
            value: 'Punjab, Haryana, Himachal Pradesh, Uttarakhand, Delhi, 30 districts of Western Uttar Pradesh, and 3 districts of Jammu & Kashmir'
          }
        ]
      },
      {
        title: 'Non-Basmati Rice',
        type: 'structured',
        entries: [
          {
            label: 'Overview',
            value: 'India cultivates a wide spectrum of non-Basmati varieties suited to diverse climatic conditions, including Sona Masuri, Ponni, HMT, IR-64, Kolam, Kalanamak, Jeera Sambha, and Swarna — valued for their aroma, grain texture, and cooking versatility. Several varieties also carry Geographical Indication (GI) tags, reflecting regional authenticity and quality assurance.'
          }
        ]
      },
      {
        title: 'Quality & Regulatory Framework',
        type: 'list',
        items: [
          'Rice exports are governed by Registration-cum-Membership Certificates (RCMC) and Registration-Cum-Allocation Certificates (RCAC) issued by APEDA',
          'Compliance with destination-specific Maximum Residue Levels (MRLs) for pesticides is mandatory',
          'Many destination countries (e.g., Saudi Arabia via SFDA) require registration of the exporting establishment',
          'Basmati authenticity is safeguarded through DNA-based testing and the GI tag'
        ]
      }
    ]
  },

  'red-chillies': {
    title: 'Red Chillies',
    slug: 'red-chillies',
    path: '/products/red-chillies',
    image: redChilliImg,
    intro: [
      'Chilli is the dried, ripe fruit of the Capsicum genus. India is the largest producer, consumer, and exporter of chillies in the world, with major growing regions in Andhra Pradesh, Telangana, Karnataka, Maharashtra, and Madhya Pradesh.',
      'Indian chillies are valued internationally for their colour, pungency, and versatility — used whole, crushed, or powdered across food processing, oleoresin extraction, and natural colourant industries.'
    ],
    sections: [
      {
        title: 'Popular Varieties',
        type: 'list',
        items: [
          'Guntur Sannam (Andhra Pradesh) — India\'s largest-traded variety; thick skin, hot, deep red; GI-tagged',
          'Byadagi (Karnataka) — low pungency, exceptionally high colour value; prized for oleoresin/colour extraction; GI-tagged',
          'Kashmiri Chilli — long, fleshy, deep red, mild pungency; valued for colour in food processing',
          'Jwala (Gujarat) — highly pungent, light red, compact seeds',
          'Byadagi Kaddi & Ellachipur Sannam — used widely for colour-grade requirements'
        ]
      },
      {
        title: 'Quality Parameters (Export Grade)',
        subtitle: 'Bureau of Indian Standards (BIS) Quality Standards - IS 2322:1998',
        type: 'list',
        items: [
          'ASTA colour value: ranges roughly from ~30 (Guntur) to ~160 (Byadagi), depending on variety — higher value indicates more vivid colour',
          'Capsaicin (pungency) content: varies by variety, from negligible (Byadagi) to over 0.5% (Kanthari, Birds Eye)',
          'Moisture content controlled to prevent mould and aflatoxin development',
          'Free from extraneous matter, insect infestation, and foreign material',
          'Tested for pesticide residues, heavy metals, and microbiological (Salmonella, E. coli) safety'
        ]
      }
    ]
  }
};

export const productsNavList = [
  { name: 'Fresh Onions', path: '/products/fresh-onions' },
  { name: 'Cashew Nuts & Kernels', path: '/products/cashew-nuts-kernels' },
  { name: 'Ginger', path: '/products/ginger' },
  { name: 'Turmeric', path: '/products/turmeric' },
  { name: 'Rice — Basmati & Non-Basmati', path: '/products/rice' },
  { name: 'Red Chillies', path: '/products/red-chillies' },
];
