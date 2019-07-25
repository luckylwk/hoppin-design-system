'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LinkStyled = require('./LinkStyled');

var _LinkStyled2 = _interopRequireDefault(_LinkStyled);

var _LinkUnstyled = require('./LinkUnstyled');

var _LinkUnstyled2 = _interopRequireDefault(_LinkUnstyled);

var _RoutedLinkStyled = require('./RoutedLinkStyled');

var _RoutedLinkStyled2 = _interopRequireDefault(_RoutedLinkStyled);

var _RoutedLinkUnstyled = require('./RoutedLinkUnstyled');

var _RoutedLinkUnstyled2 = _interopRequireDefault(_RoutedLinkUnstyled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Link = function Link(_ref) {
  var to = _ref.to,
      unstyled = _ref.unstyled,
      rest = _objectWithoutProperties(_ref, ['to', 'unstyled']);

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

  return isExternalUrl(to) ?
  // render unrouted Links for urls with a protocol
  unstyled ? _react2.default.createElement(_LinkUnstyled2.default, _extends({ href: to }, rest)) : _react2.default.createElement(_LinkStyled2.default, _extends({ href: to }, rest)) : // render routed Links for relative urls
  unstyled ? _react2.default.createElement(_RoutedLinkUnstyled2.default, _extends({ to: to }, rest)) : _react2.default.createElement(_RoutedLinkStyled2.default, _extends({ to: to }, rest));
};

Link.defaultProps = {
  unstyled: false
};

Link.displayName = 'Link';

exports.default = Link;
module.exports = exports['default'];