function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  ", "\n  ", "\n  font-family: ", ";\n  font-size: ", ";\n  text-transform: uppercase;\n  letter-spacing: 1px;\n\n  &::before {\n    content: '';\n    background-color: ", ";\n    width: 4px;\n    height: 4px;\n    border-radius: 2px;\n    vertical-align: middle;\n    -webkit-transform: translateY(-0.1rem);\n    transform: translateY(-0.1rem);\n    display: inline-block;\n    margin: 0 0.5rem;\n  }\n\n  &:first-of-type::before {\n    display: none;\n  }\n\n  & + ", " {\n    margin-top: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { space, color, get } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { Heading } from '../Heading';
var Tag = styled('span')(_templateObject(), space, color, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.label;
}, function (props) {
  return get(props, "theme.colors." + props.color, '#ddd');
}, Heading);
Tag.propTypes = _extends({}, propTypes.space, propTypes.color);
Tag.defaultProps = {
  color: 'neutral.light',
  marginTop: 'small',
  marginBottom: 0
};
Tag.displayName = 'Tag';
export default Tag;