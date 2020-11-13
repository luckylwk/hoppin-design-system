import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { typography, space, border } from 'styled-system';

import { Box } from '../Box';
import { Label, RequiredText } from '.';

// ---------------------------

const InputField = styled.input`
  box-sizing: border-box;
  display: block;

  ${typography}
  line-height: 1em;

  ${space}
  ${border}

  ${({ theme, icon, iconPosition }) => {
    const padding = {
      top: theme.space.small,
      right: theme.space.base,
      bottom: theme.space.small,
      left: theme.space.base,
    };
    if (icon !== undefined) {
      padding[iconPosition] = '2.4rem';
    }
    return `padding: ${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`;
  }};

  background: ${({ theme, value }) =>
    value && value.length > 0
      ? theme.colors.form.focused.background
      : theme.colors.form.background};

  border-color: ${({ theme }) => theme.colors.form.border};

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  &:focus {
    border-color: ${({ theme, context }) => {
      switch (context) {
        case 'danger':
          return theme.colors.danger.base;
        case 'neutral':
        default:
          return theme.colors.form.focused.border;
      }
    }};
    background: ${({ theme }) => theme.colors.form.focused.background};
  }

  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.form.placeholder};
    line-height: 1em;
  }

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
  lineHeight: 'none',
  marginBottom: 'base',
  color: 'neutral.dark',
  borderWidth: 'base',
  borderStyle: 'solid',
  borderRadius: 'small',
};

InputField.displayName = 'InputField';

// ---------------------------

const Input = ({ label, required, theme, ...rest }) => {
  const { icon, iconPosition } = rest;
  // if we have a label, wrap input in label add margin-top to input, otherwise no wrapper
  const LabelOrFragment = label ? Label : Fragment;
  const labelProps = label ? { label, htmlFor: rest.name } : {};
  const inputProps = { ...(label && { marginTop: 'small' }) };
  // if we have an icon, we need to have a box gto position the icon
  const WrapperOrFragment = icon ? Box : Fragment;
  const wrapperProps = icon
    ? { position: 'relative', style: { fontSize: theme.fontSizes.label } }
    : {};
  const iconProps = {
    style: {
      position: 'absolute',
      top: '1.1em',
      [iconPosition]: theme.space.base,
    },
    color:
      (theme.colors[rest.context] && theme.colors[rest.context].base) ||
      theme.colors.neutral.base,
  };
  return (
    <LabelOrFragment {...labelProps}>
      {label}
      {label && required && <RequiredText>*required</RequiredText>}
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

export { InputField, Input };

export default withTheme(Input);
