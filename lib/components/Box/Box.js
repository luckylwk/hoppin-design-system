"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("@styled-system/prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Box = (0, _styledComponents["default"])('div')({
  boxSizing: 'border-box',
  minWidth: 0
}, _styledSystem.space, _styledSystem.layout, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order, _styledSystem.color, _styledSystem.border, _styledSystem.textAlign, _styledSystem.size, _styledSystem.position, _styledSystem.boxShadow);
Box.propTypes = _extends({}, _propTypes["default"].space, _propTypes["default"].layout, _propTypes["default"].flex, _propTypes["default"].flexGrow, _propTypes["default"].flexShrink, _propTypes["default"].flexBasis, _propTypes["default"].justifySelf, _propTypes["default"].alignSelf, _propTypes["default"].order, _propTypes["default"].color, _propTypes["default"].border, _propTypes["default"].textAlign, _propTypes["default"].size, _propTypes["default"].position, _propTypes["default"].boxShadow);
Box.defaultProps = {
  display: 'block',
  flexGrow: 1
};
Box.displayName = 'Box';
var _default = Box;
exports["default"] = _default;
module.exports = exports.default;