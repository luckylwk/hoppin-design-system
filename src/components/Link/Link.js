import React from 'react';

import LinkStyled from './LinkStyled';
import LinkUnstyled from './LinkUnstyled';
import RoutedLinkStyled from './RoutedLinkStyled';
import RoutedLinkUnstyled from './RoutedLinkUnstyled';

const Link = ({ to, unstyled, ...rest }) => {
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
  const isExternalUrl = (url) =>
    typeof url === 'string'
      ? url.indexOf('//') > -1 && url.indexOf('//') < 10 // can we find the protocol // early in the url?
      : false; // if there's no url, we can't know if it's external

  return isExternalUrl(to) ? (
    // render unrouted Links for urls with a protocol
    unstyled ? (
      <LinkUnstyled href={to} {...rest} />
    ) : (
      <LinkStyled href={to} {...rest} />
    )
  ) : // render routed Links for relative urls
  unstyled ? (
    <RoutedLinkUnstyled to={to} {...rest} />
  ) : (
    <RoutedLinkStyled to={to} {...rest} />
  );
};

Link.defaultProps = {
  unstyled: false,
};

Link.displayName = 'Link';

export default Link;
