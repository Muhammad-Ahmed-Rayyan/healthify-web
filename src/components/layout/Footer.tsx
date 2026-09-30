import React from 'react';
import { View, Text, Pressable, Platform, Linking } from 'react-native';
import Svg, { Path, Rect, Line, Polygon } from 'react-native-svg';
import { Container } from './Container';
import { FOOTER_COLUMNS, SOCIAL_LINKS } from '../../data/footer';
import { scrollToSection } from '../../utils/scrollToSection';
import { COLORS } from '../../constants/theme';

const FacebookIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={COLORS.sage200} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <Path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </Svg>
);

const TwitterIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={COLORS.sage200} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <Path d="M4 4l11.7 16H20L8.3 4z" />
    <Path d="M4 20l6.8-9.3" />
    <Path d="M13.2 9.3L20 4" />
  </Svg>
);

const InstagramIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={COLORS.sage200} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <Rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <Path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <Line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </Svg>
);

const YoutubeIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={COLORS.sage200} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <Path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <Polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill={COLORS.sage200} />
  </Svg>
);

const SOCIAL_ICON_MAP: Record<string, React.ReactNode> = {
  Facebook: <FacebookIcon />,
  Twitter: <TwitterIcon />,
  Instagram: <InstagramIcon />,
  Youtube: <YoutubeIcon />,
};

export const Footer: React.FC = () => {
  const handleLink = (link: { sectionId?: string; href?: string }) => {
    if (link.sectionId) {
      scrollToSection(link.sectionId);
    } else if (link.href) {
      if (Platform.OS === 'web') {
        window.open(link.href, '_self');
      } else {
        Linking.openURL(link.href);
      }
    }
  };

  return (
    <View
      nativeID="contact"
      role="contentinfo"
      style={{ backgroundColor: COLORS.forest900 }}
      className="pt-16 pb-0"
    >
      <Container>
        <View className="flex-row flex-wrap gap-8 pb-12">
          {/* Brand column */}
          <View className="min-w-[200px] flex-1">
            <View className="mb-4">
              <Text style={{ fontFamily: 'Aref_Ruqaa', fontSize: 18, color: COLORS.white, lineHeight: 22 }}>صحتي</Text>
              <Text style={{ fontFamily: 'Inter', fontSize: 10, fontWeight: '700', letterSpacing: 3, color: COLORS.sage100 }}>HEALTHIFY</Text>
            </View>
            <Text className="text-sm leading-relaxed mb-6" style={{ color: COLORS.ink500 }}>
              At Healthify, We Believe Healthy Eating Should Be Convenient, Affordable, And Enjoyable.
            </Text>
            <View className="flex-row gap-3">
              {SOCIAL_LINKS.map((s) => (
                <Pressable
                  key={s.iconName}
                  onPress={() => {
                    if (Platform.OS === 'web') window.open(s.url, '_blank', 'noopener,noreferrer');
                    else Linking.openURL(s.url);
                  }}
                  accessibilityLabel={s.label}
                  className="w-9 h-9 rounded-full border border-ink-700 items-center justify-center"
                >
                  {SOCIAL_ICON_MAP[s.iconName]}
                </Pressable>
              ))}
            </View>
          </View>

          {/* Data columns */}
          {FOOTER_COLUMNS.map((col) => (
            <View key={col.heading} className="min-w-[160px] flex-1">
              <Text className="text-sm font-semibold mb-4" style={{ color: COLORS.white }}>
                {col.heading}
              </Text>
              {col.links.map((link) => (
                <Pressable
                  key={link.label}
                  onPress={() => handleLink(link)}
                  className="mb-2"
                  accessibilityRole={link.sectionId || link.href ? 'link' : 'text'}
                >
                  <Text className="text-sm" style={{ color: COLORS.ink500 }}>
                    {link.label}
                  </Text>
                </Pressable>
              ))}
            </View>
          ))}
        </View>

        {/* Bottom bar */}
        <View className="border-t border-forest-800 py-5 flex-row flex-wrap items-center justify-between gap-3">
          <Text className="text-xs" style={{ color: COLORS.ink500 }}>
            Copyright © 2026 Healthify. All Rights Reserved.
          </Text>
          <View className="flex-row gap-4">
            <Text className="text-xs" style={{ color: COLORS.ink500 }}>Privacy Policy</Text>
            <Text className="text-xs" style={{ color: COLORS.ink500 }}>Terms of Service</Text>
          </View>
        </View>
      </Container>
    </View>
  );
};