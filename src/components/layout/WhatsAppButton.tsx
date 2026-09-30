import React from 'react';
import { Pressable, Platform, Linking } from 'react-native';
import { MessageCircle } from 'lucide-react-native';
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
      accessibilityLabel="Chat on WhatsApp"
      accessibilityRole="link"
      style={{
        position: Platform.OS === 'web' ? ('fixed' as any) : 'absolute',
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
        shadowOpacity: 0.25,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 8,
      }}
    >
      <MessageCircle size={26} color="#fff" fill="#fff" />
    </Pressable>
  );
};