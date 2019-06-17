'use strict';

exports.__esModule = true;
exports.headings = exports.fontWeights = exports.lineHeights = exports.fontSizes = exports.fonts = undefined;

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _space = require('./space');

var _space2 = _interopRequireDefault(_space);

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
'1.25em', // 20px
'1.75em', // 28px
'2.5em', // 40px
'3em', // 48px
'4em', // 64px
'5em'];

// shortcuts, so we don't have to remember array indices.
fontSizes.body = fontSizes[3];
fontSizes.huge = fontSizes[8];
fontSizes.h1 = fontSizes[6];
fontSizes.h2 = fontSizes[6];
fontSizes.h3 = fontSizes[5];
fontSizes.h4 = fontSizes[5];
fontSizes.h5 = fontSizes[4];
fontSizes.h6 = fontSizes[3];
fontSizes.label = fontSizes[2];

var lineHeights = [1, 1.4, 1.8];
lineHeights.small = lineHeights[0];
lineHeights.base = lineHeights[1];
lineHeights.body = lineHeights[1];
lineHeights.large = lineHeights[2];

var fontWeights = {
  normal: 400,
  bold: 600
};

var headings = {
  h1: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.h1,
    color: _colors2.default.primary,
    letterSpacing: '-2px',
    lineHeight: lineHeights.base,
    fontWeight: fontWeights.bold,
    marginTop: _space2.default.xlarge,
    marginBottom: _space2.default.large
  },
  h2: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.h2,
    color: _colors2.default.primaries.darker,
    letterSpacing: '-1px',
    fontWeight: fontWeights.bold
  },
  h3: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.h3,
    color: _colors2.default.neutrals.darker,
    fontWeight: fontWeights.bold
  },
  h4: {
    fontFamily: fonts.secondary,
    fontSize: fontSizes.h4,
    color: _colors2.default.neutrals.darker,
    fontWeight: fontWeights.normal
  },
  h5: {
    fontFamily: fonts.secondary,
    fontSize: fontSizes.h5,
    color: _colors2.default.neutrals.dark,
    fontWeight: fontWeights.bold
  },
  h6: {
    fontFamily: fonts.secondary,
    fontSize: fontSizes.h6,
    color: _colors2.default.neutrals.dark,
    textTransform: 'uppercase',
    fontWeight: fontWeights.bold
  }
};

exports.fonts = fonts;
exports.fontSizes = fontSizes;
exports.lineHeights = lineHeights;
exports.fontWeights = fontWeights;
exports.headings = headings;