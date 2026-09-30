import React from 'react';
import { View, Text } from 'react-native';
import { StatItem as StatItemType } from '../../types';
import { COLORS } from '../../constants/theme';
import {
  UtensilsCrossed, Smile, Star, Building2,
} from 'lucide-react-native';

const ICON_MAP: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed size={28} color={COLORS.olive600} />,
  Smile: <Smile size={28} color={COLORS.olive600} />,
  Star: <Star size={28} color={COLORS.olive600} />,
  Building2: <Building2 size={28} color={COLORS.olive600} />,
};

interface Props { stat: StatItemType; }

export const StatItem: React.FC<Props> = ({ stat }) => (
  <View className="flex-1 items-center py-6 px-4">
    <View className="mb-2">{ICON_MAP[stat.iconName] ?? null}</View>
    <Text className="text-3xl font-bold text-forest-900 mb-1" style={{ fontFamily: 'DM_Serif_Display' }}>
      {stat.value}
    </Text>
    <Text className="text-sm text-ink-500 text-center">{stat.label}</Text>
  </View>
);