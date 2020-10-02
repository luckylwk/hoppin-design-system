"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  font-family: ", ";\n  font-size: 1em;\n  cursor: pointer;\n  text-decoration: none;\n  padding: 0;\n\n  /* styled-system props */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

/**
 * Core LinkUnstyled component.
 */
var LinkUnstyled = _styledComponents["default"].a(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, _styledSystem.display, _styledSystem.color, _styledSystem.space, _styledSystem.width, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order);

LinkUnstyled.propTypes = _extends({
  disabled: _propTypes["default"].bool
}, _propTypes2["default"].display, _propTypes2["default"].space, _propTypes2["default"].width, _propTypes2["default"].flex, _propTypes2["default"].flexGrow, _propTypes2["default"].flexShrink, _propTypes2["default"].flexBasis, _propTypes2["default"].justifySelf, _propTypes2["default"].alignSelf, _propTypes2["default"].order);
LinkUnstyled.defaultProps = {
  display: 'inline-block',
  color: 'inherit'
};
LinkUnstyled.displayName = 'LinkUnstyled';
var _default = LinkUnstyled;
exports["default"] = _default;
module.exports = exports.default;