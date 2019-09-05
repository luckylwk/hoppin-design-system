'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import { Link } from '../../Link';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('../../Heading');

var _Paragraph = require('../../Paragraph');

var _List = require('../../List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderNode = function renderNode(props, _, next) {
  var attributes = props.attributes,
      children = props.children,
      isFocused = props.isFocused,
      node = props.node;


  switch (node.type) {
    case 'code':
      return _react2.default.createElement(
        'code',
        attributes,
        children
      );

    case 'block-quote':
      return _react2.default.createElement(
        'blockquote',
        attributes,
        children
      );

    case 'heading1':
      return _react2.default.createElement(
        _Heading.Heading,
        _extends({ as: 'h1' }, attributes),
        children
      );

    case 'heading2':
      return _react2.default.createElement(
        _Heading.Heading,
        _extends({ as: 'h2' }, attributes),
        children
      );

    case 'heading3':
      return _react2.default.createElement(
        _Heading.Heading,
        _extends({ as: 'h3' }, attributes),
        children
      );

    case 'heading4':
      return _react2.default.createElement(
        _Heading.Heading,
        _extends({ as: 'h4' }, attributes),
        children
      );

    case 'heading5':
      return _react2.default.createElement(
        _Heading.Heading,
        _extends({ as: 'h5' }, attributes),
        children
      );
    case 'heading6':
      return _react2.default.createElement(
        _Heading.Heading,
        _extends({ as: 'h6' }, attributes),
        children
      );

    case 'list-item':
      return _react2.default.createElement(
        _List.ListItem,
        attributes,
        children
      );

    case 'ordered-list':
      return _react2.default.createElement(
        _List.OrderedList,
        attributes,
        children
      );

    case 'unordered-list':
      return _react2.default.createElement(
        _List.UnorderedList,
        attributes,
        children
      );

    case 'paragraph':
      return _react2.default.createElement(
        _Paragraph.Paragraph,
        attributes,
        children
      );

    default:
      return next();
  }
};

exports.default = { renderNode: renderNode };
module.exports = exports['default'];