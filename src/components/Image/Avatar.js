import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { Box } from '../Box';
import Tile from './Tile';

const Wrapper = styled(Box)`
  ${variant({
    variants: {
      small: { width: '24px', height: '24px' },
      icon: { width: '32px', height: '32px' },
      base: { width: '96px', height: '96px' },
    },
  })}
`;

const Avatar = ({ src, size, squared, ...rest }) => (
  <Wrapper size={size} {...rest}>
    <Tile src={src} variant="1/1" borderRadius={squared ? '12px' : '50%'} />
  </Wrapper>
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  variant: PropTypes.string,
  squared: PropTypes.bool,
};

Avatar.defaultProps = {
  variant: 'default',
  squared: false,
  display: 'inline-block',
};

Avatar.displayName = 'Avatar';

export default Avatar;
