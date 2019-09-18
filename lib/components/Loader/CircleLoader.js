'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  0% {transform: rotate(0deg) scale(1)}\n  50% {transform: rotate(180deg) scale(1)}\n  100% {transform: rotate(360deg) scale(1)}\n'], ['\n  0% {transform: rotate(0deg) scale(1)}\n  50% {transform: rotate(180deg) scale(1)}\n  100% {transform: rotate(360deg) scale(1)}\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  background: transparent !important;\n\n  width: ', 'px;\n  height: ', 'px;\n\n  border-radius: 100%;\n  border: 2px solid;\n  border-color: ', ';\n  border-bottom-color: transparent;\n\n  display: inline-block;\n  animation: ', ' 0.75s 0s infinite linear;\n  animation-fill-mode: both;\n'], ['\n  background: transparent !important;\n\n  width: ', 'px;\n  height: ', 'px;\n\n  border-radius: 100%;\n  border: 2px solid;\n  border-color: ', ';\n  border-bottom-color: transparent;\n\n  display: inline-block;\n  animation: ', ' 0.75s 0s infinite linear;\n  animation-fill-mode: both;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CircleKeyFrames = (0, _styledComponents.keyframes)(_templateObject);

var Circle = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (_ref) {
  var theme = _ref.theme,
      context = _ref.context;
  return theme.colors[context] !== undefined ? theme.colors[context].light : theme.colors.neutral.light;
}, CircleKeyFrames);

var CircleLoader = function CircleLoader(_ref2) {
  var type = _ref2.type,
      size = _ref2.size;

  return _react2.default.createElement(Circle, { type: type, size: size });
};

CircleLoader.propTypes = process.env.NODE_ENV !== "production" ? {
  context: _propTypes2.default.string,
  size: _propTypes2.default.number
} : {};

CircleLoader.defaultProps = {
  context: 'neutral',
  size: 60
};

CircleLoader.displayName = 'CircleLoader';

exports.default = CircleLoader;
module.exports = exports['default'];