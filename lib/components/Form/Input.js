"use strict";

exports.__esModule = true;
exports["default"] = exports.Input = exports.InputField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _Box = require("../Box");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  display: block;\n\n  ", "\n  line-height: 1em;\n\n  ", "\n  ", "\n\n  ", ";\n\n  background: ", ";\n\n  border-color: ", ";\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ", ";\n    background: ", ";\n  }\n\n  &::placeholder {\n    font-family: ", ";\n    font-weight: ", ";\n    color: ", ";\n    line-height: 1em;\n  }\n\n  appearance: none;\n  outline: none;\n  width: 100%;\n  flex: 1 1 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// ---------------------------
var InputField = _styledComponents["default"].input(_templateObject(), _styledSystem.typography, _styledSystem.space, _styledSystem.border, function (_ref) {
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
    padding[iconPosition] = '2.4rem';
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

exports.InputField = InputField;
InputField.propTypes = {
  disabled: _propTypes["default"].bool,
  type: _propTypes["default"].string,
  context: _propTypes["default"].string,
  name: _propTypes["default"].string
};
InputField.defaultProps = {
  disabled: false,
  type: 'text',
  context: 'neutral',
  fontSize: 'body',
  fontFamily: 'secondary',
  fontWeight: 'normal',
  lineHeight: 'none',
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

  var LabelOrFragment = label ? _.Label : _react.Fragment;
  var labelProps = label ? {
    label: label,
    htmlFor: rest.name
  } : {};

  var inputProps = _extends({}, label && {
    marginTop: 'small'
  }); // if we have an icon, we need to have a box gto position the icon


  var WrapperOrFragment = icon ? _Box.Box : _react.Fragment;
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
  return /*#__PURE__*/_react["default"].createElement(LabelOrFragment, labelProps, label, label && required && /*#__PURE__*/_react["default"].createElement(_.RequiredText, null, "*required"), /*#__PURE__*/_react["default"].createElement(WrapperOrFragment, wrapperProps, /*#__PURE__*/_react["default"].createElement(InputField, _extends({}, rest, inputProps)), icon && _react["default"].cloneElement(icon, iconProps)));
};

exports.Input = Input;
Input.propTypes = process.env.NODE_ENV !== "production" ? {
  /** supply a label prop and the InputField gets wrapped in a Label, omit it to render the InputField alone */
  label: _propTypes["default"].string,
  name: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,

  /** any text-like input type will work */
  type: _propTypes["default"].string,

  /**
   * Provide context (any of colors.contexts) to change the outline color
   */
  context: _propTypes["default"].string,

  /**
   * Provide icon to be rendered in the input field (optional)
   */
  icon: _propTypes["default"].node,
  iconPosition: _propTypes["default"].oneOf(['left', 'right'])
} : {};
Input.defaultProps = {
  disabled: false,
  type: 'text',
  context: 'neutral',
  iconPosition: 'left'
};
Input.displayName = 'Input';

var _default = (0, _styledComponents.withTheme)(Input);

exports["default"] = _default;