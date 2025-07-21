import { StyleSheet } from 'react-native';

const fontFamilies = {
  regular: 'System', // You can customize this later
  bold: 'System',
  monospace: 'Menlo',
};

const fontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  md: 18,
  lg: 22,
  xl: 26,
  xxl: 32,
};

const fonts = StyleSheet.create({
  heading: {
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
    fontFamily: fontFamilies.bold,
  },
  subheading: {
    fontSize: fontSizes.lg,
    fontWeight: '600',
    fontFamily: fontFamilies.regular,
  },
  body: {
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.regular,
  },
  small: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamilies.regular,
  },
  monospace: {
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.monospace,
  },
  button: {
    fontSize: fontSizes.md,
    fontWeight: '600',
    fontFamily: fontFamilies.bold,
  },
  display: {
    fontSize: fontSizes.xxl,
    fontWeight: 'bold',
    fontFamily: fontFamilies.bold,
  },
});

export { fonts, fontSizes, fontFamilies };
