import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { variant } from 'styled-system';

import { Box } from '../Box';

// ---------------------------

const loadingKeyframes = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

// ---------------------------

const Skeleton = styled(Box)`
  box-sizing: border-box;
  position: relative;

  overflow: hidden;

  width: ${({ width }) => width};

  ${variant({
    prop: 'ratio',
    variants: {
      '4/5': { paddingTop: '125%' },
      '1/1': { paddingTop: '100%' },
      '3/2': { paddingTop: '66%' },
      '4/3': { paddingTop: '75%' },
      text: { paddingTop: '20px' },
      title: { paddingTop: '26px' },
    },
  })}

  background-color: #eee;

  &::after {
    display: block;
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    transform: translateX(-100%);

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.35),
      transparent
    );

    animation: ${loadingKeyframes} ${({ delay }) => delay} infinite;
  }
`;

Skeleton.propTypes = {
  ratio: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
  delay: PropTypes.string,
};

Skeleton.defaultProps = {
  ratio: '3/2',
  borderRadius: '3px',
  width: '100%',
  delay: '1.5s',
};

Skeleton.displayName = 'Skeleton';

export default Skeleton;
