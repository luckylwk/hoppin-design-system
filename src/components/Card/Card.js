import React from 'react';
import { Box } from '../Box';
import styled from 'styled-components';
import { flexbox } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Card = styled(Box)`
  border: 0px;
  border-top: 4px solid ${({ theme }) => theme.colors.primary.base};
  border-radius: 5px;
  box-shadow: ${({ theme, elevation }) => theme.shadows[elevation]};

  ${flexbox}
`;

Card.propTypes = {
  ...Box.propTypes,
  ...propTypes.flexbox,
};
Card.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  padding: ['tiny', 'small'],
  flexGrow: 1,
  elevation: 3,
  bg: 'white',
};

export default Card;
