"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _Flex = require("../Flex");

var _Container = require("../Container");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n\n  background-position: ", ";\n  background-size: ", ";\n  background-repeat: ", ";\n\n  & > ", " {\n    color: ", ";\n    justify-content: center;\n    text-align: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Banner = (0, _styledComponents["default"])(_Flex.Flex)(_templateObject(), function (_ref) {
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
}, _Container.Container, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
});
Banner.propTypes = _extends({}, _Flex.Flex.propTypes, {
  /** Background image props, map to their CSS counterparts */
  backgroundImage: _propTypes["default"].string,
  backgroundPosition: _propTypes["default"].string,
  backgroundSize: _propTypes["default"].string,
  backgroundRepeat: _propTypes["default"].string,

  /** Shadow direction. Start from `left`, `bottom`,... or `none` */
  shadow: _propTypes["default"].oneOf(['left', 'right', 'top', 'bottom', 'none']),
  shadowColorStart: _propTypes["default"].string,
  shadowColorEnd: _propTypes["default"].string
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
var _default = Banner;
exports["default"] = _default;
module.exports = exports.default;