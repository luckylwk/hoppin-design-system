"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  display: block;\n\n  width: 100%;\n\n  appearance: none;\n  outline: none;\n\n  padding: 12px 16px;\n\n  background: ", ";\n\n  font-size: 18px;\n  line-height: 26px;\n  font-weight: 300;\n  font-family: ", ";\n  letter-spacing: 0.6px;\n  color: ", ";\n\n  border: 2px solid transparent;\n  border-color: ", ";\n  border-radius: ", ";\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ", ";\n    background: ", ";\n  }\n\n  &::placeholder {\n    color: #a7a7a7;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Textarea = _styledComponents["default"].textarea(_templateObject(), function (_ref) {
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

Textarea.propTypes = {
  overrideBg: _propTypes["default"].string
};
Textarea.defaultProps = {
  overrideBg: null
};
Textarea.displayName = 'Textarea';
var _default = Textarea;
exports["default"] = _default;
module.exports = exports.default;