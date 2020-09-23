"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  font-family: ", ";\n  cursor: pointer;\n\n  border: 2px solid transparent;\n  border-radius: ", ";\n\n  font-weight: ", ";\n  letter-spacing: 0px;\n  text-decoration: none;\n  line-height: 1;\n\n  outline: none;\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  transition: all ", ";\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: ", ";\n  }\n\n  ", "\n\n  /* our buttonSize variant */\n  ", "\n\n  /* icon buttons */\n  ", "\n\n  /* styled-system props */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  /* TODO: delete this? copied over from orbiit-react-blog not sure where this is used. */\n  & [role='img'] {\n    display: inline-block;\n    margin: 0.25em auto -0.25em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

/**
 * Core Button component. Allows for rendering different
 * styles using the `type` prop.
 */
// using the variants in styled-system, we can set several css styles
// AND render the component as different HTML tags using the `as` prop of styled-components.
// https://styled-system.com/variants
var buttonSize = (0, _styledSystem.variant)({
  // theme key for variant definitions
  scale: 'buttonSizes',
  // component prop
  prop: 'size'
});
var buttonIconSpacing = (0, _styledSystem.variant)({
  // theme key for variant definitions
  scale: 'buttonIconSpacing',
  // component prop
  prop: 'size'
});

var Button = _styledComponents["default"].button(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.radii.large;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontWeights.bold;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.motions.base;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.shadows.small;
}, function (_ref6) {
  var theme = _ref6.theme,
      variant = _ref6.variant,
      context = _ref6.context;
  // `variant` defines full color (default), outline, or subtle shape
  // `context` defines color default (host/shadower inherited from context), host, shadower, danger
  var contextColors = (0, _styledSystem.get)(theme, "colors." + context, {
    base: '#333'
  });
  var variantCSS = '';

  switch (variant) {
    case 'outline':
      variantCSS = "\n          border-color: " + contextColors.base + ";\n          background-color: transparent;\n          color: " + (context === 'neutral' ? contextColors.base : contextColors.dark) + ";\n        ";
      break;

    case 'subtle':
      variantCSS = "\n          border-color: transparent;\n          background-color: transparent;\n          color: " + contextColors.dark + ";\n\n          &:hover {\n            box-shadow: none;\n          }\n        ";
      break;

    case 'full':
    default:
      variantCSS = "\n          border-color: " + contextColors.base + ";\n          background-color: " + contextColors.base + ";\n          color: " + (context === 'whiteout' ? theme.colors.indigo : theme.colors.white) + ";\n        ";
      break;
  }

  return variantCSS;
}, buttonSize, function (props) {
  return props.icon && buttonIconSpacing;
}, _styledSystem.display, _styledSystem.space, _styledSystem.width, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order);

Button.propTypes = _extends({
  disabled: _propTypes["default"].bool
}, _propTypes2["default"].buttonStyle, _propTypes2["default"].display, _propTypes2["default"].space, _propTypes2["default"].width, _propTypes2["default"].flex, _propTypes2["default"].flexGrow, _propTypes2["default"].flexShrink, _propTypes2["default"].flexBasis, _propTypes2["default"].justifySelf, _propTypes2["default"].alignSelf, _propTypes2["default"].order, {
  size: _propTypes["default"].oneOf(['small', 'base', 'large']),
  variant: _propTypes["default"].oneOf(['full', 'outline', 'subtle']),
  context: _propTypes["default"].oneOf(['primary', 'secondary', 'tertiary', 'neutral', 'danger', 'whiteout'])
});
Button.defaultProps = {
  disabled: false,
  variant: 'full',
  context: 'primary',
  size: 'base',
  display: 'block'
};
Button.displayName = 'Button';
var _default = Button;
exports["default"] = _default;
module.exports = exports.default;