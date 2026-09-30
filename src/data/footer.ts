import { FooterColumn, SocialLink } from '../types';
import { SECTION_IDS } from '../constants/sectionIds';

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Quick Links',
    links: [
      { label: 'Home', sectionId: SECTION_IDS.HOME },
      { label: 'About Us', sectionId: SECTION_IDS.ABOUT },
      { label: 'Our Services', sectionId: SECTION_IDS.SERVICES },
      { label: 'Advantages', sectionId: SECTION_IDS.ADVANTAGES },
      { label: 'Growth Plans', sectionId: SECTION_IDS.PLANS },
      { label: 'Blogs', sectionId: SECTION_IDS.TESTIMONIALS },
      { label: 'Contact Us', sectionId: SECTION_IDS.CONTACT },
    ],
  },
  {
    heading: 'Our Services',
    links: [
      { label: 'Healthy Ready-To-Eat Meals' },
      { label: 'Customized Meal Plans' },
      { label: 'Weight Management Meals' },
      { label: 'High-Protein Meal Plans' },
      { label: 'Corporate Meal Solutions' },
      { label: 'Fitness & Wellness Nutrition' },
      { label: 'Healthy Snacks & Beverages' },
      { label: 'Delivery & Pickup Services' },
    ],
  },
  {
    heading: 'Get In Touch',
    links: [
      { label: 'Dubai, UAE' },
      { label: '+971 50 262 6144', href: 'tel:+971502626144' },
      { label: 'info@healthify.ae', href: 'mailto:info@healthify.ae' },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { iconName: 'Facebook', url: 'https://facebook.com', label: 'Facebook' },
  { iconName: 'Twitter', url: 'https://twitter.com', label: 'X (Twitter)' },
  { iconName: 'Instagram', url: 'https://instagram.com', label: 'Instagram' },
  { iconName: 'Youtube', url: 'https://youtube.com', label: 'YouTube' },
];