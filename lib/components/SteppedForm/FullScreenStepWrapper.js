'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n\n  &.step-appear,\n  &.step-enter {\n    opacity: 0;\n    transform: translate(2%, 0);\n    z-index: ', ';\n  }\n\n  &.step-appear.step-appear-active,\n  &.step-enter.step-enter-active {\n    opacity: 1;\n    transform: translate(0, 0);\n    transition: opacity 300ms ease-in, transform 300ms ease-out;\n    transition-delay: 100ms;\n  }\n\n  &.step-exit {\n    opacity: 1;\n    transform: translate(0, 0);\n  }\n\n  &.step-exit.step-exit-active {\n    opacity: 0;\n    transform: translate(-2%, 0);\n    transition: opacity 150ms ease-in, transform 200ms ease-in;\n  }\n'], ['\n  ', '\n\n  &.step-appear,\n  &.step-enter {\n    opacity: 0;\n    transform: translate(2%, 0);\n    z-index: ', ';\n  }\n\n  &.step-appear.step-appear-active,\n  &.step-enter.step-enter-active {\n    opacity: 1;\n    transform: translate(0, 0);\n    transition: opacity 300ms ease-in, transform 300ms ease-out;\n    transition-delay: 100ms;\n  }\n\n  &.step-exit {\n    opacity: 1;\n    transform: translate(0, 0);\n  }\n\n  &.step-exit.step-exit-active {\n    opacity: 0;\n    transform: translate(-2%, 0);\n    transition: opacity 150ms ease-in, transform 200ms ease-in;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../Box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FullScreenStepWrapper = (0, _styledComponents2.default)(_Box.Box)(_templateObject, function (_ref) {
  var displayMode = _ref.displayMode;

  return displayMode === 'fullscreen' ? '\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  ' : '\n  position: relative;\n  flex: 0 0 100%;\n  width: 100%;\n  align-items: stretch;\n  ';
}, function (_ref2) {
  var theme = _ref2.theme;

  return theme.zIndices[1];
});

FullScreenStepWrapper.displayName = 'FullScreenStepWrapper';

exports.default = FullScreenStepWrapper;
module.exports = exports['default'];