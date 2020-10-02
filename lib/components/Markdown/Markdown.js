"use strict";

exports.__esModule = true;
exports["default"] = exports.componentsMap = void 0;

var _react = _interopRequireDefault(require("react"));

var _Heading = require("../Heading");

var _Paragraph = require("../Paragraph");

var _Link = require("../Link");

var _List = require("../List");

var _MarkdownImage = _interopRequireDefault(require("./MarkdownImage"));

var _unified = _interopRequireDefault(require("unified"));

var _remarkParse = _interopRequireDefault(require("remark-parse"));

var _remarkGithubBreak = _interopRequireDefault(require("remark-github-break"));

var _remarkRehype = _interopRequireDefault(require("remark-rehype"));

var _rehypeReact = _interopRequireDefault(require("rehype-react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var H1 = function H1(props) {
  return /*#__PURE__*/_react["default"].createElement(_Heading.Heading, _extends({
    as: "h1"
  }, props));
};

var H2 = function H2(props) {
  return /*#__PURE__*/_react["default"].createElement(_Heading.Heading, _extends({
    as: "h2"
  }, props));
};

var H3 = function H3(props) {
  return /*#__PURE__*/_react["default"].createElement(_Heading.Heading, _extends({
    as: "h3"
  }, props));
};

var H4 = function H4(props) {
  return /*#__PURE__*/_react["default"].createElement(_Heading.Heading, _extends({
    as: "h4"
  }, props));
};

var H5 = function H5(props) {
  return /*#__PURE__*/_react["default"].createElement(_Heading.Heading, _extends({
    as: "h5"
  }, props));
};

var H6 = function H6(props) {
  return /*#__PURE__*/_react["default"].createElement(_Heading.Heading, _extends({
    as: "h6"
  }, props));
};

var ALink = function ALink(props) {
  return /*#__PURE__*/_react["default"].createElement(_Link.Link, _extends({
    as: "a"
  }, props));
};

var componentsMap = {
  a: ALink,
  p: _Paragraph.Paragraph,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  img: _MarkdownImage["default"],
  ol: _List.OrderedList,
  ul: _List.UnorderedList,
  li: _List.ListItem
};
exports.componentsMap = componentsMap;
var processor = (0, _unified["default"])().use(_remarkParse["default"]).use(_remarkGithubBreak["default"]).use(_remarkRehype["default"]).use(_rehypeReact["default"], {
  createElement: _react["default"].createElement,
  components: componentsMap
});

var Markdown = function Markdown(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children && processor.processSync(children).contents);
};

Markdown.displayName = 'Markdown';
var _default = Markdown;
exports["default"] = _default;