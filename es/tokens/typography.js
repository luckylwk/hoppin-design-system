import { colors } from './colors';
import { space } from './space';

var fonts = {
  primary: 'Pluto, sans-serif',
  secondary: '"Nunito Sans", sans-serif',
  system: '-apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue'
};
// font-sizes are multiples of 2, 8 if possible, to create a natural rythm, together with space tokens.
var fontSizes = ['.5rem', // 8px
'.625rem', // 10px
'.875rem', // 14px
'1em', // 16px
'1.25rem', // 20px
'1.75rem', // 28px
'2.5rem', // 40px
'3em', // 48px
'4em', // 64px
'5rem'];

// shortcuts, so we don't have to remember array indices.
fontSizes.body = fontSizes[3];
fontSizes.huge = [fontSizes[7], null, fontSizes[8]];
fontSizes.h1 = [fontSizes[6], null, fontSizes[7]];
fontSizes.h2 = [fontSizes[5], null, fontSizes[6]];
fontSizes.h3 = [fontSizes[4], null, fontSizes[5]];
fontSizes.h4 = [fontSizes[3], null, fontSizes[5]];
fontSizes.h5 = [fontSizes[3], null, fontSizes[4]];
fontSizes.h6 = [fontSizes[3], null, fontSizes[3]];
fontSizes.label = [fontSizes[2], null, fontSizes[2]];

var lineHeights = [1, 1.4, 1.8];
lineHeights.small = lineHeights[0];
lineHeights.base = lineHeights[1];
lineHeights.body = lineHeights[1];
lineHeights.large = lineHeights[2];

var fontWeights = {
  normal: 400,
  bold: 600
};

// headings style attributes, all but color, since color is dependent on host/shadower context
var headings = {
  h1: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.h1,
    letterSpacing: '-2px',
    lineHeight: lineHeights.small,
    fontWeight: fontWeights.bold,
    marginTop: space.xlarge,
    marginBottom: space.large
  },
  h2: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.h2,
    letterSpacing: '-2px',
    lineHeight: lineHeights.small,
    fontWeight: fontWeights.normal
  },
  h3: {
    fontFamily: fonts.secondary,
    fontSize: fontSizes.h3,
    lineHeight: lineHeights.small,
    fontWeight: fontWeights.bold
  },
  h4: {
    fontFamily: fonts.secondary,
    fontSize: fontSizes.h4,
    lineHeight: lineHeights.base,
    fontWeight: fontWeights.normal
  },
  h5: {
    fontFamily: fonts.secondary,
    fontSize: fontSizes.h5,
    lineHeight: lineHeights.base,
    fontWeight: fontWeights.bold
  },
  h6: {
    fontFamily: fonts.secondary,
    fontSize: fontSizes.h6,
    textTransform: 'uppercase',
    lineHeight: lineHeights.base,
    fontWeight: fontWeights.bold
  }
};

export { fonts, fontSizes, lineHeights, fontWeights, headings };