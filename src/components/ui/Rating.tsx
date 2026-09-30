import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../../constants/theme';

interface RatingProps {
  rating: number;
  size?: number;
}

export const Rating: React.FC<RatingProps> = ({ rating, size = 16 }) => (
  <View className="flex-row">
    {Array.from({ length: 5 }).map((_, i) => (
      <Text key={i} style={{ fontSize: size, color: i < rating ? COLORS.star500 : COLORS.sage200 }}>
        ★
      </Text>
    ))}
  </View>
);