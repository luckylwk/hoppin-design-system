import React from 'react';

import { Heading } from '../../Heading';
import { Paragraph } from '../../Paragraph';
// import { Link } from '../../Link';
import { UnorderedList, ListItem, OrderedList } from '../../List';

const renderNode = (props, _, next) => {
  const { attributes, children, isFocused, node } = props;

  switch (node.type) {
    case 'code':
      return <code {...attributes}>{children}</code>;

    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;

    case 'heading1':
      return (
        <Heading as="h1" {...attributes}>
          {children}
        </Heading>
      );

    case 'heading2':
      return (
        <Heading as="h2" {...attributes}>
          {children}
        </Heading>
      );

    case 'heading3':
      return (
        <Heading as="h3" {...attributes}>
          {children}
        </Heading>
      );

    case 'heading4':
      return (
        <Heading as="h4" {...attributes}>
          {children}
        </Heading>
      );

    case 'heading5':
      return (
        <Heading as="h5" {...attributes}>
          {children}
        </Heading>
      );
    case 'heading6':
      return (
        <Heading as="h6" {...attributes}>
          {children}
        </Heading>
      );

    case 'list-item':
      return <ListItem {...attributes}>{children}</ListItem>;

    case 'ordered-list':
      return <OrderedList {...attributes}>{children}</OrderedList>;

    case 'unordered-list':
      return <UnorderedList {...attributes}>{children}</UnorderedList>;

    case 'paragraph':
      return <Paragraph {...attributes}>{children}</Paragraph>;

    default:
      return next();
  }
};

export default { renderNode };
