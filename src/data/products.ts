import midnightSilkShirt from "@/assets/products/midnight-silk-shirt.jpg";
import midnightSilkShirtTexture from "@/assets/products/midnight-silk-shirt-texture.jpg";
import cashmereKnit from "@/assets/products/cashmere-structured-knit.jpg";
import cashmereKnitTexture from "@/assets/products/cashmere-structured-knit-texture.jpg";
import woolCoat from "@/assets/products/tailored-wool-coat.jpg";
import woolCoatTexture from "@/assets/products/tailored-wool-coat-texture.jpg";

export interface Product {
  id: string;
  name: string;
  collection: string;
  fiber: string;
  colorPalette: string;
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
    id: "midnight-series",
    name: "The Midnight Series",
    fiber: "Silk",
    description: "Luminous silks crafted for the hours between dusk and dawn.",
  },
  {
    id: "architectural-knits",
    name: "Architectural Knits",
    fiber: "Cashmere",
    description: "Structured knitwear that defines the modern silhouette.",
  },
  {
    id: "tailored-structures",
    name: "Tailored Structures",
    fiber: "Wool",
    description: "Outerwear built to withstand time and trend.",
  },
];

export const products: Product[] = [
  {
    id: "midnight-silk-shirt",
    name: "The Vesper Shirt",
    collection: "The Midnight Series",
    fiber: "Silk",
    colorPalette: "Shadow",
    occasion: "Evening",
    price: "Upon Inquiry",
    fabricWeight: "19 Momme",
    threadCount: "400 TC",
    origin: "Como, Italy",
    description: "A shirt designed for the quiet hours. The Vesper is cut from Como silk with a weight that moves like water yet holds its form with architectural precision.",
    curatorNote: "I created the Vesper after spending a month in northern Italy, watching how light falls on Lake Como at dusk. The navy silk we source captures that exact moment—neither day nor night, but the threshold between. Each shirt takes 16 hours to construct. — Karin Grosnick",
    images: {
      primary: midnightSilkShirt,
      texture: midnightSilkShirtTexture,
      gallery: [midnightSilkShirt, midnightSilkShirtTexture],
    },
  },
  {
    id: "cashmere-structured-knit",
    name: "The Column Sweater",
    collection: "Architectural Knits",
    fiber: "Cashmere",
    colorPalette: "Bone",
    occasion: "All Day",
    price: "Upon Inquiry",
    fabricWeight: "12 Gauge",
    threadCount: "2-Ply",
    origin: "Inner Mongolia",
    description: "Structural knitwear that refuses to slouch. The Column is constructed from two-ply Mongolian cashmere with reinforced shoulders that maintain their line through years of wear.",
    curatorNote: "The Column was born from a frustration with knitwear that loses its shape. I spent two years developing the shoulder construction—a hidden internal architecture that lets the sweater drape beautifully while holding its form. It's engineering disguised as softness. — Karin Grosnick",
    images: {
      primary: cashmereKnit,
      texture: cashmereKnitTexture,
      gallery: [cashmereKnit, cashmereKnitTexture],
    },
  },
  {
    id: "tailored-wool-coat",
    name: "The Archive Coat",
    collection: "Tailored Structures",
    fiber: "Wool",
    colorPalette: "Shadow",
    occasion: "Outerwear",
    price: "Upon Inquiry",
    fabricWeight: "450 GSM",
    threadCount: "Double-Faced",
    origin: "Yorkshire, England",
    description: "Built like architecture. The Archive is cut from double-faced Yorkshire wool with hand-finished seams that require 40 hours of construction. No lining. No shortcuts.",
    curatorNote: "This coat is my manifesto. In an age of disposable fashion, I wanted to create something that could be passed down. The wool comes from a single mill in Yorkshire that has operated since 1837. Each coat is numbered and registered. — Karin Grosnick",
    images: {
      primary: woolCoat,
      texture: woolCoatTexture,
      gallery: [woolCoat, woolCoatTexture],
    },
  },
  {
    id: "linen-summer-blazer",
    name: "The Solstice Blazer",
    collection: "Tailored Structures",
    fiber: "Linen",
    colorPalette: "Earth",
    occasion: "Daywear",
    price: "Upon Inquiry",
    fabricWeight: "280 GSM",
    threadCount: "Hand-Woven",
    origin: "Flanders, Belgium",
    description: "Summer tailoring that breathes. The Solstice is unstructured yet precise, cut from Belgian linen that softens with each wear while maintaining its essential form.",
    curatorNote: "Linen is the most honest fabric. It shows its age, its wear, its story. The Solstice was designed to look better after a decade than the day you receive it. That's the true test of bespoke. — Karin Grosnick",
    images: {
      primary: cashmereKnit,
      texture: cashmereKnitTexture,
      gallery: [cashmereKnit, cashmereKnitTexture],
    },
  },
  {
    id: "silk-evening-trousers",
    name: "The Nocturne Trousers",
    collection: "The Midnight Series",
    fiber: "Silk",
    colorPalette: "Shadow",
    occasion: "Evening",
    price: "Upon Inquiry",
    fabricWeight: "22 Momme",
    threadCount: "Twill Weave",
    origin: "Hangzhou, China",
    description: "Evening trousers with the weight of tradition and the movement of modernity. The Nocturne drapes without clinging, structured without stiffness.",
    curatorNote: "I believe trousers are the foundation of any silhouette. The Nocturne took three years to perfect—the rise, the break, the way silk moves when you walk. It's dance, frozen in fabric. — Karin Grosnick",
    images: {
      primary: midnightSilkShirt,
      texture: midnightSilkShirtTexture,
      gallery: [midnightSilkShirt, midnightSilkShirtTexture],
    },
  },
  {
    id: "cashmere-travel-coat",
    name: "The Passage Coat",
    collection: "Architectural Knits",
    fiber: "Cashmere",
    colorPalette: "Earth",
    occasion: "Travel",
    price: "Upon Inquiry",
    fabricWeight: "7 Gauge",
    threadCount: "4-Ply",
    origin: "Inner Mongolia",
    description: "A coat designed for movement. The Passage is knitted from four-ply cashmere with hidden interior pockets and a construction that resists wrinkles across continents.",
    curatorNote: "I travel constantly between Syracuse and our ateliers in Europe. This coat was designed for that life—elegant enough for arrival, resilient enough for the journey. It's my uniform. — Karin Grosnick",
    images: {
      primary: woolCoat,
      texture: woolCoatTexture,
      gallery: [woolCoat, woolCoatTexture],
    },
  },
];

export const fiberTypes = ["Silk", "Linen", "Wool", "Cashmere"];
export const colorPalettes = ["Earth", "Shadow", "Bone"];
export const occasions = ["Evening", "Daywear", "Outerwear", "All Day", "Travel"];
