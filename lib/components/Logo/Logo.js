"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = require("../Box");

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("@styled-system/prop-types"));

var _propTypes2 = _interopRequireDefault(require("prop-types"));

var _LogoFullColor = _interopRequireDefault(require("./LogoFullColor"));

var _IconFullColor = _interopRequireDefault(require("./IconFullColor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  & svg {\n    max-width: 100%;\n    height: 100%;\n\n    .indigo {\n      fill: ", ";\n    }\n    .cyan {\n      fill: ", ";\n    }\n    .orange {\n      fill: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var LogoBox = (0, _styledComponents["default"])(_Box.Box)(_templateObject(), _styledSystem.space, _styledSystem.layout, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order, _styledSystem.size, _styledSystem.position, function (_ref) {
  var baseColor = _ref.baseColor,
      theme = _ref.theme;
  return theme.colors[baseColor];
}, function (_ref2) {
  var variant = _ref2.variant,
      baseColor = _ref2.baseColor,
      theme = _ref2.theme;
  return variant === 'fullcolor' ? theme.colors.cyan : theme.colors[baseColor];
}, function (_ref3) {
  var variant = _ref3.variant,
      baseColor = _ref3.baseColor,
      theme = _ref3.theme;
  return variant === 'fullcolor' ? theme.colors.orange : theme.colors[baseColor];
});
LogoBox.propTypes = _extends({}, _propTypes["default"].space, _propTypes["default"].layout, _propTypes["default"].flex, _propTypes["default"].flexGrow, _propTypes["default"].flexShrink, _propTypes["default"].flexBasis, _propTypes["default"].justifySelf, _propTypes["default"].alignSelf, _propTypes["default"].order, _propTypes["default"].color, _propTypes["default"].size, _propTypes["default"].position, {
  /** set to get a different size, defaults to 2rem */
  maxHeight: _propTypes2["default"].any,

  /** set which version of the logo you'd like */
  variant: _propTypes2["default"].oneOf(['fullcolor', 'monochrome']),

  /** set which color variant  */
  baseColor: _propTypes2["default"].oneOf(['white', 'indigo']),

  /** full size logo or compact icon */
  size: _propTypes2["default"].oneOf(['logo', 'icon'])
});
LogoBox.defaultProps = {
  variant: 'fullcolor',
  display: 'block',
  height: '2rem',
  maxWidth: '100%',
  marginRight: 'large'
};

var Logo = function Logo(_ref4) {
  var size = _ref4.size,
      rest = _objectWithoutPropertiesLoose(_ref4, ["size"]);

  var logoElements = {
    logo: /*#__PURE__*/_react["default"].createElement(_LogoFullColor["default"], null),
    icon: /*#__PURE__*/_react["default"].createElement(_IconFullColor["default"], null)
  };
  return /*#__PURE__*/_react["default"].createElement(LogoBox, rest, logoElements[size] || logoElements.logo);
};

Logo.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _propTypes["default"].space, _propTypes["default"].layout, _propTypes["default"].flex, _propTypes["default"].flexGrow, _propTypes["default"].flexShrink, _propTypes["default"].flexBasis, _propTypes["default"].justifySelf, _propTypes["default"].alignSelf, _propTypes["default"].order, _propTypes["default"].color, _propTypes["default"].size, _propTypes["default"].position, {
  /** set to get a different size, defaults to 2rem */
  height: _propTypes2["default"].any,

  /** set which version of the logo you'd like */
  variant: _propTypes2["default"].oneOf(['fullcolor', 'monochrome']),

  /** set which color variant  */
  baseColor: _propTypes2["default"].oneOf(['white', 'indigo']),

  /** full size logo or compact icon */
  size: _propTypes2["default"].oneOf(['logo', 'icon'])
}) : {};
Logo.defaultProps = {
  display: 'block',
  height: '2rem',
  maxWidth: '100%',
  marginRight: 'large',
  size: 'logo',
  variant: 'fullcolor',
  baseColor: 'indigo'
};
Logo.displayName = 'Logo';
var _default = Logo;
exports["default"] = _default;
module.exports = exports.default;