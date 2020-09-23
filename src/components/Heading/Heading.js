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
  variants: {
    // can be blank to enable the new API
    primary: {},
  },
});

const Heading = styled('h2')`
  /* use styled-system variants defined in tokens/typography */
  ${headingStyles}
  /* get color from theme to get dymanic context colors (host vs shadower)*/
  ${({ theme: { colors }, as }) => {
    let colorCSS = '';
    switch (as) {
      case 'h1':
        colorCSS = `color: ${colors.primary.base};`;
        break;
      case 'h2':
        colorCSS = `color: ${colors.secondary.darker};`;
        break;
      case 'h3':
        colorCSS = `color: ${colors.primary.base};`;
        break;
      case 'h4':
        colorCSS = `color: ${colors.secondary.darker};`;
        break;
      case 'h5':
        colorCSS = `color: ${colors.primary.base};`;
        break;
      case 'h6':
        colorCSS = `color: ${colors.secondary.darker};`;
        break;
      default:
        colorCSS = `color: ${colors.primary.base};`;
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

  & + & {
    margin-top: 0 !important;
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
