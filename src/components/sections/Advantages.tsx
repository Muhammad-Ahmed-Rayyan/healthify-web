import React from 'react';
import { View, Text } from 'react-native';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { AdvantageCard } from '../cards/AdvantageCard';
import { ADVANTAGES } from '../../data/advantages';
import { SECTION_IDS } from '../../constants/sectionIds';
import { scrollToSection } from '../../utils/scrollToSection';

export const Advantages: React.FC = () => {
  return (
    <Section id={SECTION_IDS.ADVANTAGES} bg="white" className="py-16 lg:py-24">
      <Container className="flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column (35%) */}
        <View className="w-full lg:w-[35%] max-w-[480px]">
          <Eyebrow>OUR ADVANTAGES</Eyebrow>
          <SectionHeading>Why Choose Healthify</SectionHeading>
          <Text className="text-base text-ink-700 leading-relaxed mb-8">
            More than just meals — we deliver a healthier, happier you with benefits that fit your lifestyle.
          </Text>
          <Button
            variant="primary"
            onPress={() => scrollToSection(SECTION_IDS.PLANS)}
            accessibilityLabel="Discover All Advantages"
          >
            Discover All Advantages
          </Button>
        </View>

        {/* Right Column: 4 Cards (65%) */}
        <View className="w-full lg:w-[65%] flex-row flex-wrap gap-4 sm:gap-6 justify-center">
          {ADVANTAGES.map((adv) => (
            <View key={adv.title} className="w-[calc(50%-12px)] sm:w-[calc(50%-12px)] xl:w-[calc(25%-18px)]">
              <AdvantageCard item={adv} />
            </View>
          ))}
        </View>
      </Container>
    </Section>
  );
};