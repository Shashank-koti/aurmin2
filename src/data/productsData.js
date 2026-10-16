import freshOnionsImg from '../assets/freshOnions.jpg';
import cashewNutsImg from '../assets/cashewNuts.jpg';
import gingerImg from '../assets/ginger.jpg';
import turmericImg from '../assets/turmeric.jpg';
import riceImg from '../assets/rice.jpg';
import redChilliImg from '../assets/redChilli.jpg';
import greenCardamomImg from '../assets/greenCardamom.jpg';
import blackPepperImg from '../assets/blackPepper.jpg';
import mangoPowderImg from '../assets/mangoPowder.jpg';

export const productsData = {
  'red-chillies': {
    title: 'Red Chillies',
    slug: 'red-chillies',
    path: '/products/red-chillies',
    image: redChilliImg,
    introHeadline: 'Indian Chillies with the Colour & Heat Your Market Requires',
    intro: [
      "India offers one of the world's most diverse selections of red chillies. At Aurmin Global, we source varieties based on the characteristics that matter commercially — colour, pungency, size, appearance and end use.",
      "Whether the requirement is a high-colour chilli for processing or a pungent variety for spice applications, we work to match the product with the buyer's specification."
    ],
    sections: [
      {
        title: 'Popular Varieties',
        type: 'list',
        items: [
          "Guntur Sannam (Andhra Pradesh) — India's largest-traded variety; thick skin, hot, deep red; GI-tagged",
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
  },

  'turmeric': {
    title: 'Turmeric',
    slug: 'turmeric',
    path: '/products/turmeric',
    image: turmericImg,
    introHeadline: 'Indian Turmeric, Selected for Colour, Curcumin & Consistency',
    intro: [
      'We source turmeric from established growing regions across India, selecting lots according to curcumin content, colour, aroma, cleanliness and destination-market requirements.',
      'From commercial grades to premium varieties, our sourcing network allows us to offer turmeric suited to food processing, spice manufacturing, extracts and other specialised applications.'
    ],
    sections: [
      {
        title: 'Popular Varieties',
        type: 'list',
        items: [
          'Alleppey Finger (Kerala) — premium grade, curcumin 4.0–7.0%, high volatile oil (3.5–5.5%); preferred for US and health-product markets. Available through Aurmin Global for premium and nutraceutical-grade orders.',
          'Erode & Salem (Tamil Nadu) — widely traded, good colour and consistency. Aurmin Global supplies this as our standard bulk-grade turmeric for consistent, large-volume orders.',
          "Nizamabad (Telangana) — one of India's largest turmeric trading hubs. Sourced directly by Aurmin Global for reliable year-round availability and competitive pricing.",
          'Lakadong (Meghalaya) — exceptionally high curcumin content, regarded among the finest in the world. Aurmin Global offers Lakadong on request for buyers seeking the highest curcumin specification.'
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

  'green-cardamom': {
    title: 'Green Cardamom',
    slug: 'green-cardamom',
    path: '/products/green-cardamom',
    image: greenCardamomImg,
    tagline: 'The "Queen of Spices" — Intensely Aromatic, Export-Grade Cardamom from South India\'s Western Ghats',
    introHeadline: 'Indian Green Cardamom, Selected for Aroma, Size & Consistency',
    intro: [
      'We source green cardamom from established growing regions across India, selecting lots according to pod size, colour, volatile oil content, moisture and destination-market requirements.',
      'From commercial grades to premium varieties, our sourcing network allows us to offer green cardamom suited to retail packaging, spice blending, extracts and other specialised applications.'
    ],
    sections: [
      {
        title: 'Popular Varieties & Grades',
        type: 'list',
        items: [
          "AGEB (Alleppey Green Extra Bold) — premium export grade, pods 8mm+, bold green colour, highest volatile oil content. Aurmin Global's top-tier offering for premium retail and gourmet buyers.",
          "AGB (Alleppey Green Bold) — 7–8mm pods, strong aroma and colour. Available through Aurmin Global for buyers seeking a balance of size and value.",
          "AGS (Alleppey Green Superior) — 6–7mm pods, the standard commercial export grade. Aurmin Global's standard supply grade for consistent bulk orders.",
          "Coorg Green — origin-specific grade from Karnataka's Coorg (Kodagu) region, valued for colour and aroma. Supplied by Aurmin Global on request for buyers seeking regional origin specification."
        ]
      },
      {
        title: 'Quality Parameters (Export Grade)',
        type: 'list',
        items: [
          'Pod size: graded from 6mm to 8mm+ depending on export grade',
          'Volatile oil content: approximately 6–12%, a key indicator of aroma and commercial value',
          'Moisture content: kept at or below 10–12% to preserve colour and prevent mould',
          'Colour: bright to deep green, free from yellowing or bleaching',
          'Extraneous matter: max 0.5–1%; immature/light capsules max 2–5% depending on grade',
          'Tested for pesticide residues and microbiological safety at Spices Board–approved laboratories'
        ]
      }
    ]
  },

  'ginger': {
    title: 'Ginger',
    slug: 'ginger',
    path: '/products/ginger',
    image: gingerImg,
    introHeadline: "Fresh & Dried Ginger from India's Key Growing Regions",
    intro: [
      'We source Indian ginger from established growing regions, selecting produce based on appearance, aroma, pungency, cleanliness and end-use requirements.',
      'Our sourcing covers both fresh and dried forms for food, spice, beverage and processing applications.'
    ],
    sections: [
      {
        title: 'Sources & Varieties',
        description: "At Aurmin Global, we source exclusively from three of India's most distinguished ginger-growing regions — Kerala, Meghalaya, and Sikkim — each selected for a distinct quality advantage that serves different buyer needs, from aroma-led European markets to pharmaceutical-grade extraction.",
        type: 'list',
        items: [
          'Kerala — "Cochin Ginger": high essential oil content, strong aroma, and low fibre.',
          'Meghalaya — valued for exceptionally low fibre content (around 4.2%), high dry-matter recovery, and elevated gingerol levels.',
          'Sikkim — Organic by Nature: Ginger here is grown almost entirely by traditional organic methods using indigenous cultivars such as Bhaise and Gorubathane.'
        ]
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

  'fresh-onions': {
    title: 'Fresh Onions',
    slug: 'fresh-onions',
    path: '/products/fresh-onions',
    image: freshOnionsImg,
    introHeadline: 'Indian Export-Grade Fresh Onions',
    intro: [
      'We source fresh onions from India\'s major production centres and work with suppliers capable of sorting, grading and packing according to buyer requirements.',
      "Our focus is on consistent sizing, sound bulbs, proper curing and export-ready quality for international markets. India's multiple production cycles also support supply across much of the year."
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

  'black-pepper': {
    title: 'Black Pepper',
    slug: 'black-pepper',
    path: '/products/black-pepper',
    image: blackPepperImg,
    tagline: 'The "King of Spices" — Bold, Pungent, and Export-Grade from India\'s Malabar Coast',
    introHeadline: 'Indian Black Pepper, Selected for Piperine, Density & Consistency',
    intro: [
      'We source black pepper from established growing regions across India, selecting lots according to piperine content, density, moisture, cleanliness and destination-market requirements.',
      'From commercial grades to premium varieties, our sourcing network allows us to offer black pepper suited to food processing, spice manufacturing, oleoresin extraction and other specialised applications.'
    ],
    sections: [
      {
        title: 'Popular Varieties & Grades',
        type: 'list',
        items: [
          "Malabar Garbled (MG1) — the classic Indian export grade; minimum density ~550 g/l, bold earthy aroma with balanced pungency. Aurmin Global's standard export grade for bulk and retail buyers.",
          "Tellicherry Garbled Extra Bold (TGEB) — larger, denser berries (min. 570 g/l), the premium grade the rest of the world is measured against. Available through Aurmin Global for buyers seeking top-tier size and aroma specification.",
          "Tellicherry Garbled Special Extra Bold (TGSEB) — the largest, most premium berry size (4.75mm+), ultra-low defect tolerance. Supplied by Aurmin Global on request for premium retail and gourmet brands.",
          "FAQ (Fair Average Quality) / Ungarbled — a value-oriented bulk grade for processors and grinders. Aurmin Global's economical option for large-volume processing orders."
        ]
      },
      {
        title: 'Quality Parameters (Export Grade)',
        type: 'list',
        items: [
          'Piperine content: typically minimum 4%, a key indicator of pungency and potency',
          'Volatile oil: ≥1.0 ml/100g, indicating aroma strength',
          'Moisture: kept at or below 11% to prevent mould and preserve shelf life',
          'Light berries: max 0.5–2% depending on grade',
          'Free from stalks, stones, and extraneous foreign matter',
          'Tested for pesticide residues and microbiological safety at Spices Board–approved laboratories',
          'Fumigation (e.g., for US/EU destinations) carried out as per importing-country requirements'
        ]
      }
    ]
  },

  'freeze-dried-mango-powder': {
    title: 'Freeze-Dried Mango Powder',
    slug: 'freeze-dried-mango-powder',
    path: '/products/freeze-dried-mango-powder',
    image: mangoPowderImg,
    tagline: "100% Pure Fruit, Zero Additives — India's Finest Mango Varieties, Freeze-Dried to Lock in Flavour",
    introHeadline: 'Indian Freeze-Dried Mango Powder, Selected for Purity, Colour & Consistency',
    intro: [
      'We source mango puree from established growing regions across India, selecting lots according to variety, colour, moisture and destination-market requirements.',
      'From commercial grades to premium varieties, our sourcing network allows us to offer freeze-dried mango powder suited to food & beverage manufacturing, nutraceuticals, bakery and other specialised applications.'
    ],
    sections: [
      {
        title: 'Varieties Used',
        type: 'list',
        items: [
          "Alphonso — India's most prized mango variety, grown in Maharashtra's Konkan region; delivers a deep golden-yellow powder with intense aroma and rich sweetness. Aurmin Global's premium freeze-dried offering for gourmet and nutraceutical buyers.",
          "Kesar — grown predominantly in Gujarat's Gir region; known for a distinctive saffron-hued pulp and strong aromatic profile. Supplied by Aurmin Global as a mid-premium alternative with excellent colour retention.",
          "Totapuri — India's principal processing variety, valued for its tangy profile and consistent year-round availability. Aurmin Global's standard commercial grade for bulk food-manufacturing orders."
        ]
      },
      {
        title: 'Quality Parameters (Export Grade)',
        type: 'list',
        items: [
          '100% pure fruit — no added sugar, carriers, or preservatives',
          'Moisture content: typically below 3–4%, ensuring long shelf stability',
          'Colour: pale yellow (Totapuri) to deep golden yellow (Alphonso), free from browning or oxidation',
          'Particle size and solubility tested per buyer specification (powder, granules, or flakes)',
          'Free from microbial contamination; tested for pesticide residues and heavy metals',
          'Retains significantly higher vitamin and nutrient content compared to spray-dried alternatives, due to the low-temperature process'
        ]
      }
    ]
  },

  'cashew-nuts-kernels': {
    title: 'Cashew Nuts & Kernels',
    slug: 'cashew-nuts-kernels',
    path: '/products/cashew-nuts-kernels',
    image: cashewNutsImg,
    introHeadline: 'Indian Cashews Across Established Commercial Grades',
    intro: [
      'We source cashew kernels across established international grades, giving buyers flexibility from premium whole kernels to commercial and processing grades.',
      'Our focus is on grade consistency, appearance, food safety and specifications suited to the intended market.'
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

  'rice': {
    title: 'Rice — Non-Basmati & Basmati',
    slug: 'rice',
    path: '/products/rice',
    image: riceImg,
    introHeadline: 'Indian Rice Exports: Non-Basmati & Basmati Varieties',
    intro: [
      "India cultivates a wide spectrum of non-Basmati and world-renowned Basmati rice varieties suited to diverse global culinary and processing applications.",
      "Aurmin Global supplies premium, export-regulated rice varieties adhering strictly to APEDA quality specifications and destination-market import regulations."
    ],
    sections: [
      {
        title: 'Non-Basmati Rice',
        description: "Aurmin Global supplies three of India's most sought-after non-Basmati rice varieties — Sona Masuri, IR-64, and Swarna — each sourced from its core growing belt for consistent quality and reliable year-round availability.",
        type: 'structured',
        entries: [
          {
            label: 'Overview',
            value: 'India cultivates a wide spectrum of non-Basmati varieties suited to diverse climatic conditions, including Sona Masuri, Ponni, HMT, IR-64, Kolam, Kalanamak, Jeera Sambha, and Swarna — valued for their aroma, grain texture, and cooking versatility. Several varieties also carry Geographical Indication (GI) tags, reflecting regional authenticity and quality assurance.'
          },
          {
            label: 'Sona Masuri',
            value: 'Light, aromatic medium-grain rice from Andhra Pradesh, Telangana & Karnataka; a top choice for US and South Indian diaspora markets. Available through Aurmin Global in raw and parboiled formats.'
          },
          {
            label: 'IR-64',
            value: "India's highest-volume non-Basmati export variety; dependable grain quality at competitive bulk pricing. Aurmin Global's standard high-volume supply grade."
          },
          {
            label: 'Swarna',
            value: 'Well-milled, versatile grain widely grown across eastern India. Sourced by Aurmin Global for large institutional and retail orders.'
          }
        ]
      },
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
            value: 'Punjab, Haryana, Himachal Pradesh, Uttarakhand, Delhi, 30 districts of Western Uttar Pradesh, and 3 districts of Jammu & Kashmir.'
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
  }
};

export const productsNavList = [
  { name: 'Red Chillies', path: '/products/red-chillies' },
  { name: 'Turmeric', path: '/products/turmeric' },
  { name: 'Green Cardamom', path: '/products/green-cardamom' },
  { name: 'Ginger', path: '/products/ginger' },
  { name: 'Fresh Onions', path: '/products/fresh-onions' },
  { name: 'Black Pepper', path: '/products/black-pepper' },
  { name: 'Freeze-Dried Mango Powder', path: '/products/freeze-dried-mango-powder' },
  { name: 'Cashew Nuts & Kernels', path: '/products/cashew-nuts-kernels' },
  { name: 'Rice — Non-Basmati & Basmati', path: '/products/rice' },
];
