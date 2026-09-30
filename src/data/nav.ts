import { NavItem } from '../types';
import { SECTION_IDS } from '../constants/sectionIds';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', sectionId: SECTION_IDS.HOME },
  { label: 'About Us', sectionId: SECTION_IDS.ABOUT },
  { label: 'Our Services', sectionId: SECTION_IDS.SERVICES },
  { label: 'Advantages', sectionId: SECTION_IDS.ADVANTAGES },
  { label: 'Growth Plans', sectionId: SECTION_IDS.PLANS },
  { label: 'Blogs', sectionId: SECTION_IDS.TESTIMONIALS },
  { label: 'Contact Us', sectionId: SECTION_IDS.CONTACT },
];