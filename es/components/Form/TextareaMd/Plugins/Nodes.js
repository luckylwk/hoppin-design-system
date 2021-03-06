var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Heading } from '../../../Heading';
import { Paragraph } from '../../../Paragraph';
// import { Link } from '../../../Link';
import { UnorderedList, ListItem, OrderedList } from '../../../List';

function renderNode(_ref, editor, next) {
  var attributes = _ref.attributes,
      children = _ref.children,
      node = _ref.node;

  var hidden = node.data.get('hidden');
  if (hidden) attributes.style = { display: 'none' };

  switch (node.type) {
    case 'paragraph':
      return React.createElement(
        Paragraph,
        attributes,
        children
      );

    case 'code':
      return React.createElement(
        'code',
        attributes,
        children
      );

    case 'block-quote':
      return React.createElement(
        'blockquote',
        attributes,
        children
      );

    case 'heading1':
      return React.createElement(
        Heading,
        _extends({ as: 'h1' }, attributes),
        children
      );

    case 'heading2':
      return React.createElement(
        Heading,
        _extends({ as: 'h2' }, attributes),
        children
      );

    case 'heading3':
      return React.createElement(
        Heading,
        _extends({ as: 'h3' }, attributes),
        children
      );

    case 'heading4':
      return React.createElement(
        Heading,
        _extends({ as: 'h4' }, attributes),
        children
      );

    case 'heading5':
      return React.createElement(
        Heading,
        _extends({ as: 'h5' }, attributes),
        children
      );
    case 'heading6':
      return React.createElement(
        Heading,
        _extends({ as: 'h6' }, attributes),
        children
      );

    case 'list-item':
      return React.createElement(
        ListItem,
        attributes,
        children
      );

    case 'ordered-list':
      return React.createElement(
        OrderedList,
        attributes,
        children
      );

    case 'unordered-list':
      return React.createElement(
        UnorderedList,
        attributes,
        children
      );

    default:
      return next();
  }
}

export default { renderNode: renderNode };