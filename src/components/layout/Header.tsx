import React, { useState, useCallback } from 'react';
import { View, Text, Pressable, Platform } from 'react-native';
import { Menu, X } from 'lucide-react-native';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';
import { NAV_ITEMS } from '../../data/nav';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { scrollToSection } from '../../utils/scrollToSection';
import { SECTION_IDS } from '../../constants/sectionIds';
import { COLORS } from '../../constants/theme';

const SECTION_ID_LIST = Object.values(SECTION_IDS);

export const Header: React.FC = () => {
  const { isDesktop } = useBreakpoint();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_ID_LIST);

  const handleNavPress = useCallback((sectionId: string) => {
    setMenuOpen(false);
    scrollToSection(sectionId);
  }, []);

  const handleGetStarted = useCallback(() => {
    setMenuOpen(false);
    scrollToSection(SECTION_IDS.PLANS);
  }, []);

  return (
    <>
      <View
        role="banner"
        className="w-full bg-white border-b border-sage-200 z-50"
        style={{
          position: Platform.OS === 'web' ? ('sticky' as any) : 'relative',
          top: 0,
          height: 64,
          justifyContent: 'center',
          shadowColor: COLORS.forest900,
          shadowOpacity: 0.06,
          shadowRadius: 8,
          elevation: 4,
        }}
      >
        <Container className="flex-row items-center justify-between">
          {/* Logo */}
          <Pressable onPress={() => scrollToSection(SECTION_IDS.HOME)} accessibilityRole="link">
            <View>
              <Text style={{ fontFamily: 'Aref_Ruqaa', fontSize: 18, color: COLORS.forest800, lineHeight: 22 }}>
                صحتي
              </Text>
              <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '700', letterSpacing: 3, color: COLORS.forest900 }}>
                HEALTHIFY
              </Text>
            </View>
          </Pressable>

          {/* Desktop Nav */}
          {isDesktop ? (
            <View className="flex-row items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <Pressable
                  key={item.sectionId}
                  onPress={() => handleNavPress(item.sectionId)}
                  accessibilityRole="link"
                >
                  <Text
                    className="text-sm font-medium"
                    style={{
                      color: activeSection === item.sectionId ? COLORS.olive600 : COLORS.ink700,
                      textDecorationLine: activeSection === item.sectionId ? 'underline' : 'none',
                    }}
                  >
                    {item.label}
                  </Text>
                </Pressable>
              ))}
            </View>
          ) : null}

          {/* Right: Get Started or Hamburger */}
          <View className="flex-row items-center gap-3">
            {isDesktop ? (
              <Button variant="primary" onPress={handleGetStarted}>
                Get Started
              </Button>
            ) : (
              <Pressable
                onPress={() => setMenuOpen((v) => !v)}
                accessibilityLabel={menuOpen ? 'Close menu' : 'Open menu'}
                accessibilityRole="button"
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <X size={24} color={COLORS.forest900} />
                ) : (
                  <Menu size={24} color={COLORS.forest900} />
                )}
              </Pressable>
            )}
          </View>
        </Container>
      </View>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavPress={handleNavPress}
        onGetStarted={handleGetStarted}
        activeSection={activeSection}
      />
    </>
  );
};