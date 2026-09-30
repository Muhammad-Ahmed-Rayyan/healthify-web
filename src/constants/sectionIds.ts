export const SECTION_IDS = {
  HOME: 'home',
  ABOUT: 'about',
  SERVICES: 'services',
  ADVANTAGES: 'advantages',
  PLANS: 'plans',
  TESTIMONIALS: 'testimonials',
  FAQ: 'faq',
  CONTACT: 'contact',
} as const;

export type SectionId = typeof SECTION_IDS[keyof typeof SECTION_IDS];