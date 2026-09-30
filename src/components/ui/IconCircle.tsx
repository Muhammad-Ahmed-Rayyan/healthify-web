import React from 'react';
import { View } from 'react-native';

interface IconCircleProps {
  children: React.ReactNode;
  size?: number;
  className?: string;
}

export const IconCircle: React.FC<IconCircleProps> = ({ children, size = 48, className = '' }) => (
  <View
    className={`items-center justify-center rounded-full bg-sage-200 ${className}`}
    style={{ width: size, height: size }}
  >
    {children}
  </View>
);