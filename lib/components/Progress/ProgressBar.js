'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: ', ';\n  ', ';\n  top: 0;\n  left: 0;\n  right: 0;\n  height: ', ';\n'], ['\n  position: ', ';\n  ', ';\n  top: 0;\n  left: 0;\n  right: 0;\n  height: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: ', '%;\n  ', ';\n\n  transition: all 400ms;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: ', '%;\n  ', ';\n\n  transition: all 400ms;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('@styled-system/prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require('prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Box = require('../Box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ProgressBarWrapper = (0, _styledComponents2.default)(_Box.Box)(_templateObject, function (_ref) {
  var alignTo = _ref.alignTo;
  return alignTo === 'page' ? 'fixed' : 'absolute';
}, function (_ref2) {
  var alignTo = _ref2.alignTo,
      theme = _ref2.theme;
  return alignTo === 'page' ? 'z-index: ' + theme.zIndexes.overlay : null;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.xsmall;
});

var ProgressBarSlider = (0, _styledComponents2.default)(_Box.Box)(_templateObject2, function (_ref4) {
  var percent = _ref4.percent;
  return percent;
}, _styledSystem.color);

var ProgressBar = function ProgressBar(_ref5) {
  var theme = _ref5.theme,
      bg = _ref5.bg,
      percent = _ref5.percent,
      rest = _objectWithoutProperties(_ref5, ['theme', 'bg', 'percent']);

  return _react2.default.createElement(
    ProgressBarWrapper,
    _extends({ theme: theme }, rest),
    _react2.default.createElement(ProgressBarSlider, { theme: theme, bg: bg, percent: percent })
  );
};

ProgressBar.defaultProps = {
  bg: 'primary.base',
  alignTo: 'page',
  percent: 0
};

ProgressBar.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _propTypes2.default.color, {
  /**
  `page` (fixed to the top of the page) or
  `component` (aligned with the closest parent with a set position attribute).
  */
  alignTo: _propTypes4.default.oneOf(['page', 'component']),
  /** 0-100 */
  percent: _propTypes4.default.number
}) : {};

exports.default = ProgressBar;
module.exports = exports['default'];