import React from 'react';
import { View } from 'react-native';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { SectionHeading } from '../ui/SectionHeading';
import { TextLink } from '../ui/TextLink';
import { TestimonialCard } from '../cards/TestimonialCard';
import { TESTIMONIALS } from '../../data/testimonials';
import { SECTION_IDS } from '../../constants/sectionIds';
import { scrollToSection } from '../../utils/scrollToSection';

export const Testimonials: React.FC = () => {
  return (
    <Section id={SECTION_IDS.TESTIMONIALS} bg="cream" className="py-16 lg:py-24">
      <Container>
        {/* Header Row */}
        <View className="flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <View className="max-w-[600px]">
            <Eyebrow>CUSTOMER STORIES</Eyebrow>
            <SectionHeading className="mb-0">
              What Our Customers Say
            </SectionHeading>
          </View>
          <TextLink
            onPress={() => scrollToSection(SECTION_IDS.CONTACT)}
            className="self-start md:self-auto"
          >
            View More Reviews
          </TextLink>
        </View>

        {/* 3 Cards Row */}
        <View className="flex-row flex-wrap gap-6 justify-center">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </View>
      </Container>
    </Section>
  );
};