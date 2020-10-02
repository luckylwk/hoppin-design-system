"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 100%;\n  width: 1px;\n  background: ", ";\n  opacity: 0.2;\n  display: inline-block;\n  margin-left: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Separator = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.props.theme.colors.whiteout.lightest;
});

var _default = Separator;
exports["default"] = _default;
module.exports = exports.default;