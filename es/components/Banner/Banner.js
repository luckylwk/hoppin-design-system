function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n\n  background-position: ", ";\n  background-size: ", ";\n  background-repeat: ", ";\n\n  & > ", " {\n    color: ", ";\n    justify-content: center;\n    text-align: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import { Flex } from '../Flex';
import { Container } from '../Container';
import styled from 'styled-components';
import PropTypes from 'prop-types';
var Banner = styled(Flex)(_templateObject(), function (_ref) {
  var shadow = _ref.shadow,
      shadowColorStart = _ref.shadowColorStart,
      shadowColorEnd = _ref.shadowColorEnd,
      backgroundImage = _ref.backgroundImage;
  // switch shadow direction depending on shadow prop.
  var shadowCSS;

  switch (shadow) {
    case 'top':
      shadowCSS = "linear-gradient(to bottom, " + shadowColorStart + ", " + shadowColorEnd + ")";
      break;

    case 'right':
      shadowCSS = "linear-gradient(to left, " + shadowColorStart + ", " + shadowColorEnd + ")";
      break;

    case 'left':
      shadowCSS = "linear-gradient(to right, " + shadowColorStart + ", " + shadowColorEnd + ")";
      break;

    case 'none':
      shadowCSS = '';
      break;

    case 'bottom':
    default:
      shadowCSS = "linear-gradient(to top, " + shadowColorStart + ", " + shadowColorEnd + ")";
      break;
  }

  return "background-image: " + (shadowCSS ? shadowCSS + ", " : '') + " url(" + backgroundImage + ");";
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