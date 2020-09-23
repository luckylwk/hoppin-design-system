"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _Box = require("../Box");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  align-self: center;\n  text-align: center;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var ChatMeta = (0, _styledComponents["default"])(_Box.Box)(_templateObject(), _styledSystem.typography);
ChatMeta.propTypes = _extends({}, _Box.Box.propTypes);
ChatMeta.defaultProps = {
  padding: ['xsmall', 'small'],
  marginY: ['xsmall', 'small'],
  flexGrow: 0,
  color: 'neutral.lighter',
  fontFamily: 'secondary',
  fontSize: 'label'
};
ChatMeta.displayName = 'ChatMeta';
var _default = ChatMeta;
exports["default"] = _default;
module.exports = exports.default;