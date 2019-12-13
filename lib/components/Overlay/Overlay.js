'use strict';

exports.__esModule = true;
exports.NavOverlay = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  z-index: ', ';\n\n  background-color: ', ';\n'], ['\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  z-index: ', ';\n\n  background-color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  height: 100vh;\n  width: 100vw;\n\n  transform: translate3d(-100vw, 0, 0);\n  opacity: 0;\n  transition: opacity 0.5s;\n\n  &.isExpanded {\n    transform: translate3d(0vw, 0, 0);\n    opacity: 1;\n  }\n'], ['\n  height: 100vh;\n  width: 100vw;\n\n  transform: translate3d(-100vw, 0, 0);\n  opacity: 0;\n  transition: opacity 0.5s;\n\n  &.isExpanded {\n    transform: translate3d(0vw, 0, 0);\n    opacity: 1;\n  }\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../Box');

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// ---------------------------

var Overlay = (0, _styledComponents2.default)(_Box.Box)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.zIndices.overlay - 1;
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _color2.default)(theme.colors.whiteout.lightest).alpha(0.9).string();
});

Overlay.propTypes = {
  position: _propTypes2.default.string,
  opacity: _propTypes2.default.string
};

Overlay.defaultProps = {
  position: 'fixed',
  opacity: '0.97'
};

Overlay.displayName = 'Overlay';

// ---------------------------

var NavOverlay = (0, _styledComponents2.default)(Overlay)(_templateObject2);

NavOverlay.displayName = 'NavOverlay';

// ---------------------------

exports.default = Overlay;
exports.NavOverlay = NavOverlay;