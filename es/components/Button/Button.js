var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import styled from 'styled-components';
import { space, color, flexbox } from 'styled-system';
import propTypes from '@styled-system/prop-types';

var Button = styled('button')({
  boxSizing: 'border-box',
  minWidth: 0
}, space, color, flexbox);

Button.propTypes = _extends({}, propTypes.space, propTypes.color, propTypes.flexbox);
export default Button;