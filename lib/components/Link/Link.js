"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _LinkStyled = _interopRequireDefault(require("./LinkStyled"));

var _LinkUnstyled = _interopRequireDefault(require("./LinkUnstyled"));

var _RoutedLinkStyled = _interopRequireDefault(require("./RoutedLinkStyled"));

var _RoutedLinkUnstyled = _interopRequireDefault(require("./RoutedLinkUnstyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Link = function Link(_ref) {
  var to = _ref.to,
      unstyled = _ref.unstyled,
      rest = _objectWithoutPropertiesLoose(_ref, ["to", "unstyled"]);

  // <Link to='http://somexternalwebsite.com'>
  // <Link unstyled={true} to='http://somewxternalwebsite.com'>
  // <Link to='/local/path'>
  // <Link unstyled={true} to='/local/path'>

  /* check for protocol
   * e.g.
   * - `http:// `
   * - `ftp://`
   * - `mailto://`
   * - `ws://`
   * - `//`
   */
  var isExternalUrl = function isExternalUrl(url) {
    return typeof url === 'string' ? url.indexOf('//') > -1 && url.indexOf('//') < 10 // can we find the protocol // early in the url?
    : false;
  }; // if there's no url, we can't know if it's external


  return isExternalUrl(to) ? // render unrouted Links for urls with a protocol
  unstyled ? /*#__PURE__*/_react["default"].createElement(_LinkUnstyled["default"], _extends({
    href: to
  }, rest)) : /*#__PURE__*/_react["default"].createElement(_LinkStyled["default"], _extends({
    href: to
  }, rest)) : // render routed Links for relative urls
  unstyled ? /*#__PURE__*/_react["default"].createElement(_RoutedLinkUnstyled["default"], _extends({
    to: to
  }, rest)) : /*#__PURE__*/_react["default"].createElement(_RoutedLinkStyled["default"], _extends({
    to: to
  }, rest));
};

Link.defaultProps = {
  unstyled: false
};
Link.displayName = 'Link';
var _default = Link;
exports["default"] = _default;
module.exports = exports.default;