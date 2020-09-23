"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _color = _interopRequireDefault(require("color"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: ", ";\n\n  border: 0px;\n  border-bottom: 4px solid;\n  border-bottom-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Emphasize = (0, _styledComponents["default"])(_Text["default"])(_templateObject(), function (_ref) {
  var display = _ref.display;
  return display;
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _color["default"])(theme.colors.primary.base).alpha('0.45').rgb().string();
});
Emphasize.propTypes = {
  display: _propTypes["default"].string,
  fontWeight: _propTypes["default"].string,
  lineHeight: _propTypes["default"].string
};
Emphasize.defaultProps = {
  display: 'inline-block',
  fontWeight: 'medium',
  lineHeight: '0.75'
};
Emphasize.displayName = 'Emphasize';
var _default = Emphasize;
exports["default"] = _default;
module.exports = exports.default;