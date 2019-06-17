import React from 'react';
import styled from 'styled-components';
import { variant, space, color } from 'styled-system';
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
  ${headingStyles}
  ${space}
  ${color}

  &:first-child {
    margin-top: 0;
  }

`;

Heading.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
};

Heading.defaultProps = {
  as: 'h2',
  marginBottom: 'base',
  marginTop: 'xlarge',
};
export default Heading;
