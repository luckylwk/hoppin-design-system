import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from './Card';

const CardSelectable = styled(Card)`
  border-top: ${({ borderTopWidth }) => borderTopWidth} solid
    ${({ selected, theme }) =>
      selected ? theme.colors.neutral.darkest : theme.colors.primary.base};
  box-shadow: ${({ theme }) => theme.shadows[1]};

  cursor: pointer;

  transition: all 0.5s;

  ${({ theme, selected }) =>
    selected
      ? `background: ${theme.colors.neutral.darker}; color: ${theme.colors.whiteout.lighter};`
      : ``}

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows[3]};
    transform: translateY(-1px);
  }
`;

CardSelectable.propTypes = {
  selected: PropTypes.bool,
  borderTopWidth: PropTypes.string,
};

CardSelectable.defaultProps = {
  selected: false,
  borderTopWidth: '2px',
};

CardSelectable.displayName = 'CardSelectable';

export default CardSelectable;
