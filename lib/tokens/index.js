'use strict';

exports.__esModule = true;

var _colors = require('./colors');

var _space = require('./space');

var _buttons = require('./buttons');

var _shadows = require('./shadows');

var _typography = require('./typography');

exports.default = {
  space: _space.space,
  containerWidths: _space.containerWidths,
  radii: _space.radii,
  zIndices: _space.zIndices,
  fonts: _typography.fonts,
  fontSizes: _typography.fontSizes,
  lineHeights: _typography.lineHeights,
  fontWeights: _typography.fontWeights,
  colors: _colors.colors,
  headings: _typography.headings,
  buttonSizes: _buttons.buttonSizes,
  buttonIconSpacing: _buttons.buttonIconSpacing,
  shadows: _shadows.shadows
};
module.exports = exports['default'];