"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("./Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border-top: ", " solid\n    ", ";\n\n  box-shadow: ", ";\n\n  cursor: pointer;\n\n  transition: all 0.5s;\n\n  ", "\n\n  &:hover {\n    box-shadow: ", ";\n    transform: translateY(-1px);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var CardSelectable = (0, _styledComponents["default"])(_Card["default"])(_templateObject(), function (_ref) {
  var borderTopWidth = _ref.borderTopWidth;
  return borderTopWidth;
}, function (_ref2) {
  var selected = _ref2.selected,
      theme = _ref2.theme;
  return selected ? theme.colors.neutral.darkest : theme.colors.primary.darker;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.shadows[1];
}, function (_ref4) {
  var theme = _ref4.theme,
      selected = _ref4.selected;
  return selected ? "\n      background: " + theme.colors.primary.darkest + ";\n      color: " + theme.colors.whiteout.lighter + ";\n    " : "";
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.shadows[3];
});
CardSelectable.propTypes = {
  selected: _propTypes["default"].bool,
  borderTopWidth: _propTypes["default"].string
};
CardSelectable.defaultProps = {
  selected: false,
  borderTopWidth: '2px'
};
CardSelectable.displayName = 'CardSelectable';
var _default = CardSelectable;
exports["default"] = _default;
module.exports = exports.default;