'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HoppinDesignProvider = require('../../../src/components/HoppinDesignProvider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _HoppinDesignProvider.HoppinDesignProvider,
    null,
    children
  );
};

module.exports = exports['default'];