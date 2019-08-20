import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { default as systemPropTypes } from '@styled-system/prop-types';
import propTypes from 'prop-types';

import { Box } from '../Box';

const ProgressBarWrapper = styled(Box)`
  position: ${({ alignTo }) => (alignTo === 'page' ? 'fixed' : 'absolute')};
  ${({ alignTo, theme }) =>
    alignTo === 'page' ? `z-index: ${theme.zIndexes.overlay}` : null};
  top: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.space.xsmall};
`;

const ProgressBarSlider = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ percent }) => percent}%;
  ${color};

  transition: all 400ms;
`;

const ProgressBar = ({ theme, bg, percent, ...rest }) => (
  <ProgressBarWrapper theme={theme} {...rest}>
    <ProgressBarSlider {...{ theme, bg, percent }} />
  </ProgressBarWrapper>
);

ProgressBar.defaultProps = {
  bg: 'primary.base',
  alignTo: 'page',
  percent: 0,
};

ProgressBar.propTypes = {
  ...systemPropTypes.color,
  /**
  `page` (fixed to the top of the page) or
  `component` (aligned with the closest parent with a set position attribute).
  */
  alignTo: propTypes.oneOf(['page', 'component']),
  /** 0-100 */
  percent: propTypes.number,
};

export default ProgressBar;
