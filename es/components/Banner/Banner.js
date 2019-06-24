var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n\n  background-position: ', ';\n  background-size: ', ';\n  background-repeat: ', ';\n\n  & > ', ' {\n    color: ', ';\n    justify-content: center;\n    text-align: center;\n  }\n'], ['\n  ', '\n\n  background-position: ', ';\n  background-size: ', ';\n  background-repeat: ', ';\n\n  & > ', ' {\n    color: ', ';\n    justify-content: center;\n    text-align: center;\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import { Flex } from '../Flex';
import { Container } from '../Container';
import styled from 'styled-components';
import PropTypes from 'prop-types';

var Banner = styled(Flex)(_templateObject, function (props) {
  // switch shadow direction depending on shadow prop.
  var shadow = void 0;
  switch (props.shadow) {
    case 'top':
      shadow = 'linear-gradient(to bottom,rgba(0,0,0,0.45),rgba(0,0,0,0))';
      break;
    case 'right':
      shadow = 'linear-gradient(to left,rgba(0,0,0,0.45),rgba(0,0,0,0))';
      break;
    case 'left':
      shadow = 'linear-gradient(to right,rgba(0,0,0,0.45),rgba(0,0,0,0))';
      break;
    case 'none':
      shadow = '';
    case 'bottom':
    default:
      shadow = 'linear-gradient(to top,rgba(0,0,0,0.45),rgba(0,0,0,0))';
      break;
  }

  return 'background-image: ' + shadow + ', url(' + props.backgroundImage + ');';
}, function (props) {
  return props.backgroundPosition;
}, function (props) {
  return props.backgroundSize;
}, function (props) {
  return props.backgroundRepeat;
}, Container, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
});

Banner.propTypes = _extends({}, Flex.propTypes, {
  /** Background image props, map to their CSS counterparts */
  backgroundImage: PropTypes.string,
  backgroundPosition: PropTypes.string,
  backgroundSize: PropTypes.string,
  backgroundRepeat: PropTypes.string,
  /** Shadow direction. Start from `left`, `bottom`,... or `none` */
  shadow: PropTypes.oneOf(['left', 'right', 'top', 'bottom', 'none'])
});

Banner.defaultProps = {
  display: 'flex',
  height: '85vh',
  flexDirection: 'column',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

Banner.displayName = 'Banner';
export default Banner;