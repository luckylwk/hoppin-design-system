var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import styled from 'styled-components';
import { space, color, typography } from 'styled-system';
import propTypes from '@styled-system/prop-types';

var Text = styled('span')(typography, space, color
/*
  do we need layout and background props, too?
  or keep the component simple and looking after text only?
*/
);

Text.propTypes = _extends({}, propTypes.space, propTypes.color, propTypes.typography);

Text.defaultProps = {
  fontFamily: 'fonts.secondary',
  fontSize: 'inherit',
  color: 'inherit' // respond to context, if we're white on dark background or dark on light.
};

Text.displayName = 'Text';
export default Text;