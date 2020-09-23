function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border-left: 4px solid ", ";\n  border-radius: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '../Text';
import { Box } from '../Box';
import { Paragraph } from '../Paragraph'; // ---------------------------

var BoxDanger = styled(Box)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.danger.lightest;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.danger.base;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.radii.small;
}); // ---------------------------

var Errors = function Errors(_ref4) {
  var errors = _ref4.errors;
  return /*#__PURE__*/React.createElement(Box, null, errors.length > 0 && /*#__PURE__*/React.createElement(BoxDanger, {
    mt: 2,
    py: 2,
    px: 3
  }, /*#__PURE__*/React.createElement(Text, {
    display: "block",
    color: "error.darker",
    "data-cy": "error"
  }, errors.map(function (error) {
    return /*#__PURE__*/React.createElement(Paragraph, {
      marginBottom: 0,
      key: error.msg || error.message
    }, error.msg || error.message);
  }))));
};

Errors.propTypes = process.env.NODE_ENV !== "production" ? {
  /** [ { msg: 'Custom errors from the backend' }, new Error("And standard errors are supported") ] */
  errors: PropTypes.array.isRequired
} : {};
Errors.defaultProps = {
  errors: [],
  onlyShowOne: true
};
Errors.displayName = 'Errors';
export default Errors;