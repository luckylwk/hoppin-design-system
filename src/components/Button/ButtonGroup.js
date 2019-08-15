import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Flex } from '../Flex';
import Button from './Button';

// import propTypes from 'prop-types';

/**
 * ButtonGroup component. Helps arrange groups of buttons
 */

const ButtonGroup = styled(Flex)`
  ${({ theme, flexDirection }) => {
    if (flexDirection === 'row') {
      return `${Button} + ${Button} {
        margin-left: ${theme.space.small};
      }`;
    } else {
      return `${Button} + ${Button} {
        margin-top: ${theme.space.small};
      }`;
    }
  }}
`;

ButtonGroup.propTypes = {};

ButtonGroup.defaultProps = {
  width: 1, // fill available space
  flexDirection: 'row', // horizontal row of buttons
  justifyContent: 'flex-start', // align left
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
