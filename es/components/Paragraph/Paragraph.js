function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  font-family: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { space, position, color, textAlign, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order } from 'styled-system';
import propTypes from '@styled-system/prop-types';
var Paragraph = styled('p')(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.fontSizes.body || '1em';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.secondary || 'sans-serif';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.lineHeights.body || '1.4em';
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.fontWeights.normal;
}, textAlign, space, position, color, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order);
Paragraph.propTypes = _extends({}, propTypes.space, propTypes.position, propTypes.color, propTypes.textAlign, propTypes.flex, propTypes.flexGrow, propTypes.flexShrink, propTypes.flexBasis, propTypes.justifySelf, propTypes.alignSelf, propTypes.order);
Paragraph.defaultProps = {
  marginTop: 0,
  marginBottom: 3,
  color: 'inherit',
  // respond to context, if we're white on dark background or dark on light.
  textAlign: 'inherit'
};
Paragraph.displayName = 'Paragraph';
export default Paragraph;