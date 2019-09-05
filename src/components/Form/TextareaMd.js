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
// import IconBold from './icons/strong.svg'
// import IconBulletedList from './icons/bulleted-list.svg'
// import IconCode from './icons/code.svg'
// import IconFullscreen from './icons/fullscreen.svg'
// import IconH1 from './icons/header1.svg'
// import IconH2 from './icons/header2.svg'
// import IconItalic from './icons/'emphasis'.svg'
// import IconLink from './icons/link.svg'
// import IconMedia from './icons/image.svg'
// import IconNumberedList from './icons/numbered-list.svg'
// import IconQuote from './icons/quote.svg'
// import IconText from './icons/text.svg'
import MarkdownSerializer from '@edithq/slate-md-serializer';

// import RichEditorLink from './RichEditorLink'
import { Value } from 'slate';
// import { Link } from '../Link';
import Nodes from './TextareaMdComponents/Nodes';
import Marks from './TextareaMdComponents/Marks';

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

const SCHEMA = {
  blocks: {
    image: {
      isVoid: true,
    },
  },
};

const plugins = [Nodes, Marks];

/**
 * A rich text editor.
 */
export default class TextareaMd extends React.Component {
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
      'mod+b': this.handleToggleMark.bind(this, 'strong'),
      'mod+i': this.handleToggleMark.bind(this, 'emphasis'),
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

  componentWillUnmount() {
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
    if (type !== 'unordered-list' && type !== 'ordered-list') {
      const isActive = this.hasBlock(type);
      const isList = this.hasBlock(list - item);

      if (isList) {
        this.editor
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('unordered-list')
          .unwrapBlock(ordered - list);
      } else {
        this.editor.setBlocks(isActive ? DEFAULT_NODE : type);
      }
    } else {
      const { document } = this.state.value;
      const isList = this.hasBlock(list - item);
      const isType = this.state.value.blocks.some(block => {
        return Boolean(
          document.getClosest(block.key, parent => parent.type === type)
        );
      });

      if (isList && isType) {
        this.editor
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('unordered-list')
          .unwrapBlock(ordered - list);
      } else if (isList) {
        const oldListType =
          type === 'unordered-list' ? 'ordered-list' : 'unordered-list';

        this.editor.unwrapBlock(oldListType).wrapBlock(type);
      } else {
        this.editor.setBlocks(list - item).wrapBlock(type);
      }
    }
  };

  handleToggleCode = (valueIsCodeBlock, valueIsCodeMark) => {
    if (valueIsCodeBlock) {
      return this.editor.setBlocks(DEFAULT_NODE);
    }

    if (valueIsCodeMark) {
      return this.editor.toggleMark('code');
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
      this.editor.wrapBlock('code');
    } else {
      this.editor.toggleMark('code');
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
        this.hasBlock('list-item') && parent && parent.type === type;
    }

    return valueIsInList;
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
    const valueIsCodeBlock = this.hasBlock('code');
    const valueIsCodeMark = this.hasMark('code');
    // const valueIsLink = this.hasInline(link)

    return (
      <div>
        {/* <RichEditorToolbar>
          <div>
            <RichEditorToolbarButton
              action={this.handleToggleMark.bind(this, 'strong')}
              active={this.hasMark('strong')}
              disabled={isRawMode}
              icon={IconBold}
              text="Bold"
            />
            <RichEditorToolbarButton
              action={this.handleToggleMark.bind(this, 'emphasis')}
              active={this.hasMark('emphasis')}
              disabled={isRawMode}
              icon={IconItalic}
              text="Italic"
            />
            <RichEditorToolbarButton
              action={this.handleToggleLink.bind(this, 'valueIsLink')}
              active={valueIsLink}
              disabled={isRawMode}
              icon={IconLink}
              text="Link"
            />
            <RichEditorToolbarButton
              action={this.handleToggleBlock.bind(this, 'heading1')}
              active={this.hasBlock(heading1)}
              disabled={isRawMode}
              icon={IconH1}
              text="Heading 1"
            />
            <RichEditorToolbarButton
              action={this.handleToggleBlock.bind(this, 'heading2')}
              active={this.hasBlock(heading2)}
              disabled={isRawMode}
              icon={IconH2}
              text="Heading 2"
            />
            <RichEditorToolbarButton
              action={this.handleToggleBlock.bind(this, 'block-quote')}
              active={this.hasBlock('block-quote')}
              disabled={isRawMode}
              icon={IconQuote}
              text="Quote"
            />
            <RichEditorToolbarButton
              action={this.handleToggleBlock.bind(this, 'ordered-list')}
              active={this.isListOfType('ordered-list')}
              disabled={isRawMode}
              icon={IconNumberedList}
              text="Numbered list"
            />
            <RichEditorToolbarButton
              action={this.handleToggleBlock.bind(this, ''unordered-list'')}
              active={this.isListOfType(''unordered-list'')}
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
        </RichEditorToolbar> */}

        <div
          // className={editorWrapperStyle.getClasses()}
          ref={el => (this.container = el)}
        >
          <Editor
            onChange={this.handleChange}
            // renderInline={this.renderInline}
            plugins={plugins}
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
  //     case link: {
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
