var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  ', '\n  ', '\n  font-family: ', ';\n  font-size: ', ';\n  text-transform: uppercase;\n  letter-spacing: 1px;\n\n  &::before {\n    content: \'\';\n    background-color: ', ';\n    width: 4px;\n    height: 4px;\n    border-radius: 2px;\n    vertical-align: middle;\n    -webkit-transform: translateY(-.1rem);\n    transform: translateY(-.1rem);\n    display: inline-block;\n    margin: 0 .5rem;\n  }\n\n  &:first-of-type::before {\n    display: none;\n  }\n\n  & + ', ' {\n    margin-top: 0;\n  }\n'], ['\n  display: inline-block;\n  ', '\n  ', '\n  font-family: ', ';\n  font-size: ', ';\n  text-transform: uppercase;\n  letter-spacing: 1px;\n\n  &::before {\n    content: \'\';\n    background-color: ', ';\n    width: 4px;\n    height: 4px;\n    border-radius: 2px;\n    vertical-align: middle;\n    -webkit-transform: translateY(-.1rem);\n    transform: translateY(-.1rem);\n    display: inline-block;\n    margin: 0 .5rem;\n  }\n\n  &:first-of-type::before {\n    display: none;\n  }\n\n  & + ', ' {\n    margin-top: 0;\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';
import { space, color, get } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { Heading } from '../Heading';

var Tag = styled('span')(_templateObject, space, color, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.label;
}, function (props) {
  return get(props, 'theme.colors.' + props.color, '#ddd');
}, Heading);

Tag.propTypes = _extends({}, propTypes.space, propTypes.color);

Tag.defaultProps = {
  color: 'neutrals.light',
  marginTop: 'small',
  marginBottom: 0
};
export default Tag;