import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { FAQS } from '../../data/faqs';
import { SECTION_IDS } from '../../constants/sectionIds';
import { scrollToSection } from '../../utils/scrollToSection';
import { COLORS } from '../../constants/theme';
import { Plus, Minus } from 'lucide-react-native';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Section id={SECTION_IDS.FAQ} bg="sage" className="py-16 lg:py-24">
      <Container className="flex-col lg:flex-row justify-between gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Context */}
        <View className="w-full lg:w-[40%] max-w-[480px]">
          <Eyebrow>FREQUENTLY ASKED QUESTIONS</Eyebrow>
          <SectionHeading>
            Have Questions?{'\n'}We've Got Answers.
          </SectionHeading>
          <Text className="text-base text-ink-700 leading-relaxed mb-8">
            Find quick answers to common questions about our meal plans, delivery, and more.
          </Text>
          <Button
            variant="primary"
            onPress={() => scrollToSection(SECTION_IDS.CONTACT)}
            accessibilityLabel="View All FAQs"
          >
            View All FAQs
          </Button>
        </View>

        {/* Right Column: Accordion Items */}
        <View className="w-full lg:w-[58%] gap-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <View
                key={faq.id}
                className="bg-white rounded-2xl border border-sage-200 overflow-hidden"
                style={{
                  shadowColor: COLORS.forest900,
                  shadowOpacity: 0.04,
                  shadowRadius: 8,
                  elevation: 1,
                }}
              >
                <Pressable
                  onPress={() => toggleItem(faq.id)}
                  accessibilityRole="button"
                  accessibilityState={{ expanded: isOpen }}
                  aria-expanded={isOpen}
                  className="p-6 flex-row items-center justify-between gap-4"
                >
                  <Text className="text-base font-semibold text-forest-900 flex-1">
                    {faq.question}
                  </Text>
                  <View className="w-8 h-8 rounded-full bg-sage-100 items-center justify-center">
                    {isOpen ? (
                      <Minus size={16} color={COLORS.forest800} />
                    ) : (
                      <Plus size={16} color={COLORS.forest800} />
                    )}
                  </View>
                </Pressable>

                {isOpen && (
                  <View className="px-6 pb-6 pt-0 border-t border-sage-100">
                    <Text className="text-sm text-ink-700 leading-relaxed mt-3">
                      {faq.answer}
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </Container>
    </Section>
  );
};