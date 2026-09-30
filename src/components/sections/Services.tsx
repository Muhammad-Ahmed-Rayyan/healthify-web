import React from 'react';
import { View } from 'react-native';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { SectionHeading } from '../ui/SectionHeading';
import { TextLink } from '../ui/TextLink';
import { ServiceCard } from '../cards/ServiceCard';
import { SERVICES } from '../../data/services';
import { SECTION_IDS } from '../../constants/sectionIds';
import { scrollToSection } from '../../utils/scrollToSection';

export const Services: React.FC = () => {
  return (
    <Section id={SECTION_IDS.SERVICES} bg="sage" className="py-16 lg:py-24">
      <Container>
        {/* Header Row */}
        <View className="flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <View className="max-w-[600px]">
            <Eyebrow>OUR SERVICES</Eyebrow>
            <SectionHeading className="mb-0">
              Healthy Meal Plans for Every Lifestyle
            </SectionHeading>
          </View>
          <TextLink
            onPress={() => scrollToSection(SECTION_IDS.PLANS)}
            className="self-start md:self-auto"
          >
            View All Services
          </TextLink>
        </View>

        {/* 4 Cards Grid */}
        <View className="flex-row flex-wrap gap-6 justify-center">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              imageKey={service.imageKey}
              onPress={() => scrollToSection(SECTION_IDS.PLANS)}
            />
          ))}
        </View>
      </Container>
    </Section>
  );
};