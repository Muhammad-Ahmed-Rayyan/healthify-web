import React from 'react';
import { View, Text } from 'react-native';
import { Check } from 'lucide-react-native';
import { PlanItem } from '../../types';
import { Button } from '../ui/Button';
import { formatPrice } from '../../utils/formatPrice';
import { COLORS } from '../../constants/theme';
import { scrollToSection } from '../../utils/scrollToSection';
import { SECTION_IDS } from '../../constants/sectionIds';

interface Props { plan: PlanItem; }

export const PlanCard: React.FC<Props> = ({ plan }) => (
  <View
    className={`rounded-2xl overflow-hidden border flex-1 min-w-[240px] max-w-[320px] ${
      plan.highlighted ? 'border-forest-800' : 'border-sage-200 bg-white'
    }`}
    style={{
      shadowColor: COLORS.forest900,
      shadowOpacity: plan.highlighted ? 0.18 : 0.08,
      shadowRadius: plan.highlighted ? 30 : 12,
      elevation: plan.highlighted ? 8 : 3,
    }}
  >
    {plan.highlighted && plan.badge && (
      <View className="bg-forest-800 py-2 px-4 items-center">
        <Text className="text-white text-xs font-bold tracking-widest uppercase">{plan.badge}</Text>
      </View>
    )}
    <View className={`p-6 flex-1 ${plan.highlighted ? 'bg-cream-50' : ''}`}>
      <Text className="text-lg font-semibold text-forest-900 mb-1" style={{ fontFamily: 'DM_Serif_Display' }}>
        {plan.name}
      </Text>
      <Text className="text-sm text-ink-500 mb-4">{plan.description}</Text>
      <View className="flex-row items-baseline mb-5">
        <Text className="text-3xl font-bold text-forest-900" style={{ fontFamily: 'DM_Serif_Display' }}>
          {formatPrice(plan.price)}
        </Text>
        <Text className="text-sm text-ink-500 ml-1">/ {plan.period}</Text>
      </View>
      <View className="mb-6 flex-1">
        {plan.features.map((feature) => (
          <View key={feature} className="flex-row items-center mb-2">
            <View className="w-5 h-5 rounded-full bg-sage-100 items-center justify-center mr-3">
              <Check size={12} color={COLORS.olive600} />
            </View>
            <Text className="text-sm text-ink-700 flex-1">{feature}</Text>
          </View>
        ))}
      </View>
      <Button
        variant={plan.highlighted ? 'primary' : 'outline'}
        onPress={() => scrollToSection(SECTION_IDS.CONTACT)}
        accessibilityLabel={`Get Started with ${plan.name}`}
      >
        Get Started
      </Button>
    </View>
  </View>
);