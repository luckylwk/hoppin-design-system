import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { Box } from '../Box';

const Tile = styled(Box)`
  /* 
    Determine the sizing. It always fills the 
    width and adjusts the height accordingly 
  */
  width: 100%;

  ${variant({
    variants: {
      '1/1': { paddingTop: '100%' },
      '3/2': { paddingTop: '66%' },
      '4/3': { paddingTop: '75%' },
    },
  })}

  ${({ src }) =>
    src && src !== ''
      ? `background-image: url(${src});`
      : ''} 
  background-size: cover;
  background-position: center;
`;

Tile.propTypes = {
  src: PropTypes.string.isRequired,
  variant: PropTypes.string,
  borderRadius: PropTypes.string,
};

Tile.defaultProps = {
  variant: '1/1',
  borderRadius: '3px',
  bg: 'neutral.dark',
};

Tile.displayName = 'Tile';

export default Tile;
