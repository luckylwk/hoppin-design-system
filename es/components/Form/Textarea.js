function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  display: block;\n\n  width: 100%;\n\n  appearance: none;\n  outline: none;\n\n  padding: 12px 16px;\n\n  background: ", ";\n\n  font-size: 18px;\n  line-height: 26px;\n  font-weight: 300;\n  font-family: ", ";\n  letter-spacing: 0.6px;\n  color: ", ";\n\n  border: 2px solid transparent;\n  border-color: ", ";\n  border-radius: ", ";\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ", ";\n    background: ", ";\n  }\n\n  &::placeholder {\n    color: #a7a7a7;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label, RequiredText } from '.';
var TextareaField = styled.textarea(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.whiteout.light;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.secondary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.neutral.darker;
}, function (_ref4) {
  var theme = _ref4.theme,
      context = _ref4.context;
  return theme.colors.whiteout.darker;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.radii.small;
}, function (_ref6) {
  var theme = _ref6.theme,
      context = _ref6.context,
      overrideBg = _ref6.overrideBg;
  return overrideBg ? overrideBg : theme.colors.secondary.lighter;
}, function (_ref7) {
  var theme = _ref7.theme,
      initialValue = _ref7.initialValue;
  return initialValue && initialValue.length > 0 ? theme.colors.whiteout.base : theme.colors.whiteout.light;
});
TextareaField.propTypes = {
  overrideBg: PropTypes.string
};
TextareaField.defaultProps = {
  overrideBg: null
};
TextareaField.displayName = 'TextareaField';
export default TextareaField;

var Textarea = function Textarea(_ref8) {
  var label = _ref8.label,
      required = _ref8.required,
      rest = _objectWithoutPropertiesLoose(_ref8, ["label", "required"]);

  var LabelOrFragment = label ? Label : Fragment;
  var labelProps = label ? {
    label: label,
    htmlFor: rest.name
  } : {};
  var textareaProps = label ? {
    marginTop: 'small'
  } : {};
  return /*#__PURE__*/React.createElement(LabelOrFragment, labelProps, label, label && required && /*#__PURE__*/React.createElement(RequiredText, null, "*required"), /*#__PURE__*/React.createElement(TextareaField, _extends({}, rest, textareaProps)));
};

Textarea.displayName = 'Textarea';
Textarea.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * supply a label prop and the InputField gets wrapped in a Label, omit it to render the InputField alone
   * */
  label: PropTypes.string,

  /**
   * The initial value of the editor.
   */
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * A callback function that is fired whenever the content changes.
   */
  onChange: PropTypes.func,

  /**
   * Provide context (any of colors.contexts) to change the outline color
   */
  context: PropTypes.string
} : {};