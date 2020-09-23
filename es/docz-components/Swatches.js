function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border-top: none;\n  overflow: hidden;\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';
import Color from 'color';
import { Card } from '../components/Card';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
var spaceScale = ['none', 'xsmall', 'small', 'medium', 'large', 'xlarge'];
var Swatch = styled(Card)(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      borderRadius = _ref.borderRadius;
  return borderRadius ? "border-radius: " + theme.radii[borderRadius] + ";" : null;
}, function (_ref2) {
  var theme = _ref2.theme,
      boxShadow = _ref2.boxShadow;
  return boxShadow ? "box-shadow: " + theme.shadows[boxShadow] + ";" : null;
});
Swatch.defaultProps = {
  marginY: 'small'
};
Swatch.displayName = 'Swatch';

var getContrastColor = function getContrastColor(bg, colors) {
  var bgColor = Color(bg);
  var light = Color(colors.neutral.lightest);
  var dark = Color(colors.neutral.darkest);
  return bgColor.contrast(light) > bgColor.contrast(dark) ? colors.neutral.lightest : colors.neutral.darkest;
};

var ColorSwatches = function ColorSwatches(_ref3) {
  var context = _ref3.context,
      colors = _ref3.colors;
  return Object.keys(colors[context]).map(function (color) {
    return /*#__PURE__*/React.createElement(Swatch, {
      bg: colors[context][color],
      color: getContrastColor(colors[context][color], colors),
      key: "" + context + color,
      flexDirection: "row",
      justifyItems: "space-between"
    }, /*#__PURE__*/React.createElement(Box, null, context, ".", color), /*#__PURE__*/React.createElement(Box, {
      flexGrow: 0,
      opacity: 0.3
    }, colors[context][color]));
  });
};

var SpaceSwatches = function SpaceSwatches(_ref4) {
  var space = _ref4.space;
  return spaceScale.map(function (key) {
    return /*#__PURE__*/React.createElement(Swatch, {
      bg: "neutral.base",
      padding: key,
      key: key
    }, /*#__PURE__*/React.createElement(Flex, {
      bg: "neutral.lightest",
      padding: "base"
    }, /*#__PURE__*/React.createElement(Box, null, key === 'medium' ? "medium (or 'base')" : key), /*#__PURE__*/React.createElement(Box, {
      flexGrow: 0,
      opacity: 0.3
    }, space[key])));
  });
};

var RadiusSwatches = function RadiusSwatches(_ref5) {
  var radii = _ref5.radii;
  return spaceScale.map(function (key) {
    return /*#__PURE__*/React.createElement(Swatch, {
      bg: "neutral.base",
      padding: "large",
      key: key,
      flexDirection: "row",
      justifyItems: "space-between",
      borderRadius: key,
      color: "whiteout.lightest"
    }, /*#__PURE__*/React.createElement(Box, null, key === 'medium' ? "medium (or 'base')" : key), /*#__PURE__*/React.createElement(Box, {
      flexGrow: 0,
      opacity: 0.3
    }, radii[key]));
  });
};

var ShadowSwatches = function ShadowSwatches(_ref6) {
  var shadows = _ref6.shadows;
  return spaceScale.map(function (key) {
    return /*#__PURE__*/React.createElement(Swatch, {
      padding: "large",
      marginY: "xlarge",
      key: key,
      flexDirection: "row",
      justifyItems: "space-between",
      boxShadow: key,
      bg: "whiteout.base"
    }, /*#__PURE__*/React.createElement(Box, null, key === 'medium' ? "medium (or 'base')" : key), /*#__PURE__*/React.createElement(Box, {
      flexGrow: 0,
      opacity: 0.3
    }, shadows[key]));
  });
};

export { ColorSwatches, SpaceSwatches, RadiusSwatches, ShadowSwatches, Swatch };