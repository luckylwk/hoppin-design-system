var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputField from './InputField';
import Label from './Label';

var Input = function Input(_ref) {
  var label = _ref.label,
      rest = _objectWithoutProperties(_ref, ['label']);

  var Wrapper = label ? Label : Fragment;
  var wrapperProps = label ? { label: label, htmlFor: rest.name } : {};
  var inputProps = label ? { marginTop: 'small' } : {};
  return React.createElement(
    Wrapper,
    wrapperProps,
    label,
    React.createElement(InputField, _extends({}, rest, inputProps))
  );
};
Input.propTypes = process.env.NODE_ENV !== "production" ? {
  /** supply a label prop and the InputField gets wrapped in a Label, omit it to render the InputField alone */
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  /** any text-like input type will work */
  type: PropTypes.string,
  state: PropTypes.string
} : {};

Input.defaultProps = {
  disabled: false,
  type: 'text',
  state: 'neutral'
};

Input.displayName = 'Input';

export default Input;