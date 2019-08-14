var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  /* use styled-system variants defined in tokens/typography */\n  ', '\n  /* get color from theme to get dymanic context colors (host vs shadower)*/\n  ', '\n  /* allow color override with props */\n  ', '\n  /* other styled-system props */\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n'], ['\n  /* use styled-system variants defined in tokens/typography */\n  ', '\n  /* get color from theme to get dymanic context colors (host vs shadower)*/\n  ', '\n  /* allow color override with props */\n  ', '\n  /* other styled-system props */\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';
import { variant, space, color, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, lineHeight, letterSpacing, textAlign } from 'styled-system';
import propTypes from '@styled-system/prop-types';

// using the variants in styled-system, we can set several css styles
// AND render the component as different HTML tags using the `as` prop of styled-components.
// https://styled-system.com/variants

var headingStyles = variant({
  // theme key for variant definitions
  scale: 'headings',
  // component prop
  prop: 'as'
});

var Heading = styled('h2')(_templateObject, headingStyles, function (_ref) {
  var theme = _ref.theme,
      as = _ref.as;

  var colorCSS = '';
  switch (as) {
    case 'h1':
      colorCSS = 'color: ' + theme.colors.primary.base + ';';
      break;
    case 'h2':
      colorCSS = 'color: ' + theme.colors.primary.base + ';';
      break;
    case 'h3':
      colorCSS = 'color: ' + theme.colors.neutral.darker + ';';
      break;
    case 'h4':
      colorCSS = 'color: ' + theme.colors.neutral.darker + ';';
      break;
    case 'h5':
      colorCSS = 'color: ' + theme.colors.neutral.dark + ';';
      break;
    case 'h6':
      colorCSS = 'color: ' + theme.colors.neutral.dark + ';';
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