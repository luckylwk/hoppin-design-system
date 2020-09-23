"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _colors = require("./colors");

var _space = require("./space");

var _buttons = require("./buttons");

var _shadows = require("./shadows");

var _typography = require("./typography");

var _borders = require("./borders");

var _motions = require("./motions");

var _default = {
  space: _space.space,
  containerWidths: _space.containerWidths,
  breakpoints: _space.breakpoints,
  mediaQueries: _space.mediaQueries,
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
  shadows: _shadows.shadows,
  borderWidths: _borders.borderWidths,
  motions: _motions.motions
};
exports["default"] = _default;
module.exports = exports.default;