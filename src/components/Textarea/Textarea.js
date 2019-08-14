import React from 'react';
import Editor from 'rich-markdown-editor';

import { Box } from '../Box';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import { Link } from '../Link';
import { OrderedList, UnorderedList, ListItem } from '../List';
import MarkdownImage from '../Markdown/MarkdownImage';

import { withTheme } from 'styled-components';

const Textarea = props => {
  const { theme, hiddenToolbarButtons, ...rest } = props;

  // Theme for the Editor
  const colors = {
    almostBlack: theme.colors.neutral.darkest,
    lightBlack: theme.colors.neutral.dark,
    almostWhite: theme.colors.whiteout.base,
    white: theme.colors.white,
    white10: 'rgba(255, 255, 255, 0.1)',
    black: theme.colors.black,
    black10: 'rgba(0, 0, 0, 0.1)',
    primary: theme.colors.primary.base,
    greyLight: theme.colors.neutral.lighter,
    grey: theme.colors.neutral.light,
    greyMid: theme.colors.neutral.base,
    greyDark: theme.colors.neutral.dark,
  };

  const base = {
    ...colors,
    fontFamily: theme.fonts.secondary,
    fontFamilyMono:
      "'SFMono-Regular',Consolas,'Liberation Mono', Menlo, Courier,monospace",
    fontWeight: theme.fontWeights.normal,
    zIndex: 100,
    link: colors.primary,
    placeholder: '#B1BECC',
    textSecondary: '#4E5C6E',
    textLight: colors.white,
    selected: colors.primary,
    codeComment: '#6a737d',
    codePunctuation: '#5e6687',
    codeNumber: '#d73a49',
    codeProperty: '#c08b30',
    codeTag: '#3d8fd1',
    codeString: '#032f62',
    codeSelector: '#6679cc',
    codeAttr: '#c76b29',
    codeEntity: '#22a2c9',
    codeKeyword: '#d73a49',
    codeFunction: '#6f42c1',
    codeStatement: '#22a2c9',
    codePlaceholder: '#3d8fd1',
    codeInserted: '#202746',
    codeImportant: '#c94922',
  };

  const editorTheme = {
    ...base,
    background: colors.white,
    text: colors.almostBlack,
    code: colors.lightBlack,

    toolbarBackground: colors.lightBlack,
    toolbarInput: colors.white10,
    toolbarItem: colors.white,

    blockToolbarBackground: colors.greyLight,
    blockToolbarTrigger: colors.greyMid,
    blockToolbarTriggerIcon: colors.white,
    blockToolbarItem: colors.almostBlack,

    tableDivider: colors.grey,
    tableSelected: colors.primary,
    tableSelectedBackground: '#E5F7FF',

    quote: colors.greyDark,
    codeBackground: colors.greyLight,
    codeBorder: colors.grey,
    horizontalRule: colors.grey,
    imageErrorBackground: colors.greyLight,

    hiddenToolbarButtons,
  };

  const renderNode = (props, editor, next) => {
    const { node, attributes, children } = props;

    switch (node.type) {
      case 'quote':
        return <blockquote {...attributes}>{children}</blockquote>;
      case 'link':
        return (
          <Link as="a" {...attributes}>
            {children}
          </Link>
        );
      case 'paragraph':
        return <Paragraph {...attributes}>{children}</Paragraph>;
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
      case 'image':
        const src = node.data.get('src');
        return <MarkdownImage {...attributes} src={src} />;
      case 'ordered-list':
        return <OrderedList {...attributes}>{children}</OrderedList>;
      case 'bulleted-list':
        return <UnorderedList {...attributes}>{children}</UnorderedList>;
      case 'list-item':
        return <ListItem {...attributes}>{children}</ListItem>;

      default:
        return next();
    }
  };

  return (
    <Box
      border="1px solid"
      borderColor="neutral.lighter"
      borderRadius="small"
      padding="xlarge"
    >
      <Editor {...rest} theme={editorTheme} renderNode={renderNode} />
    </Box>
  );
};

Textarea.displayName = 'Textarea';
Textarea.defaultProps = {
  hiddenToolbarButtons: {
    blocks: [
      'heading1',
      'heading2',
      'block-quote',
      'code',
      'horizontal-rule',
      'bulleted-list',
      'ordered-list',
      'todo-list',
      'image',
      'table',
    ],
    marks: ['deleted', 'code'],
  },
};
export default withTheme(Textarea);
