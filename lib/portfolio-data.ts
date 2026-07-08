export interface Category {
  slug: string;
  title: string;
  label: string;
  description: string;
  challenge: string;
  approach: string;
}

export interface Project {
  slug: string;
  category: string;
  title: string;
  client: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string;
  results: string;
  coverImage: string;
  gallery: string[];
}

export const CATEGORIES: Category[] = [
  {
    slug: "business-branding",
    title: "Business Branding",
    label: "Branding",
    description:
      "Complete brand identity systems — from logo design to packaging, brand guides, and every visual touchpoint.",
    challenge:
      "Most businesses launch with a visual identity that doesn't reflect the quality of what they actually offer. Generic logos, inconsistent colours, no brand language — the result is a brand that gets overlooked.",
    approach:
      "We build brand identity systems from the ground up. A distinctive mark, a refined colour palette, purposeful typography, packaging that commands shelf presence, and a brand guide that keeps everything consistent at every touchpoint.",
  },
  {
    slug: "graphics-design",
    title: "Graphics Design",
    label: "Design",
    description:
      "Event branding, invitation suites, promotional materials, and visual collateral that make every moment memorable.",
    challenge:
      "One-off design requests often produce disconnected outputs — an event flyer that doesn't match the ID cards, an invitation suite that doesn't reflect the occasion's tone. Details matter.",
    approach:
      "We design with the full picture in mind. Every piece of collateral — from conference materials to wedding invitation suites — is designed as part of a cohesive visual system, not a standalone asset.",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "atinuda-brand-identity",
    category: "business-branding",
    title: "Atinuda Brand Identity",
    client: "Atinuda",
    year: "2024",
    summary:
      "Full brand identity system for Atinuda — packaging, business cards, apparel tags, and product mockups.",
    challenge:
      "Atinuda needed a brand identity that could live across physical products — from packaging and ziplock bags to business cards and apparel tags — while maintaining a consistent, premium feel.",
    approach:
      "We developed a complete visual identity system: a distinctive typeface-led logo, a refined colour palette, and a packaging system that worked across every product format.",
    results:
      "A cohesive brand identity that works across packaging, print, and apparel — ready to scale.",
    coverImage: "/images/POTFOLIO KIT/Atinuda/mockup alatinuda.png",
    gallery: [
      "/images/POTFOLIO KIT/Atinuda/Atinuda Box.png",
      "/images/POTFOLIO KIT/Atinuda/Atinuda card Front & Back.png",
      "/images/POTFOLIO KIT/Atinuda/Atinuda Female 1.png",
      "/images/POTFOLIO KIT/Atinuda/Atinuda Female.png",
      "/images/POTFOLIO KIT/Atinuda/Ziplock Atinuda 1.png",
      "/images/POTFOLIO KIT/Atinuda/ATINUDA FLYER DONE.png",
    ],
  },
  {
    slug: "cothing-clothing-brand",
    category: "business-branding",
    title: "Clothing Brand Identity",
    client: "Cothing",
    year: "2024",
    summary:
      "Brand identity and apparel mockup design for a contemporary clothing label.",
    challenge:
      "A new clothing label needed a visual identity that could hold its own on physical garments and stand out in a crowded fashion market.",
    approach:
      "Clean, contemporary brand identity with apparel mockups that showed the brand in real-world context.",
    results: "A versatile brand identity ready for production and retail.",
    coverImage: "/images/POTFOLIO KIT/CLOTHING  BRAND/Clothes Mockup (2).png",
    gallery: [
      "/images/POTFOLIO KIT/CLOTHING  BRAND/Clothes Mockup (2) ;;.png",
      "/images/POTFOLIO KIT/CLOTHING  BRAND/Clothes Mockup (2)vv.png",
    ],
  },
  {
    slug: "etantos-hair-brand",
    category: "business-branding",
    title: "Etantos Hair Brand",
    client: "Etantos Naturals",
    year: "2024",
    summary:
      "Complete brand identity and product packaging system for a natural haircare line.",
    challenge:
      "Etantos Naturals needed packaging that communicated natural, clean ingredients while looking premium enough to compete on shelf.",
    approach:
      "Full brand identity system — logo, colour palette, and product packaging across shampoos, moisturisers, and hydrating mists. Moodboarding guided the visual direction before any design began.",
    results:
      "A complete product packaging system across 6+ SKUs, with a brand guide for future product launches.",
    coverImage:
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/etanto naturals bottles-Recovered.png",
    gallery: [
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/ETANTO NATURALS MOODBOARD.png",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/MOISTURIZER.png",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/SHAMPOO ETANTO.png",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/hydrating mist.png",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/01.png",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/etanto naturals.png",
    ],
  },
  {
    slug: "medsafe-product-branding",
    category: "business-branding",
    title: "Medsafe Product Branding",
    client: "Medsafe",
    year: "2025",
    summary:
      "Brand identity and product packaging for a medical/pharmaceutical brand.",
    challenge:
      "Medsafe needed a brand identity that communicated clinical trust and safety without feeling cold or inaccessible.",
    approach:
      "Clean, precise design language — a strong logomark, clinical colour palette, and product packaging that balanced authority with approachability.",
    results:
      "A complete brand identity and packaging system ready for product launch.",
    coverImage: "/images/POTFOLIO KIT/medsafe/Full Face MedSafe.png",
    gallery: [
      "/images/POTFOLIO KIT/medsafe/Medsafe sample.png",
      "/images/POTFOLIO KIT/medsafe/Medsafe sample 02.png",
      "/images/POTFOLIO KIT/medsafe/Artboard 1.png",
      "/images/POTFOLIO KIT/medsafe/Artboard 2.png",
      "/images/POTFOLIO KIT/medsafe/logo fulface.png",
    ],
  },
  {
    slug: "rina-luxury-brand",
    category: "business-branding",
    title: "Rina Luxury Brand Identity",
    client: "Rina",
    year: "2025",
    summary: "Luxury brand identity for a high-end fashion and beauty label.",
    challenge:
      "Rina needed a brand identity that could hold its own in the luxury market — refined, distinctive, and consistently premium across every touchpoint.",
    approach:
      "Moodboarding-led process to establish the visual direction, followed by a complete brand system: logo, colour palette, shopping bags, thank you cards, and brand guidelines.",
    results:
      "A luxury brand identity system ready for retail launch — from store entrance signage to packaging.",
    coverImage:
      "/images/POTFOLIO KIT/RINA DONE/Store Entrance Logo Mockup (2).png",
    gallery: [
      "/images/POTFOLIO KIT/RINA DONE/RINA MOODBOARD 1 LOGO GUIDE.png",
      "/images/POTFOLIO KIT/RINA DONE/RINAS COLOR PALETTE.png",
      "/images/POTFOLIO KIT/RINA DONE/RINA SHOPING BAG.png",
      "/images/POTFOLIO KIT/RINA DONE/rina thank you card.png",
      "/images/POTFOLIO KIT/RINA DONE/rina moodboarding.png",
      "/images/POTFOLIO KIT/RINA DONE/rina 1.png",
    ],
  },
  {
    slug: "globershapers-event-branding",
    category: "graphics-design",
    title: "GloberShapers Conference",
    client: "The Leadership Collective",
    year: "2024",
    summary:
      "Full event branding for the GloberShapers Conference — conference materials, ID cards, and event collateral.",
    challenge:
      "A large conference needed cohesive event branding across dozens of touchpoints — from the main conference banner to individual participant ID cards.",
    approach:
      "A unified visual identity for the event: conference banner, participant ID cards across 20+ individual designs, host format cards, and full event collateral.",
    results:
      "Complete event branding delivered across 25+ individual design assets.",
    coverImage:
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/GLOBERSHAPERS CONFERENCE.png",
    gallery: [
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/Global Shaping by TLC.png",
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/ID CARD FOR GLOBALSHAPING CONF.png",
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/ID CARDS FOR PARTICIPANTS 02.png",
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/ID CARDS FOR PARTICIPANTS 03.png",
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/ID CARDS FOR PARTICIPANTS 04.png",
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/LOGO TLC full logo.png",
    ],
  },
  {
    slug: "wedding-invitation-suite",
    category: "graphics-design",
    title: "Wedding Invitation Suite",
    client: "Private Client",
    year: "2025",
    summary:
      "Elegant wedding invitation suite — front and back card design with envelope treatment.",
    challenge:
      "A couple needed wedding stationery that felt personal, elegant, and memorable — not templated.",
    approach:
      "A bespoke invitation suite designed around the couple's aesthetic — front card, back variant, and envelope front, all cohesive.",
    results: "A complete wedding invitation suite delivered print-ready.",
    coverImage:
      "/images/POTFOLIO KIT/WEDDING INVITE/INVITATION CARD BACK VARIENT.png",
    gallery: [
      "/images/POTFOLIO KIT/WEDDING INVITE/INVITATION CARD envelope front.png",
    ],
  },
];

export function getProjectsByCategory(categorySlug: string): Project[] {
  return PROJECTS.filter((p) => p.category === categorySlug);
}

export function getProjectBySlug(
  categorySlug: string,
  projectSlug: string,
): Project | null {
  return (
    PROJECTS.find(
      (p) => p.category === categorySlug && p.slug === projectSlug,
    ) ?? null
  );
}

export function getCategoryBySlug(slug: string): Category | null {
  return CATEGORIES.find((c) => c.slug === slug) ?? null;
}
