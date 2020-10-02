function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border: 0px;\n\n  border-top-width: ", ";\n  border-style: solid;\n  border-top-color: ", ";\n  border-radius: ", ";\n\n  box-shadow: ", ";\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { flexbox } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { Box } from '../Box';
var Card = styled(Box)(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      borderWidth = _ref.borderWidth;
  return theme.borderWidths[borderWidth] ? theme.borderWidths[borderWidth] : theme.borderWidths['large'];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary.base;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.radii.xsmall;
}, function (_ref4) {
  var theme = _ref4.theme,
      elevation = _ref4.elevation;
  return theme.shadows[elevation];
}, flexbox);
Card.propTypes = _extends({}, Box.propTypes, propTypes.flexbox);
Card.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  padding: ['xsmall', 'small'],
  flexGrow: 1,
  elevation: 3,
  bg: 'white',
  borderWidth: 'large'
};
Card.displayName = 'Card';
export default Card;