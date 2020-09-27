import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Label, RequiredText } from '.';

const TextareaField = styled.textarea`
  box-sizing: border-box;
  display: block;

  width: 100%;

  appearance: none;
  outline: none;

  padding: 12px 16px;

  background: ${({ theme }) => theme.colors.whiteout.light};

  font-size: 18px;
  line-height: 26px;
  font-weight: 300;
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: 0.6px;
  color: ${({ theme }) => theme.colors.neutral.darker};

  border: 2px solid transparent;
  border-color: ${({ theme, context }) => theme.colors.whiteout.darker};
  border-radius: ${({ theme }) => theme.radii.small};

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  &:focus {
    border-color: ${({ theme, context, overrideBg }) =>
      overrideBg ? overrideBg : theme.colors.secondary.lighter};
    background: ${({ theme, initialValue }) =>
      initialValue && initialValue.length > 0
        ? theme.colors.whiteout.base
        : theme.colors.whiteout.light};
  }

  &::placeholder {
    color: #a7a7a7;
  }
`;

TextareaField.propTypes = {
  overrideBg: PropTypes.string,
};

TextareaField.defaultProps = {
  overrideBg: null,
};

TextareaField.displayName = 'TextareaField';

export default TextareaField;

const Textarea = ({ label, required, ...rest }) => {
  const LabelOrFragment = label ? Label : Fragment;
  const labelProps = label ? { label, htmlFor: rest.name } : {};
  const textareaProps = label ? { marginTop: 'small' } : {};
  return (
    <LabelOrFragment {...labelProps}>
      {label}
      {label && required && <RequiredText>*required</RequiredText>}
      <TextareaField {...rest} {...textareaProps} />
    </LabelOrFragment>
  );
};

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  /**
   * supply a label prop and the InputField gets wrapped in a Label, omit it to render the InputField alone
   * */
  label: PropTypes.string,

  /**
   * The initial value of the editor.
   */
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * A callback function that is fired whenever the content changes.
   */
  onChange: PropTypes.func,

  /**
   * Provide context (any of colors.contexts) to change the outline color
   */
  context: PropTypes.string,
};
