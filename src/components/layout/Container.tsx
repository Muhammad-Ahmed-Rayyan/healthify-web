import React from 'react';
import { View } from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => (
  <View
    className={`w-full mx-auto px-4 sm:px-6 ${className}`}
    style={{ maxWidth: 1200, alignSelf: 'center' }}
  >
    {children}
  </View>
);