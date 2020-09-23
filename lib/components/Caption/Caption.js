"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("@styled-system/prop-types"));

var _Heading = require("../Heading");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  ", "\n  ", "\n  font-family: ", ";\n  font-size: ", ";\n  text-transform: uppercase;\n  letter-spacing: 1px;\n\n  & + ", " {\n    margin-top: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Caption = (0, _styledComponents["default"])('span')(_templateObject(), _styledSystem.space, _styledSystem.color, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.label;
}, _Heading.Heading);
Caption.propTypes = _extends({}, _propTypes["default"].space, _propTypes["default"].color);
Caption.defaultProps = {
  color: 'neutral.light',
  marginTop: 'small',
  marginBottom: 0
};
Caption.displayName = 'Caption';
var _default = Caption;
exports["default"] = _default;
module.exports = exports.default;