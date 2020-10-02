"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  &.__react_component_tooltip.orbiit-context.type-dark {\n    border-radius: ", ";\n    font-size: ", ";\n    z-index: ", ";\n    box-shadow: ", ";\n\n    .show {\n      opacity: 0.95;\n      margin-top: 0px;\n      margin-left: 0px;\n      visibility: visible;\n    }\n\n    color: ", ";\n    background-color: ", ";\n\n    &.place-top:after {\n      border-top-color: ", ";\n      border-top-style: solid;\n      border-top-width: 6px;\n    }\n    &.place-bottom:after {\n      border-bottom-color: ", ";\n      border-bottom-style: solid;\n      border-bottom-width: 6px;\n    }\n    &.place-left:after {\n      border-left-color: ", ";\n      border-left-style: solid;\n      border-left-width: 6px;\n    }\n    &.place-right:after {\n      border-right-color: ", ";\n      border-right-style: solid;\n      border-right-width: 6px;\n    }\n    &.border {\n      border: 1px solid ", ";\n    }\n    &.border.place-top:before {\n      border-top: 8px solid ", ";\n    }\n    &.border.place-bottom:before {\n      border-bottom: 8px solid ", ";\n    }\n    &.border.place-left:before {\n      border-left: 8px solid ", ";\n    }\n    &.border.place-right:before {\n      border-right: 8px solid ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var getBgColor = function getBgColor(_ref) {
  var _theme$colors$context, _theme$colors$context2;

  var theme = _ref.theme,
      context = _ref.context;
  return context === 'whiteout' ? (_theme$colors$context = theme.colors[context]) === null || _theme$colors$context === void 0 ? void 0 : _theme$colors$context.lighter : (_theme$colors$context2 = theme.colors[context]) === null || _theme$colors$context2 === void 0 ? void 0 : _theme$colors$context2.darker;
};

var getTextColor = function getTextColor(_ref2) {
  var theme = _ref2.theme,
      context = _ref2.context;
  return context === 'whiteout' ? theme.colors.neutral.darker : theme.colors.whiteout.lightest;
};

var Tooltip = (0, _styledComponents["default"])(_reactTooltip["default"])(_templateObject(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.radii.small;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.fontSizes.label;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.zIndices.overlay;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.shadows.small;
}, getTextColor, getBgColor, getBgColor, getBgColor, getBgColor, getBgColor, getBgColor, getBgColor, getBgColor, getBgColor, getBgColor);
Tooltip.propTypes = {
  context: _propTypes["default"].oneOf(['primary', 'secondary', 'neutral', 'danger', 'whiteout']),
  effect: _propTypes["default"].oneOf(['float', 'solid']),
  place: _propTypes["default"].oneOf(['top', 'right', 'bottom', 'left'])
};
Tooltip.defaultProps = {
  context: 'neutral',
  className: 'orbiit-context',
  effect: 'float',
  place: 'top'
};
Tooltip.displayName = 'Tooltip';
var _default = Tooltip;
exports["default"] = _default;
module.exports = exports.default;