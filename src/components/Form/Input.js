import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography, space } from 'styled-system';
import Label from './Label';

const InputField = styled.input`
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
    if (props.theme.colors[props.context] !== undefined) {
      return props.theme.colors[props.context].light;
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
      switch (props.context) {
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

InputField.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  context: PropTypes.string,
  name: PropTypes.string,
};

InputField.defaultProps = {
  disabled: false,
  type: 'text',
  context: 'neutral',
  fontSize: 'inherit',
  fontFamily: 'secondary',
  fontWeight: 'normal',
  marginBottom: 'base',
  paddingY: 'small',
  paddingX: 'base',
  color: 'neutral.base',
};

InputField.displayName = 'InputField';

const Input = ({ label, ...rest }) => {
  const Wrapper = label ? Label : Fragment;
  const wrapperProps = label ? { label, htmlFor: rest.name } : {};
  const inputProps = label ? { marginTop: 'small' } : {};
  return (
    <Wrapper {...wrapperProps}>
      {label}
      <InputField {...rest} {...inputProps} />
    </Wrapper>
  );
};
Input.propTypes = {
  /** supply a label prop and the InputField gets wrapped in a Label, omit it to render the InputField alone */
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  /** any text-like input type will work */
  type: PropTypes.string,
  /**
   * Provide context (any of colors.contexts) to change the outline color
   */
  context: PropTypes.string,
};

Input.defaultProps = {
  disabled: false,
  type: 'text',
  context: 'neutral',
};

Input.displayName = 'Input';

export default Input;
