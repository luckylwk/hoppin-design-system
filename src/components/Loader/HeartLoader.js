// From: https://loading.io/css/

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const HeartKeyFrames = keyframes`
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
`;

const Wrapper = styled.div`
  display: inline-block;

  position: relative;

  width: ${({ size }) => Math.round(2 * size)}px;
  height: ${({ size }) => Math.round(2 * size)}px;

  transform: rotate(45deg);
  transform-origin: ${({ size }) => Math.round(0.66 * size)}px;
  ${({ size }) => Math.round(0.66 * size)}px;
`;

const Heart = styled.div`
  display: block;
  position: absolute;
  
  top: ${({ size }) => Math.round(0.66 * size)}px;
  left: ${({ size }) => Math.round(0.66 * size)}px;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  
  background-color: ${({ theme, context }) =>
    theme.colors[context] !== undefined
      ? theme.colors[context].light
      : theme.colors.neutral.light};
  
  animation: ${HeartKeyFrames} 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-delay: ${({ delay }) => delay};

  &:after,
  &:before {
    content: " ";
    position: absolute;
    display: block;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background-color: ${({ theme, context }) =>
      theme.colors[context] !== undefined
        ? theme.colors[context].light
        : theme.colors.neutral.light};
  }

  &:before {
    left: -${({ size }) => Math.round(0.5 * size)}px;
    border-radius: 50% 0 0 50%;
  }

  &:after {
    top: -${({ size }) => Math.round(0.5 * size)}px
    border-radius: 50% 50% 0 0;
  }
`;

const HeartLoader = ({ size, context }) => (
  <Wrapper size={size}>
    <Heart delay="0s" size={size} context={context} />
  </Wrapper>
);

HeartLoader.propTypes = {
  context: PropTypes.string,
  size: PropTypes.number,
};

HeartLoader.defaultProps = {
  context: 'neutral',
  size: 32,
};

HeartLoader.displayName = 'HeartLoader';

export default HeartLoader;
