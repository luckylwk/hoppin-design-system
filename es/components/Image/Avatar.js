var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n\n  background-image: url(', ');\n  background-size: cover;\n  background-position: center;\n\n  border-radius: ', ';\n\n  width: ', ';\n  height: ', ';\n'], ['\n  ', '\n\n  background-image: url(', ');\n  background-size: cover;\n  background-position: center;\n\n  border-radius: ', ';\n\n  width: ', ';\n  height: ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout } from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';

import { Box } from '../Box';

var determineSize = function determineSize(_ref) {
  var size = _ref.size;

  switch (size) {
    case 'small':
      return '24px';
    case 'icon':
      return '32px';
    case 'base':
    default:
      return '96px';
  }
};

var Avatar = styled(Box)(_templateObject, layout, function (_ref2) {
  var src = _ref2.src;
  return src;
}, function (_ref3) {
  var squared = _ref3.squared;

  switch (squared) {
    case true:
      return '12px';
    case false:
    default:
      return '50%';
  }
}, determineSize, determineSize);

Avatar.propTypes = _extends({}, systemPropTypes.layout, {
  size: PropTypes.string,
  squared: PropTypes.bool
});

Avatar.defaultProps = {
  display: 'inline-block',
  size: 'default',
  squared: false
};

Avatar.displayName = 'Avatar';

export default Avatar;