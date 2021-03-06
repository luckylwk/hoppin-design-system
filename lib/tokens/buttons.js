'use strict';

exports.__esModule = true;
exports.buttonIconSpacing = exports.buttonSizes = undefined;

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

// Previously: space[1], space[2], space[3]
var buttonIconSpacing = {
  small: {
    padding: '4px'
  },
  base: {
    padding: '7px 8px'
  },
  large: {
    padding: '14px 16px'
  }
};

exports.buttonSizes = buttonSizes;
exports.buttonIconSpacing = buttonIconSpacing;