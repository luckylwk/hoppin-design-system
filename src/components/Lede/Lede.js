import React from 'react';
import styled from 'styled-components';
import { space, color, textAlign } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { Heading } from 'components/Heading';

const Lede = styled('p')`
  ${textAlign}
  ${space}
  ${color}

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  letter-spacing: 1px;
  line-height: ${({ theme }) => theme.lineHeights.base};

  ${Heading} + & {
    margin-top: 0;
  }
`;

Lede.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.textAlign,
};

Lede.defaultProps = {
  textAlign: 'left',
  color: 'inherit', // respond to context, if we're white on dark background or dark on light.
  marginX: 0,
  marginY: 'large',
};
export default Lede;
