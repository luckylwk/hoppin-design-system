function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  /* use styled-system variants defined in tokens/typography */\n  ", "\n  /* get color from theme to get dymanic context colors (host vs shadower)*/\n  ", "\n  /* allow color override with props */\n  ", "\n  /* other styled-system props */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n  & + & {\n    margin-top: 0 !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { variant, space, color, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, lineHeight, letterSpacing, textAlign } from 'styled-system';
import propTypes from '@styled-system/prop-types'; // using the variants in styled-system, we can set several css styles
// AND render the component as different HTML tags using the `as` prop of styled-components.
// https://styled-system.com/variants

var headingStyles = variant({
  // theme key for variant definitions
  scale: 'headings',
  // component prop
  prop: 'as',
  variants: {
    // can be blank to enable the new API
    primary: {}
  }
});
var Heading = styled('h2')(_templateObject(), headingStyles, function (_ref) {
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
}, color, space, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, lineHeight, letterSpacing, textAlign);
Heading.propTypes = _extends({}, propTypes.space, propTypes.color, propTypes.flex, propTypes.flexGrow, propTypes.flexShrink, propTypes.flexBasis, propTypes.justifySelf, propTypes.alignSelf, propTypes.order);
Heading.defaultProps = {
  as: 'h2',
  marginBottom: 'base',
  marginTop: 'xlarge',
  textAlign: 'inherit'
};
Heading.displayName = 'Heading';
export default Heading;