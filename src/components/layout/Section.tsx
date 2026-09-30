import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../../constants/theme';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  bg?: 'cream' | 'sage' | 'forest' | 'white';
  className?: string;
}

const BG_COLORS: Record<string, string> = {
  cream: COLORS.cream50,
  sage: COLORS.sage100,
  forest: COLORS.forest900,
  white: COLORS.white,
};

export const Section: React.FC<SectionProps> = ({ id, children, bg = 'white', className = '' }) => (
  <View
    nativeID={id}
    className={`py-12 sm:py-16 lg:py-24 ${className}`}
    style={{ backgroundColor: BG_COLORS[bg] ?? COLORS.white }}
    accessible
    accessibilityLabel={id}
  >
    {children}
  </View>
);