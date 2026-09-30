import React from 'react';
import { Text } from 'react-native';
import { COLORS } from '../../constants/theme';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className = '', light = false }) => (
  <Text
    className={`text-3xl font-bold mb-4 leading-tight ${className}`}
    style={{ fontFamily: 'DM_Serif_Display', color: light ? COLORS.white : COLORS.forest900 }}
    accessibilityRole="header"
    aria-level={2}
  >
    {children}
  </Text>
);