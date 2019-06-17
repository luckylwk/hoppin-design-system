var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n  ', '\n  ', '\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n'], ['\n  ', '\n  ', '\n  ', '\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';
import { variant, space, color } from 'styled-system';
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

var Heading = styled('h2')(_templateObject, headingStyles, space, color);

Heading.propTypes = _extends({}, propTypes.space, propTypes.color);

Heading.defaultProps = {
  as: 'h2',
  marginBottom: 'base',
  marginTop: 'xlarge'
};
export default Heading;