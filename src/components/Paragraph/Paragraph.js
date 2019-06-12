import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Paragraph = styled('p')`
  font-size: ${({theme}) => theme.fontSizes.body || '1em'};
  font-family: ${({theme}) => theme.fonts.secondary || 'sans-serif'};
  line-height: ${({theme}) => theme.lineHeights.body || '1.4em'};
  ${space}
  ${color}
`;

Paragraph.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
};

Paragraph.defaultProps = {
  marginBottom: 3,
  color: 'inherit' // respond to context, if we're white on dark background or dark on light.
}
export default Paragraph;
