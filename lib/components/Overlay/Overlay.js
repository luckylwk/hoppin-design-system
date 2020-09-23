"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = require("../Box");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  z-index: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Overlay = (0, _styledComponents["default"])(_Box.Box)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.zIndices.overlay - 1;
});
Overlay.propTypes = {
  position: _propTypes["default"].string,
  opacity: _propTypes["default"].string,
  bg: _propTypes["default"].string
};
Overlay.defaultProps = {
  position: 'fixed',
  opacity: '0.97',
  bg: 'whiteout.lightest'
};
Overlay.displayName = 'Overlay';
var _default = Overlay;
exports["default"] = _default;
module.exports = exports.default;