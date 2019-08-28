var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import LinkStyled from './LinkStyled';
import LinkUnstyled from './LinkUnstyled';
import RoutedLinkStyled from './RoutedLinkStyled';
import RoutedLinkUnstyled from './RoutedLinkUnstyled';

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
  unstyled ? React.createElement(LinkUnstyled, _extends({ href: to }, rest)) : React.createElement(LinkStyled, _extends({ href: to }, rest)) : // render routed Links for relative urls
  unstyled ? React.createElement(RoutedLinkUnstyled, _extends({ to: to }, rest)) : React.createElement(RoutedLinkStyled, _extends({ to: to }, rest));
};

Link.defaultProps = {
  unstyled: false
};

Link.displayName = 'Link';

export default Link;