function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  display: block;\n\n  ", "\n  ", "\n  ", "\n\n  ", ";\n\n  background: ", ";\n\n  border-color: ", ";\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ", ";\n    background: ", ";\n  }\n\n  &::placeholder {\n    font-family: ", ";\n    font-weight: ", ";\n    color: ", ";\n  }\n\n  appearance: none;\n  outline: none;\n  width: 100%;\n  flex: 1 1 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { typography, space, border } from 'styled-system';
import { Box } from '../Box';
import { Label, RequiredText } from '.'; // ---------------------------

var InputField = styled.input(_templateObject(), typography, space, border, function (_ref) {
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

  return "padding: " + padding.top + " " + padding.right + " " + padding.bottom + " " + padding.left;
}, function (_ref2) {
  var theme = _ref2.theme,
      value = _ref2.value;
  return value && value.length > 0 ? theme.colors.form.focused.background : theme.colors.form.background;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.form.border;
}, function (_ref4) {
  var theme = _ref4.theme,
      context = _ref4.context;

  switch (context) {
    case 'danger':
      return theme.colors.danger.base;

    case 'neutral':
    default:
      return theme.colors.form.focused.border;
  }
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.form.focused.background;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.fonts.secondary;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.fontWeights.normal;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.form.placeholder;
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
  color: 'neutral.dark',
  borderWidth: 'base',
  borderStyle: 'solid',
  borderRadius: 'small'
};
InputField.displayName = 'InputField'; // ---------------------------

var Input = function Input(_ref9) {
  var _style;

  var label = _ref9.label,
      required = _ref9.required,
      theme = _ref9.theme,
      rest = _objectWithoutPropertiesLoose(_ref9, ["label", "required", "theme"]);

  var icon = rest.icon,
      iconPosition = rest.iconPosition; // if we have a label, wrap input in label add margin-top to input, otherwise no wrapper

  var LabelOrFragment = label ? Label : Fragment;
  var labelProps = label ? {
    label: label,
    htmlFor: rest.name
  } : {};

  var inputProps = _extends({}, label && {
    marginTop: 'small'
  }); // if we have an icon, we need to have a box gto position the icon


  var WrapperOrFragment = icon ? Box : Fragment;
  var wrapperProps = icon ? {
    position: 'relative',
    style: {
      fontSize: theme.fontSizes.label
    }
  } : {};
  var iconProps = {
    style: (_style = {
      position: 'absolute',
      top: '1.1em'
    }, _style[iconPosition] = theme.space.base, _style),
    color: theme.colors[rest.context] && theme.colors[rest.context].base || theme.colors.neutral.base
  };
  return /*#__PURE__*/React.createElement(LabelOrFragment, labelProps, label, label && required && /*#__PURE__*/React.createElement(RequiredText, null, "*required"), /*#__PURE__*/React.createElement(WrapperOrFragment, wrapperProps, /*#__PURE__*/React.createElement(InputField, _extends({}, rest, inputProps)), icon && React.cloneElement(icon, iconProps)));
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
export { InputField, Input };
export default withTheme(Input);