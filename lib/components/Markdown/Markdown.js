'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
 * Use the unified ecosystem to parse Markdown
 * https://unified.js.org/
 */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('../Heading');

var _Paragraph = require('../Paragraph');

var _Link = require('../Link');

var _MarkdownImage = require('./MarkdownImage');

var _MarkdownImage2 = _interopRequireDefault(_MarkdownImage);

var _unified = require('unified');

var _unified2 = _interopRequireDefault(_unified);

var _remarkParse = require('remark-parse');

var _remarkParse2 = _interopRequireDefault(_remarkParse);

var _remarkGithubBreak = require('remark-github-break');

var _remarkGithubBreak2 = _interopRequireDefault(_remarkGithubBreak);

var _remarkRehype = require('remark-rehype');

var _remarkRehype2 = _interopRequireDefault(_remarkRehype);

var _rehypeReact = require('rehype-react');

var _rehypeReact2 = _interopRequireDefault(_rehypeReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H1 = function H1(props) {
  return _react2.default.createElement(_Heading.Heading, _extends({ as: 'h1' }, props));
};
var H2 = function H2(props) {
  return _react2.default.createElement(_Heading.Heading, _extends({ as: 'h2' }, props));
};
var H3 = function H3(props) {
  return _react2.default.createElement(_Heading.Heading, _extends({ as: 'h3' }, props));
};
var H4 = function H4(props) {
  return _react2.default.createElement(_Heading.Heading, _extends({ as: 'h4' }, props));
};
var H5 = function H5(props) {
  return _react2.default.createElement(_Heading.Heading, _extends({ as: 'h5' }, props));
};
var H6 = function H6(props) {
  return _react2.default.createElement(_Heading.Heading, _extends({ as: 'h6' }, props));
};
var ALink = function ALink(props) {
  return _react2.default.createElement(_Link.Link, _extends({ as: 'a' }, props));
};

var processor = (0, _unified2.default)().use(_remarkParse2.default).use(_remarkGithubBreak2.default).use(_remarkRehype2.default).use(_rehypeReact2.default, {
  createElement: _react2.default.createElement,
  components: {
    a: ALink,
    p: _Paragraph.Paragraph,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    img: _MarkdownImage2.default
  }
});

var Markdown = function Markdown(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    children && processor.processSync(children).contents
  );
};

Markdown.displayName = 'Markdown';
exports.default = Markdown;
module.exports = exports['default'];