"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Logo = _interopRequireDefault(require("./Logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LogoResponsive = function LogoResponsive(_ref) {
  var context = _ref.context,
      rest = _objectWithoutPropertiesLoose(_ref, ["context"]);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Logo["default"], _extends({
    size: "logo",
    context: context
  }, rest, {
    display: ['none', null, 'block']
  })), /*#__PURE__*/_react["default"].createElement(_Logo["default"], _extends({
    size: "icon",
    context: context,
    maxHeight: "1.25rem"
  }, rest, {
    display: ['block', null, 'none']
  })));
};

LogoResponsive.propTypes = process.env.NODE_ENV !== "production" ? {
  /** inherits context from design provider, override if needed */
  context: _propTypes["default"].oneOf(['primary', 'shadower', 'host'])
} : {};
LogoResponsive.defaultProps = {
  context: 'primary'
};
LogoResponsive.displayName = 'LogoResponsive';
var _default = LogoResponsive;
exports["default"] = _default;
module.exports = exports.default;