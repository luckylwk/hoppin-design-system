"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _Box = require("../Box");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  /* \n    Determine the sizing. It always fills the \n    width and adjusts the height accordingly \n  */\n  width: 100%;\n\n  ", "\n\n  ", " \n  background-size: cover;\n  background-position: center;\n\n  ", "\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n  color-adjust: exact;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Tile = (0, _styledComponents["default"])(_Box.Box)(_templateObject(), (0, _styledSystem.variant)({
  prop: 'ratio',
  variants: {
    '1/1': {
      paddingTop: '100%'
    },
    '3/2': {
      paddingTop: '66%'
    },
    '4/3': {
      paddingTop: '75%'
    }
  }
}), function (_ref) {
  var src = _ref.src;
  return src && src !== '' ? "background-image: url(" + src + ");" : '';
}, ''
/* Print bg image, otherwise there's funny white spaces */
);
Tile.propTypes = {
  src: _propTypes["default"].string.isRequired,
  ratio: _propTypes["default"].string,
  borderRadius: _propTypes["default"].string
};
Tile.defaultProps = {
  ratio: '1/1',
  borderRadius: '3px',
  bg: 'neutral.dark'
};
Tile.displayName = 'Tile';
var _default = Tile;
exports["default"] = _default;
module.exports = exports.default;