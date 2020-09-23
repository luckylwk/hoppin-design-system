import { space } from './space';
var fonts = {
  primary: '"Poppins", sans-serif',
  secondary: '"Poppins", sans-serif',
  system: '-apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue'
}; // font-sizes are multiples of 2, 8 if possible, to create a natural rythm, together with space tokens.

var fontSizes = ['.5rem', // 8px
'.625rem', // 10px
'.875rem', // 14px
'1.125rem', // 18px
'1.375rem', // 22px
'1.75rem', // 28px
'2.5rem', // 40px
'3rem', // 48px
'4rem', // 64px
'5rem' // 80px
]; // shortcuts, so we don't have to remember array indices.

fontSizes.body = fontSizes[3];
fontSizes.label = fontSizes[2];
fontSizes.huge = fontSizes[8];
fontSizes.h1 = fontSizes[7];
fontSizes.h2 = fontSizes[6];
fontSizes.h3 = fontSizes[5];
fontSizes.h4 = fontSizes[5];
fontSizes.h5 = fontSizes[4];
fontSizes.h6 = fontSizes[3];
fontSizes.small = fontSizes[2];
var headingSizes = [];
headingSizes.huge = [fontSizes[7], null, fontSizes[8]];
headingSizes.h1 = [fontSizes[6], null, fontSizes[7]];
headingSizes.h2 = [fontSizes[5], null, fontSizes[6]];
headingSizes.h3 = [fontSizes[5], null, fontSizes[6]];
headingSizes.h4 = [fontSizes[4], null, fontSizes[5]];
headingSizes.h5 = [fontSizes[4], null, fontSizes[5]];
headingSizes.h6 = [fontSizes[3], null, fontSizes[3]];
var lineHeights = [1, 1.4, 1.8];
lineHeights.small = lineHeights[0];
lineHeights.base = lineHeights[1];
lineHeights.body = lineHeights[1];
lineHeights.large = lineHeights[2];
var fontWeights = {
  light: 300,
  normal: 300,
  medium: 600,
  bold: 600,
  heavy: 600
}; // headings style attributes, all but color, since color is dependent on host/shadower context

var headings = {
  h1: {
    fontFamily: fonts.primary,
    fontSize: headingSizes.h1,
    letterSpacing: '1px',
    lineHeight: lineHeights.small,
    fontWeight: fontWeights.bold,
    marginTop: space.xlarge,
    marginBottom: space.large
  },
  h2: {
    fontFamily: fonts.primary,
    fontSize: headingSizes.h2,
    letterSpacing: '1px',
    lineHeight: lineHeights.small,
    fontWeight: fontWeights.bold
  },
  h3: {
    fontFamily: fonts.primary,
    fontSize: headingSizes.h3,
    letterSpacing: '1px',
    lineHeight: lineHeights.small,
    fontWeight: fontWeights.bold
  },
  h4: {
    fontFamily: fonts.secondary,
    fontSize: headingSizes.h4,
    lineHeight: lineHeights.base,
    fontWeight: fontWeights.bold
  },
  h5: {
    fontFamily: fonts.secondary,
    fontSize: headingSizes.h5,
    lineHeight: lineHeights.base,
    fontWeight: fontWeights.bold
  },
  h6: {
    fontFamily: fonts.secondary,
    fontSize: headingSizes.h6,
    textTransform: 'uppercase',
    lineHeight: lineHeights.base,
    fontWeight: fontWeights.bold
  }
};
export { fonts, fontSizes, lineHeights, fontWeights, headings };