var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n  ', '\n  ', '\n\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: ', ';\n  letter-spacing: 1px;\n  line-height: ', ';\n\n  ', ' + & {\n    margin-top: 0;\n  }\n'], ['\n  ', '\n  ', '\n  ', '\n\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: ', ';\n  letter-spacing: 1px;\n  line-height: ', ';\n\n  ', ' + & {\n    margin-top: 0;\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';
import { space, color, textAlign } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { Heading } from '../Heading';

var Lede = styled('p')(_templateObject, textAlign, space, color, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes[4];
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontWeights.normal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.lineHeights.base;
}, Heading);

Lede.propTypes = _extends({}, propTypes.space, propTypes.color, propTypes.textAlign);

Lede.defaultProps = {
  textAlign: 'left',
  color: 'inherit', // respond to context, if we're white on dark background or dark on light.
  marginX: 0,
  marginY: 'large'
};
export default Lede;