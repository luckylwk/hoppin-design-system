'use strict';

exports.__esModule = true;
exports.headings = exports.lineHeights = exports.fontSizes = exports.fonts = undefined;

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fonts = {
  primary: 'Pluto, sans-serif',
  secondary: '"Nunito Sans", sans-serif',
  system: '-apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue'
};
// font-sizes are multiples of 2, 8 if possible, to create a natural rythm, together with space tokens.
var fontSizes = ['.5em', // 8px
'.625em', // 10px
'.875em', // 14px
'1em', // 16px
'1.5em', // 24px
'1.75em', // 28px
'2.5em', // 40px
'3em', // 48px
'4em', // 64px
'5em'];

// shortcuts, so we don't have to remember  array indices.
fontSizes.body = fontSizes[3];
fontSizes.huge = fontSizes[8];
fontSizes.h1 = fontSizes[7];
fontSizes.h2 = fontSizes[6];
fontSizes.h3 = fontSizes[5];
fontSizes.h4 = fontSizes[4];
fontSizes.h5 = fontSizes[3];
fontSizes.h6 = fontSizes[2];
fontSizes.label = fontSizes[2];

// donno where these came from.
// [
//   '10px',
//   '12px',
//   '14px',
//   '16px',
//   '20px',
//   '24px',
//   '30px',
//   '36px',
//   '48px',
//   '60px',
// ];

var lineHeights = [1, 1.4, 1.8];
lineHeights.small = lineHeights[0];
lineHeights.medium = lineHeights[1];
lineHeights.body = lineHeights[1];
lineHeights.large = lineHeights[2];

var headings = {
  h1: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.h1,
    color: _colors2.default.primary,
    letterSpacing: '-2px',
    lineHeight: lineHeights.medium,
    fontWeight: 600
  },
  h2: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.h2,
    color: _colors2.default.primaries.darker,
    letterSpacing: '-1px',
    fontWeight: 600
  },
  h3: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.h3,
    color: _colors2.default.neutrals.darker,
    fontWeight: 600
  },
  h4: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.h4,
    color: _colors2.default.neutrals.darker,
    fontWeight: 600
  },
  h5: {
    fontFamily: fonts.secondary,
    fontSize: fontSizes.h5,
    color: _colors2.default.neutrals.darkest,
    fontWeight: 800
  },
  h6: {
    fontFamily: fonts.secondary,
    fontSize: fontSizes.h6,
    color: _colors2.default.neutrals.darkest,
    textTransform: 'uppercase',
    fontWeight: 700
  }
};

exports.fonts = fonts;
exports.fontSizes = fontSizes;
exports.lineHeights = lineHeights;
exports.headings = headings;