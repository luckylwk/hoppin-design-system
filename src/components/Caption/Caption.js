import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { Heading } from 'components/Heading';

const Caption = styled('span')`
  display: block;
  ${space}
  ${color}
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.label};
  text-transform: uppercase;
  letter-spacing: 1px;

  & + ${Heading} {
    margin-top: 0;
  }
`;

Caption.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
};

Caption.defaultProps = {
  color: 'neutrals.light',
  marginTop: 'small',
  marginBottom: 0,
};
export default Caption;
