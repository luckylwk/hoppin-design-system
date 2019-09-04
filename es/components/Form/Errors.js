var _templateObject = _taggedTemplateLiteralLoose(['\n  background-color: #edf0f2;\n\n  border-left: 4px solid #dc3030;\n'], ['\n  background-color: #edf0f2;\n\n  border-left: 4px solid #dc3030;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import AlertIcon from 'react-feather/dist/icons/alert-triangle';

import { Text } from '../Text';
import { Box } from '../Box';

/**
 * Errors (array) will have the following structure:
 *
 * [ { msg: 'error message 1' }, { msg: 'error message 2' } ]
 */

var BoxDanger = styled(Box)(_templateObject);

var Errors = function Errors(_ref) {
  var errors = _ref.errors;
  return React.createElement(
    Box,
    null,
    errors.length > 0 && React.createElement(
      BoxDanger,
      { mt: 2, py: 2, px: 3 },
      React.createElement(
        Text,
        { display: 'block', style: { color: '#881B1B' }, 'data-cy': 'error' },
        errors[0].msg
      )
    )
  );
};

Errors.propTypes = process.env.NODE_ENV !== "production" ? {
  errors: PropTypes.array.isRequired
} : {};

Errors.defaultProps = {
  errors: [],
  onlyShowOne: true
};

Errors.displayName = 'Errors';

export default Errors;