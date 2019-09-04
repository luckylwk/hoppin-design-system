import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography, space } from 'styled-system';

const Input = styled.input`
  box-sizing: border-box;
  display: block;

  ${typography}
  ${space}

  background: ${props =>
    props.isFocused || !props.isEmpty
      ? props.theme.colors.whiteout.base
      : props.theme.colors.whiteout.lighter};

  border: 1px solid transparent;
  border-color: ${props => {
    if (props.theme.colors[props.state] !== undefined) {
      return props.theme.colors[props.state].light;
    } else {
      return props.theme.colors.neutral.light;
    }
  }};
  border-radius: ${({ theme }) => theme.radii.small};

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  &:focus {
    border-color: ${props => {
      switch (props.state) {
        case 'danger':
          return props.theme.colors.danger.base;
        case 'neutral':
        default:
          return props.theme.colors.primary.base;
      }
    }};
  }

  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 300;
    color: ${({ theme }) => theme.colors.neutral.light};
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  width: 100%;
  flex: 1 1 100%;
`;

Input.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  state: PropTypes.string,
};

Input.defaultProps = {
  disabled: false,
  type: 'text',
  state: 'neutral',
  fontSize: 'inherit',
  fontFamily: 'secondary',
  fontWeight: 'normal',
  marginBottom: 'base',
  paddingY: 'small',
  paddingX: 'base',
  color: 'neutral.base',
};

Input.displayName = 'Input';

export default Input;
