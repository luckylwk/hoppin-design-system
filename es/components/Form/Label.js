function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  vertical-align: middle;\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  width: 100%;\n  flex: 1 1 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { space, color, typography, position } from 'styled-system';
import propTypes from '@styled-system/prop-types';
var Label = styled('label')(_templateObject(), typography, space, color, position);
Label.propTypes = _extends({}, propTypes.space, propTypes.color, propTypes.typography);
Label.defaultProps = {
  lineHeight: 0,
  fontFamily: 'secondary',
  fontSize: 'label',
  fontWeight: 'medium',
  color: 'inherit',
  // respond to context, if we're white on dark background or dark on light.
  marginRight: 'large',
  position: 'relative'
};
Label.displayName = 'Label';
export default Label;