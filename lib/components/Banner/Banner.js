'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n\n  background-position: ', ';\n  background-size: ', ';\n  background-repeat: ', ';\n\n  & > ', ' {\n    color: ', ';\n    justify-content: center;\n    text-align: center;\n  }\n'], ['\n  ', '\n\n  background-position: ', ';\n  background-size: ', ';\n  background-repeat: ', ';\n\n  & > ', ' {\n    color: ', ';\n    justify-content: center;\n    text-align: center;\n  }\n']);

var _Flex = require('../Flex');

var _Container = require('../Container');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Banner = (0, _styledComponents2.default)(_Flex.Flex)(_templateObject, function (_ref) {
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
}, _Container.Container, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
});

Banner.propTypes = _extends({}, _Flex.Flex.propTypes, {
  /** Background image props, map to their CSS counterparts */
  backgroundImage: _propTypes2.default.string,
  backgroundPosition: _propTypes2.default.string,
  backgroundSize: _propTypes2.default.string,
  backgroundRepeat: _propTypes2.default.string,
  /** Shadow direction. Start from `left`, `bottom`,... or `none` */
  shadow: _propTypes2.default.oneOf(['left', 'right', 'top', 'bottom', 'none']),
  shadowColorStart: _propTypes2.default.string,
  shadowColorEnd: _propTypes2.default.string
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
exports.default = Banner;
module.exports = exports['default'];