"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _Flex = require("../Flex");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  max-width: ", ";\n  margin-left: auto;\n  margin-right: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Container = (0, _styledComponents["default"])(_Flex.Flex)(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      width = _ref.width,
      maxWidth = _ref.maxWidth;
  return maxWidth ? maxWidth : theme.containerWidths[width];
});
Container.propTypes = {
  // ...Flex.propTypes,

  /** Set `width="narrow"` for to optimize body text width, set it to `base` for a wider layout, `full` to fill any available space. */
  width: _propTypes["default"].oneOf(['narrow', 'base', 'full']),

  /** Only set `maxWidth` if absolutely necessary and you cant use narrow/base widths. */
  maxWidth: _propTypes["default"].string
};
Container.defaultProps = {
  width: 'base',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: ['large', 'large', 'xlarge']
};
Container.displayName = 'Container';
var _default = Container;
exports["default"] = _default;
module.exports = exports.default;