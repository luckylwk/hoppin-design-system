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

const Paragraph = styled('p')`
  font-size: ${({ theme }) => theme.fontSizes.body || '1em'};
  font-family: ${({ theme }) => theme.fonts.secondary || 'sans-serif'};
  line-height: ${({ theme }) => theme.lineHeights.body || '1.4em'};
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
`;

Paragraph.propTypes = {
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

Paragraph.defaultProps = {
  marginTop: 0,
  marginBottom: 3,
  color: 'inherit', // respond to context, if we're white on dark background or dark on light.
  textAlign: 'left',
};

Paragraph.displayName = 'Paragraph';

export default Paragraph;
