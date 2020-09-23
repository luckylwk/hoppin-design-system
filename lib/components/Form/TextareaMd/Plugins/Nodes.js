"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Heading = require("../../../Heading");

var _Paragraph = require("../../../Paragraph");

var _List = require("../../../List");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function renderNode(_ref, editor, next) {
  var attributes = _ref.attributes,
      children = _ref.children,
      node = _ref.node;
  var hidden = node.data.get('hidden');
  if (hidden) attributes.style = {
    display: 'none'
  };

  switch (node.type) {
    case 'paragraph':
      return /*#__PURE__*/_react["default"].createElement(_Paragraph.Paragraph, attributes, children);

    case 'code':
      return /*#__PURE__*/_react["default"].createElement("code", attributes, children);

    case 'block-quote':
      return /*#__PURE__*/_react["default"].createElement("blockquote", attributes, children);

    case 'heading1':
      return /*#__PURE__*/_react["default"].createElement(_Heading.Heading, _extends({
        as: "h1"
      }, attributes), children);

    case 'heading2':
      return /*#__PURE__*/_react["default"].createElement(_Heading.Heading, _extends({
        as: "h2"
      }, attributes), children);

    case 'heading3':
      return /*#__PURE__*/_react["default"].createElement(_Heading.Heading, _extends({
        as: "h3"
      }, attributes), children);

    case 'heading4':
      return /*#__PURE__*/_react["default"].createElement(_Heading.Heading, _extends({
        as: "h4"
      }, attributes), children);

    case 'heading5':
      return /*#__PURE__*/_react["default"].createElement(_Heading.Heading, _extends({
        as: "h5"
      }, attributes), children);

    case 'heading6':
      return /*#__PURE__*/_react["default"].createElement(_Heading.Heading, _extends({
        as: "h6"
      }, attributes), children);

    case 'list-item':
      return /*#__PURE__*/_react["default"].createElement(_List.ListItem, attributes, children);

    case 'ordered-list':
      return /*#__PURE__*/_react["default"].createElement(_List.OrderedList, attributes, children);

    case 'unordered-list':
      return /*#__PURE__*/_react["default"].createElement(_List.UnorderedList, attributes, children);

    default:
      return next();
  }
}

var _default = {
  renderNode: renderNode
};
exports["default"] = _default;
module.exports = exports.default;