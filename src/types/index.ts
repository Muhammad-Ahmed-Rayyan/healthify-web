export interface NavItem {
  label: string;
  sectionId: string;
}

export interface StatItem {
  iconName: string;
  value: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageKey: keyof typeof import('../constants/images').IMAGES;
}

export interface AdvantageItem {
  iconName: string;
  title: string;
  caption: string;
}

export interface PlanFeature {
  text: string;
}

export interface PlanItem {
  id: string;
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

export interface ProcessStep {
  number: number;
  iconName: string;
  title: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  rating: number;
  avatarKey: keyof typeof import('../constants/images').IMAGES;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  sectionId?: string;
  href?: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export interface SocialLink {
  iconName: string;
  url: string;
  label: string;
}
