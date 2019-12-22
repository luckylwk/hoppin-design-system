'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  z-index: ', ';\n'], ['\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  z-index: ', ';\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../Box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Overlay = (0, _styledComponents2.default)(_Box.Box)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.zIndices.overlay - 1;
});

Overlay.propTypes = {
  position: _propTypes2.default.string,
  opacity: _propTypes2.default.string,
  bg: _propTypes2.default.string
};

Overlay.defaultProps = {
  position: 'fixed',
  opacity: '0.97',
  bg: 'whiteout.lightest'
};

Overlay.displayName = 'Overlay';

exports.default = Overlay;
module.exports = exports['default'];