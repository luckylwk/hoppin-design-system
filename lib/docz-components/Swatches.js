"use strict";

exports.__esModule = true;
exports.Swatch = exports.ShadowSwatches = exports.RadiusSwatches = exports.SpaceSwatches = exports.ColorSwatches = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _color = _interopRequireDefault(require("color"));

var _Card = require("../components/Card");

var _Box = require("../components/Box");

var _Flex = require("../components/Flex");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border-top: none;\n  overflow: hidden;\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var spaceScale = ['none', 'xsmall', 'small', 'medium', 'large', 'xlarge'];
var Swatch = (0, _styledComponents["default"])(_Card.Card)(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      borderRadius = _ref.borderRadius;
  return borderRadius ? "border-radius: " + theme.radii[borderRadius] + ";" : null;
}, function (_ref2) {
  var theme = _ref2.theme,
      boxShadow = _ref2.boxShadow;
  return boxShadow ? "box-shadow: " + theme.shadows[boxShadow] + ";" : null;
});
exports.Swatch = Swatch;
Swatch.defaultProps = {
  marginY: 'small'
};
Swatch.displayName = 'Swatch';

var getContrastColor = function getContrastColor(bg, colors) {
  var bgColor = (0, _color["default"])(bg);
  var light = (0, _color["default"])(colors.neutral.lightest);
  var dark = (0, _color["default"])(colors.neutral.darkest);
  return bgColor.contrast(light) > bgColor.contrast(dark) ? colors.neutral.lightest : colors.neutral.darkest;
};

var ColorSwatches = function ColorSwatches(_ref3) {
  var context = _ref3.context,
      colors = _ref3.colors;
  return Object.keys(colors[context]).map(function (color) {
    return /*#__PURE__*/_react["default"].createElement(Swatch, {
      bg: colors[context][color],
      color: getContrastColor(colors[context][color], colors),
      key: "" + context + color,
      flexDirection: "row",
      justifyItems: "space-between"
    }, /*#__PURE__*/_react["default"].createElement(_Box.Box, null, context, ".", color), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      flexGrow: 0,
      opacity: 0.3
    }, colors[context][color]));
  });
};

exports.ColorSwatches = ColorSwatches;

var SpaceSwatches = function SpaceSwatches(_ref4) {
  var space = _ref4.space;
  return spaceScale.map(function (key) {
    return /*#__PURE__*/_react["default"].createElement(Swatch, {
      bg: "neutral.base",
      padding: key,
      key: key
    }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
      bg: "neutral.lightest",
      padding: "base"
    }, /*#__PURE__*/_react["default"].createElement(_Box.Box, null, key === 'medium' ? "medium (or 'base')" : key), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      flexGrow: 0,
      opacity: 0.3
    }, space[key])));
  });
};

exports.SpaceSwatches = SpaceSwatches;

var RadiusSwatches = function RadiusSwatches(_ref5) {
  var radii = _ref5.radii;
  return spaceScale.map(function (key) {
    return /*#__PURE__*/_react["default"].createElement(Swatch, {
      bg: "neutral.base",
      padding: "large",
      key: key,
      flexDirection: "row",
      justifyItems: "space-between",
      borderRadius: key,
      color: "whiteout.lightest"
    }, /*#__PURE__*/_react["default"].createElement(_Box.Box, null, key === 'medium' ? "medium (or 'base')" : key), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      flexGrow: 0,
      opacity: 0.3
    }, radii[key]));
  });
};

exports.RadiusSwatches = RadiusSwatches;

var ShadowSwatches = function ShadowSwatches(_ref6) {
  var shadows = _ref6.shadows;
  return spaceScale.map(function (key) {
    return /*#__PURE__*/_react["default"].createElement(Swatch, {
      padding: "large",
      marginY: "xlarge",
      key: key,
      flexDirection: "row",
      justifyItems: "space-between",
      boxShadow: key,
      bg: "whiteout.base"
    }, /*#__PURE__*/_react["default"].createElement(_Box.Box, null, key === 'medium' ? "medium (or 'base')" : key), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      flexGrow: 0,
      opacity: 0.3
    }, shadows[key]));
  });
};

exports.ShadowSwatches = ShadowSwatches;