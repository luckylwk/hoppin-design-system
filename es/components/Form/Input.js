var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  display: block;\n\n  ', '\n  ', '\n\n  ', ';\n\n  background: ', ';\n\n  border: 1px solid transparent;\n  border-color: ', ';\n  border-radius: ', ';\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ', ';\n  }\n\n  &::placeholder {\n    font-family: ', ';\n    font-weight: 300;\n    color: ', ';\n  }\n\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  width: 100%;\n  flex: 1 1 100%;\n'], ['\n  box-sizing: border-box;\n  display: block;\n\n  ', '\n  ', '\n\n  ', ';\n\n  background: ', ';\n\n  border: 1px solid transparent;\n  border-color: ', ';\n  border-radius: ', ';\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ', ';\n  }\n\n  &::placeholder {\n    font-family: ', ';\n    font-weight: 300;\n    color: ', ';\n  }\n\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  width: 100%;\n  flex: 1 1 100%;\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme, css } from 'styled-components';
import { typography, space } from 'styled-system';
import Label from './Label';
import { Box } from '../Box';

var InputField = styled.input(_templateObject, typography, space, function (_ref) {
  var theme = _ref.theme,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition;

  var padding = {
    top: theme.space.small,
    right: theme.space.base,
    bottom: theme.space.small,
    left: theme.space.base
  };
  if (icon !== undefined) {
    padding[iconPosition] = '2.7rem';
  }
  return 'padding: ' + padding.top + ' ' + padding.right + ' ' + padding.bottom + ' ' + padding.left;
}, function (props) {
  return props.isFocused || props.value && props.value.length > 0 ? props.theme.colors.whiteout.base : props.theme.colors.whiteout.lighter;
}, function (props) {
  if (props.theme.colors[props.context] !== undefined) {
    return props.theme.colors[props.context].light;
  } else {
    return props.theme.colors.neutral.light;
  }
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.radii.small;
}, function (props) {
  switch (props.context) {
    case 'danger':
      return props.theme.colors.danger.base;
    case 'neutral':
    default:
      return props.theme.colors.primary.base;
  }
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fonts.secondary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.neutral.light;
});

InputField.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  context: PropTypes.string,
  name: PropTypes.string
};

InputField.defaultProps = {
  disabled: false,
  type: 'text',
  context: 'neutral',
  fontSize: 'body',
  fontFamily: 'secondary',
  fontWeight: 'normal',
  lineHeight: 1,
  marginBottom: 'base',
  color: 'neutral.base'
};

InputField.displayName = 'InputField';

var Input = function Input(_ref5) {
  var _style;

  var label = _ref5.label,
      theme = _ref5.theme,
      rest = _objectWithoutProperties(_ref5, ['label', 'theme']);

  var icon = rest.icon,
      iconPosition = rest.iconPosition;
  // if we have a label, wrap input in label add margin-top to input, otherwise no wrapper

  var LabelOrFragment = label ? Label : Fragment;
  var labelProps = label ? { label: label, htmlFor: rest.name } : {};
  var inputProps = label ? { marginTop: 'small' } : {};
  // if we have an icon, we need to have a box gto position the icon
  var WrapperOrFragment = icon ? Box : Fragment;
  var wrapperProps = icon ? { position: 'relative' } : {};
  var iconProps = {
    style: (_style = {
      position: 'absolute',
      top: '0.75em'
    }, _style[iconPosition] = theme.space.base, _style),
    color: theme.colors[rest.context] && theme.colors[rest.context].base || theme.colors.neutral.base
  };

  return React.createElement(
    LabelOrFragment,
    labelProps,
    label,
    React.createElement(
      WrapperOrFragment,
      wrapperProps,
      React.createElement(InputField, _extends({}, rest, inputProps)),
      icon && React.cloneElement(icon, iconProps)
    )
  );
};
Input.propTypes = process.env.NODE_ENV !== "production" ? {
  /** supply a label prop and the InputField gets wrapped in a Label, omit it to render the InputField alone */
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  /** any text-like input type will work */
  type: PropTypes.string,
  /**
   * Provide context (any of colors.contexts) to change the outline color
   */
  context: PropTypes.string,
  /**
   * Provide icon to be rendered in the input field (optional)
   */
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right'])
} : {};

Input.defaultProps = {
  disabled: false,
  type: 'text',
  context: 'neutral',
  iconPosition: 'left'
};

Input.displayName = 'Input';

export default withTheme(Input);