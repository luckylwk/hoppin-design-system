import { Box } from '../Box';
import styled from 'styled-components';
import { flexbox } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Card = styled(Box)`
  border: 0px;
  border-top: 4px solid ${({ theme }) => theme.colors.primary.base};
  border-radius: ${({ theme }) => theme.radii.xsmall};
  box-shadow: ${({ theme, elevation }) => theme.shadows[elevation]};

  ${flexbox}
`;

Card.propTypes = {
  ...Box.propTypes,
  ...propTypes.flexbox,
};
Card.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  padding: ['xsmall', 'small'],
  flexGrow: 1,
  elevation: 3,
  bg: 'white',
};

Card.displayName = 'Card';
export default Card;
