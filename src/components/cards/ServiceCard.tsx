import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { ArrowRight } from 'lucide-react-native';
import { CoverImage } from '../ui/CoverImage';
import { IMAGES } from '../../constants/images';
import { COLORS } from '../../constants/theme';

interface Props {
  id: string;
  title: string;
  description: string;
  imageKey: keyof typeof IMAGES;
  onPress?: () => void;
}

export const ServiceCard: React.FC<Props> = ({ title, description, imageKey, onPress }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      accessibilityRole="button"
      className="bg-white rounded-2xl overflow-hidden border border-sage-200 flex-1 min-w-[260px] max-w-[320px]"
      style={({ pressed }) => ({
        shadowColor: COLORS.forest900,
        shadowOpacity: pressed || isHovered ? 0.14 : 0.08,
        shadowRadius: pressed || isHovered ? 20 : 12,
        shadowOffset: { width: 0, height: pressed || isHovered ? 8 : 4 },
        elevation: pressed || isHovered ? 8 : 3,
        transform: [{ translateY: pressed ? -2 : isHovered ? -4 : 0 }],
      })}
    >
      {/* 4/3 Aspect Ratio on Card Top, Top Corners Rounded, Scale 1.03 on hover */}
      <CoverImage
        source={IMAGES[imageKey]}
        aspectRatio={4 / 3}
        borderTopLeftRadius={16}
        borderTopRightRadius={16}
        contentPosition="center"
        alt={title}
        scale={isHovered ? 1.03 : 1}
      />
      <View className="p-5 flex-1 justify-between">
        <View>
          <Text className="text-base font-semibold text-forest-900 mb-2">{title}</Text>
          <Text className="text-sm text-ink-500 leading-relaxed">{description}</Text>
        </View>
        <View className="items-end mt-4">
          <View
            className="w-8 h-8 rounded-full bg-sage-200 items-center justify-center"
            style={isHovered ? { backgroundColor: COLORS.sage100 } : undefined}
          >
            <ArrowRight size={16} color={COLORS.forest800} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};