"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("@styled-system/prop-types"));

var _Heading = require("../Heading");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  font-family: ", ";\n  font-weight: ", ";\n  letter-spacing: 0px;\n  line-height: ", ";\n\n  ", " + & {\n    margin-top: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Lede = (0, _styledComponents["default"])('p')(_templateObject(), _styledSystem.textAlign, _styledSystem.space, _styledSystem.color, _styledSystem.fontSize, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontWeights.medium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.lineHeights.base;
}, _Heading.Heading);
Lede.propTypes = _extends({}, _propTypes["default"].space, _propTypes["default"].color, _propTypes["default"].textAlign, _propTypes["default"].flex, _propTypes["default"].flexGrow, _propTypes["default"].flexShrink, _propTypes["default"].flexBasis, _propTypes["default"].justifySelf, _propTypes["default"].alignSelf, _propTypes["default"].order);
Lede.defaultProps = {
  textAlign: 'inherit',
  fontSize: 4,
  color: 'inherit',
  // respond to context, if we're white on dark background or dark on light.
  marginX: 0,
  marginY: 'large'
};
Lede.displayName = 'Lede';
var _default = Lede;
exports["default"] = _default;
module.exports = exports.default;