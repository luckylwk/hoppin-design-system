import React from 'react';
import styled from 'styled-components';
import { space, color, typography } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Label = styled('label')`
  display: inline-block;
  vertical-align: middle;

  ${typography}
  ${space}
  ${color}
`;

Label.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.typography,
};
Label.defaultProps = {
  lineHeight: 0,
  fontFamily: 'secondary',
  fontSize: 'label',
  color: 'inherit', // respond to context, if we're white on dark background or dark on light.
  marginRight: 'large',
};

Label.displayName = 'Label';
export default Label;
