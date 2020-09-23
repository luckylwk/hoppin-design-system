function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  font-family: ", ";\n  font-size: 1em;\n  cursor: pointer;\n  text-decoration: none;\n  padding: 0;\n\n  /* styled-system props */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { display, space, width, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, color } from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';
/**
 * Core LinkUnstyled component.
 */

var LinkUnstyled = styled.a(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, display, color, space, width, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order);
LinkUnstyled.propTypes = _extends({
  disabled: PropTypes.bool
}, systemPropTypes.display, systemPropTypes.space, systemPropTypes.width, systemPropTypes.flex, systemPropTypes.flexGrow, systemPropTypes.flexShrink, systemPropTypes.flexBasis, systemPropTypes.justifySelf, systemPropTypes.alignSelf, systemPropTypes.order);
LinkUnstyled.defaultProps = {
  display: 'inline-block',
  color: 'inherit'
};
LinkUnstyled.displayName = 'LinkUnstyled';
export default LinkUnstyled;