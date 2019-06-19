var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  border: 0px;\n  border-top: 4px solid ', ';\n  border-radius: ', ';\n  box-shadow: ', ';\n\n  ', '\n'], ['\n  border: 0px;\n  border-top: 4px solid ', ';\n  border-radius: ', ';\n  box-shadow: ', ';\n\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import { Box } from '../Box';
import styled from 'styled-components';
import { flexbox } from 'styled-system';
import propTypes from '@styled-system/prop-types';

var Card = styled(Box)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary.base;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.radii.xsmall;
}, function (_ref3) {
  var theme = _ref3.theme,
      elevation = _ref3.elevation;
  return theme.shadows[elevation];
}, flexbox);

Card.propTypes = _extends({}, Box.propTypes, propTypes.flexbox);
Card.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  padding: ['xsmall', 'small'],
  flexGrow: 1,
  elevation: 3,
  bg: 'white'
};

export default Card;