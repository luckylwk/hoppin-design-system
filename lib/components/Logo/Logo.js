"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("@styled-system/prop-types"));

var _propTypes2 = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Logo = _styledComponents["default"].img.attrs(function (_ref) {
  var theme = _ref.theme,
      size = _ref.size,
      context = _ref.context;
  return {
    src: theme[size][context]
  };
})(_templateObject(), _styledSystem.space, _styledSystem.layout, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order, _styledSystem.size, _styledSystem.position);

Logo.propTypes = _extends({}, _propTypes["default"].space, _propTypes["default"].layout, _propTypes["default"].flex, _propTypes["default"].flexGrow, _propTypes["default"].flexShrink, _propTypes["default"].flexBasis, _propTypes["default"].justifySelf, _propTypes["default"].alignSelf, _propTypes["default"].order, _propTypes["default"].color, _propTypes["default"].size, _propTypes["default"].position, {
  /** set to get a different size, defaults to 2rem */
  maxHeight: _propTypes2["default"].any,

  /** inherits context from design provider, override if needed */
  context: _propTypes2["default"].oneOf(['primary', 'shadower', 'host', 'whiteout']),

  /** full size logo or compact icon */
  size: _propTypes2["default"].oneOf(['logo', 'icon'])
});
Logo.defaultProps = {
  display: 'block',
  maxHeight: '2rem',
  maxWidth: '100%',
  marginRight: 'large',
  context: 'primary',
  size: 'logo'
};
Logo.displayName = 'Logo';
var _default = Logo;
exports["default"] = _default;
module.exports = exports.default;