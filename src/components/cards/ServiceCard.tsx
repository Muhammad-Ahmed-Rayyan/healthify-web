import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { ArrowRight } from 'lucide-react-native';
import { IMAGES } from '../../constants/images';
import { COLORS } from '../../constants/theme';

interface Props {
  id: string;
  title: string;
  description: string;
  imageKey: keyof typeof IMAGES;
  onPress?: () => void;
}

export const ServiceCard: React.FC<Props> = ({ title, description, imageKey, onPress }) => (
  <Pressable
    onPress={onPress}
    accessibilityRole="button"
    className="bg-white rounded-2xl overflow-hidden border border-sage-200 flex-1 min-w-[260px] max-w-[320px]"
    style={({ pressed }) => ({
      shadowColor: COLORS.forest900,
      shadowOpacity: pressed ? 0.14 : 0.08,
      shadowRadius: pressed ? 20 : 12,
      shadowOffset: { width: 0, height: pressed ? 8 : 4 },
      elevation: pressed ? 8 : 3,
      transform: [{ translateY: pressed ? -2 : 0 }],
    })}
  >
    <Image
      source={IMAGES[imageKey]}
      className="w-full"
      style={{ height: 180 }}
      resizeMode="cover"
      accessibilityLabel={title}
    />
    <View className="p-5 flex-1">
      <Text className="text-base font-semibold text-forest-900 mb-2">{title}</Text>
      <Text className="text-sm text-ink-500 flex-1">{description}</Text>
      <View className="items-end mt-4">
        <View className="w-8 h-8 rounded-full bg-sage-200 items-center justify-center">
          <ArrowRight size={16} color={COLORS.forest800} />
        </View>
      </View>
    </View>
  </Pressable>
);