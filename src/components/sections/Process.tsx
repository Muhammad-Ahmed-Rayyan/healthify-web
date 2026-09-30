import React from 'react';
import { View, Text } from 'react-native';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { SectionHeading } from '../ui/SectionHeading';
import { TextLink } from '../ui/TextLink';
import { STEPS } from '../../data/steps';
import { SECTION_IDS } from '../../constants/sectionIds';
import { scrollToSection } from '../../utils/scrollToSection';
import { COLORS } from '../../constants/theme';
import { ArrowRight, ClipboardList, ChefHat, Truck } from 'lucide-react-native';

const STEP_ICONS: Record<string, React.ReactNode> = {
  ClipboardList: <ClipboardList size={26} color={COLORS.forest800} />,
  ChefHat: <ChefHat size={26} color={COLORS.forest800} />,
  Truck: <Truck size={26} color={COLORS.forest800} />,
};

export const Process: React.FC = () => {
  return (
    <Section id="process" bg="white" className="py-16 lg:py-24">
      <Container>
        {/* Header Row */}
        <View className="flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <View className="max-w-[600px]">
            <Eyebrow>OUR APPROACH</Eyebrow>
            <SectionHeading className="mb-0">
              Healthy Eating in 3 Simple Steps
            </SectionHeading>
          </View>
          <TextLink
            onPress={() => scrollToSection(SECTION_IDS.PLANS)}
            className="self-start md:self-auto"
          >
            It's Easy to Get Started
          </TextLink>
        </View>

        {/* Steps Row */}
        <View className="flex-col md:flex-row items-center justify-between gap-8">
          {STEPS.map((step, idx) => (
            <React.Fragment key={step.number}>
              <View className="flex-1 w-full max-w-[320px] items-center text-center">
                {/* Number & Icon Badge */}
                <View className="relative mb-5">
                  <View className="w-16 h-16 rounded-full bg-sage-100 items-center justify-center border-2 border-sage-200">
                    {STEP_ICONS[step.iconName]}
                  </View>
                  <View className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-forest-800 items-center justify-center">
                    <Text
                      className="text-white text-xs font-bold"
                      style={{ fontFamily: 'DM_Serif_Display' }}
                    >
                      {step.number}
                    </Text>
                  </View>
                </View>

                {/* Title & Caption */}
                <Text className="text-lg font-semibold text-forest-900 mb-2 text-center">
                  {step.title}
                </Text>
                <Text className="text-sm text-ink-500 leading-relaxed text-center">
                  {step.caption}
                </Text>
              </View>

              {/* Arrow divider on desktop */}
              {idx < STEPS.length - 1 && (
                <View className="hidden md:flex items-center justify-center">
                  <ArrowRight size={24} color={COLORS.sage200} />
                </View>
              )}
            </React.Fragment>
          ))}
        </View>
      </Container>
    </Section>
  );
};