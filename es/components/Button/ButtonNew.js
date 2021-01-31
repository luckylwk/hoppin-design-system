var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-family: ', ';\n  cursor: pointer;\n\n  border: 2px solid transparent;\n  border-radius: ', ';\n\n  font-weight: ', ';\n  letter-spacing: 0px;\n  text-decoration: none;\n  line-height: 1;\n\n  outline: none;\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  transition: all ', ';\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: ', ';\n  }\n\n  ', '\n\n  /* our buttonSize variant */\n  ', '\n\n  /* icon buttons */\n  ', '\n\n  /* styled-system props */\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  /* TODO: delete this? copied over from hoppin-react-blog not sure where this is used. */\n  & [role=\'img\'] {\n    display: inline-block;\n    margin: 0.25em auto -0.25em;\n  }\n'], ['\n  font-family: ', ';\n  cursor: pointer;\n\n  border: 2px solid transparent;\n  border-radius: ', ';\n\n  font-weight: ', ';\n  letter-spacing: 0px;\n  text-decoration: none;\n  line-height: 1;\n\n  outline: none;\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  transition: all ', ';\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: ', ';\n  }\n\n  ', '\n\n  /* our buttonSize variant */\n  ', '\n\n  /* icon buttons */\n  ', '\n\n  /* styled-system props */\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  /* TODO: delete this? copied over from hoppin-react-blog not sure where this is used. */\n  & [role=\'img\'] {\n    display: inline-block;\n    margin: 0.25em auto -0.25em;\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { display, space, width, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, get, variant } from 'styled-system';

import systemPropTypes from '@styled-system/prop-types';
import propTypes from 'prop-types';

/**
 * Core Button component. Allows for rendering different
 * styles using the `type` prop.
 */

// using the variants in styled-system, we can set several css styles
// AND render the component as different HTML tags using the `as` prop of styled-components.
// https://styled-system.com/variants

var buttonSize = variant({
  // theme key for variant definitions
  scale: 'buttonSizes',
  // component prop
  prop: 'size'
});

var buttonIconSpacing = variant({
  // theme key for variant definitions
  scale: 'buttonIconSpacing',
  // component prop
  prop: 'size'
});

var Button = styled.button(_templateObject, function (_ref) {
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
  var contextColors = get(theme, 'colors.' + context, { base: '#333' });
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
}, display, space, width, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order);

Button.propTypes = _extends({
  disabled: PropTypes.bool
}, systemPropTypes.buttonStyle, systemPropTypes.display, systemPropTypes.space, systemPropTypes.width, systemPropTypes.flex, systemPropTypes.flexGrow, systemPropTypes.flexShrink, systemPropTypes.flexBasis, systemPropTypes.justifySelf, systemPropTypes.alignSelf, systemPropTypes.order, {
  size: propTypes.oneOf(['small', 'base', 'large']),
  variant: propTypes.oneOf(['full', 'outline', 'subtle']),
  context: propTypes.oneOf(['primary', 'secondary', 'tertiary', 'shadower', 'host', 'neutral', 'danger', 'whiteout'])
});

Button.defaultProps = {
  disabled: false,
  variant: 'full',
  context: 'primary',
  size: 'base',
  display: 'block'
};

Button.displayName = 'Button';

export default Button;