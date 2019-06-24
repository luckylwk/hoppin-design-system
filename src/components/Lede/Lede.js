import React from 'react';
import styled from 'styled-components';
import {
  space,
  color,
  textAlign,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { Heading } from '../Heading';

const Lede = styled('p')`
  ${textAlign}
  ${space}
  ${color}
  ${flex}
  ${flexGrow}
  ${flexShrink}
  ${flexBasis}
  ${justifySelf}
  ${alignSelf}
  ${order}

  font-family: ${({ theme }) => theme.fonts.secondary};
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
  ...propTypes.flex,
  ...propTypes.flexGrow,
  ...propTypes.flexShrink,
  ...propTypes.flexBasis,
  ...propTypes.justifySelf,
  ...propTypes.alignSelf,
  ...propTypes.order,
};

Lede.defaultProps = {
  textAlign: 'inherit',
  color: 'inherit', // respond to context, if we're white on dark background or dark on light.
  marginX: 0,
  marginY: 'large',
};

Lede.displayName = 'Lede';

export default Lede;
