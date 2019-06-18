'use strict';

exports.__esModule = true;
exports.buttonSizes = undefined;

var _space = require('./space');

var _typography = require('./typography');

var buttonSizes = {
  small: {
    fontSize: _typography.fontSizes[3],
    padding: _space.space[1] + ' ' + _space.space[3]
  },
  base: {
    fontSize: _typography.fontSizes[3],
    padding: _space.space[2] + ' ' + _space.space[4]
  },
  large: {
    fontSize: _typography.fontSizes[4],
    padding: _space.space[3] + ' ' + _space.space[5]
  }
};

exports.buttonSizes = buttonSizes;