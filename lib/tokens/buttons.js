'use strict';

exports.__esModule = true;

var _space = require('./space');

var _space2 = _interopRequireDefault(_space);

var _typography = require('./typography');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonSizes = {
  small: {
    fontSize: _typography.fontSizes[3],
    padding: _space2.default[1] + ' ' + _space2.default[3]
  },
  base: {
    fontSize: _typography.fontSizes[3],
    padding: _space2.default[2] + ' ' + _space2.default[4]
  },
  large: {
    fontSize: _typography.fontSizes[4],
    padding: _space2.default[3] + ' ' + _space2.default[5]
  }
};

exports.default = buttonSizes;
module.exports = exports['default'];