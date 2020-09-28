import { space } from './space';

const fonts = {
  primary: '"Surt", sans-serif',
  secondary: '"Surt", sans-serif',
  system:
    '-apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue',
};

// font-sizes are multiples of 2, 8 if possible, to create a natural rythm, together with space tokens.
const fontSizes = [
  '.5rem', // 8px
  '.625rem', // 10px
  '.875rem', // 14px
  '1.125rem', // 18px
  '1.375rem', // 22px
  '1.75rem', // 28px
  '2.5rem', // 40px
  '3rem', // 48px
  '4rem', // 64px
  '5rem', // 80px
];

// shortcuts, so we don't have to remember array indices.
fontSizes.body = fontSizes[3];
fontSizes.label = fontSizes[2];
fontSizes.huge = fontSizes[9];
fontSizes.h1 = fontSizes[7];
fontSizes.h2 = fontSizes[6];
fontSizes.h3 = fontSizes[6];
fontSizes.h4 = fontSizes[5];
fontSizes.h5 = fontSizes[5];
fontSizes.h6 = fontSizes[3];
fontSizes.small = fontSizes[2];

const headingSizes = [];
headingSizes.huge = [fontSizes[8], null, fontSizes[9]];
headingSizes.h1 = [fontSizes[7], null, fontSizes[8]];
headingSizes.h2 = [fontSizes[5], null, fontSizes[6]];
headingSizes.h3 = [fontSizes[5], null, fontSizes[6]];
headingSizes.h4 = [fontSizes[4], null, fontSizes[5]];
headingSizes.h5 = [fontSizes[4], null, fontSizes[5]];
headingSizes.h6 = [fontSizes[3], null, fontSizes[3]];

const lineHeights = [1, 1.4, 1.8];
lineHeights.small = lineHeights[0];
lineHeights.base = lineHeights[1];
lineHeights.body = lineHeights[1];
lineHeights.large = lineHeights[2];

const fontWeights = {
  light: 300,
  normal: 300,
  medium: 500,
  bold: 500,
  heavy: 500,
};

// headings style attributes, all but color, since color is dependent on host/shadower context
const headings = {
  h1: {
    fontFamily: fonts.primary,
    fontSize: headingSizes.h1,
    letterSpacing: '1px',
    lineHeight: 'small',
    fontWeight: 'bold',
    marginTop: space.xlarge,
    marginBottom: space.large,
  },
  h2: {
    fontFamily: fonts.primary,
    fontSize: headingSizes.h2,
    letterSpacing: '1px',
    lineHeight: 'small',
    fontWeight: 'bold',
  },
  h3: {
    fontFamily: fonts.primary,
    fontSize: headingSizes.h3,
    letterSpacing: '1px',
    lineHeight: 'small',
    fontWeight: 'bold',
  },
  h4: {
    fontFamily: fonts.secondary,
    fontSize: headingSizes.h4,
    lineHeight: 'base',
    fontWeight: 'bold',
  },
  h5: {
    fontFamily: fonts.secondary,
    fontSize: headingSizes.h5,
    lineHeight: 'base',
    fontWeight: 'normal',
  },
  h6: {
    fontFamily: fonts.secondary,
    fontSize: headingSizes.h6,
    lineHeight: 'base',
    fontWeight: 'normal',
  },
};

export { fonts, fontSizes, lineHeights, fontWeights, headings };
