function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  & svg {\n    max-width: 100%;\n    height: 100%;\n\n    .indigo {\n      fill: ", ";\n    }\n    .cyan {\n      fill: ", ";\n    }\n    .orange {\n      fill: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';
import { space, layout, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, size, position } from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import LogoFullColor from './LogoFullColor';
import IconFullColor from './IconFullColor';
var LogoBox = styled(Box)(_templateObject(), space, layout, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, size, position, function (_ref) {
  var baseColor = _ref.baseColor,
      theme = _ref.theme;
  return theme.colors[baseColor];
}, function (_ref2) {
  var variant = _ref2.variant,
      baseColor = _ref2.baseColor,
      theme = _ref2.theme;
  return variant === 'fullcolor' ? theme.colors.cyan : theme.colors[baseColor];
}, function (_ref3) {
  var variant = _ref3.variant,
      baseColor = _ref3.baseColor,
      theme = _ref3.theme;
  return variant === 'fullcolor' ? theme.colors.orange : theme.colors[baseColor];
});
LogoBox.propTypes = _extends({}, systemPropTypes.space, systemPropTypes.layout, systemPropTypes.flex, systemPropTypes.flexGrow, systemPropTypes.flexShrink, systemPropTypes.flexBasis, systemPropTypes.justifySelf, systemPropTypes.alignSelf, systemPropTypes.order, systemPropTypes.color, systemPropTypes.size, systemPropTypes.position, {
  /** set to get a different size, defaults to 2rem */
  maxHeight: PropTypes.any,

  /** set which version of the logo you'd like */
  variant: PropTypes.oneOf(['fullcolor', 'monochrome']),

  /** set which color variant  */
  baseColor: PropTypes.oneOf(['white', 'indigo']),

  /** full size logo or compact icon */
  size: PropTypes.oneOf(['logo', 'icon'])
});
LogoBox.defaultProps = {
  variant: 'fullcolor',
  display: 'block',
  height: '2rem',
  maxWidth: '100%',
  marginRight: 'large'
};

var Logo = function Logo(_ref4) {
  var size = _ref4.size,
      rest = _objectWithoutPropertiesLoose(_ref4, ["size"]);

  var logoElements = {
    logo: /*#__PURE__*/React.createElement(LogoFullColor, null),
    icon: /*#__PURE__*/React.createElement(IconFullColor, null)
  };
  return /*#__PURE__*/React.createElement(LogoBox, rest, logoElements[size] || logoElements.logo);
};

Logo.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, systemPropTypes.space, systemPropTypes.layout, systemPropTypes.flex, systemPropTypes.flexGrow, systemPropTypes.flexShrink, systemPropTypes.flexBasis, systemPropTypes.justifySelf, systemPropTypes.alignSelf, systemPropTypes.order, systemPropTypes.color, systemPropTypes.size, systemPropTypes.position, {
  /** set to get a different size, defaults to 2rem */
  height: PropTypes.any,

  /** set which version of the logo you'd like */
  variant: PropTypes.oneOf(['fullcolor', 'monochrome']),

  /** set which color variant  */
  baseColor: PropTypes.oneOf(['white', 'indigo']),

  /** full size logo or compact icon */
  size: PropTypes.oneOf(['logo', 'icon'])
}) : {};
Logo.defaultProps = {
  display: 'block',
  height: '2rem',
  maxWidth: '100%',
  marginRight: 'large',
  size: 'logo',
  variant: 'fullcolor',
  baseColor: 'indigo'
};
Logo.displayName = 'Logo';
export default Logo;