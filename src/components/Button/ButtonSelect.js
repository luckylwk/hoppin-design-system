import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from './Button';

const ButtonSelect = styled(Button)`
  background: ${({ theme }) => theme.colors.whiteout.lightest};

  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.primary.darker};

  border: 0;
  border-radius: ${({ theme }) => theme.radii.xsmall};

  box-shadow: ${({ theme, elevation }) => theme.shadows[elevation]};

  cursor: pointer;

  transition: all ${({ theme }) => theme.motions.base};

  ${({ theme, selected }) =>
    selected
      ? `
    background: ${theme.colors.primary.darker};
    color: ${theme.colors.whiteout.lighter};
  `
      : ``}

  &:hover {
    box-shadow: ${({ theme, elevation }) => theme.shadows[elevation + 2]};
    transform: translateY(-1px);
  }
`;

ButtonSelect.propTypes = {
  selected: PropTypes.bool,
  elevation: PropTypes.number,
};

ButtonSelect.defaultProps = {
  selected: false,
  elevation: 1,
};

ButtonSelect.displayName = 'ButtonSelect';

export default ButtonSelect;
