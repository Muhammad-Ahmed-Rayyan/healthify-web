import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect, Path } from 'react-native-svg';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CoverImage } from '../ui/CoverImage';
import { IMAGES } from '../../constants/images';
import { SECTION_IDS } from '../../constants/sectionIds';
import { scrollToSection } from '../../utils/scrollToSection';
import { COLORS } from '../../constants/theme';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { Sparkles, Award, Truck } from 'lucide-react-native';

export const Hero: React.FC = () => {
  const { isMobile, isDesktop } = useBreakpoint();

  return (
    <View
      nativeID={SECTION_IDS.HOME}
      accessible
      accessibilityLabel="Healthify Home Hero"
      className="w-full relative overflow-hidden"
      style={{
        backgroundColor: COLORS.cream50,
        minHeight: isDesktop ? 620 : 540,
      }}
    >
      {/* 1. Full-bleed background image covering entire hero section */}
      <View style={StyleSheet.absoluteFill}>
        <CoverImage
          source={IMAGES.heroBowl}
          contentFit="cover"
          contentPosition={isMobile ? 'bottom right' : 'right center'}
          decorative={true}
          style={StyleSheet.absoluteFill}
        />
      </View>

      {/* 2. Gradient overlay on top of image so text is always readable */}
      <View pointerEvents="none" style={StyleSheet.absoluteFill}>
        <Svg width="100%" height="100%">
          <Defs>
            {isMobile ? (
              // Mobile: vertical gradient from cream at top fading down to transparent
              <LinearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0%" stopColor="#FAFAF5" stopOpacity="0.98" />
                <Stop offset="40%" stopColor="#FAFAF5" stopOpacity="0.94" />
                <Stop offset="65%" stopColor="#FAFAF5" stopOpacity="0.65" />
                <Stop offset="80%" stopColor="#FAFAF5" stopOpacity="0.20" />
                <Stop offset="100%" stopColor="#FAFAF5" stopOpacity="0" />
              </LinearGradient>
            ) : (
              // Desktop: horizontal gradient from left: cream-50 at ~95% fading to transparent by ~55%
              <LinearGradient id="heroGradient" x1="0" y1="0" x2="1" y2="0">
                <Stop offset="0%" stopColor="#FAFAF5" stopOpacity="0.96" />
                <Stop offset="35%" stopColor="#FAFAF5" stopOpacity="0.92" />
                <Stop offset="50%" stopColor="#FAFAF5" stopOpacity="0.60" />
                <Stop offset="58%" stopColor="#FAFAF5" stopOpacity="0.15" />
                <Stop offset="70%" stopColor="#FAFAF5" stopOpacity="0" />
              </LinearGradient>
            )}
          </Defs>
          <Rect width="100%" height="100%" fill="url(#heroGradient)" />
        </Svg>
      </View>

      {/* 3. Desktop Pill & Curved Arrow in upper-middle area (top: 20%, left: 50%, rotated -4deg) */}
      {!isMobile && (
        <View
          pointerEvents="none"
          className="hidden md:flex absolute flex-row items-center z-20"
          style={{
            top: '20%',
            left: '50%',
            transform: [{ rotate: '-4deg' }],
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: 999,
              paddingHorizontal: 16,
              paddingVertical: 8,
              shadowColor: '#14291F',
              shadowOpacity: 0.12,
              shadowRadius: 12,
              shadowOffset: { width: 0, height: 4 },
              elevation: 4,
            }}
          >
            <Text
              style={{
                fontFamily: 'Caveat',
                color: COLORS.forest800,
                fontSize: 23,
                lineHeight: 26,
              }}
            >
              Good Food Brightens You
            </Text>
          </View>

          {/* Curved arrow pointing down and to the right toward the bowl */}
          <View style={{ marginLeft: 8, marginTop: 10 }}>
            <Svg width={36} height={36} viewBox="0 0 38 38" fill="none">
              <Path
                d="M6 10 C 14 6, 26 12, 30 28"
                stroke={COLORS.olive600}
                strokeWidth={2.8}
                strokeLinecap="round"
              />
              <Path
                d="M21 27 L 30 28 L 31 19"
                stroke={COLORS.olive600}
                strokeWidth={2.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
        </View>
      )}

      {/* 4. Hero Content inside 1200px Container */}
      <View
        className="w-full justify-center relative z-10 py-12 md:py-16 lg:py-20"
        style={{ minHeight: isDesktop ? 620 : 540 }}
      >
        <Container className="relative">
          {/* Left half: Headline, sub-headline, paragraph, dual buttons, benefit row */}
          <View className="w-full lg:w-[54%] max-w-[580px]">
            {/* Mobile Pill above headline */}
            {isMobile && (
              <View className="flex-row items-center mb-4 self-start">
                <View
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: 999,
                    paddingHorizontal: 14,
                    paddingVertical: 6,
                    shadowColor: '#14291F',
                    shadowOpacity: 0.10,
                    shadowRadius: 8,
                    elevation: 3,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Caveat',
                      color: COLORS.forest800,
                      fontSize: 20,
                      lineHeight: 22,
                    }}
                  >
                    Good Food Brightens You
                  </Text>
                </View>
                <View style={{ marginLeft: 6 }}>
                  <Svg width={24} height={24} viewBox="0 0 38 38" fill="none">
                    <Path
                      d="M6 10 C 14 6, 26 12, 30 28"
                      stroke={COLORS.olive600}
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                    <Path
                      d="M21 27 L 30 28 L 31 19"
                      stroke={COLORS.olive600}
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </View>
              </View>
            )}

            <Text
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              style={{ fontFamily: 'DM_Serif_Display', color: COLORS.forest800 }}
              accessibilityRole="header"
              aria-level={1}
            >
              Healthy Meals{'\n'}
              <Text style={{ color: COLORS.olive600 }}>Happier Lives</Text>
            </Text>

            <Text className="text-lg sm:text-xl font-semibold text-forest-900 mb-3">
              Fresh. Nutritious. Delivered to You.
            </Text>

            <Text className="text-base text-ink-700 leading-relaxed mb-8">
              At Healthify, we make healthy eating simple and enjoyable with chef-prepared meals, customized plans and a commitment to your wellness goals.
            </Text>

            {/* Action Buttons */}
            <View className="flex-row flex-wrap gap-4 mb-8">
              <Button
                variant="primary"
                onPress={() => scrollToSection(SECTION_IDS.PLANS)}
                accessibilityLabel="Explore Meal Plans"
              >
                Explore Meal Plans
              </Button>
              <Button
                variant="outline"
                onPress={() => scrollToSection(SECTION_IDS.ABOUT)}
                accessibilityLabel="Learn More"
              >
                Learn More
              </Button>
            </View>

            {/* Three benefit indicators in a single row on desktop, wrap on mobile */}
            <View className="flex-row flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 lg:gap-5 pt-4 border-t border-sage-200">
              <View className="flex-row items-center gap-1.5 flex-shrink-0">
                <Sparkles size={16} color={COLORS.olive600} />
                <Text className="text-[11px] sm:text-xs font-semibold text-ink-700 uppercase tracking-wider">
                  Fresh Ingredients
                </Text>
              </View>
              <View className="flex-row items-center gap-1.5 flex-shrink-0">
                <Award size={16} color={COLORS.olive600} />
                <Text className="text-[11px] sm:text-xs font-semibold text-ink-700 uppercase tracking-wider">
                  Nutritionist Approved
                </Text>
              </View>
              <View className="flex-row items-center gap-1.5 flex-shrink-0">
                <Truck size={16} color={COLORS.olive600} />
                <Text className="text-[11px] sm:text-xs font-semibold text-ink-700 uppercase tracking-wider">
                  Delivered to Your Door
                </Text>
              </View>
            </View>
          </View>

          {/* 5. Floating Badge near bottom right inside container */}
          <View
            pointerEvents="box-none"
            className="hidden sm:flex absolute bottom-4 lg:bottom-8 right-0 lg:right-4 z-20"
          >
            <Badge
              line1="Nutritious Meals"
              line2="A Healthier Tomorrow"
            />
          </View>
        </Container>
      </View>
    </View>
  );
};