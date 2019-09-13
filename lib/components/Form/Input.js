'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  display: block;\n\n  ', '\n  ', '\n\n  background: ', ';\n\n  border: 1px solid transparent;\n  border-color: ', ';\n  border-radius: ', ';\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ', ';\n  }\n\n  &::placeholder {\n    font-family: ', ';\n    font-weight: 300;\n    color: ', ';\n  }\n\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  width: 100%;\n  flex: 1 1 100%;\n'], ['\n  box-sizing: border-box;\n  display: block;\n\n  ', '\n  ', '\n\n  background: ', ';\n\n  border: 1px solid transparent;\n  border-color: ', ';\n  border-radius: ', ';\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ', ';\n  }\n\n  &::placeholder {\n    font-family: ', ';\n    font-weight: 300;\n    color: ', ';\n  }\n\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  width: 100%;\n  flex: 1 1 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var InputField = _styledComponents2.default.input(_templateObject, _styledSystem.typography, _styledSystem.space, function (props) {
  return props.isFocused || !props.isEmpty ? props.theme.colors.whiteout.base : props.theme.colors.whiteout.lighter;
}, function (props) {
  if (props.theme.colors[props.context] !== undefined) {
    return props.theme.colors[props.context].light;
  } else {
    return props.theme.colors.neutral.light;
  }
}, function (_ref) {
  var theme = _ref.theme;
  return theme.radii.small;
}, function (props) {
  switch (props.context) {
    case 'danger':
      return props.theme.colors.danger.base;
    case 'neutral':
    default:
      return props.theme.colors.primary.base;
  }
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.secondary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.neutral.light;
});

InputField.propTypes = {
  disabled: _propTypes2.default.bool,
  type: _propTypes2.default.string,
  context: _propTypes2.default.string,
  name: _propTypes2.default.string
};

InputField.defaultProps = {
  disabled: false,
  type: 'text',
  context: 'neutral',
  fontSize: 'inherit',
  fontFamily: 'secondary',
  fontWeight: 'normal',
  marginBottom: 'base',
  paddingY: 'small',
  paddingX: 'base',
  color: 'neutral.base'
};

InputField.displayName = 'InputField';

var Input = function Input(_ref4) {
  var label = _ref4.label,
      rest = _objectWithoutProperties(_ref4, ['label']);

  var Wrapper = label ? _Label2.default : _react.Fragment;
  var wrapperProps = label ? { label: label, htmlFor: rest.name } : {};
  var inputProps = label ? { marginTop: 'small' } : {};
  return _react2.default.createElement(
    Wrapper,
    wrapperProps,
    label,
    _react2.default.createElement(InputField, _extends({}, rest, inputProps))
  );
};
Input.propTypes = process.env.NODE_ENV !== "production" ? {
  /** supply a label prop and the InputField gets wrapped in a Label, omit it to render the InputField alone */
  label: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  /** any text-like input type will work */
  type: _propTypes2.default.string,
  /**
   * Provide context (any of colors.contexts) to change the outline color
   */
  context: _propTypes2.default.string
} : {};

Input.defaultProps = {
  disabled: false,
  type: 'text',
  context: 'neutral'
};

Input.displayName = 'Input';

exports.default = Input;
module.exports = exports['default'];