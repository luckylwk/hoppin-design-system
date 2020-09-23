function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  font-family: ", ";\n  font-weight: ", ";\n  letter-spacing: 0px;\n  line-height: ", ";\n\n  ", " + & {\n    margin-top: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { space, color, fontSize, textAlign, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { Heading } from '../Heading';
var Lede = styled('p')(_templateObject(), textAlign, space, color, fontSize, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontWeights.medium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.lineHeights.base;
}, Heading);
Lede.propTypes = _extends({}, propTypes.space, propTypes.color, propTypes.textAlign, propTypes.flex, propTypes.flexGrow, propTypes.flexShrink, propTypes.flexBasis, propTypes.justifySelf, propTypes.alignSelf, propTypes.order);
Lede.defaultProps = {
  textAlign: 'inherit',
  fontSize: 4,
  color: 'inherit',
  // respond to context, if we're white on dark background or dark on light.
  marginX: 0,
  marginY: 'large'
};
Lede.displayName = 'Lede';
export default Lede;