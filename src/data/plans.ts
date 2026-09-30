import { PlanItem } from '../types';

export const PLANS: PlanItem[] = [
  {
    id: 'essential',
    name: 'Essential Plan',
    description: 'Great for individuals starting their healthy journey.',
    price: 299,
    period: 'month',
    features: [
      'Fresh daily meals',
      'Balanced nutrition',
      'Flexible delivery',
    ],
    highlighted: false,
  },
  {
    id: 'balanced',
    name: 'Balanced Plan',
    description: 'Our best value plan for a healthier lifestyle.',
    price: 499,
    period: 'month',
    features: [
      'Customized meal options',
      'Wide variety of meals',
      'Nutritionist support',
      'Flexible delivery',
    ],
    highlighted: true,
    badge: 'MOST POPULAR ★',
  },
  {
    id: 'performance',
    name: 'Performance Plan',
    description: 'For fitness enthusiasts and active lifestyles.',
    price: 699,
    period: 'month',
    features: [
      'High-protein meals',
      'Performance-focused nutrition',
      'Personalized plans',
      'Priority support',
    ],
    highlighted: false,
  },
];