'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  0%, 100% {\n    transform: scale(0)\n  } 50% {\n    transform: scale(1.0)\n  }\n'], ['\n  0%, 100% {\n    transform: scale(0)\n  } 50% {\n    transform: scale(1.0)\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n\n  display: inline-block;\n  position: relative;\n\n  width: auto;\n  min-height: ', 'px;\n\n  margin: 0 auto;\n\n  text-align: center;\n'], ['\n  box-sizing: border-box;\n\n  display: inline-block;\n  position: relative;\n\n  width: auto;\n  min-height: ', 'px;\n\n  margin: 0 auto;\n\n  text-align: center;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  position: absolute;\n\n  height: ', 'px;\n  width: ', 'px;\n  top: 0;\n  left: -', 'px;\n\n  background-color: ', ';\n  opacity: 0.6;\n\n  border-radius: 100%;\n\n  animation-fill-mode: both;\n  -webkit-animation: ', ' 2.1s infinite ease-in-out;\n  -moz-animation: ', ' 2.1s infinite ease-in-out;\n  animation: ', ' 2.1s infinite ease-in-out;\n  animation-delay: ', ';\n'], ['\n  display: inline-block;\n  position: absolute;\n\n  height: ', 'px;\n  width: ', 'px;\n  top: 0;\n  left: -', 'px;\n\n  background-color: ', ';\n  opacity: 0.6;\n\n  border-radius: 100%;\n\n  animation-fill-mode: both;\n  -webkit-animation: ', ' 2.1s infinite ease-in-out;\n  -moz-animation: ', ' 2.1s infinite ease-in-out;\n  animation: ', ' 2.1s infinite ease-in-out;\n  animation-delay: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var BounceKeyFrame = (0, _styledComponents.keyframes)(_templateObject);

var BounceWrapper = _styledComponents2.default.div(_templateObject2, function (_ref) {
  var size = _ref.size;
  return size;
});

var Bounce = _styledComponents2.default.div(_templateObject3, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var size = _ref3.size;
  return size;
}, function (_ref4) {
  var size = _ref4.size;
  return parseInt(0.5 * size);
}, function (_ref5) {
  var theme = _ref5.theme,
      context = _ref5.context;
  return theme.colors[context] !== undefined ? theme.colors[context].light : theme.colors.neutral.light;
}, BounceKeyFrame, BounceKeyFrame, BounceKeyFrame, function (_ref6) {
  var delay = _ref6.delay;
  return delay;
});

var BounceLoader = function BounceLoader(_ref7) {
  var size = _ref7.size,
      context = _ref7.context;

  return _react2.default.createElement(
    BounceWrapper,
    { size: size },
    _react2.default.createElement(Bounce, { delay: '0s', size: size, context: context }),
    _react2.default.createElement(Bounce, { delay: '-1s', size: size, context: context })
  );
};

BounceLoader.propTypes = process.env.NODE_ENV !== "production" ? {
  context: _propTypes2.default.string,
  size: _propTypes2.default.number
} : {};

BounceLoader.defaultProps = {
  context: 'neutral',
  size: 60
};

BounceLoader.displayName = 'BounceLoader';

exports.default = BounceLoader;
module.exports = exports['default'];