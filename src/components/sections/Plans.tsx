import React from 'react';
import { View } from 'react-native';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { SectionHeading } from '../ui/SectionHeading';
import { TextLink } from '../ui/TextLink';
import { PlanCard } from '../cards/PlanCard';
import { PromoImageCard } from '../cards/PromoImageCard';
import { PLANS } from '../../data/plans';
import { SECTION_IDS } from '../../constants/sectionIds';
import { scrollToSection } from '../../utils/scrollToSection';

export const Plans: React.FC = () => {
  return (
    <Section id={SECTION_IDS.PLANS} bg="cream" className="py-16 lg:py-24">
      <Container>
        {/* Header Row */}
        <View className="flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <View className="max-w-[600px]">
            <Eyebrow>GROWTH PLANS</Eyebrow>
            <SectionHeading className="mb-0">
              Find the Perfect Plan for You
            </SectionHeading>
          </View>
          <TextLink
            onPress={() => scrollToSection(SECTION_IDS.CONTACT)}
            className="self-start md:self-auto"
          >
            View All Plans
          </TextLink>
        </View>

        {/* 4 Columns (3 Plans + 1 Image Promo Card) */}
        <View className="flex-row flex-wrap gap-6 justify-center items-stretch">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
          <PromoImageCard />
        </View>
      </Container>
    </Section>
  );
};