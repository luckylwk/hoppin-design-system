import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';

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

import LogoFullColor from './LogoFullColor';
import IconFullColor from './IconFullColor';

const LogoBox = styled(Box)`
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

  & svg {
    max-width: 100%;
    height: 100%;

    .indigo {
      fill: ${({ baseColor, theme }) => theme.colors[baseColor]};
    }
    .cyan {
      fill: ${({ variant, baseColor, theme }) =>
        variant === 'fullcolor' ? theme.colors.cyan : theme.colors[baseColor]};
    }
    .orange {
      fill: ${({ variant, baseColor, theme }) =>
        variant === 'fullcolor'
          ? theme.colors.orange
          : theme.colors[baseColor]};
    }
  }
`;

LogoBox.propTypes = {
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
  /** set which version of the logo you'd like */
  variant: PropTypes.oneOf(['fullcolor', 'monochrome']),
  /** set which color variant  */
  baseColor: PropTypes.oneOf(['white', 'indigo']),
  /** full size logo or compact icon */
  size: PropTypes.oneOf(['logo', 'icon']),
};

LogoBox.defaultProps = {
  variant: 'fullcolor',
  display: 'block',
  height: '2rem',
  maxWidth: '100%',
  marginRight: 'large',
};

const Logo = ({ size, ...rest }) => {
  const logoElements = {
    logo: <LogoFullColor />,
    icon: <IconFullColor />,
  };

  return <LogoBox {...rest}>{logoElements[size] || logoElements.logo}</LogoBox>;
};

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
  height: PropTypes.any,
  /** set which version of the logo you'd like */
  variant: PropTypes.oneOf(['fullcolor', 'monochrome']),
  /** set which color variant  */
  baseColor: PropTypes.oneOf(['white', 'indigo']),
  /** full size logo or compact icon */
  size: PropTypes.oneOf(['logo', 'icon']),
};

Logo.defaultProps = {
  display: 'block',
  height: '2rem',
  maxWidth: '100%',
  marginRight: 'large',
  size: 'logo',
  variant: 'fullcolor',
  baseColor: 'indigo',
};

Logo.displayName = 'Logo';

export default Logo;
