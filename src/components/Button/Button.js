import React from 'react';
import styled from 'styled-components';
import { space, color, flexbox } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Button = styled('button')(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  color,
  flexbox
);

Button.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.flexbox,
};
export default Button;
