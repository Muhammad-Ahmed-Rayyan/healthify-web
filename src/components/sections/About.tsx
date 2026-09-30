import React from 'react';
import { View, Text, Image } from 'react-native';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
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
          {/* Main Large Bowl Image */}
          <View className="w-[85%] max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-sage-100">
            <Image
              source={IMAGES.aboutBowl}
              className="w-full h-full"
              resizeMode="cover"
              accessibilityLabel="Healthy quinoa avocado meal bowl"
            />
          </View>

          {/* Overlapping Chef Image */}
          <View className="absolute bottom-0 left-0 w-[45%] max-w-[200px] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-sage-200">
            <Image
              source={IMAGES.aboutChef}
              className="w-full h-full"
              resizeMode="cover"
              accessibilityLabel="Chef preparing fresh salad"
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