import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { Box } from '../Box';
import Tile from './Tile';

const Wrapper = styled(Box)`
  ${variant({
    prop: 'size',
    variants: {
      xsmall: { width: '16px', height: '16px' },
      small: { width: '24px', height: '24px' },
      icon: { width: '32px', height: '32px' },
      base: { width: '96px', height: '96px' },
      large: { width: '148px', height: '148px' },
      xlarge: { width: '196px', height: '196px' },
    },
  })}
`;

const Avatar = ({ src, size, squared, ...rest }) => (
  <Wrapper size={size} {...rest}>
    <Tile src={src} ratio="1/1" borderRadius={squared ? '12px' : '50%'} />
    {/* TODO: use border radius from theme, why 12px? */}
  </Wrapper>
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  squared: PropTypes.bool,
};

Avatar.defaultProps = {
  size: 'base',
  squared: false,
  display: 'inline-block',
};

Avatar.displayName = 'Avatar';

export default Avatar;
