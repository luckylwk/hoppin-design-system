import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Box } from '../Box';

import Color from 'color';

// ---------------------------

const Overlay = styled(Box)`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: ${({ theme }) => theme.zIndices.overlay - 1};

  background-color: ${({ theme }) =>
    Color(theme.colors.whiteout.lightest)
      .alpha(0.9)
      .string()};
`;

Overlay.propTypes = {
  position: PropTypes.string,
  opacity: PropTypes.string,
};

Overlay.defaultProps = {
  position: 'fixed',
  opacity: '0.97',
};

Overlay.displayName = 'Overlay';

// ---------------------------

const NavOverlay = styled(Overlay)`
  height: 100vh;
  width: 100vw;

  transform: translate3d(-100vw, 0, 0);
  opacity: 0;
  transition: opacity 0.5s;

  &.isExpanded {
    transform: translate3d(0vw, 0, 0);
    opacity: 1;
  }
`;

NavOverlay.displayName = 'NavOverlay';

// ---------------------------

export default Overlay;

export { NavOverlay };
