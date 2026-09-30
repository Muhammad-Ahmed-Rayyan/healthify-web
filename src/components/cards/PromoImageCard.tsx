import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { Leaf } from 'lucide-react-native';
import { CoverImage } from '../ui/CoverImage';
import { IMAGES } from '../../constants/images';
import { COLORS } from '../../constants/theme';
import { useBreakpoint } from '../../hooks/useBreakpoint';

export const PromoImageCard: React.FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <View
      className="rounded-[20px] overflow-hidden flex-1 min-w-[260px] max-w-[320px] relative shadow-lg"
      style={{
        borderRadius: 20,
        backgroundColor: COLORS.forest900,
        minHeight: isMobile ? undefined : 480,
        ...(isMobile ? { aspectRatio: 3 / 4, width: '100%', maxWidth: 360 } : {}),
        shadowColor: COLORS.forest900,
        shadowOpacity: 0.12,
        shadowRadius: 16,
        elevation: 4,
      }}
    >
      {/* CoverImage fills the ENTIRE card area edge to edge and top to bottom */}
      <CoverImage
        source={IMAGES.plansPromo}
        contentFit="cover"
        contentPosition="top center"
        alt="Invest in a Healthier You"
        style={StyleSheet.absoluteFill}
      />

      {/* Dark gradient only over bottom 45% of image (transparent to forest-900 at ~85% opacity) */}
      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '45%',
        }}
      >
        <Svg width="100%" height="100%">
          <Defs>
            <LinearGradient id="promoCardGradient" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0%" stopColor="#14291F" stopOpacity="0" />
              <Stop offset="35%" stopColor="#14291F" stopOpacity="0.45" />
              <Stop offset="100%" stopColor="#14291F" stopOpacity="0.88" />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#promoCardGradient)" />
        </Svg>
      </View>

      {/* Content directly on the gradient at bottom-left with 24px padding */}
      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 24,
          zIndex: 2,
        }}
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
    </View>
  );
};