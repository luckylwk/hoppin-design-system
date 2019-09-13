import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const DotKeyframes = keyframes`
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  margin: 0 auto;
  width: auto;

  text-align: center;
`;

const Dot = styled.div`
  display: inline-block;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin-top: -0.2rem;
  margin-right: 0.1rem;
  margin-bottom: 0.1rem;
  margin-left: 0.1rem;

  background-color: ${({ theme, context }) =>
    theme.colors[context] !== undefined
      ? theme.colors[context].light
      : theme.colors.neutral.light};

  border-radius: 100%;

  -webkit-animation: ${DotKeyframes} 1.4s infinite ease-in-out both;
  -moz-animation: ${DotKeyframes} 1.4s infinite ease-in-out both;
  animation: ${DotKeyframes} 1.4s infinite ease-in-out both;
  animation-delay: ${({ delay }) => delay};
`;

const Loader = ({ type, size }) => {
  return (
    <Wrapper>
      <Dot delay="-0.32s" type={type} size={size} />
      <Dot delay="-0.16s" type={type} size={size} />
      <Dot delay="0.0s" type={type} size={size} />
    </Wrapper>
  );
};

Loader.propTypes = {
  context: PropTypes.string,
  size: PropTypes.number,
};

Loader.defaultProps = {
  context: 'neutral',
  size: 16,
};

Loader.displayName = 'Loader';

export default Loader;
