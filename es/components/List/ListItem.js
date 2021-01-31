var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-size: ', ';\n  font-family: ', ';\n  line-height: ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  position: relative;\n  padding-left: ', ';\n\n  ', ' & svg {\n    color: ', ';\n\n    position: absolute;\n    top: 0.2em;\n    left: -', ';\n    width: 1em;\n    height: 1em;\n  }\n\n  ', ' & svg {\n    display: none;\n  }\n\n  ', ' &:before {\n    counter-increment: list;\n    content: counter(list);\n    position: absolute;\n    top: 0;\n    left: -', ';\n    color: ', ';\n    font-weight: ', ';\n  }\n'], ['\n  font-size: ', ';\n  font-family: ', ';\n  line-height: ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  position: relative;\n  padding-left: ', ';\n\n  ', ' & svg {\n    color: ', ';\n\n    position: absolute;\n    top: 0.2em;\n    left: -', ';\n    width: 1em;\n    height: 1em;\n  }\n\n  ', ' & svg {\n    display: none;\n  }\n\n  ', ' &:before {\n    counter-increment: list;\n    content: counter(list);\n    position: absolute;\n    top: 0;\n    left: -', ';\n    color: ', ';\n    font-weight: ', ';\n  }\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';
import { space, color, textAlign, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order } from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';
import propTypes from 'prop-types';

import OrderedList from './OrderedList';
import UnorderedList from './UnorderedList';

import { FiCircle, FiCheckCircle, FiChevronRight } from 'react-icons/fi';

var ListItemWrapper = styled('li')(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.fontSizes.body || '1em';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.secondary || 'sans-serif';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.lineHeights.body || '1.4em';
}, textAlign, space, color, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, function (_ref4) {
  var theme = _ref4.theme;
  return theme.space.base;
}, UnorderedList, function (_ref5) {
  var variant = _ref5.variant,
      theme = _ref5.theme;
  return variant === 'unchecked' ? theme.colors.neutral.light : theme.colors.primary.base;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.space.base;
}, OrderedList, OrderedList, function (_ref7) {
  var theme = _ref7.theme;
  return theme.space.base;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.primary.base;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.fontWeights.bold;
});

ListItemWrapper.propTypes = _extends({}, systemPropTypes.space, systemPropTypes.position, systemPropTypes.color, systemPropTypes.textAlign, systemPropTypes.flex, systemPropTypes.flexGrow, systemPropTypes.flexShrink, systemPropTypes.flexBasis, systemPropTypes.justifySelf, systemPropTypes.alignSelf, systemPropTypes.order, {
  variant: propTypes.oneOf(['bullet', 'checked', 'unchecked'])
});

ListItemWrapper.defaultProps = {
  marginTop: 0,
  marginBottom: 3,
  color: 'inherit', // respond to context, if we're white on dark background or dark on light.
  textAlign: 'inherit',
  variant: 'bullet'
};

ListItemWrapper.displayName = 'ListItemWrapper';

var ListItem = function ListItem(_ref10) {
  var variant = _ref10.variant,
      children = _ref10.children,
      rest = _objectWithoutProperties(_ref10, ['variant', 'children']);

  var Bullet = variant === 'unchecked' ? FiCircle : variant === 'checked' ? FiCheckCircle : FiChevronRight;
  return React.createElement(
    ListItemWrapper,
    _extends({ variant: variant }, rest),
    React.createElement(Bullet, null),
    ' ',
    children
  );
};
ListItem.displayName = 'ListItem';

export default ListItem;