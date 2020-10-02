"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _Box = require("../Box");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("@styled-system/prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Flex = (0, _styledComponents["default"])(_Box.Box)(_styledSystem.flexbox);
Flex.propTypes = _extends({}, _Box.Box.propTypes, _propTypes["default"].flexbox);
Flex.defaultProps = {
  display: 'flex'
};
Flex.displayName = 'Flex';
var _default = Flex;
exports["default"] = _default;
module.exports = exports.default;