"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Lede = require("../Lede");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  max-width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100%;\n  padding: ", " 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var ImageWrapper = _styledComponents["default"].span(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.space.base;
});

var Image = _styledComponents["default"].img(_templateObject2());

var MarkdownImage = function MarkdownImage(_ref2) {
  var src = _ref2.src,
      alt = _ref2.alt;
  // only render caption if alt text is prefixed with a !
  var caption = typeof alt === 'string' && alt.indexOf('!') === 0 ? alt.substr(1) : undefined;
  return /*#__PURE__*/_react["default"].createElement(ImageWrapper, null, /*#__PURE__*/_react["default"].createElement(Image, {
    src: src,
    alt: alt
  }), /*#__PURE__*/_react["default"].createElement("br", null), caption && /*#__PURE__*/_react["default"].createElement(_Lede.Lede, {
    as: "span",
    fontSize: "label",
    color: "neutral.light",
    marginY: "xsmall"
  }, caption));
};

MarkdownImage.displayName = 'MarkdownImage';
var _default = MarkdownImage;
exports["default"] = _default;
module.exports = exports.default;