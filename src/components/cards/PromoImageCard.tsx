import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { Leaf } from 'lucide-react-native';
import { IMAGES } from '../../constants/images';
import { COLORS } from '../../constants/theme';

export const PromoImageCard: React.FC = () => (
  <View className="rounded-2xl overflow-hidden flex-1 min-w-[240px] min-h-[300px]">
    <ImageBackground
      source={IMAGES.plansPromo}
      resizeMode="cover"
      style={{ flex: 1, minHeight: 320 }}
      accessibilityLabel="Invest in a Healthier You"
    >
      <View
        style={{ flex: 1, backgroundColor: 'rgba(20,41,31,0.55)' }}
        className="p-6 justify-end"
      >
        <View className="w-10 h-10 rounded-full bg-sage-100 items-center justify-center mb-3">
          <Leaf size={20} color={COLORS.olive600} />
        </View>
        <Text
          className="text-white text-2xl font-bold leading-snug"
          style={{ fontFamily: 'DM_Serif_Display' }}
        >
          Invest in a Healthier You
        </Text>
      </View>
    </ImageBackground>
  </View>
);