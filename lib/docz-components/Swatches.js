'use strict';

exports.__esModule = true;
exports.Swatch = exports.ShadowSwatches = exports.RadiusSwatches = exports.SpaceSwatches = exports.ColorSwatches = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  border-top: none;\n  overflow: hidden;\n  ', '\n  ', '\n'], ['\n  border-top: none;\n  overflow: hidden;\n  ', '\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _Card = require('../components/Card');

var _Box = require('../components/Box');

var _Flex = require('../components/Flex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var spaceScale = ['none', 'xsmall', 'small', 'medium', 'large', 'xlarge'];

var Swatch = (0, _styledComponents2.default)(_Card.Card)(_templateObject, function (_ref) {
  var theme = _ref.theme,
      borderRadius = _ref.borderRadius;
  return borderRadius ? 'border-radius: ' + theme.radii[borderRadius] + ';' : null;
}, function (_ref2) {
  var theme = _ref2.theme,
      boxShadow = _ref2.boxShadow;
  return boxShadow ? 'box-shadow: ' + theme.shadows[boxShadow] + ';' : null;
});
Swatch.defaultProps = { marginY: 'small' };
Swatch.displayName = 'Swatch';

var getContrastColor = function getContrastColor(bg, colors) {
  var bgColor = (0, _color2.default)(bg);
  var light = (0, _color2.default)(colors.neutral.lightest);
  var dark = (0, _color2.default)(colors.neutral.darkest);

  return bgColor.contrast(light) > bgColor.contrast(dark) ? colors.neutral.lightest : colors.neutral.darkest;
};

var ColorSwatches = function ColorSwatches(_ref3) {
  var context = _ref3.context,
      colors = _ref3.colors;

  return Object.keys(colors[context]).map(function (color) {
    return _react2.default.createElement(
      Swatch,
      {
        bg: colors[context][color],
        color: getContrastColor(colors[context][color], colors),
        key: '' + context + color,
        flexDirection: 'row',
        justifyItems: 'space-between'
      },
      _react2.default.createElement(
        _Box.Box,
        null,
        context,
        '.',
        color
      ),
      _react2.default.createElement(
        _Box.Box,
        { flexGrow: 0, opacity: 0.3 },
        colors[context][color]
      )
    );
  });
};

var SpaceSwatches = function SpaceSwatches(_ref4) {
  var space = _ref4.space;

  return spaceScale.map(function (key) {
    return _react2.default.createElement(
      Swatch,
      { bg: 'neutral.base', padding: key, key: key },
      _react2.default.createElement(
        _Flex.Flex,
        { bg: 'neutral.lightest', padding: 'base' },
        _react2.default.createElement(
          _Box.Box,
          null,
          key === 'medium' ? "medium (or 'base')" : key
        ),
        _react2.default.createElement(
          _Box.Box,
          { flexGrow: 0, opacity: 0.3 },
          space[key]
        )
      )
    );
  });
};

var RadiusSwatches = function RadiusSwatches(_ref5) {
  var radii = _ref5.radii;

  return spaceScale.map(function (key) {
    return _react2.default.createElement(
      Swatch,
      {
        bg: 'neutral.base',
        padding: 'large',
        key: key,
        flexDirection: 'row',
        justifyItems: 'space-between',
        borderRadius: key,
        color: 'whiteout.lightest'
      },
      _react2.default.createElement(
        _Box.Box,
        null,
        key === 'medium' ? "medium (or 'base')" : key
      ),
      _react2.default.createElement(
        _Box.Box,
        { flexGrow: 0, opacity: 0.3 },
        radii[key]
      )
    );
  });
};

var ShadowSwatches = function ShadowSwatches(_ref6) {
  var shadows = _ref6.shadows;

  return spaceScale.map(function (key) {
    return _react2.default.createElement(
      Swatch,
      {
        padding: 'large',
        marginY: 'xlarge',
        key: key,
        flexDirection: 'row',
        justifyItems: 'space-between',
        boxShadow: key,
        bg: 'whiteout.base'
      },
      _react2.default.createElement(
        _Box.Box,
        null,
        key === 'medium' ? "medium (or 'base')" : key
      ),
      _react2.default.createElement(
        _Box.Box,
        { flexGrow: 0, opacity: 0.3 },
        shadows[key]
      )
    );
  });
};

exports.ColorSwatches = ColorSwatches;
exports.SpaceSwatches = SpaceSwatches;
exports.RadiusSwatches = RadiusSwatches;
exports.ShadowSwatches = ShadowSwatches;
exports.Swatch = Swatch;