import React from 'react';
import { View, Text } from 'react-native';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CoverImage } from '../ui/CoverImage';
import { IMAGES } from '../../constants/images';
import { SECTION_IDS } from '../../constants/sectionIds';
import { scrollToSection } from '../../utils/scrollToSection';
import { COLORS } from '../../constants/theme';
import { Check } from 'lucide-react-native';

const FEATURES = [
  'Freshly Prepared Daily',
  'Balanced Nutrition',
  'Great Taste',
];

export const About: React.FC = () => {
  return (
    <Section id={SECTION_IDS.ABOUT} bg="white" className="py-16 lg:py-24">
      <Container className="flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Overlapping Images */}
        <View className="flex-1 w-full relative min-h-[360px] sm:min-h-[460px] items-center lg:items-start justify-center">
          {/* Main Large Bowl Image: radius 24px on wrapper, no square background */}
          <View
            className="w-[85%] max-w-[440px]"
            style={{
              borderRadius: 24,
              backgroundColor: 'transparent',
              shadowColor: COLORS.forest900,
              shadowOpacity: 0.10,
              shadowRadius: 20,
              shadowOffset: { width: 0, height: 8 },
              elevation: 4,
            }}
          >
            <CoverImage
              source={IMAGES.aboutBowl}
              aspectRatio={4 / 3}
              borderRadius={24}
              contentPosition="center"
              alt="Healthy quinoa avocado meal bowl"
            />
          </View>

          {/* Overlapping Chef Image: radius 20px, white border 4px, no square background */}
          <View
            className="absolute bottom-0 left-0 w-[45%] max-w-[210px] z-10"
            style={{
              borderRadius: 20,
              backgroundColor: 'transparent',
              shadowColor: COLORS.forest900,
              shadowOpacity: 0.16,
              shadowRadius: 24,
              shadowOffset: { width: 0, height: 8 },
              elevation: 8,
            }}
          >
            <CoverImage
              source={IMAGES.aboutChef}
              aspectRatio={1}
              borderRadius={20}
              borderWidth={4}
              borderColor="#FFFFFF"
              contentPosition="center"
              alt="Chef preparing fresh salad"
            />
          </View>

          {/* Floating Badge */}
          <View className="absolute -bottom-4 right-4 sm:right-10 z-20">
            <Badge
              line1="Nourishing Lives"
              line2="Daily in Dubai"
            />
          </View>
        </View>

        {/* Right Column: Content */}
        <View className="flex-1 w-full max-w-[540px]">
          <Eyebrow>ABOUT HEALTHIFY</Eyebrow>
          <SectionHeading>Your Trusted Healthy Food Partner</SectionHeading>

          <Text className="text-base text-ink-700 leading-relaxed mb-6">
            At Healthify, we believe healthy eating should be convenient, affordable, and enjoyable. Based in Dubai, we prepare fresh, balanced meals using high-quality ingredients to help individuals and families achieve their health goals without sacrificing taste.
          </Text>

          {/* Feature list */}
          <View className="gap-3 mb-8">
            {FEATURES.map((item) => (
              <View key={item} className="flex-row items-center gap-3">
                <View className="w-6 h-6 rounded-full bg-sage-200 items-center justify-center">
                  <Check size={14} color={COLORS.forest800} strokeWidth={2.5} />
                </View>
                <Text className="text-base font-semibold text-forest-900">{item}</Text>
              </View>
            ))}
          </View>

          <Button
            variant="primary"
            onPress={() => scrollToSection(SECTION_IDS.SERVICES)}
            accessibilityLabel="More About Us"
          >
            More About Us
          </Button>
        </View>
      </Container>
    </Section>
  );
};