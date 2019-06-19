var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-family: ', ';\n  font-size: 1em;\n  cursor: pointer;\n  text-decoration: none;\n  padding: 0;\n\n  border: none;\n  border-bottom: 1px solid ', ';\n\n  color: ', ';\n\n  font-weight: ', ';\n  letter-spacing: 0.5px;\n\n  outline: none;\n\n  transition: all 0.5s;\n\n  &:hover {\n    transform: translateY(-1px);\n    text-shadow: ', ';\n  }\n\n  & + & {\n    margin-left: ', ';\n  }\n\n  /* styled-system props */\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  font-family: ', ';\n  font-size: 1em;\n  cursor: pointer;\n  text-decoration: none;\n  padding: 0;\n\n  border: none;\n  border-bottom: 1px solid ', ';\n\n  color: ', ';\n\n  font-weight: ', ';\n  letter-spacing: 0.5px;\n\n  outline: none;\n\n  transition: all 0.5s;\n\n  &:hover {\n    transform: translateY(-1px);\n    text-shadow: ', ';\n  }\n\n  & + & {\n    margin-left: ', ';\n  }\n\n  /* styled-system props */\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { display, space, width, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, get, variant } from 'styled-system';

import { Link as RouterLink } from 'react-router-dom';
import systemPropTypes from '@styled-system/prop-types';
import propTypes from 'prop-types';

/**
 * Core Link component.
 * needs react-router-dom as a peer dependency. So it will pick up withever version of react-router-dom you're using in the app.
 * This is to avoid version clashes. HDS does not bundle react-router-dom.
 * Use the `as` prop to replace the react-router-dom <Link/> with a standard <a/> tag for external links.
 */

var Link = styled(RouterLink)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, function (_ref2) {
  var theme = _ref2.theme,
      context = _ref2.context;

  var colors = get(theme.colors, context, theme.colors.primary);
  return colors.light;
}, function (_ref3) {
  var theme = _ref3.theme,
      context = _ref3.context;

  var colors = get(theme.colors, context, theme.colors.primary);
  return colors.darker;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.fontWeights.normal;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.shadows.small;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.space.small;
}, display, space, width, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order);

Link.propTypes = _extends({
  disabled: PropTypes.bool
}, systemPropTypes.buttonStyle, systemPropTypes.display, systemPropTypes.space, systemPropTypes.width, systemPropTypes.flex, systemPropTypes.flexGrow, systemPropTypes.flexShrink, systemPropTypes.flexBasis, systemPropTypes.justifySelf, systemPropTypes.alignSelf, systemPropTypes.order, {

  context: propTypes.oneOf(['primary', 'secondary', 'tertiary', 'hopper', 'host', 'danger'])
});

Link.defaultProps = {
  disabled: false,
  display: 'inline-block'
};

Link.displayName = 'Link';

export default Link;