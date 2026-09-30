import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ArrowRight } from 'lucide-react-native';
import { COLORS } from '../../constants/theme';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'onDark';
  children: React.ReactNode;
  onPress?: () => void;
  accessibilityLabel?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onPress,
  accessibilityLabel,
  className = '',
}) => {
  const base =
    'flex-row items-center justify-center rounded-full px-6 py-3 min-h-[44px]';
  const variantClass =
    variant === 'primary'
      ? 'bg-forest-800'
      : variant === 'outline'
      ? 'border border-forest-800 bg-transparent'
      : 'bg-white';

  const textColor =
    variant === 'primary'
      ? COLORS.white
      : variant === 'outline'
      ? COLORS.forest800
      : COLORS.forest900;

  const iconColor =
    variant === 'primary' ? COLORS.white : COLORS.forest800;

  return (
    <Pressable
      onPress={onPress}
      accessibilityLabel={accessibilityLabel ?? (typeof children === 'string' ? children : undefined)}
      accessibilityRole="button"
      className={`${base} ${variantClass} ${className}`}
      style={({ pressed }) => pressed ? { opacity: 0.85, transform: [{ scale: 0.98 }] } : {}}
    >
      <Text
        className="font-semibold text-sm mr-2"
        style={{ color: textColor }}
      >
        {children}
      </Text>
      {variant !== 'outline' && (
        <ArrowRight size={16} color={iconColor} />
      )}
    </Pressable>
  );
};