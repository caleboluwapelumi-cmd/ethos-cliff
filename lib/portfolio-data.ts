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
    coverImage: "/images/POTFOLIO KIT/Atinuda/mockup alatinuda.webp",
    gallery: [
      "/images/POTFOLIO KIT/Atinuda/ATINUDA FLYER DONE.webp",
      "/images/POTFOLIO KIT/Atinuda/Atinuda Box.webp",
      "/images/POTFOLIO KIT/Atinuda/Atinuda Female 1.webp",
      "/images/POTFOLIO KIT/Atinuda/Atinuda Female.webp",
      "/images/POTFOLIO KIT/Atinuda/Atinuda Male 1.webp",
      "/images/POTFOLIO KIT/Atinuda/Atinuda card Front and Back.webp",
      "/images/POTFOLIO KIT/Atinuda/Atinuda card front.webp",
      "/images/POTFOLIO KIT/Atinuda/Atinuda tag.webp",
      "/images/POTFOLIO KIT/Atinuda/Atinude cr typeface.webp",
      "/images/POTFOLIO KIT/Atinuda/Ziplock Atinuda 1.webp",
      "/images/POTFOLIO KIT/Atinuda/Ziplock Atinuda 22.webp",
      "/images/POTFOLIO KIT/Atinuda/Ziplock Atinuda no BG.webp",
      "/images/POTFOLIO KIT/Atinuda/Ziplock Atinuda.webp",
      "/images/POTFOLIO KIT/Atinuda/anticipate.webp",
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
    coverImage: "/images/POTFOLIO KIT/CLOTHING  BRAND/Clothes Mockup (2).webp",
    gallery: [
      "/images/POTFOLIO KIT/CLOTHING  BRAND/Clothes Mockup (2) ;;.webp",
      "/images/POTFOLIO KIT/CLOTHING  BRAND/Clothes Mockup (2)vv.webp",
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
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/etanto naturals bottles-Recovered.webp",
    gallery: [
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/01.webp",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/Artboard 1.webp",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/Artboard Ziplock.webp",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/ETANTO NATURALS MOODBOARD.webp",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/HAIR GROWTH 100.webp",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/HAIR GROWTH 50.webp",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/MOISTURIZER FRONT.webp",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/MOISTURIZER.webp",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/SHAMPOO 250ML.webp",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/SHAMPOO 350ML.webp",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/SHAMPOO ETANTO.webp",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/etanto naturals.webp",
      "/images/POTFOLIO KIT/ETANTOS HAIR BRAND/hydrating mist.webp",
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
    coverImage: "/images/POTFOLIO KIT/medsafe/Medsafe sample.webp",
    gallery: [
      "/images/POTFOLIO KIT/medsafe/Artboard 1.webp",
      "/images/POTFOLIO KIT/medsafe/Artboard 2.webp",
      "/images/POTFOLIO KIT/medsafe/Artboard 3.webp",
      "/images/POTFOLIO KIT/medsafe/Artboard 4.webp",
      "/images/POTFOLIO KIT/medsafe/Full Face MedSafe.webp",
      "/images/POTFOLIO KIT/medsafe/Layer 2.webp",
      "/images/POTFOLIO KIT/medsafe/Medsafe sample 02,,.webp",
      "/images/POTFOLIO KIT/medsafe/Medsafe sample 02.webp",
      "/images/POTFOLIO KIT/medsafe/Medsafe taglne carton sample.webp",
      "/images/POTFOLIO KIT/medsafe/logo fulface.png",
      "/images/POTFOLIO KIT/medsafe/medsafe.webp",
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
      "/images/POTFOLIO KIT/RINA DONE/Store Entrance Logo Mockup (2).webp",
    gallery: [
      "/images/POTFOLIO KIT/RINA DONE/HBR3-Recovered.webp",
      "/images/POTFOLIO KIT/RINA DONE/RINA MOODBOARD 1 LOGO GUIDE.webp",
      "/images/POTFOLIO KIT/RINA DONE/RINA PRODUCT TEST.webp",
      "/images/POTFOLIO KIT/RINA DONE/RINA SHOPING BAG.webp",
      "/images/POTFOLIO KIT/RINA DONE/RINAS COLOR PALETTE.webp",
      "/images/POTFOLIO KIT/RINA DONE/hair growth.webp",
      "/images/POTFOLIO KIT/RINA DONE/rina 1.webp",
      "/images/POTFOLIO KIT/RINA DONE/rina 2.webp",
      "/images/POTFOLIO KIT/RINA DONE/rina 4.webp",
      "/images/POTFOLIO KIT/RINA DONE/rina 5.webp",
      "/images/POTFOLIO KIT/RINA DONE/rina 6.webp",
      "/images/POTFOLIO KIT/RINA DONE/rina 7.webp",
      "/images/POTFOLIO KIT/RINA DONE/rina 8.webp",
      "/images/POTFOLIO KIT/RINA DONE/rina 9.webp",
      "/images/POTFOLIO KIT/RINA DONE/rina moodboarding 2.webp",
      "/images/POTFOLIO KIT/RINA DONE/rina moodboarding.webp",
      "/images/POTFOLIO KIT/RINA DONE/rina thank you card.webp",
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
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/Global Shaping by TLC.webp",
    gallery: [
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/GLOBERSHAPERS CONFERENCE.webp",
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/ID CARD FOR GLOBALSHAPING CONF.webp",
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/ID CARDS FOR PARTICIPANTS 02.webp",
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/ID CARDS FOR PARTICIPANTS 03.webp",
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/ID CARDS FOR PARTICIPANTS 04.webp",
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/ID CARDS FOR PARTICIPANTS 05.webp",
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/ID CARDS FOR PARTICIPANTS 06.webp",
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/ID CARDS FOR PARTICIPANTS 07.webp",
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/LOGO TLC full logo.webp",
      "/images/POTFOLIO KIT/FULL EVENT BRANDING/LOGO TLC logo full.webp",
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
      "/images/POTFOLIO KIT/WEDDING INVITE/INVITATION CARD BACK VARIENT.webp",
    gallery: [
      "/images/POTFOLIO KIT/WEDDING INVITE/INVITATION CARD envelope front.webp",
    ],
  },
];

export function getProjectsByCategory(categorySlug: string): Project[] {
  return PROJECTS.filter((p) => p.category === categorySlug);
}

export function getProjectBySlug(slug: string): Project | null {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}

export function getCategoryBySlug(slug: string): Category | null {
  return CATEGORIES.find((c) => c.slug === slug) ?? null;
}

export function getCategoryForProject(project: Project): Category | null {
  return getCategoryBySlug(project.category);
}
