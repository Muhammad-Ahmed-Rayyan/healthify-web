import React from 'react';
import { View, Text } from 'react-native';
import { Leaf } from 'lucide-react-native';
import { COLORS } from '../../constants/theme';

interface BadgeProps {
  line1: string;
  line2: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ line1, line2, className = '' }) => (
  <View
    className={`bg-white rounded-2xl px-4 py-3 flex-row items-center shadow-card ${className}`}
    style={{ shadowColor: COLORS.forest900, shadowOpacity: 0.10, shadowRadius: 16, elevation: 4 }}
  >
    <View className="w-10 h-10 rounded-full bg-sage-100 items-center justify-center mr-3">
      <Leaf size={18} color={COLORS.olive600} />
    </View>
    <View>
      <Text className="text-sm font-semibold text-forest-900">{line1}</Text>
      <Text className="text-xs text-ink-500">{line2}</Text>
    </View>
  </View>
);