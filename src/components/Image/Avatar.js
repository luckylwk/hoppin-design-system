import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box } from '../Box';
import Tile from './Tile';

const SIZES = {
  small: '24px',
  icon: '32px',
  base: '96px',
};

const Wrapper = styled(Box)`
  width: ${({ size }) => (SIZES[size] ? SIZES[size] : SIZES['base'])};
  height: ${({ size }) => (SIZES[size] ? SIZES[size] : SIZES['base'])};
`;

const Avatar = ({ src, size, squared, ...rest }) => (
  <Wrapper size={size} {...rest}>
    <Tile src={src} ratio="1/1" borderRadius={squared ? '12px' : '50%'} />
  </Wrapper>
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  squared: PropTypes.bool,
  display: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'default',
  squared: false,
  display: 'inline-block',
};

Avatar.displayName = 'Avatar';

export default Avatar;
