"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("@styled-system/prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  vertical-align: middle;\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  width: 100%;\n  flex: 1 1 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Label = (0, _styledComponents["default"])('label')(_templateObject(), _styledSystem.typography, _styledSystem.space, _styledSystem.color, _styledSystem.position);
Label.propTypes = _extends({}, _propTypes["default"].space, _propTypes["default"].color, _propTypes["default"].typography);
Label.defaultProps = {
  lineHeight: 0,
  fontFamily: 'secondary',
  fontSize: 'label',
  fontWeight: 'medium',
  color: 'inherit',
  // respond to context, if we're white on dark background or dark on light.
  marginRight: 'large',
  position: 'relative'
};
Label.displayName = 'Label';
var _default = Label;
exports["default"] = _default;
module.exports = exports.default;