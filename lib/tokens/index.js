'use strict';

exports.__esModule = true;

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _space = require('./space');

var _space2 = _interopRequireDefault(_space);

var _typography = require('./typography');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* exports theme object. 
   make sure to set mode='host' or mod='hopper' in the HoppinDesignProvider to select primary colors.
   - 'host'   => primary is host pink
   - 'hopper' => primary is hopper blue

*/

exports.default = {
  space: _space2.default,
  fonts: _typography.fonts,
  fontSizes: _typography.fontSizes,
  lineHeights: _typography.lineHeights,
  fontWeights: _typography.fontWeights,
  colors: _colors2.default,
  headings: _typography.headings
};
module.exports = exports['default'];