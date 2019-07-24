var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import { Link } from '../Link';

/*
 * Use the unified ecosystem to parse Markdown
 * https://unified.js.org/
 */

import unified from 'unified';
import markdown from 'remark-parse';
import githubBreak from 'remark-github-break';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';

var H1 = function H1(props) {
  return React.createElement(Heading, _extends({ as: 'h1' }, props));
};
var H2 = function H2(props) {
  return React.createElement(Heading, _extends({ as: 'h2' }, props));
};
var H3 = function H3(props) {
  return React.createElement(Heading, _extends({ as: 'h3' }, props));
};
var H4 = function H4(props) {
  return React.createElement(Heading, _extends({ as: 'h4' }, props));
};
var H5 = function H5(props) {
  return React.createElement(Heading, _extends({ as: 'h5' }, props));
};
var H6 = function H6(props) {
  return React.createElement(Heading, _extends({ as: 'h6' }, props));
};
var ALink = function ALink(props) {
  return React.createElement(Link, _extends({ as: 'a' }, props));
};

var processor = unified().use(markdown).use(githubBreak).use(remark2rehype).use(rehype2react, {
  createElement: React.createElement,
  components: {
    a: ALink,
    p: Paragraph,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6
  }
});

var Markdown = function Markdown(_ref) {
  var children = _ref.children;

  return React.createElement(
    React.Fragment,
    null,
    children && processor.processSync(children).contents
  );
};

Markdown.displayName = 'Markdown';
export default Markdown;