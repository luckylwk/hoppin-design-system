import React from 'react';
import styled from 'styled-components';
import {
  space,
  border,
  color,
  layout,
  textAlign,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  size,
  position,
  boxShadow,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Box = styled('div')(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  layout,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  color,
  border,
  textAlign,
  size,
  position,
  boxShadow
);

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.flex,
  ...propTypes.flexGrow,
  ...propTypes.flexShrink,
  ...propTypes.flexBasis,
  ...propTypes.justifySelf,
  ...propTypes.alignSelf,
  ...propTypes.order,
  ...propTypes.color,
  ...propTypes.border,
  ...propTypes.textAlign,
  ...propTypes.size,
  ...propTypes.position,
  ...propTypes.boxShadow,
};

Box.defaultProps = {
  display: 'block',
  flexGrow: 1,
};

Box.displayName = 'Box';

export default Box;
