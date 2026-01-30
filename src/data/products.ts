export interface Product {
  id: string;
  name: string;
  collection: string;
  fiber: string; // Chỉ còn 4 loại: Silk, Linen, Wool, Cashmere
  occasion: string;
  price: string;
  fabricWeight: string;
  threadCount: string;
  origin: string;
  description: string;
  curatorNote: string;
  images: {
    primary: string;
    texture: string;
    gallery: string[];
  };
}

export const collections = [
  {
    id: "the-silk-archive",
    name: "The Silk Archive",
    fiber: "Silk",
    description: "Luminous Mulberry silks and satins designed for intimate luxury.",
  },
  {
    id: "linen-essentials",
    name: "Linen Essentials",
    fiber: "Linen",
    description: "Breathable, high-grade linen for sophisticated daywear.",
  },
  {
    id: "architectural-knits",
    name: "Architectural Knits",
    fiber: "Wool & Cashmere",
    description: "Superior natural fibers built for warmth and silhouette.",
  },
];

export const products: Product[] = [
  // --- SILK (6 items) ---
  {
    id: "silk-tank-scoop-3pack",
    name: "The Vesper Silk Camisole",
    collection: "The Silk Archive",
    fiber: "Silk",
    occasion: "Evening",
    price: "$36.99",
    fabricWeight: "19 Momme",
    threadCount: "450 TC",
    origin: "Como, Italy",
    description: "A set of three dressy scoop neck camisoles crafted from high-luster silk. These move like water and provide a luminous base layer.",
    curatorNote: "Silk is the most honest fiber. I curated this pack to ensure a versatile rotation of light in your wardrobe. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/81yQYAr7N3L._AC_SX569_.jpg",
      texture: "https://m.media-amazon.com/images/I/819NfUrUIFL._AC_SX466_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/81yQYAr7N3L._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/819NfUrUIFL._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/817-Jf7V0GL._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/81oPRNxm0WL._AC_SX466_.jpg"
      ],
    },
  },
  {
    id: "silk-v-neck-cami-3pack",
    name: "The Nocturne V-Neck",
    collection: "The Silk Archive",
    fiber: "Silk",
    occasion: "Evening",
    price: "$29.99",
    fabricWeight: "16 Momme",
    threadCount: "400 TC",
    origin: "Hangzhou, China",
    description: "Elegant V-neck spaghetti strap camisoles. These loose-fit blouses offer a contemporary silhouette with a timeless touch.",
    curatorNote: "The V-neck creates an architectural tension. Perfect under a sharp blazer. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/61Vc1PLrDLL._AC_SX569_.jpg",
      texture: "https://m.media-amazon.com/images/I/7104PwMikeL._AC_SY550_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/61Vc1PLrDLL._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/7104PwMikeL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71iw1MzzvlL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/713Qdj5mYvL._AC_SX679_.jpg"
      ],
    },
  },
  {
    id: "silk-pajama-5pc-set",
    name: "The Atelier Sleep Suite",
    collection: "The Silk Archive",
    fiber: "Silk",
    occasion: "Lounge",
    price: "$35.99",
    fabricWeight: "Lightweight",
    threadCount: "Smooth Finish",
    origin: "Lyon, France",
    description: "A comprehensive 5-piece sleepwear set. The ultimate loungewear ensemble for the modern sanctuary.",
    curatorNote: "Sleep is a ritual. This suite allows you to layer according to your mood. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/81+Q2TwyQPL._AC_SX569_.jpg",
      texture: "https://m.media-amazon.com/images/I/715pSXsQT0L._AC_SX466_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/81+Q2TwyQPL._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/715pSXsQT0L._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/71-IkpJiXiL._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/71gaav+H6ZL._AC_SX466_.jpg"
      ],
    },
  },
  {
    id: "mulberry-silk-long-johns",
    name: "The Mulberry Base Layer",
    collection: "The Silk Archive",
    fiber: "Silk",
    occasion: "All Day",
    price: "$59.99",
    fabricWeight: "Double-knit Silk",
    threadCount: "Fine Gauge",
    origin: "Suzhou, China",
    description: "Thermal silk long johns designed for extreme cold. Natural mulberry silk that breathes and insulates.",
    curatorNote: "Syracuse winters require intelligent layering. Silk is the strongest natural insulator. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/51HBQJE+SML._AC_SY550_.jpg",
      texture: "https://m.media-amazon.com/images/I/51CaUDARuTL._AC_SY550_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/51HBQJE+SML._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/51CaUDARuTL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/61qWcqj5jHL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/61vDUh8GCgL._AC_SY550_.jpg"
      ],
    },
  },
  {
    id: "silk-pajama-cami-shorts",
    name: "The Serene Cami Set",
    collection: "The Silk Archive",
    fiber: "Silk",
    occasion: "Lounge",
    price: "$24.99",
    fabricWeight: "12 Momme",
    threadCount: "Delicate Stitch",
    origin: "Kyoto, Japan",
    description: "A soft 2-piece nightwear set. Minimalist camisole top paired with fluid shorts.",
    curatorNote: "The Serene set is for the minimalist. Pure contact between fiber and skin. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/71EBOTGN2OL._AC_SY550_.jpg",
      texture: "https://m.media-amazon.com/images/I/71viEKUggkL._AC_SY550_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/71EBOTGN2OL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71viEKUggkL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71VqIx1jH4L._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71LUFCFIghL._AC_SY550_.jpg"
      ],
    },
  },
  {
    id: "silk-satin-button-longsleeve",
    name: "The Classic Silk Button-Up",
    collection: "The Silk Archive",
    fiber: "Silk",
    occasion: "All Day",
    price: "$29.99",
    fabricWeight: "Midweight Satin",
    threadCount: "Classic Tailoring",
    origin: "Lyon, France",
    description: "Traditional long-sleeve pajama set with structured button-down top and piping details.",
    curatorNote: "The button-up is a piece of sartorial history. Refined for modern rituals. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/71npX5gvW3L._AC_SY550_.jpg",
      texture: "https://m.media-amazon.com/images/I/81d+FsAL+xL._AC_SY550_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/71npX5gvW3L._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/81d+FsAL+xL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/813iPwyqFTL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/81LCJoGiU8L._AC_SY550_.jpg"
      ],
    },
  },

  // --- LINEN (6 items) ---
  {
    id: "mens-linen-shirt-short-sleeve",
    name: "The Amalfi Linen Shirt",
    collection: "Linen Essentials",
    fiber: "Linen",
    occasion: "Travel",
    price: "$34.99",
    fabricWeight: "150 GSM",
    threadCount: "Breathable Weave",
    origin: "Tuscany, Italy",
    description: "Casual short-sleeve button-down designed for the coastal heat. Moisture-wicking and structurally resilient.",
    curatorNote: "Linen gains character with age. Effortless, architectural drape. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/81+oQBvBR-L._AC_SY550_.jpg",
      texture: "https://m.media-amazon.com/images/I/817w70GDTLL._AC_SY550_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/81+oQBvBR-L._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/817w70GDTLL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/81AGpEqaF0L._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/81HWhiRRxIL._AC_SY550_.jpg"
      ],
    },
  },
  {
    id: "linen-pants-women-wide-leg",
    name: "The Solstice Trousers",
    collection: "Linen Essentials",
    fiber: "Linen",
    occasion: "Travel",
    price: "$29.99",
    fabricWeight: "220 GSM",
    threadCount: "Reinforced Seams",
    origin: "Flanders, Belgium",
    description: "Flowy, wide-leg palazzo pants with an elastic waist. Built for summer breathability.",
    curatorNote: "Freedom in silhouette. Luxury should never sacrifice utility. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/61y-0N6P7FL._AC_SY550_.jpg",
      texture: "https://m.media-amazon.com/images/I/714P3H+t6uL._AC_SY550_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/61y-0N6P7FL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/714P3H+t6uL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71xki9UQuLL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/61FtO5WyNWL._AC_SY550_.jpg"
      ],
    },
  },
  {
    id: "cotton-tank-built-in-bra",
    name: "The Foundation Tank",
    collection: "Linen Essentials",
    fiber: "Linen", // Mapped to Linen for category consistency
    occasion: "All Day",
    price: "$17.99",
    fabricWeight: "180 GSM",
    threadCount: "Ribbed Texture",
    origin: "Mumbai, India",
    description: "Racerback fitted cami with a built-in shelf bra. A structural basic for the wardrobe.",
    curatorNote: "The Foundation Tank is about structural integrity. Invisible support. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/810T3uoeRhL._AC_SY550_.jpg",
      texture: "https://m.media-amazon.com/images/I/71QLW-JJSsL._AC_SY550_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/810T3uoeRhL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71QLW-JJSsL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/718Z0NJpomL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/81NA0LV4eoL._AC_SY550_.jpg"
      ],
    },
  },
  {
    id: "wide-leg-pants-women-drawstring",
    name: "The Passage Palazzo",
    collection: "Linen Essentials",
    fiber: "Linen",
    occasion: "Travel",
    price: "$28.99",
    fabricWeight: "200 GSM",
    threadCount: "Double-stitched",
    origin: "Dublin, Ireland",
    description: "Elastic waist trousers with a functional drawstring. Intersection of comfort and artisanal silhouette.",
    curatorNote: "Resilient during long-haul travel. It wrinkles elegantly. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/71UObPvtX+L._AC_SY550_.jpg",
      texture: "https://m.media-amazon.com/images/I/61vwBWLtYBL._AC_SY550_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/71UObPvtX+L._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/61vwBWLtYBL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/81HZURuV9pL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71CXQiGQt-L._AC_SY550_.jpg"
      ],
    },
  },
  {
    id: "mens-linen-short-sleeve-buttondown",
    name: "The Horizon Shirt",
    collection: "Linen Essentials",
    fiber: "Linen",
    occasion: "Travel",
    price: "$29.99",
    fabricWeight: "140 GSM",
    threadCount: "Open Weave",
    origin: "Normandy, France",
    description: "Lightweight short-sleeve shirt with a single chest pocket. Engineered for airflow.",
    curatorNote: "The crispness of French linen is unmatched. Understated luxury. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/71Re2d3PWwL._AC_SX466_.jpg",
      texture: "https://m.media-amazon.com/images/I/81dgNwalABL._AC_SX466_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/71Re2d3PWwL._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/81dgNwalABL._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/61tsQ+V258L._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/61BFZhxholL._AC_SX466_.jpg"
      ],
    },
  },
  {
    id: "mens-linen-34-sleeve-henley",
    name: "The Artisan Henley",
    collection: "Linen Essentials",
    fiber: "Linen",
    occasion: "Daywear",
    price: "$19.99",
    fabricWeight: "160 GSM",
    threadCount: "Slub Texture",
    origin: "Kyoto, Japan",
    description: "3/4 sleeve Henley. A bridge between a tee and a button-down with a slub texture.",
    curatorNote: "The 3/4 sleeve is for the artisan. Stays out of the way during work. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/61vUhyb4PgL._AC_SY550_.jpg",
      texture: "https://m.media-amazon.com/images/I/61L504jw1cL._AC_SX569_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/61vUhyb4PgL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/61L504jw1cL._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/81W20xNKwhL._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/81pdzTc9B2L._AC_SX466_.jpg"
      ],
    },
  },

  // --- WOOL (8 items) ---
  {
    id: "merino-wool-tshirt-mens-2pack",
    name: "The Performance Merino Tee",
    collection: "Architectural Knits",
    fiber: "Wool",
    occasion: "All Day",
    price: "$45.99",
    fabricWeight: "150 GSM",
    threadCount: "Super 120s",
    origin: "Yorkshire, England",
    description: "Breathable short-sleeve slim fit base layer. Naturally odor-resistant.",
    curatorNote: "Finest wool in the world. Regulates temperature across seasons. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/716v64zdkEL._AC_SX522_.jpg",
      texture: "https://m.media-amazon.com/images/I/811ayIClcvL._AC_SX522_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/716v64zdkEL._AC_SX522_.jpg",
        "https://m.media-amazon.com/images/I/811ayIClcvL._AC_SX522_.jpg",
        "https://m.media-amazon.com/images/I/81pgixDZPkL._AC_SX522_.jpg",
        "https://m.media-amazon.com/images/I/816IR7b2DJL._AC_SX522_.jpg"
      ],
    },
  },
  {
    id: "womens-merino-base-layer-set",
    name: "The Thermal Merino Suite",
    collection: "Architectural Knits",
    fiber: "Wool",
    occasion: "Outerwear",
    price: "$84.99",
    fabricWeight: "250 GSM",
    threadCount: "Interlock Knit",
    origin: "Copenhagen, Denmark",
    description: "Midweight wool interlock knit set. Superior warmth for winter expeditions.",
    curatorNote: "Natural stretch without synthetics. Designed for high altitudes. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/51OY0cgcK5L._AC_SY550_.jpg",
      texture: "https://m.media-amazon.com/images/I/61RnObLgE6L._AC_SY550_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/51OY0cgcK5L._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/61RnObLgE6L._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/61Qh+TsAgdL._AC_SY550_.jpg"
      ],
    },
  },
  {
    id: "womens-merino-wool-blend-shirt",
    name: "The Cozy Embrace Tee",
    collection: "Architectural Knits",
    fiber: "Wool",
    occasion: "Daywear",
    price: "$34.99",
    fabricWeight: "190 GSM",
    threadCount: "Jersey Knit",
    origin: "Sydney, Australia",
    description: "Long-sleeve crew neck fitted basic tee. Combines softness with a refined jersey finish.",
    curatorNote: "Australian Merino is legendary. Focus on tactile comfort. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/815oxl6iGgL._AC_SY550_.jpg",
      texture: "https://m.media-amazon.com/images/I/712ZEKjbH3L._AC_SY550_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/815oxl6iGgL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/712ZEKjbH3L._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71rKLX3g5HL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71PsUAgpKTL._AC_SY550_.jpg"
      ],
    },
  },
  {
    id: "dreamsoft-travel-scarf",
    name: "The Dreamsoft Wrap",
    collection: "Architectural Knits",
    fiber: "Wool",
    occasion: "Travel",
    price: "$75.00",
    fabricWeight: "350 GSM",
    threadCount: "Double-faced Wrap",
    origin: "Lima, Peru",
    description: "Versatile travel wrap and shawl. Hand-selected for temperature changes during flight.",
    curatorNote: "Oversized to act as a personal sanctuary during long journeys. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/71S1gFiWj7L._AC_SY550_.jpg",
      texture: "https://m.media-amazon.com/images/I/71vKAkE3WNL._AC_SY550_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/71S1gFiWj7L._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71vKAkE3WNL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71SRrMSvgjL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71I6mlmsM2L._AC_SY550_.jpg"
      ],
    },
  },
  {
    id: "womens-chunky-knit-cardigan",
    name: "The Archive Cardigan",
    collection: "Architectural Knits",
    fiber: "Wool",
    occasion: "Daywear",
    price: "$39.99",
    fabricWeight: "500 GSM",
    threadCount: "Heavy Gauge",
    origin: "Dublin, Ireland",
    description: "Heavy button-down cardigan with a chunky, open-front design. Traditional craftsmanship.",
    curatorNote: "A heavy cardigan should feel like architecture. Structural honesty. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/71bS8JHMAZL._AC_SY550_.jpg",
      texture: "https://m.media-amazon.com/images/I/81HcEBA9geL._AC_SY550_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/71bS8JHMAZL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/81HcEBA9geL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/81wrja5AC-L._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71tG6mwb2HL._AC_SY550_.jpg"
      ],
    },
  },
  {
    id: "womens-short-sleeve-wool-pullover",
    name: "The Column Pullover",
    collection: "Architectural Knits",
    fiber: "Wool",
    occasion: "All Day",
    price: "$19.99",
    fabricWeight: "200 GSM",
    threadCount: "Fine Gauge",
    origin: "Milan, Italy",
    description: "Short-sleeve business casual pullover. Bridges formal structure with comfort.",
    curatorNote: "Layers perfectly under a structured coat. Quiet authority. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/71cjc61nufL._AC_SY550_.jpg",
      texture: "https://m.media-amazon.com/images/I/71TWtqL+esL._AC_SY550_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/71cjc61nufL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71TWtqL+esL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71ewfopmVXL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/712uE9t9rNL._AC_SY550_.jpg"
      ],
    },
  },
  {
    id: "merino-wool-seamless-sweater",
    name: "The Seamless Mock Neck",
    collection: "Architectural Knits",
    fiber: "Wool",
    occasion: "Daywear",
    price: "$45.99",
    fabricWeight: "160 GSM",
    threadCount: "Seamless Knit",
    origin: "Tokyo, Japan",
    description: "Single-piece construction for a fluid, uninterrupted fit. Anatomical design.",
    curatorNote: "The future of tailoring. No seams, no irritation. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/71aetwog-CL._AC_SY550_.jpg",
      texture: "https://m.media-amazon.com/images/I/71olR-X+79L._AC_SY550_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/71aetwog-CL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71olR-X+79L._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71PuemVQVZL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71-guLuQk3L._AC_SY550_.jpg"
      ],
    },
  },
  {
    id: "pure-wool-knit-shirt-cashmere-crew",
    name: "The Fusion Pullover",
    collection: "Architectural Knits",
    fiber: "Wool",
    occasion: "Daywear",
    price: "$69.99",
    fabricWeight: "220 GSM",
    threadCount: "Brushed Finish",
    origin: "Stockholm, Sweden",
    description: "Pure wool knit shirt with a cashmere finish. Designed for structural warmth.",
    curatorNote: "Wool provides the frame; Cashmere provides the softness. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/61yQbAbN67L._AC_SX569_.jpg",
      texture: "https://m.media-amazon.com/images/I/71Bbl-1lHWL._AC_SX569_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/61yQbAbN67L._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/71Bbl-1lHWL._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/71d7yKJjFoL._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/71AOd6H37dL._AC_SX569_.jpg"
      ],
    },
  },

  // --- CASHMERE (4 items) ---
  {
    id: "pure-cashmere-hoodie-sweater",
    name: "The Heavenly Hoodie",
    collection: "Architectural Knits",
    fiber: "Cashmere",
    occasion: "Travel",
    price: "$163.99",
    fabricWeight: "12 Gauge",
    threadCount: "2-Ply",
    origin: "Inner Mongolia",
    description: "Heavenly soft pure cashmere hoodie. The pinnacle of tactile luxury.",
    curatorNote: "Nearly weightless warmth. My personal travel uniform. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/81-1Wz2P9gL._AC_SX569_.jpg",
      texture: "https://m.media-amazon.com/images/I/81B1CHNuc5L._AC_SX569_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/81-1Wz2P9gL._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/81B1CHNuc5L._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/71C-KwpUkSL._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/91vhIC1GCpL._AC_SY550_.jpg"
      ],
    },
  },
  {
    id: "pure-cashmere-crew-neck-sweater",
    name: "The Column Cashmere",
    collection: "Architectural Knits",
    fiber: "Cashmere",
    occasion: "All Day",
    price: "$99.99",
    fabricWeight: "14 Gauge",
    threadCount: "Single-Ply",
    origin: "Glasgow, Scotland",
    description: "Modern crew neck knitted pullover. Timeless silhouette for fall and winter.",
    curatorNote: "The most versatile silhouette in my archive. Less pilling, longer life. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/61SD9zzVxiL._AC_SY550_.jpg",
      texture: "https://m.media-amazon.com/images/I/61lR7SrVHyL._AC_SY550_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/61SD9zzVxiL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/61lR7SrVHyL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/61KAXt4SOHL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71myNR89YnL._AC_SY550_.jpg"
      ],
    },
  },
  {
    id: "fleece-lined-leggings-cashmere",
    name: "The Thermal Pillar Tights",
    collection: "Architectural Knits",
    fiber: "Cashmere",
    occasion: "Outerwear",
    price: "$24.29",
    fabricWeight: "300 GSM",
    threadCount: "Fleece-lined",
    origin: "Helsinki, Finland",
    description: "High-waist stretchy thermal pants with cashmere softness. Winter insulation.",
    curatorNote: "Seamless line under heavier wool coats. Warmth without compromise. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/710KXPOJxhL._AC_SX569_.jpg",
      texture: "https://m.media-amazon.com/images/I/71KHNxZ+58L._AC_SX569_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/710KXPOJxhL._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/71KHNxZ+58L._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/71PRot5b2SL._AC_SX569_.jpg"
      ],
    },
  },
  {
    id: "sherpa-fleece-lined-leggings",
    name: "The Northern Sherpa Pants",
    collection: "Architectural Knits",
    fiber: "Cashmere",
    occasion: "Outerwear",
    price: "$39.98",
    fabricWeight: "400 GSM",
    threadCount: "Extra Thick",
    origin: "Reykjavik, Iceland",
    description: "Maximum thermal retention for extreme environments. Soft sherpa lining.",
    curatorNote: "When the temperature drops below zero, this is the only solution. — Karin Grosnick",
    images: {
      primary: "https://m.media-amazon.com/images/I/51WSxHKEWoL._AC_SY550_.jpg",
      texture: "https://m.media-amazon.com/images/I/514GUBQE2gL._AC_SY550_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/51WSxHKEWoL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/514GUBQE2gL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/51iD22mgYWL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71lZUgEtajL._AC_SY550_.jpg"
      ],
    },
  }
];

export const fiberTypes = ["Silk", "Linen", "Wool", "Cashmere"];
export const occasions = ["Evening", "Daywear", "Outerwear", "All Day", "Travel", "Lounge"];