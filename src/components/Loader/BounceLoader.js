import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const BounceKeyFrame = keyframes`
  0%, 100% {
    transform: scale(0)
  } 50% {
    transform: scale(1.0)
  }
`;

const BounceWrapper = styled.div`
  box-sizing: border-box;

  display: inline-block;
  position: relative;

  width: auto;
  min-height: ${props => props.size}px;

  margin: 0 auto;

  text-align: center;
`;

const Bounce = styled.div`
  display: inline-block;
  position: absolute;

  height: ${props => props.size}px;
  width: ${props => props.size}px;
  top: 0;
  left: -${props => parseInt(0.5 * props.size)}px;

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
  animation-delay: ${props => props.delay};
`;

const BounceLoader = ({ type, size }) => {
  return (
    <BounceWrapper size={size}>
      <Bounce delay="0s" type={type} size={size} />
      <Bounce delay="-1s" type={type} size={size} />
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
