import React, { useEffect } from 'react';
import { View, Text, Pressable, Platform, ViewStyle } from 'react-native';
import { NAV_ITEMS } from '../../data/nav';
import { Button } from '../ui/Button';
import { COLORS } from '../../constants/theme';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onNavPress: (sectionId: string) => void;
  onGetStarted: () => void;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  open,
  onClose,
  onNavPress,
  onGetStarted,
  activeSection,
}) => {
  // Close on Escape key (web)
  useEffect(() => {
    if (Platform.OS !== 'web' || !open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  const fixedPosition = (Platform.OS === 'web' ? 'fixed' : 'absolute') as unknown as ViewStyle['position'];

  return (
    <>
      {/* Backdrop */}
      <Pressable
        onPress={onClose}
        style={{
          position: fixedPosition,
          top: 64,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 40,
        }}
        accessibilityLabel="Close menu"
      />
      {/* Panel */}
      <View
        role="navigation"
        aria-label="Mobile Navigation"
        className="bg-white border-b border-sage-200 z-50 w-full"
        style={{
          position: fixedPosition,
          top: 64,
          left: 0,
          right: 0,
          zIndex: 50,
          shadowColor: COLORS.forest900,
          shadowOpacity: 0.12,
          shadowRadius: 16,
          elevation: 8,
        }}
        aria-expanded={open}
      >
        <View className="px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <Pressable
              key={item.sectionId}
              onPress={() => onNavPress(item.sectionId)}
              accessibilityRole="link"
              className="py-3 border-b border-sage-100"
            >
              <Text
                className="text-base font-medium"
                style={{ color: activeSection === item.sectionId ? COLORS.olive600 : COLORS.ink700 }}
              >
                {item.label}
              </Text>
            </Pressable>
          ))}
          <View className="mt-4">
            <Button variant="primary" onPress={onGetStarted}>
              Get Started
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};