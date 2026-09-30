import { Platform } from 'react-native';

const HEADER_HEIGHT = 64;

export function scrollToSection(sectionId: string): void {
  if (Platform.OS === 'web') {
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}