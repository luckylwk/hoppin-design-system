"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = require("../../../Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var renderMark = function renderMark(_ref, _, next) {
  var children = _ref.children,
      mark = _ref.mark,
      attributes = _ref.attributes;

  switch (mark.type) {
    case 'bold':
      return /*#__PURE__*/_react["default"].createElement(_Text.Text, _extends({
        fontWeight: "bold"
      }, attributes), children);

    case 'code':
      return /*#__PURE__*/_react["default"].createElement("code", attributes, children);

    case 'italic':
      return /*#__PURE__*/_react["default"].createElement(_Text.Text, _extends({
        fontStyle: "italic"
      }, attributes), children);

    default:
      return next();
  }
};

var _default = {
  renderMark: renderMark
};
exports["default"] = _default;
module.exports = exports.default;