'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  100% {\n    transform: translateX(100%);\n  }\n'], ['\n  100% {\n    transform: translateX(100%);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  position: relative;\n\n  overflow: hidden;\n\n  width: ', ';\n\n  ', '\n\n  background-color: #eee;\n\n  &::after {\n    display: block;\n    content: \'\';\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    transform: translateX(-100%);\n\n    background: linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.35),\n      transparent\n    );\n\n    animation: ', ' ', ' infinite;\n  }\n'], ['\n  box-sizing: border-box;\n  position: relative;\n\n  overflow: hidden;\n\n  width: ', ';\n\n  ', '\n\n  background-color: #eee;\n\n  &::after {\n    display: block;\n    content: \'\';\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    transform: translateX(-100%);\n\n    background: linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.35),\n      transparent\n    );\n\n    animation: ', ' ', ' infinite;\n  }\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Box = require('../Box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// ---------------------------

var loadingKeyframes = (0, _styledComponents.keyframes)(_templateObject);

// ---------------------------

var Skeleton = (0, _styledComponents2.default)(_Box.Box)(_templateObject2, function (_ref) {
  var width = _ref.width;
  return width;
}, (0, _styledSystem.variant)({
  prop: 'ratio',
  variants: {
    '4/5': { paddingTop: '125%' },
    '1/1': { paddingTop: '100%' },
    '3/2': { paddingTop: '66%' },
    '4/3': { paddingTop: '75%' },
    text: { paddingTop: '20px' },
    title: { paddingTop: '26px' }
  }
}), loadingKeyframes, function (_ref2) {
  var delay = _ref2.delay;
  return delay;
});

Skeleton.propTypes = {
  ratio: _propTypes2.default.string,
  borderRadius: _propTypes2.default.string,
  width: _propTypes2.default.string,
  delay: _propTypes2.default.string
};

Skeleton.defaultProps = {
  ratio: '3/2',
  borderRadius: '3px',
  width: '100%',
  delay: '1.5s'
};

Skeleton.displayName = 'Skeleton';

exports.default = Skeleton;
module.exports = exports['default'];