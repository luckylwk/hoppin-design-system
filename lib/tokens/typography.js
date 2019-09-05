'use strict';

exports.__esModule = true;
exports.headings = exports.fontWeights = exports.lineHeights = exports.fontSizes = exports.fonts = undefined;

var _colors = require('./colors');

var _space = require('./space');

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
fontSizes.label = fontSizes[3];
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
headingSizes.h3 = [fontSizes[4], null, fontSizes[5]];
headingSizes.h4 = [fontSizes[3], null, fontSizes[5]];
headingSizes.h5 = [fontSizes[3], null, fontSizes[4]];
headingSizes.h6 = [fontSizes[3], null, fontSizes[3]];

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
    fontSize: headingSizes.h1,
    letterSpacing: '-2px',
    lineHeight: lineHeights.small,
    fontWeight: fontWeights.bold,
    marginTop: _space.space.xlarge,
    marginBottom: _space.space.large
  },
  h2: {
    fontFamily: fonts.primary,
    fontSize: headingSizes.h2,
    letterSpacing: '-2px',
    lineHeight: lineHeights.small,
    fontWeight: fontWeights.normal
  },
  h3: {
    fontFamily: fonts.secondary,
    fontSize: headingSizes.h3,
    lineHeight: lineHeights.small,
    fontWeight: fontWeights.bold
  },
  h4: {
    fontFamily: fonts.secondary,
    fontSize: headingSizes.h4,
    lineHeight: lineHeights.base,
    fontWeight: fontWeights.normal
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

exports.fonts = fonts;
exports.fontSizes = fontSizes;
exports.lineHeights = lineHeights;
exports.fontWeights = fontWeights;
exports.headings = headings;