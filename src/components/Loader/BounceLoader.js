import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// ---------------------------

const BounceKeyFrame = keyframes`
  0%, 100% {
    transform: scale(0)
  } 50% {
    transform: scale(1.0)
  }
`;

// ---------------------------

const BounceWrapper = styled.div`
  box-sizing: border-box;

  display: inline-block;
  position: relative;

  width: auto;
  min-height: ${({ size }) => size}px;

  margin: 0 auto;

  text-align: center;
`;

// ---------------------------

const Bounce = styled.div`
  display: inline-block;
  position: absolute;

  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  top: 0;
  left: -${({ size }) => parseInt(0.5 * size)}px;

  background-color: ${({ theme, context }) =>
    theme.colors[context] !== undefined
      ? theme.colors[context].light
      : theme.colors.neutral.light};
  opacity: 0.6;

  border-radius: 100%;

  animation-fill-mode: both;
  -webkit-animation: ${BounceKeyFrame} 2.1s infinite ease-in-out;
  -moz-animation: ${BounceKeyFrame} 2.1s infinite ease-in-out;
  animation: ${BounceKeyFrame} 2.1s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay};
`;

// ---------------------------

const BounceLoader = ({ size, context }) => {
  return (
    <BounceWrapper size={size}>
      <Bounce delay="0s" size={size} context={context} />
      <Bounce delay="-1s" size={size} context={context} />
    </BounceWrapper>
  );
};

BounceLoader.propTypes = {
  context: PropTypes.string,
  size: PropTypes.number,
};

BounceLoader.defaultProps = {
  context: 'neutral',
  size: 60,
};

BounceLoader.displayName = 'BounceLoader';

export default BounceLoader;
