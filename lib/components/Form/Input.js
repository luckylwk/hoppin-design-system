'use strict';

exports.__esModule = true;
exports.Input = exports.InputField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  display: block;\n\n  ', '\n  ', '\n  ', '\n\n  ', ';\n\n  background: ', ';\n\n  border-color: ', ';\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ', ';\n    background: ', ';\n  }\n\n  &::placeholder {\n    font-family: ', ';\n    font-weight: ', ';\n    color: ', ';\n  }\n\n  appearance: none;\n  outline: none;\n  width: 100%;\n  flex: 1 1 100%;\n'], ['\n  box-sizing: border-box;\n  display: block;\n\n  ', '\n  ', '\n  ', '\n\n  ', ';\n\n  background: ', ';\n\n  border-color: ', ';\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ', ';\n    background: ', ';\n  }\n\n  &::placeholder {\n    font-family: ', ';\n    font-weight: ', ';\n    color: ', ';\n  }\n\n  appearance: none;\n  outline: none;\n  width: 100%;\n  flex: 1 1 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Box = require('../Box');

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// ---------------------------

var InputField = _styledComponents2.default.input(_templateObject, _styledSystem.typography, _styledSystem.space, _styledSystem.border, function (_ref) {
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
}, function (_ref2) {
  var theme = _ref2.theme,
      value = _ref2.value;
  return value && value.length > 0 ? theme.colors.whiteout.lighter : theme.colors.whiteout.light;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.whiteout.dark;
}, function (_ref4) {
  var theme = _ref4.theme,
      context = _ref4.context;

  switch (context) {
    case 'danger':
      return theme.colors.danger.base;
    case 'neutral':
    default:
      return theme.colors.primary.base;
  }
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.whiteout.lightest;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.fonts.secondary;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.fontWeights.normal;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.neutral.base;
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

InputField.displayName = 'InputField';

// ---------------------------

var Input = function Input(_ref9) {
  var _style;

  var label = _ref9.label,
      required = _ref9.required,
      theme = _ref9.theme,
      rest = _objectWithoutProperties(_ref9, ['label', 'required', 'theme']);

  var icon = rest.icon,
      iconPosition = rest.iconPosition;
  // if we have a label, wrap input in label add margin-top to input, otherwise no wrapper

  var LabelOrFragment = label ? _.Label : _react.Fragment;
  var labelProps = label ? { label: label, htmlFor: rest.name } : {};
  var inputProps = _extends({}, label && { marginTop: 'small' });
  // if we have an icon, we need to have a box gto position the icon
  var WrapperOrFragment = icon ? _Box.Box : _react.Fragment;
  var wrapperProps = icon ? { position: 'relative', style: { fontSize: theme.fontSizes.label } } : {};
  var iconProps = {
    style: (_style = {
      position: 'absolute',
      top: '1.1em'
    }, _style[iconPosition] = theme.space.base, _style),
    color: theme.colors[rest.context] && theme.colors[rest.context].base || theme.colors.neutral.base
  };
  return _react2.default.createElement(
    LabelOrFragment,
    labelProps,
    label,
    label && required && _react2.default.createElement(
      _.RequiredText,
      null,
      '*required'
    ),
    _react2.default.createElement(
      WrapperOrFragment,
      wrapperProps,
      _react2.default.createElement(InputField, _extends({}, rest, inputProps)),
      icon && _react2.default.cloneElement(icon, iconProps)
    )
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
  context: _propTypes2.default.string,
  /**
   * Provide icon to be rendered in the input field (optional)
   */
  icon: _propTypes2.default.node,
  iconPosition: _propTypes2.default.oneOf(['left', 'right'])
} : {};

Input.defaultProps = {
  disabled: false,
  type: 'text',
  context: 'neutral',
  iconPosition: 'left'
};

Input.displayName = 'Input';

exports.InputField = InputField;
exports.Input = Input;
exports.default = (0, _styledComponents.withTheme)(Input);