"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("@styled-system/prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  /* use styled-system variants defined in tokens/typography */\n  ", "\n  /* get color from theme to get dymanic context colors (host vs shadower)*/\n  ", "\n  /* allow color override with props */\n  ", "\n  /* other styled-system props */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n  & + & {\n    margin-top: 0 !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// using the variants in styled-system, we can set several css styles
// AND render the component as different HTML tags using the `as` prop of styled-components.
// https://styled-system.com/variants
var headingStyles = (0, _styledSystem.variant)({
  // theme key for variant definitions
  scale: 'headings',
  // component prop
  prop: 'as',
  variants: {
    // can be blank to enable the new API
    primary: {}
  }
});
var Heading = (0, _styledComponents["default"])('h2')(_templateObject(), headingStyles, function (_ref) {
  var colors = _ref.theme.colors,
      as = _ref.as;
  var colorCSS = '';

  switch (as) {
    case 'h1':
      colorCSS = "color: " + colors.primary.lightest + ";";
      break;

    case 'h2':
      colorCSS = "color: " + colors.secondary.darker + ";";
      break;

    case 'h3':
      colorCSS = "color: " + colors.primary.base + ";";
      break;

    case 'h4':
      colorCSS = "color: " + colors.secondary.darker + ";";
      break;

    case 'h5':
      colorCSS = "color: " + colors.primary.base + ";";
      break;

    case 'h6':
      colorCSS = "color: " + colors.secondary.darker + ";";
      break;

    default:
      colorCSS = "color: " + colors.primary.base + ";";
      break;
  }

  return colorCSS;
}, _styledSystem.color, _styledSystem.space, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order, _styledSystem.lineHeight, _styledSystem.letterSpacing, _styledSystem.textAlign);
Heading.propTypes = _extends({}, _propTypes["default"].space, _propTypes["default"].color, _propTypes["default"].flex, _propTypes["default"].flexGrow, _propTypes["default"].flexShrink, _propTypes["default"].flexBasis, _propTypes["default"].justifySelf, _propTypes["default"].alignSelf, _propTypes["default"].order);
Heading.defaultProps = {
  as: 'h2',
  marginBottom: 'base',
  marginTop: 'xlarge',
  textAlign: 'inherit'
};
Heading.displayName = 'Heading';
var _default = Heading;
exports["default"] = _default;
module.exports = exports.default;