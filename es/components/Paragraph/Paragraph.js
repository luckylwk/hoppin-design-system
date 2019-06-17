var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-size: ', ';\n  font-family: ', ';\n  line-height: ', ';\n  ', '\n  ', '\n  ', '\n'], ['\n  font-size: ', ';\n  font-family: ', ';\n  line-height: ', ';\n  ', '\n  ', '\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';
import { space, color, textAlign } from 'styled-system';
import propTypes from '@styled-system/prop-types';

var Paragraph = styled('p')(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.fontSizes.body || '1em';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.secondary || 'sans-serif';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.lineHeights.body || '1.4em';
}, textAlign, space, color);

Paragraph.propTypes = _extends({}, propTypes.space, propTypes.color, propTypes.textAlign);

Paragraph.defaultProps = {
  marginBottom: 3,
  color: 'inherit', // respond to context, if we're white on dark background or dark on light.
  textAlign: 'left'
};
export default Paragraph;