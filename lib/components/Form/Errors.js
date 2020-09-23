"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Text = require("../Text");

var _Box = require("../Box");

var _Paragraph = require("../Paragraph");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border-left: 4px solid ", ";\n  border-radius: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// ---------------------------
var BoxDanger = (0, _styledComponents["default"])(_Box.Box)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.danger.lightest;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.danger.base;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.radii.small;
}); // ---------------------------

var Errors = function Errors(_ref4) {
  var errors = _ref4.errors;
  return /*#__PURE__*/_react["default"].createElement(_Box.Box, null, errors.length > 0 && /*#__PURE__*/_react["default"].createElement(BoxDanger, {
    mt: 2,
    py: 2,
    px: 3
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    display: "block",
    color: "error.darker",
    "data-cy": "error"
  }, errors.map(function (error) {
    return /*#__PURE__*/_react["default"].createElement(_Paragraph.Paragraph, {
      marginBottom: 0,
      key: error.msg || error.message
    }, error.msg || error.message);
  }))));
};

Errors.propTypes = process.env.NODE_ENV !== "production" ? {
  /** [ { msg: 'Custom errors from the backend' }, new Error("And standard errors are supported") ] */
  errors: _propTypes["default"].array.isRequired
} : {};
Errors.defaultProps = {
  errors: [],
  onlyShowOne: true
};
Errors.displayName = 'Errors';
var _default = Errors;
exports["default"] = _default;
module.exports = exports.default;