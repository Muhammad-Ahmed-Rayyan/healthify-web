import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import { CoverImage } from '../ui/CoverImage';
import { IMAGES } from '../../constants/images';
import { SECTION_IDS } from '../../constants/sectionIds';
import { scrollToSection } from '../../utils/scrollToSection';
import { COLORS } from '../../constants/theme';

export const CtaBanner: React.FC = () => {
  return (
    <View
      className="w-full overflow-hidden relative"
      style={{ backgroundColor: COLORS.forest800 }}
    >
      {/* Background image filling banner with contentFit="cover" and contentPosition="center" */}
      <View style={StyleSheet.absoluteFill}>
        <CoverImage
          source={IMAGES.ctaBg}
          contentFit="cover"
          contentPosition="center"
          decorative={true}
          style={StyleSheet.absoluteFill}
        />
      </View>

      {/* Dark forest-green overlay on top */}
      <View
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: 'rgba(31, 58, 43, 0.88)' },
        ]}
      />

      {/* Banner Content */}
      <View className="py-16 sm:py-20 lg:py-24 relative z-10">
        <Container className="flex-col lg:flex-row items-center justify-between gap-8">
          <View className="max-w-[640px] text-center lg:text-left items-center lg:items-start">
            <Eyebrow light>READY TO START?</Eyebrow>
            <Text
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight text-center lg:text-left"
              style={{ fontFamily: 'DM_Serif_Display' }}
              accessibilityRole="header"
              aria-level={2}
            >
              Transform Your Health,{'\n'}One Meal At A Time
            </Text>
            <Text className="text-base text-sage-100 opacity-90 leading-relaxed text-center lg:text-left">
              Fresh. Nutritious. Convenient. Join thousands of happy customers in Dubai today.
            </Text>
          </View>

          <View className="w-full sm:w-auto items-center">
            <Button
              variant="onDark"
              onPress={() => scrollToSection(SECTION_IDS.PLANS)}
              accessibilityLabel="Get Started Today"
              className="w-full sm:w-auto px-8 py-4"
            >
              Get Started Today
            </Button>
          </View>
        </Container>
      </View>
    </View>
  );
};