import React from 'react';
import { View, Text, Image } from 'react-native';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { IMAGES } from '../../constants/images';
import { SECTION_IDS } from '../../constants/sectionIds';
import { scrollToSection } from '../../utils/scrollToSection';
import { COLORS } from '../../constants/theme';
import { Sparkles, Award, Truck } from 'lucide-react-native';

export const Hero: React.FC = () => {
  return (
    <Section id={SECTION_IDS.HOME} bg="cream" className="pt-8 md:pt-16 pb-16 overflow-hidden">
      <Container className="flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Text */}
        <View className="flex-1 w-full max-w-[560px]">
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
          <View className="flex-row flex-wrap gap-4 mb-10">
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

          {/* Benefit Indicators */}
          <View className="flex-row flex-wrap items-center gap-6 pt-4 border-t border-sage-200">
            <View className="flex-row items-center gap-2">
              <Sparkles size={18} color={COLORS.olive600} />
              <Text className="text-xs font-semibold text-ink-700 uppercase tracking-wider">
                Fresh Ingredients
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Award size={18} color={COLORS.olive600} />
              <Text className="text-xs font-semibold text-ink-700 uppercase tracking-wider">
                Nutritionist Approved
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Truck size={18} color={COLORS.olive600} />
              <Text className="text-xs font-semibold text-ink-700 uppercase tracking-wider">
                Delivered to Your Door
              </Text>
            </View>
          </View>
        </View>

        {/* Right Column: Hero Bowl Image & Floating Badges */}
        <View className="flex-1 w-full relative items-center justify-center min-h-[340px] sm:min-h-[440px]">
          {/* Handwritten accent */}
          <View className="absolute top-2 left-4 z-10 -rotate-6">
            <Text
              style={{ fontFamily: 'Caveat', color: COLORS.olive600, fontSize: 24 }}
            >
              Good Food Brightens You ↗
            </Text>
          </View>

          {/* Main Hero Bowl */}
          <View className="w-full max-w-[480px] aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl bg-sage-200">
            <Image
              source={IMAGES.heroBowl}
              className="w-full h-full"
              resizeMode="cover"
              accessibilityLabel="Fresh nutritious bowl with grilled chicken, avocado, greens"
            />
          </View>

          {/* Floating Badge */}
          <View className="absolute bottom-4 right-2 sm:right-6 z-20">
            <Badge
              line1="Nutritious Meals"
              line2="A Healthier Tomorrow"
            />
          </View>
        </View>
      </Container>
    </Section>
  );
};