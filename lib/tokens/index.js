'use strict';

exports.__esModule = true;

var _colors = require('./colors');

var _space = require('./space');

var _buttons = require('./buttons');

var _shadows = require('./shadows');

var _typography = require('./typography');

/* exports theme object.
   make sure to set mode='host' or mod='hopper' in the HoppinDesignProvider to select primary colors.
   - 'host'   => primary is host pink
   - 'hopper' => primary is hopper blue

*/

exports.default = {
  space: _space.space,
  containerWidth: _space.containerWidth,
  radii: _space.radii,
  fonts: _typography.fonts,
  fontSizes: _typography.fontSizes,
  lineHeights: _typography.lineHeights,
  fontWeights: _typography.fontWeights,
  colors: _colors.colors,
  headings: _typography.headings,
  buttonSizes: _buttons.buttonSizes,
  shadows: _shadows.shadows
};
module.exports = exports['default'];