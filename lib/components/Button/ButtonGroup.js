"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Flex = require("../Flex");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var ButtonGroup = (0, _styledComponents["default"])(_Flex.Flex)(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      flexDirection = _ref.flexDirection;

  if (flexDirection === 'row') {
    return _Button["default"] + ":not(:last-child) {\n        margin-right: " + theme.space.small + "\n      }";
  } else {
    return _Button["default"] + " + " + _Button["default"] + " {\n        margin-top: " + theme.space.small + ";\n      }";
  }
});
ButtonGroup.propTypes = {};
ButtonGroup.defaultProps = {
  width: 1,
  // fill available space
  flexDirection: 'row',
  // horizontal row of buttons
  justifyContent: 'flex-start',
  // align left
  flexWrap: 'wrap'
};
ButtonGroup.displayName = 'ButtonGroup';
var _default = ButtonGroup;
exports["default"] = _default;
module.exports = exports.default;