import { useState, useEffect } from 'react';
import { Platform } from 'react-native';

const HEADER_HEIGHT = 64;

export function useScrollSpy(sectionIds: string[]): string {
  const [active, setActive] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    if (Platform.OS !== 'web') return;

    const handler = () => {
      const scrollY = window.scrollY + HEADER_HEIGHT + 8;
      let current = sectionIds[0] ?? '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [sectionIds]);

  return active;
}