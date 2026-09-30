import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, ImageStyle, DimensionValue, ImageSourcePropType } from 'react-native';
import { Image, ImageContentFit, ImageContentPosition } from 'expo-image';

export interface CoverImageProps {
  source: ImageSourcePropType | string | number;
  aspectRatio?: number;
  height?: DimensionValue;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  contentPosition?: ImageContentPosition;
  contentFit?: ImageContentFit;
  alt?: string;
  accessibilityLabel?: string;
  decorative?: boolean;
  className?: string;
  style?: StyleProp<ViewStyle>;
  scale?: number;
}

export const CoverImage: React.FC<CoverImageProps> = ({
  source,
  aspectRatio,
  height,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderWidth,
  borderColor,
  contentPosition = 'center',
  contentFit = 'cover',
  alt,
  accessibilityLabel,
  decorative = false,
  className = '',
  style,
  scale = 1,
}) => {
  const containerStyle: ViewStyle = {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    ...(aspectRatio !== undefined ? { aspectRatio } : {}),
    ...(height !== undefined ? { height } : {}),
    ...(borderRadius !== undefined ? { borderRadius } : {}),
    ...(borderTopLeftRadius !== undefined ? { borderTopLeftRadius } : {}),
    ...(borderTopRightRadius !== undefined ? { borderTopRightRadius } : {}),
    ...(borderWidth !== undefined ? { borderWidth } : {}),
    ...(borderColor !== undefined ? { borderColor } : {}),
  };

  const imgStyle: StyleProp<ImageStyle> = [
    StyleSheet.absoluteFill,
    scale !== 1 ? { transform: [{ scale }] } : undefined,
  ];

  return (
    <View
      className={className}
      style={[containerStyle, style]}
      accessibilityElementsHidden={decorative}
      importantForAccessibility={decorative ? 'no-hide-descendants' : 'auto'}
      aria-hidden={decorative ? true : undefined}
    >
      <Image
        source={source}
        style={imgStyle}
        contentFit={contentFit}
        contentPosition={contentPosition}
        alt={decorative ? undefined : (alt || accessibilityLabel)}
        accessibilityLabel={decorative ? undefined : (accessibilityLabel || alt)}
        transition={200}
      />
    </View>
  );
};
