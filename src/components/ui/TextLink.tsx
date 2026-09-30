import React from 'react';
import { Pressable, Text } from 'react-native';
import { COLORS } from '../../constants/theme';

interface TextLinkProps {
  children: React.ReactNode;
  onPress?: () => void;
  className?: string;
  light?: boolean;
}

export const TextLink: React.FC<TextLinkProps> = ({ children, onPress, className = '', light = false }) => (
  <Pressable onPress={onPress} accessibilityRole="link" className={className}>
    <Text className="font-semibold text-sm" style={{ color: light ? COLORS.sage100 : COLORS.olive600 }}>
      {children} →
    </Text>
  </Pressable>
);