import React from 'react';
import { View } from 'react-native';
import { Container } from '../layout/Container';
import { StatItem } from '../cards/StatItem';
import { STATS } from '../../data/stats';
import { COLORS } from '../../constants/theme';

export const Stats: React.FC = () => {
  return (
    <View
      style={{ backgroundColor: COLORS.sage100 }}
      className="py-8 sm:py-10 border-y border-sage-200"
    >
      <Container>
        <View className="flex-row flex-wrap justify-between items-center">
          {STATS.map((stat, idx) => (
            <React.Fragment key={stat.label}>
              <View className="w-1/2 md:w-1/4">
                <StatItem stat={stat} />
              </View>
              {idx < STATS.length - 1 && (
                <View className="hidden md:block w-[1px] h-12 bg-sage-200" />
              )}
            </React.Fragment>
          ))}
        </View>
      </Container>
    </View>
  );
};