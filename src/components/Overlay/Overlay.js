import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Box } from '../Box';

const Overlay = styled(Box)`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: ${({ theme }) => theme.zIndices.overlay - 1};
`;

Overlay.propTypes = {
  position: PropTypes.string,
  opacity: PropTypes.string,
  bg: PropTypes.string,
};

Overlay.defaultProps = {
  position: 'fixed',
  opacity: '0.97',
  bg: 'whiteout.lightest',
};

Overlay.displayName = 'Overlay';

export default Overlay;
