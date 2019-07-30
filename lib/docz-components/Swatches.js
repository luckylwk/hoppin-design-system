'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  border-top: none;\n'], ['\n  border-top: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Card = require('components/Card');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Swatch = (0, _styledComponents2.default)(_Card.Card)(_templateObject);

exports.default = function (_ref) {
  var prefix = _ref.prefix,
      colors = _ref.colors;

  return Object.keys(colors).map(function (color) {
    return _react2.default.createElement(
      Swatch,
      { bg: colors[color], margin: 'xsmall', key: '' + prefix + color },
      prefix,
      color
    );
  });
};

module.exports = exports['default'];