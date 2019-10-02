import React from 'react';
import styled from 'styled-components';
import {
  space,
  layout,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  size,
  position,
} from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';

const Logo = styled.img.attrs(({ theme, size, context }) => ({
  src: theme[size][context],
}))`
  ${space}
  ${layout}
  ${flex}
  ${flexGrow}
  ${flexShrink}
  ${flexBasis}
  ${justifySelf}
  ${alignSelf}
  ${order}
  ${size}
  ${position}
`;

Logo.propTypes = {
  ...systemPropTypes.space,
  ...systemPropTypes.layout,
  ...systemPropTypes.flex,
  ...systemPropTypes.flexGrow,
  ...systemPropTypes.flexShrink,
  ...systemPropTypes.flexBasis,
  ...systemPropTypes.justifySelf,
  ...systemPropTypes.alignSelf,
  ...systemPropTypes.order,
  ...systemPropTypes.color,
  ...systemPropTypes.size,
  ...systemPropTypes.position,
  /** set to get a different size, defaults to 2rem */
  maxHeight: PropTypes.any,
  /** inherits context from design provider, override if needed */
  context: PropTypes.oneOf(['primary', 'shadower', 'host', 'whiteout']),
  /** full size logo or compact icon */
  size: PropTypes.oneOf(['logo', 'icon']),
};

Logo.defaultProps = {
  display: 'block',
  maxHeight: '2rem',
  maxWidth: '100%',
  marginRight: 'large',
  context: 'primary',
  size: 'logo',
};

Logo.displayName = 'Logo';

export default Logo;
