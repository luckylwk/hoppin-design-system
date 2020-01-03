'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  /* use styled-system variants defined in tokens/typography */\n  ', '\n  /* get color from theme to get dymanic context colors (host vs shadower)*/\n  ', '\n  /* allow color override with props */\n  ', '\n  /* other styled-system props */\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n'], ['\n  /* use styled-system variants defined in tokens/typography */\n  ', '\n  /* get color from theme to get dymanic context colors (host vs shadower)*/\n  ', '\n  /* allow color override with props */\n  ', '\n  /* other styled-system props */\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('@styled-system/prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

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

var Heading = (0, _styledComponents2.default)('h2')(_templateObject, headingStyles, function (_ref) {
  var colors = _ref.theme.colors,
      as = _ref.as;

  var colorCSS = '';
  switch (as) {
    case 'h1':
      colorCSS = 'color: ' + colors.primary.base + ';';
      break;
    case 'h2':
      colorCSS = 'color: ' + colors.primary.base + ';';
      break;
    case 'h3':
      colorCSS = 'color: ' + colors.neutral.darker + ';';
      break;
    case 'h4':
      colorCSS = 'color: ' + colors.neutral.darker + ';';
      break;
    case 'h5':
      colorCSS = 'color: ' + colors.neutral.dark + ';';
      break;
    case 'h6':
      colorCSS = 'color: ' + colors.neutral.dark + ';';
      break;
    default:
      colorCSS = 'color: ' + colors.primary.base + ';';
      break;
  }
  return colorCSS;
}, _styledSystem.color, _styledSystem.space, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order, _styledSystem.lineHeight, _styledSystem.letterSpacing, _styledSystem.textAlign);

Heading.propTypes = _extends({}, _propTypes2.default.space, _propTypes2.default.color, _propTypes2.default.flex, _propTypes2.default.flexGrow, _propTypes2.default.flexShrink, _propTypes2.default.flexBasis, _propTypes2.default.justifySelf, _propTypes2.default.alignSelf, _propTypes2.default.order);

Heading.defaultProps = {
  as: 'h2',
  marginBottom: 'base',
  marginTop: 'xlarge',
  textAlign: 'inherit'
};

Heading.displayName = 'Heading';

exports.default = Heading;
module.exports = exports['default'];