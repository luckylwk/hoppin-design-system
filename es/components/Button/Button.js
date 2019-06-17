var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: 0;\n  padding: ', ' ', ' ', ';\n\n  font-family: ', ';\n\n  background: ', ';\n\n  color: ', ';\n  cursor: pointer;\n\n  border: 1px solid transparent;\n  border-radius: 1em;\n  border-color: ', ';\n\n  & [role=\'img\'] {\n    display: inline-block;\n    margin: .25em auto -.25em;\n  }\n\n  @media (min-width: 769px) {\n    &:hover {\n      border-color: ', ';\n    }\n  }\n\n  font-weight: 600;\n  \n  outline: none;\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  margin: 0;\n  padding: ', ' ', ' ', ';\n\n  font-family: ', ';\n\n  background: ', ';\n\n  color: ', ';\n  cursor: pointer;\n\n  border: 1px solid transparent;\n  border-radius: 1em;\n  border-color: ', ';\n\n  & [role=\'img\'] {\n    display: inline-block;\n    margin: .25em auto -.25em;\n  }\n\n  @media (min-width: 769px) {\n    &:hover {\n      border-color: ', ';\n    }\n  }\n\n  font-weight: 600;\n  \n  outline: none;\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { display, space, color, width, flex, fontSize, fontWeight, textAlign, lineHeight, alignSelf, order } from 'styled-system';

/**
 * Core Button component. Allows for rendering different
 * styles using the `type` prop.
 */

var Button = styled.button(_templateObject, function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.theme.space[4];
}, function (props) {
  return props.theme.space[2];
}, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, function (props) {
  switch (props.type) {
    case 'primary':
      return props.theme.colors.primary;
    case 'host':
      return props.theme.colors.host;
    case 'tertiary':
    case 'negative':
      return 'transparent';
    case 'danger':
      return props.theme.colors.danger;
    case 'host_secondary':
    case 'secondary':
    default:
      return props.theme.colors.white;
  }
}, function (props) {
  switch (props.type) {
    case 'primary':
    case 'danger':
    case 'host':
      return props.theme.colors.white;
    case 'host_secondary':
      return props.theme.colors.host;
    case 'negative':
      return props.theme.colors.danger;
    case 'tertiary':
      return props.theme.colors.grey_light;
    case 'secondary':
    default:
      return props.theme.colors.primary;
  }
}, function (props) {
  switch (props.type) {
    case 'primary':
    case 'secondary':
      return props.theme.colors.primary;
    case 'host':
    case 'host_secondary':
      return props.theme.colors.host;
    case 'tertiary':
      return 'transparent';
    case 'danger':
      return props.theme.colors.danger;
    case 'negative':
      return props.theme.colors.danger;
    default:
      return props.theme.colors.primary;
  }
}, function (props) {
  switch (props.type) {
    case 'primary':
      return props.theme.colors.secondary;
    case 'secondary':
      return props.theme.colors.primary;
    case 'host':
    case 'host_secondary':
      return props.theme.colors.secondary;
    default:
      return props.theme.colors.primary;
  }
}, display, space, color, width, flex, fontSize, fontWeight, textAlign, lineHeight, alignSelf, order);

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string
};

Button.defaultProps = {
  disabled: false,
  type: 'secondary'
};

Button.displayName = 'Button';

export default Button;