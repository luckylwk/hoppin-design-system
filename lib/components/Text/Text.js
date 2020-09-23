"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("@styled-system/prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Text = (0, _styledComponents["default"])('span')(_styledSystem.typography, _styledSystem.space, _styledSystem.color
/*
  do we need layout and background props, too?
  or keep the component simple and looking after text only?
*/
);
Text.propTypes = _extends({}, _propTypes["default"].space, _propTypes["default"].color, _propTypes["default"].typography);
Text.defaultProps = {
  fontFamily: 'secondary',
  fontSize: 'inherit',
  color: 'inherit' // respond to context, if we're white on dark background or dark on light.

};
Text.displayName = 'Text';
var _default = Text;
exports["default"] = _default;
module.exports = exports.default;