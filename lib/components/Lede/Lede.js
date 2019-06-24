'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: ', ';\n  letter-spacing: 1px;\n  line-height: ', ';\n\n  ', ' + & {\n    margin-top: 0;\n  }\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: ', ';\n  letter-spacing: 1px;\n  line-height: ', ';\n\n  ', ' + & {\n    margin-top: 0;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('@styled-system/prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Heading = require('../Heading');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Lede = (0, _styledComponents2.default)('p')(_templateObject, _styledSystem.textAlign, _styledSystem.space, _styledSystem.color, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes[4];
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontWeights.normal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.lineHeights.base;
}, _Heading.Heading);

Lede.propTypes = _extends({}, _propTypes2.default.space, _propTypes2.default.color, _propTypes2.default.textAlign, _propTypes2.default.flex, _propTypes2.default.flexGrow, _propTypes2.default.flexShrink, _propTypes2.default.flexBasis, _propTypes2.default.justifySelf, _propTypes2.default.alignSelf, _propTypes2.default.order);

Lede.defaultProps = {
  textAlign: 'inherit',
  color: 'inherit', // respond to context, if we're white on dark background or dark on light.
  marginX: 0,
  marginY: 'large'
};

Lede.displayName = 'Lede';

exports.default = Lede;
module.exports = exports['default'];