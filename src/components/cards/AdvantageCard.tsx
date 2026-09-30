import React from 'react';
import { View, Text } from 'react-native';
import { AdvantageItem } from '../../types';
import { COLORS } from '../../constants/theme';
import { Diamond, Heart, Truck, Leaf } from 'lucide-react-native';

const ICON_MAP: Record<string, React.ReactNode> = {
  Diamond: <Diamond size={32} color={COLORS.olive600} />,
  Heart: <Heart size={32} color={COLORS.olive600} />,
  Truck: <Truck size={32} color={COLORS.olive600} />,
  Leaf: <Leaf size={32} color={COLORS.olive600} />,
};

interface Props { item: AdvantageItem; }

export const AdvantageCard: React.FC<Props> = ({ item }) => (
  <View
    className="bg-white rounded-2xl p-6 items-center flex-1 min-w-[160px] border border-sage-200"
    style={{ shadowColor: COLORS.forest900, shadowOpacity: 0.06, shadowRadius: 12, elevation: 2 }}
  >
    <View className="mb-3">{ICON_MAP[item.iconName] ?? null}</View>
    <Text className="text-sm font-semibold text-forest-900 mb-1 text-center">{item.title}</Text>
    <Text className="text-xs text-ink-500 text-center">{item.caption}</Text>
  </View>
);