"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("@styled-system/prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  font-family: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Paragraph = (0, _styledComponents["default"])('p')(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.fontSizes.body || '1em';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.secondary || 'sans-serif';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.lineHeights.body || '1.4em';
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.fontWeights.normal;
}, _styledSystem.textAlign, _styledSystem.space, _styledSystem.position, _styledSystem.color, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order);
Paragraph.propTypes = _extends({}, _propTypes["default"].space, _propTypes["default"].position, _propTypes["default"].color, _propTypes["default"].textAlign, _propTypes["default"].flex, _propTypes["default"].flexGrow, _propTypes["default"].flexShrink, _propTypes["default"].flexBasis, _propTypes["default"].justifySelf, _propTypes["default"].alignSelf, _propTypes["default"].order);
Paragraph.defaultProps = {
  marginTop: 0,
  marginBottom: 3,
  color: 'inherit',
  // respond to context, if we're white on dark background or dark on light.
  textAlign: 'inherit'
};
Paragraph.displayName = 'Paragraph';
var _default = Paragraph;
exports["default"] = _default;
module.exports = exports.default;