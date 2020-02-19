import styled from 'styled-components';

import { Flex } from '../Flex';
import Button from './Button';

const ButtonGroup = styled(Flex)`
  ${({ theme, flexDirection }) => {
    if (flexDirection === 'row') {
      return `${Button}:not(:last-child) {
        margin-right: ${theme.space.small}
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
  flexWrap: 'wrap',
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
