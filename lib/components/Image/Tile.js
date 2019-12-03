'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  /* \n    Determine the sizing. It always fills the \n    width and adjusts the height accordingly \n  */\n  width: 100%;\n  padding-top: ', ';\n\n  background-color: ', ';\n  ', ' background-size: cover;\n  background-position: center;\n'], ['\n  /* \n    Determine the sizing. It always fills the \n    width and adjusts the height accordingly \n  */\n  width: 100%;\n  padding-top: ', ';\n\n  background-color: ', ';\n  ', ' background-size: cover;\n  background-position: center;\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../Box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ASPECT_RATIOS = {
  '3/2': { paddingTop: '66%' },
  '4/3': { paddingTop: '75%' },
  '1/1': { paddingTop: '100%' }
};

var Tile = (0, _styledComponents2.default)(_Box.Box)(_templateObject, function (_ref) {
  var ratio = _ref.ratio;
  return ASPECT_RATIOS[ratio].paddingTop;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.neutral.dark;
}, function (_ref3) {
  var src = _ref3.src;
  return src && src !== '' ? 'background-image: url(' + src + ');' : '';
});

Tile.propTypes = {
  src: _propTypes2.default.string.isRequired,
  ratio: _propTypes2.default.string,
  borderRadius: _propTypes2.default.string
};

Tile.defaultProps = {
  ratio: '1/1',
  borderRadius: '3px'
};

Tile.displayName = 'Tile';

exports.default = Tile;
module.exports = exports['default'];