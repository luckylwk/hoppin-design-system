"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("@styled-system/prop-types"));

var _propTypes2 = _interopRequireDefault(require("prop-types"));

var _OrderedList = _interopRequireDefault(require("./OrderedList"));

var _UnorderedList = _interopRequireDefault(require("./UnorderedList"));

var _fi = require("react-icons/fi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  font-family: ", ";\n  line-height: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  position: relative;\n  padding-left: ", ";\n\n  ", " & svg {\n    color: ", ";\n\n      position: absolute;\n      top: .2em;\n      left: -", ";\n      width: 1em;\n      height: 1em;\n  }\n\n  ", " & svg {\n    display: none;\n  }\n\n  ", " &:before {\n    counter-increment: list;\n    content: counter(list);\n    position: absolute;\n    top: 0;\n    left: -", ";\n    color: ", ";\n    font-weight: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var ListItemWrapper = (0, _styledComponents["default"])('li')(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.fontSizes.body || '1em';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.secondary || 'sans-serif';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.lineHeights.body || '1.4em';
}, _styledSystem.textAlign, _styledSystem.space, _styledSystem.color, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order, function (_ref4) {
  var theme = _ref4.theme;
  return theme.space.base;
}, _UnorderedList["default"], function (_ref5) {
  var variant = _ref5.variant,
      theme = _ref5.theme;
  return variant === 'unchecked' ? theme.colors.neutral.light : theme.colors.primary.base;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.space.base;
}, _OrderedList["default"], _OrderedList["default"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.space.base;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.primary.base;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.fontWeights.bold;
});
ListItemWrapper.propTypes = _extends({}, _propTypes["default"].space, _propTypes["default"].position, _propTypes["default"].color, _propTypes["default"].textAlign, _propTypes["default"].flex, _propTypes["default"].flexGrow, _propTypes["default"].flexShrink, _propTypes["default"].flexBasis, _propTypes["default"].justifySelf, _propTypes["default"].alignSelf, _propTypes["default"].order, {
  variant: _propTypes2["default"].oneOf(['bullet', 'checked', 'unchecked'])
});
ListItemWrapper.defaultProps = {
  marginTop: 0,
  marginBottom: 3,
  color: 'inherit',
  // respond to context, if we're white on dark background or dark on light.
  textAlign: 'inherit',
  variant: 'bullet'
};
ListItemWrapper.displayName = 'ListItemWrapper';

var ListItem = function ListItem(_ref10) {
  var variant = _ref10.variant,
      children = _ref10.children,
      rest = _objectWithoutPropertiesLoose(_ref10, ["variant", "children"]);

  var Bullet = variant === 'unchecked' ? _fi.FiCircle : variant === 'checked' ? _fi.FiCheckCircle : _fi.FiChevronRight;
  return /*#__PURE__*/_react["default"].createElement(ListItemWrapper, _extends({
    variant: variant
  }, rest), /*#__PURE__*/_react["default"].createElement(Bullet, null), " ", children);
};

ListItem.displayName = 'ListItem';
var _default = ListItem;
exports["default"] = _default;
module.exports = exports.default;