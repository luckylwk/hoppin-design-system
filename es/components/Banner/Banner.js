var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n\n  background-position: ', ';\n  background-size: ', ';\n  background-repeat: ', ';\n\n  & > ', ' {\n    color: ', ';\n    justify-content: center;\n    text-align: center;\n  }\n'], ['\n  ', '\n\n  background-position: ', ';\n  background-size: ', ';\n  background-repeat: ', ';\n\n  & > ', ' {\n    color: ', ';\n    justify-content: center;\n    text-align: center;\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import { Flex } from '../Flex';
import { Container } from '../Container';
import styled from 'styled-components';
import PropTypes from 'prop-types';

var Banner = styled(Flex)(_templateObject, function (_ref) {
  var shadow = _ref.shadow,
      shadowColorStart = _ref.shadowColorStart,
      shadowColorEnd = _ref.shadowColorEnd,
      backgroundImage = _ref.backgroundImage;

  // switch shadow direction depending on shadow prop.
  var shadowCSS = void 0;
  switch (shadow) {
    case 'top':
      shadowCSS = 'linear-gradient(to bottom, ' + shadowColorStart + ', ' + shadowColorEnd + ')';
      break;
    case 'right':
      shadowCSS = 'linear-gradient(to left, ' + shadowColorStart + ', ' + shadowColorEnd + ')';
      break;
    case 'left':
      shadowCSS = 'linear-gradient(to right, ' + shadowColorStart + ', ' + shadowColorEnd + ')';
      break;
    case 'none':
      shadowCSS = '';
      break;
    case 'bottom':
    default:
      shadowCSS = 'linear-gradient(to top, ' + shadowColorStart + ', ' + shadowColorEnd + ')';
      break;
  }

  return 'background-image: ' + (shadowCSS ? shadowCSS + ', ' : '') + ' url(' + backgroundImage + ');';
}, function (props) {
  return props.backgroundPosition;
}, function (props) {
  return props.backgroundSize;
}, function (props) {
  return props.backgroundRepeat;
}, Container, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
});

Banner.propTypes = _extends({}, Flex.propTypes, {
  /** Background image props, map to their CSS counterparts */
  backgroundImage: PropTypes.string,
  backgroundPosition: PropTypes.string,
  backgroundSize: PropTypes.string,
  backgroundRepeat: PropTypes.string,
  /** Shadow direction. Start from `left`, `bottom`,... or `none` */
  shadow: PropTypes.oneOf(['left', 'right', 'top', 'bottom', 'none']),
  shadowColorStart: PropTypes.string,
  shadowColorEnd: PropTypes.string
});

Banner.defaultProps = {
  display: 'flex',
  height: '85vh',
  flexDirection: 'column',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  // Shadow
  shadow: 'bottom',
  shadowColorStart: 'rgba(0,0,0,0.45)',
  shadowColorEnd: 'rgba(0,0,0,0)'
};

Banner.displayName = 'Banner';
export default Banner;