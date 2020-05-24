'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-family: ', ';\n  cursor: pointer;\n\n  border: 2px solid transparent;\n  border-radius: ', ';\n\n  font-weight: ', ';\n  letter-spacing: 0px;\n  text-decoration: none;\n  line-height: 1;\n\n  outline: none;\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  transition: all ', ';\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: ', ';\n  }\n\n  ', '\n\n  /* our buttonSize variant */\n  ', '\n\n  /* icon buttons */\n  ', '\n\n  /* styled-system props */\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  /* TODO: delete this? copied over from hoppin-react-blog not sure where this is used. */\n  & [role=\'img\'] {\n    display: inline-block;\n    margin: .25em auto -.25em;\n  }\n'], ['\n  font-family: ', ';\n  cursor: pointer;\n\n  border: 2px solid transparent;\n  border-radius: ', ';\n\n  font-weight: ', ';\n  letter-spacing: 0px;\n  text-decoration: none;\n  line-height: 1;\n\n  outline: none;\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  transition: all ', ';\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: ', ';\n  }\n\n  ', '\n\n  /* our buttonSize variant */\n  ', '\n\n  /* icon buttons */\n  ', '\n\n  /* styled-system props */\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  /* TODO: delete this? copied over from hoppin-react-blog not sure where this is used. */\n  & [role=\'img\'] {\n    display: inline-block;\n    margin: .25em auto -.25em;\n  }\n']);

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

var Button = _styledComponents2.default.button(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.radii.small;
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
  var contextColors = (0, _styledSystem.get)(theme, 'colors.' + context, { base: '#333' });
  var isShadower = contextColors.base === theme.colors.shadower.base;

  var variantCSS = '';
  switch (variant) {
    case 'outline':
      variantCSS = '\n          border-color: ' + contextColors.light + ';\n          background-color: transparent;\n          color: ' + (context === 'neutral' ? contextColors.base : contextColors.dark) + ';\n        ';
      break;
    case 'subtle':
      variantCSS = '\n          border-color: transparent;\n          background-color: transparent;\n          color: ' + contextColors.dark + ';\n\n          &:hover {\n            box-shadow: none;\n          }\n        ';
      break;
    case 'full':
    default:
      variantCSS = '\n          border-color: ' + contextColors.base + ';\n          background-color: ' + contextColors.base + ';\n          color: ' + (context === 'whiteout' ? theme.colors.primary.dark : isShadower ? contextColors.darkest : theme.colors.whiteout.lightest) + ';\n        ';
      break;
  }
  return variantCSS;
}, buttonSize, function (props) {
  return props.icon && buttonIconSpacing;
}, _styledSystem.display, _styledSystem.space, _styledSystem.width, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order);

Button.propTypes = _extends({
  disabled: _propTypes2.default.bool
}, _propTypes4.default.buttonStyle, _propTypes4.default.display, _propTypes4.default.space, _propTypes4.default.width, _propTypes4.default.flex, _propTypes4.default.flexGrow, _propTypes4.default.flexShrink, _propTypes4.default.flexBasis, _propTypes4.default.justifySelf, _propTypes4.default.alignSelf, _propTypes4.default.order, {
  size: _propTypes2.default.oneOf(['small', 'base', 'large']),
  variant: _propTypes2.default.oneOf(['full', 'outline', 'subtle']),
  context: _propTypes2.default.oneOf(['primary', 'secondary', 'tertiary', 'shadower', 'host', 'neutral', 'danger', 'whiteout'])
});

Button.defaultProps = {
  disabled: false,
  variant: 'full',
  context: 'primary',
  size: 'base',
  display: 'block'
};

Button.displayName = 'Button';

exports.default = Button;
module.exports = exports['default'];