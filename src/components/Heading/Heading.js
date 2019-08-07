import React from 'react';
import styled from 'styled-components';
import {
  variant,
  space,
  color,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  lineHeight,
  letterSpacing,
  textAlign,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';

// using the variants in styled-system, we can set several css styles
// AND render the component as different HTML tags using the `as` prop of styled-components.
// https://styled-system.com/variants

const headingStyles = variant({
  // theme key for variant definitions
  scale: 'headings',
  // component prop
  prop: 'as',
});

const Heading = styled('h2')`
  /* use styled-system variants defined in tokens/typography */
  ${headingStyles}
  /* get color from theme to get dymanic mode colors (host vs hopper)*/
  ${({ theme, as }) => {
    let colorCSS = '';
    switch (as) {
      case 'h1':
        colorCSS = `color: ${theme.colors.primary.base};`;
        break;
      case 'h2':
        colorCSS = `color: ${theme.colors.primary.base};`;
        break;
      case 'h3':
        colorCSS = `color: ${theme.colors.neutral.darker};`;
        break;
      case 'h4':
        colorCSS = `color: ${theme.colors.neutral.darker};`;
        break;
      case 'h5':
        colorCSS = `color: ${theme.colors.neutral.dark};`;
        break;
      case 'h6':
        colorCSS = `color: ${theme.colors.neutral.dark};`;
        break;
    }
    return colorCSS;
  }}
  /* allow color override with props */
  ${color}
  /* other styled-system props */
  ${space}
  ${flex}
  ${flexGrow}
  ${flexShrink}
  ${flexBasis}
  ${justifySelf}
  ${alignSelf}
  ${order}
  ${lineHeight}
  ${letterSpacing}
  ${textAlign}

  &:first-child {
    margin-top: 0;
  }

`;

Heading.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.flex,
  ...propTypes.flexGrow,
  ...propTypes.flexShrink,
  ...propTypes.flexBasis,
  ...propTypes.justifySelf,
  ...propTypes.alignSelf,
  ...propTypes.order,
};

Heading.defaultProps = {
  as: 'h2',
  marginBottom: 'base',
  marginTop: 'xlarge',
  textAlign: 'inherit',
};

Heading.displayName = 'Heading';

export default Heading;
