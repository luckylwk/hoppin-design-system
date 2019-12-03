import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box } from '../Box';

const ASPECT_RATIOS = {
  '3/2': { paddingTop: '66%' },
  '4/3': { paddingTop: '75%' },
  '1/1': { paddingTop: '100%' },
};

const Tile = styled(Box)`
  /* 
    Determine the sizing. It always fills the 
    width and adjusts the height accordingly 
  */
  width: 100%;
  padding-top: ${({ ratio }) => ASPECT_RATIOS[ratio].paddingTop};

  background-color: ${({ theme }) => theme.colors.neutral.dark};
  ${({ src }) =>
    src && src !== ''
      ? `background-image: url(${src});`
      : ''} background-size: cover;
  background-position: center;
`;

Tile.propTypes = {
  src: PropTypes.string.isRequired,
  ratio: PropTypes.string,
  borderRadius: PropTypes.string,
};

Tile.defaultProps = {
  ratio: '1/1',
  borderRadius: '3px',
};

Tile.displayName = 'Tile';

export default Tile;
