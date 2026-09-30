import React from 'react';
import { Text } from 'react-native';
import { COLORS } from '../../constants/theme';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export const Eyebrow: React.FC<EyebrowProps> = ({ children, className = '', light = false }) => (
  <Text
    className={`text-xs font-semibold uppercase tracking-widest mb-3 ${className}`}
    style={{ color: light ? COLORS.sage100 : COLORS.olive600, letterSpacing: 2.4 }}
  >
    {children}
  </Text>
);