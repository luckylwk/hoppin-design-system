import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { typography, space } from 'styled-system';
import Label from './Label';
import { Box } from '../Box';

const InputField = styled.input`
  box-sizing: border-box;
  display: block;

  ${typography}
  ${space}

  ${({ theme, icon, iconPosition }) => {
    const padding = {
      top: theme.space.small,
      right: theme.space.base,
      bottom: theme.space.small,
      left: theme.space.base,
    };
    if (icon !== undefined) {
      padding[iconPosition] = '2.7rem';
    }
    return `padding: ${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`;
  }};

  background: ${props =>
    props.isFocused || (props.value && props.value.length > 0)
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
  fontSize: 'body',
  fontFamily: 'secondary',
  fontWeight: 'normal',
  lineHeight: 1,
  marginBottom: 'base',
  color: 'neutral.base',
};

InputField.displayName = 'InputField';

const Input = ({ label, theme, ...rest }) => {
  const { icon, iconPosition } = rest;
  // if we have a label, wrap input in label add margin-top to input, otherwise no wrapper
  const LabelOrFragment = label ? Label : Fragment;
  const labelProps = label ? { label, htmlFor: rest.name } : {};
  const inputProps = label ? { marginTop: 'small' } : {};
  // if we have an icon, we need to have a box gto position the icon
  const WrapperOrFragment = icon ? Box : Fragment;
  const wrapperProps = icon ? { position: 'relative' } : {};
  const iconProps = {
    style: {
      position: 'absolute',
      top: '0.75em',
      [iconPosition]: theme.space.base,
    },
    color:
      (theme.colors[rest.context] && theme.colors[rest.context].base) ||
      theme.colors.neutral.base,
  };

  return (
    <LabelOrFragment {...labelProps}>
      {label}
      <WrapperOrFragment {...wrapperProps}>
        <InputField {...rest} {...inputProps} />
        {icon && React.cloneElement(icon, iconProps)}
      </WrapperOrFragment>
    </LabelOrFragment>
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
  /**
   * Provide icon to be rendered in the input field (optional)
   */
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

Input.defaultProps = {
  disabled: false,
  type: 'text',
  context: 'neutral',
  iconPosition: 'left',
};

Input.displayName = 'Input';

export default withTheme(Input);
