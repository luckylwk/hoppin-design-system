import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputField from './InputField';
import Label from './Label';

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
  /** supply a label prop and the InputField gets wrapped in a Label, obit it to render the InputField alone */
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  /** any text-like input type will work */
  type: PropTypes.string,
  state: PropTypes.string,
};

Input.defaultProps = {
  disabled: false,
  type: 'text',
  state: 'neutral',
};

Input.displayName = 'Input';

export default Input;
