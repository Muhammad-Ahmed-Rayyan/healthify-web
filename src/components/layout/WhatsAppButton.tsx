import React from 'react';
import { Pressable, Platform, Linking, ViewStyle } from 'react-native';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { COLORS } from '../../constants/theme';

const WA_URL = 'https://wa.me/971502626144';

export const WhatsAppButton: React.FC = () => {
  const handlePress = () => {
    if (Platform.OS === 'web') {
      window.open(WA_URL, '_blank', 'noopener,noreferrer');
    } else {
      Linking.openURL(WA_URL);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      accessibilityLabel="Chat with Healthify on WhatsApp"
      accessibilityRole="link"
      style={({ pressed, hovered }: { pressed: boolean; hovered?: boolean }) => ({
        position: Platform.OS === 'web' ? ('fixed' as unknown as ViewStyle['position']) : 'absolute',
        bottom: 24,
        right: 24,
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: COLORS.whatsapp,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        shadowColor: '#000',
        shadowOpacity: hovered ? 0.35 : 0.25,
        shadowRadius: hovered ? 16 : 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 8,
        transform: [{ scale: pressed ? 0.95 : hovered ? 1.05 : 1 }],
      })}
    >
      <WhatsAppIcon size={28} color="#FFFFFF" />
    </Pressable>
  );
};