import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const CircleKeyFrames = keyframes`
  0% {transform: rotate(0deg) scale(1)}
  50% {transform: rotate(180deg) scale(1)}
  100% {transform: rotate(360deg) scale(1)}
`;

const Circle = styled.div`
  background: transparent !important;

  width: ${props => props.size}px;
  height: ${props => props.size}px;

  border-radius: 100%;
  border: 2px solid;
  border-color: ${({ theme, context }) =>
    theme.colors[context] !== undefined
      ? theme.colors[context].light
      : theme.colors.neutral.light};
  border-bottom-color: transparent;

  display: inline-block;
  animation: ${CircleKeyFrames} 0.75s 0s infinite linear;
  animation-fill-mode: both;
`;

const CircleLoader = ({ type, size }) => {
  return <Circle type={type} size={size} />;
};

CircleLoader.propTypes = {
  context: PropTypes.string,
  size: PropTypes.number,
};

CircleLoader.defaultProps = {
  context: 'neutral',
  size: 60,
};

CircleLoader.displayName = 'CircleLoader';

export default CircleLoader;
