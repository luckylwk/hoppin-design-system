import React from 'react';
import styled from 'styled-components';
import {
  space,
  border,
  color,
  layout,
  textAlign,
  flexGrow,
  flexShrink,
  flex,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Box = styled('div')(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  layout,
  flexGrow,
  flexShrink,
  flex,
  color,
  border,
  textAlign
);

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.flexGrow,
  ...propTypes.flexShrink,
  ...propTypes.flex,
  ...propTypes.color,
  ...propTypes.border,
  ...propTypes.textAlign,
};

Box.defaultProps = {
  display: 'block',
  flexGrow: 1,
};

Box.displayName = 'Box';

export default Box;
