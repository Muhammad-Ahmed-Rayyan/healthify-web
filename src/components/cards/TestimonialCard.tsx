import React from 'react';
import { View, Text, Image } from 'react-native';
import { Testimonial } from '../../types';
import { Rating } from '../ui/Rating';
import { IMAGES } from '../../constants/images';
import { COLORS } from '../../constants/theme';

interface Props { testimonial: Testimonial; }

export const TestimonialCard: React.FC<Props> = ({ testimonial }) => (
  <View
    className="bg-white rounded-2xl p-6 border border-sage-200 flex-1 min-w-[260px] max-w-[360px]"
    style={{ shadowColor: COLORS.forest900, shadowOpacity: 0.06, shadowRadius: 12, elevation: 2 }}
  >
    <Text className="text-sm text-ink-700 leading-relaxed mb-5 flex-1">
      &ldquo;{testimonial.quote}&rdquo;
    </Text>
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center">
        <Image
          source={IMAGES[testimonial.avatarKey]}
          style={{ width: 40, height: 40, borderRadius: 20, marginRight: 12 }}
          accessibilityLabel={testimonial.name}
        />
        <View>
          <Text className="text-sm font-semibold text-forest-900">{testimonial.name}</Text>
          <Text className="text-xs text-ink-500">{testimonial.location}</Text>
        </View>
      </View>
      <Rating rating={testimonial.rating} size={14} />
    </View>
  </View>
);