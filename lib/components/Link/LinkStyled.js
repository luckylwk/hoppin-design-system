'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-family: ', ';\n  font-size: 1em;\n  cursor: pointer;\n  text-decoration: none;\n  padding: 0;\n\n  border: none;\n  border-bottom: 1px solid ', ';\n\n  color: ', ';\n\n  font-weight: ', ';\n  letter-spacing: 0.5px;\n\n  outline: none;\n\n  transition: all 0.5s;\n\n  &:hover {\n    transform: translateY(-1px);\n    text-shadow: ', ';\n  }\n\n  & + & {\n    margin-left: ', ';\n  }\n\n  /* styled-system props */\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  font-family: ', ';\n  font-size: 1em;\n  cursor: pointer;\n  text-decoration: none;\n  padding: 0;\n\n  border: none;\n  border-bottom: 1px solid ', ';\n\n  color: ', ';\n\n  font-weight: ', ';\n  letter-spacing: 0.5px;\n\n  outline: none;\n\n  transition: all 0.5s;\n\n  &:hover {\n    transform: translateY(-1px);\n    text-shadow: ', ';\n  }\n\n  & + & {\n    margin-left: ', ';\n  }\n\n  /* styled-system props */\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes3 = require('@styled-system/prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/**
 * Core Link component.
 * Adds link styling, use RoutedLink for internal links that get picked up by react-router
 */

var LinkStyled = _styledComponents2.default.a(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, function (_ref2) {
  var theme = _ref2.theme,
      context = _ref2.context;

  var colors = (0, _styledSystem.get)(theme.colors, context, theme.colors.primary);
  return colors.light;
}, function (_ref3) {
  var theme = _ref3.theme,
      context = _ref3.context;

  var colors = (0, _styledSystem.get)(theme.colors, context, theme.colors.primary);
  return colors.darker;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.fontWeights.normal;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.shadows.small;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.space.small;
}, _styledSystem.display, _styledSystem.space, _styledSystem.width, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order);

LinkStyled.propTypes = _extends({
  disabled: _propTypes2.default.bool
}, _propTypes4.default.buttonStyle, _propTypes4.default.display, _propTypes4.default.space, _propTypes4.default.width, _propTypes4.default.flex, _propTypes4.default.flexGrow, _propTypes4.default.flexShrink, _propTypes4.default.flexBasis, _propTypes4.default.justifySelf, _propTypes4.default.alignSelf, _propTypes4.default.order, {

  context: _propTypes2.default.oneOf(['primary', 'secondary', 'tertiary', 'shadower', 'host', 'danger'])
});

LinkStyled.defaultProps = {
  disabled: false,
  display: 'inline-block'
};

LinkStyled.displayName = 'LinkStyled';

exports.default = LinkStyled;
module.exports = exports['default'];