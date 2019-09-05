import proptypes from 'prop-types';
import React from 'react';

// import {RichEditorToolbar, RichEditorToolbarButton} from './RichEditorToolbar'
// import Button from 'components/Button/Button'
// import DocumentFilters from 'containers/DocumentFilters/DocumentFilters'
// import DocumentGridList from 'components/DocumentGridList/DocumentGridList'
// import DocumentList from 'containers/DocumentList/DocumentList'
// import DocumentListToolbar from 'components/DocumentListToolbar/DocumentListToolbar'
import { Editor } from 'slate-react';
import HotKeys from '../../utils/HotKeys';
// import IconBold from './icons/bold.svg'
// import IconBulletedList from './icons/bulleted-list.svg'
// import IconCode from './icons/code.svg'
// import IconFullscreen from './icons/fullscreen.svg'
// import IconH1 from './icons/header1.svg'
// import IconH2 from './icons/header2.svg'
// import IconItalic from './icons/italic.svg'
// import IconLink from './icons/link.svg'
// import IconMedia from './icons/image.svg'
// import IconNumberedList from './icons/numbered-list.svg'
// import IconQuote from './icons/quote.svg'
// import IconText from './icons/text.svg'
import MarkdownSerializer from '@edithq/slate-md-serializer';

// import RichEditorLink from './RichEditorLink'
import { Value } from 'slate';

import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import { Text } from '../Text';
// import { Link } from '../Link';
import { UnorderedList, ListItem, OrderedList } from '../List';

const DEFAULT_NODE = 'paragraph';
const EMPTY_VALUE = {
  document: {
    nodes: [
      {
        object: 'block',
        type: 'line',
        nodes: [
          {
            object: 'text',
            text: '',
          },
        ],
      },
    ],
  },
};
const NODE_BLOCKQUOTE = 'block-quote';
const NODE_BOLD = 'bold';
const NODE_CODE = 'code';
const NODE_HEADING1 = 'heading1';
const NODE_HEADING2 = 'heading2';
const NODE_HEADING3 = 'heading3';
const NODE_HEADING4 = 'heading4';
const NODE_HEADING5 = 'heading5';
const NODE_HEADING6 = 'heading6';
const NODE_PARAGRAPH = 'paragraph';
const NODE_ITALIC = 'italic';
// const NODE_IMAGE = 'image';
// const NODE_LINK = 'link';
const NODE_BULLETED_LIST = 'bulleted-list';
const NODE_NUMBERED_LIST = 'ordered-list';
const NODE_LIST_ITEM = 'list-item';
const SCHEMA = {
  blocks: {
    image: {
      isVoid: true,
    },
  },
};

/**
 * A rich text editor.
 */
export default class RichEditor extends React.Component {
  static propTypes = {
    /**
     * The content of the editor.
     */
    children: proptypes.node,

    /**
     * The unique cache key for the document being edited.
     */
    contentKey: proptypes.string,

    /**
     * Callback to be executed when the text loses focus (onBlur event).
     */
    onBlur: proptypes.func,

    /**
     * A callback function that is fired whenever the content changes.
     */
    onChange: proptypes.func,

    /**
     * A callback to be fired when the components mounts, in case it wishes to
     * register an `onSave` callback with the store. That callback is then
     * fired before the field is saved, allowing the function to modify its
     * value before it is persisted.
     */
    onSaveRegister: proptypes.func,

    /**
     * A callback to be fired when the components mounts, in case it wishes to
     * register an `onValidate` callback with the store. That callback is then
     * fired when the field is validated, overriding the default validation
     * method introduced by the API validator module.
     */
    onValidateRegister: proptypes.func,

    /**
     * The initial value of the editor.
     */
    value: proptypes.oneOfType([proptypes.object, proptypes.string]),
    initialValue: proptypes.oneOfType([proptypes.object, proptypes.string]),
  };

  static defaultProps = {
    initialValue: '',
  };

  constructor(props) {
    super(props);

    this.hotKeys = new HotKeys({
      'mod+b': this.handleToggleMark.bind(this, 'bold'),
      'mod+i': this.handleToggleMark.bind(this, 'italic'),
    });

    this.markdown = new MarkdownSerializer();

    this.state = {
      // Deserialising the value and caching the result, so that other methods
      value: this.markdown.deserialize(props.initialValue),
    };
  }

  componentDidMount() {
    const { onSaveRegister, onValidateRegister } = this.props;

    this.hotKeys.addListener();

    if (typeof onSaveRegister === 'function') {
      onSaveRegister(this.handleSave.bind(this));
    }

    if (typeof onValidateRegister === 'function') {
      onValidateRegister(this.validate.bind(this));
    }
  }

  componentWillMount() {
    this.hotKeys.removeListener();
  }

  deserialize = value => {
    if (Value.isValue(value)) {
      return value;
    }

    if (typeof value === 'string') {
      return this.markdown.deserialize(value);
    }

    return Value.fromJSON(value || EMPTY_VALUE);
  };

  handleChange = ({ value }) => {
    const { onChange } = this.props;
    this.setState({ value });

    onChange && onChange(this.markdown.serialize(value));
  };

  handleToggleBlock = type => {
    if (type !== NODE_BULLETED_LIST && type !== NODE_NUMBERED_LIST) {
      const isActive = this.hasBlock(type);
      const isList = this.hasBlock(NODE_LIST_ITEM);

      if (isList) {
        this.editor
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock(NODE_BULLETED_LIST)
          .unwrapBlock(NODE_NUMBERED_LIST);
      } else {
        this.editor.setBlocks(isActive ? DEFAULT_NODE : type);
      }
    } else {
      const { document } = this.state.value;
      const isList = this.hasBlock(NODE_LIST_ITEM);
      const isType = this.state.value.blocks.some(block => {
        return Boolean(
          document.getClosest(block.key, parent => parent.type === type)
        );
      });

      if (isList && isType) {
        this.editor
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock(NODE_BULLETED_LIST)
          .unwrapBlock(NODE_NUMBERED_LIST);
      } else if (isList) {
        const oldListType =
          type === NODE_BULLETED_LIST ? NODE_NUMBERED_LIST : NODE_BULLETED_LIST;

        this.editor.unwrapBlock(oldListType).wrapBlock(type);
      } else {
        this.editor.setBlocks(NODE_LIST_ITEM).wrapBlock(type);
      }
    }
  };

  handleToggleCode = (valueIsCodeBlock, valueIsCodeMark) => {
    if (valueIsCodeBlock) {
      return this.editor.setBlocks(DEFAULT_NODE);
    }

    if (valueIsCodeMark) {
      return this.editor.toggleMark(NODE_CODE);
    }

    const { blocks, selection } = this.state.value;

    // If the selection spans across more than one node, we render a code
    // block.
    let isBlock = blocks.size > 1;

    // We do an additional check to see if the selection corresponds to the
    // entirety of a node. If it does, we also render a block.
    if (!isBlock) {
      const { end, start } = selection;
      const block = blocks.get(0);

      isBlock = start.isAtStartOfNode(block) && end.isAtEndOfNode(block);
    }

    if (isBlock) {
      this.editor.wrapBlock(NODE_CODE);
    } else {
      this.editor.toggleMark(NODE_CODE);
    }
  };

  handleToggleMark = type => {
    this.editor.toggleMark(type);
  };

  hasBlock = type => {
    return this.state.value.blocks.some(block => block.type === type);
  };

  hasInline = type => {
    return this.state.value.inlines.some(inline => inline.type === type);
  };

  hasMark = type => {
    return this.state.value.activeMarks.some(mark => mark.type === type);
  };

  isListOfType = type => {
    const { blocks, document } = this.state.value;

    let valueIsInList = this.hasBlock(type);

    if (blocks.size > 0) {
      const parent = document.getParent(blocks.first().key);

      valueIsInList =
        this.hasBlock(NODE_LIST_ITEM) && parent && parent.type === type;
    }

    return valueIsInList;
  };

  renderBlock = (props, _, next) => {
    const { attributes, children, isFocused, node } = props;

    switch (node.type) {
      case NODE_CODE:
        return <code {...attributes}>{children}</code>;

      case NODE_BLOCKQUOTE:
        return <blockquote {...attributes}>{children}</blockquote>;

      case NODE_HEADING1:
        return (
          <Heading as="h1" {...attributes}>
            {children}
          </Heading>
        );

      case NODE_HEADING2:
        return (
          <Heading as="h2" {...attributes}>
            {children}
          </Heading>
        );

      case NODE_HEADING3:
        return (
          <Heading as="h3" {...attributes}>
            {children}
          </Heading>
        );

      case NODE_HEADING4:
        return (
          <Heading as="h4" {...attributes}>
            {children}
          </Heading>
        );

      case NODE_HEADING5:
        return (
          <Heading as="h5" {...attributes}>
            {children}
          </Heading>
        );
      case NODE_HEADING6:
        return (
          <Heading as="h6" {...attributes}>
            {children}
          </Heading>
        );

      case NODE_LIST_ITEM:
        return <ListItem {...attributes}>{children}</ListItem>;

      case NODE_NUMBERED_LIST:
        return <OrderedList {...attributes}>{children}</OrderedList>;

      case NODE_BULLETED_LIST:
        return <UnorderedList {...attributes}>{children}</UnorderedList>;

      case NODE_PARAGRAPH:
        return <Paragraph {...attributes}>{children}</Paragraph>;

      default:
        return next();
    }
  };

  renderMark = ({ children, mark, attributes }, _, next) => {
    switch (mark.type) {
      case NODE_BOLD:
        return (
          <Text fontWeight="bold" {...attributes}>
            {children}
          </Text>
        );

      case NODE_CODE:
        return <code {...attributes}>{children}</code>;

      case NODE_ITALIC:
        return (
          <Text fontStyle="italic" {...attributes}>
            {children}
          </Text>
        );

      default:
        return next();
    }
  };

  serialise = value => {
    if (Value.isValue(value)) {
      return this.markdown.serialize(value);
    }

    return value;
  };

  validate = ({ validateFn, value }) => {
    if (Value.isValue(value)) {
      return Promise.resolve();
    }

    return validateFn(value);
  };

  render() {
    const valueIsCodeBlock = this.hasBlock(NODE_CODE);
    const valueIsCodeMark = this.hasMark(NODE_CODE);
    // const valueIsLink = this.hasInline(NODE_LINK)

    return (
      <div>
        {/* <RichEditorToolbar>
          <div>
            <RichEditorToolbarButton
              action={this.handleToggleMark.bind(this, NODE_BOLD)}
              active={this.hasMark(NODE_BOLD)}
              disabled={isRawMode}
              icon={IconBold}
              text="Bold"
            />
            <RichEditorToolbarButton
              action={this.handleToggleMark.bind(this, NODE_ITALIC)}
              active={this.hasMark(NODE_ITALIC)}
              disabled={isRawMode}
              icon={IconItalic}
              text="Italic"
            />
            <RichEditorToolbarButton
              action={this.handleToggleLink.bind(this, valueIsLink)}
              active={valueIsLink}
              disabled={isRawMode}
              icon={IconLink}
              text="Link"
            />
            <RichEditorToolbarButton
              action={this.handleToggleBlock.bind(this, NODE_HEADING1)}
              active={this.hasBlock(NODE_HEADING1)}
              disabled={isRawMode}
              icon={IconH1}
              text="Heading 1"
            />
            <RichEditorToolbarButton
              action={this.handleToggleBlock.bind(this, NODE_HEADING2)}
              active={this.hasBlock(NODE_HEADING2)}
              disabled={isRawMode}
              icon={IconH2}
              text="Heading 2"
            />
            <RichEditorToolbarButton
              action={this.handleToggleBlock.bind(this, NODE_BLOCKQUOTE)}
              active={this.hasBlock(NODE_BLOCKQUOTE)}
              disabled={isRawMode}
              icon={IconQuote}
              text="Quote"
            />
            <RichEditorToolbarButton
              action={this.handleToggleBlock.bind(this, NODE_NUMBERED_LIST)}
              active={this.isListOfType(NODE_NUMBERED_LIST)}
              disabled={isRawMode}
              icon={IconNumberedList}
              text="Numbered list"
            />
            <RichEditorToolbarButton
              action={this.handleToggleBlock.bind(this, NODE_BULLETED_LIST)}
              active={this.isListOfType(NODE_BULLETED_LIST)}
              disabled={isRawMode}
              icon={IconBulletedList}
              text="Bulleted list"
            />
            <RichEditorToolbarButton
              action={this.handleToggleCode.bind(
                this,
                valueIsCodeBlock,
                valueIsCodeMark
              )}
              active={valueIsCodeBlock || valueIsCodeMark}
              disabled={isRawMode}
              icon={IconCode}
              text="Code block"
            />
          </div>

          <div>
            <RichEditorToolbarButton
              action={this.handleToggleRawMode}
              active={isRawMode}
              icon={IconText}
              text="Raw mode"
            />
            <RichEditorToolbarButton
              action={this.handleToggleFullscreen}
              active={isFullscreen}
              icon={IconFullscreen}
              text="Full-screen"
            />
          </div>
        </RichEditorToolbar> */}

        <div
          // className={editorWrapperStyle.getClasses()}
          ref={el => (this.container = el)}
        >
          <Editor
            onChange={this.handleChange}
            renderBlock={this.renderBlock}
            // renderInline={this.renderInline}
            renderMark={this.renderMark}
            ref={el => (this.editor = el)}
            schema={SCHEMA}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }

  // renderInline({children, node}, _, next) {
  //   switch (node.type) {
  //     case NODE_LINK: {
  //       const href = node.data.get('href')

  //       if (this.isNarrowViewport) {
  //         return (
  //           <a
  //             href={href}
  //             onClick={this.handleLinkClick.bind(this, node, href)}
  //           >
  //             {children}
  //           </a>
  //         )
  //       }

  //       return (
  //         <RichEditorLink
  //           bounds={this.containerBounds}
  //           href={href}
  //           onChange={this.handleLinkUpdate.bind(this, node)}
  //         >
  //           {children}
  //         </RichEditorLink>
  //       )
  //     }

  //     default:
  //       return next()
  //   }
  // }
}
