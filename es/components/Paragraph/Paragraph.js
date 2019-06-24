var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-size: ', ';\n  font-family: ', ';\n  line-height: ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  font-size: ', ';\n  font-family: ', ';\n  line-height: ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';
import { space, color, textAlign, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order } from 'styled-system';
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
}, textAlign, space, color, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order);

Paragraph.propTypes = _extends({}, propTypes.space, propTypes.color, propTypes.textAlign, propTypes.flex, propTypes.flexGrow, propTypes.flexShrink, propTypes.flexBasis, propTypes.justifySelf, propTypes.alignSelf, propTypes.order);

Paragraph.defaultProps = {
  marginTop: 0,
  marginBottom: 3,
  color: 'inherit', // respond to context, if we're white on dark background or dark on light.
  textAlign: 'left'
};

Paragraph.displayName = 'Paragraph';

export default Paragraph;