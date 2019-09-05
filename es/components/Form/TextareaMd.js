var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
// import IconItalic from './icons/'italic'.svg'
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
import MarkdownShortcuts from './TextareaMdComponents/MarkdownShortcuts';
import MarkdownPaste from './TextareaMdComponents/MarkdownPaste';
import Schema from './TextareaMdComponents/schema';

var DEFAULT_NODE = 'paragraph';
var EMPTY_VALUE = {
  document: {
    nodes: [{
      object: 'block',
      type: 'line',
      nodes: [{
        object: 'text',
        text: ''
      }]
    }]
  }
};

/**
 * A rich text editor.
 */
var TextareaMd = (_temp = _class = function (_React$Component) {
  _inherits(TextareaMd, _React$Component);

  function TextareaMd(props) {
    _classCallCheck(this, TextareaMd);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.deserialize = function (value) {
      if (Value.isValue(value)) {
        return value;
      }

      if (typeof value === 'string') {
        return _this.markdown.deserialize(value);
      }

      return Value.fromJSON(value || EMPTY_VALUE);
    };

    _this.handleChange = function (_ref) {
      var value = _ref.value;
      var onChange = _this.props.onChange;

      _this.setState({ value: value });

      onChange && onChange(_this.markdown.serialize(value));
    };

    _this.handleToggleMark = function (type) {
      _this.editor.toggleMark(type);
    };

    _this.hasBlock = function (type) {
      return _this.state.value.blocks.some(function (block) {
        return block.type === type;
      });
    };

    _this.hasMark = function (type) {
      return _this.state.value.activeMarks.some(function (mark) {
        return mark.type === type;
      });
    };

    _this.serialise = function (value) {
      if (Value.isValue(value)) {
        return _this.markdown.serialize(value);
      }

      return value;
    };

    _this.hotKeys = new HotKeys({
      'mod+b': _this.handleToggleMark.bind(_this, 'bold'),
      'mod+i': _this.handleToggleMark.bind(_this, 'italic')
    });

    _this.markdown = new MarkdownSerializer();
    _this.plugins = [Nodes, Marks, MarkdownShortcuts(), MarkdownPaste(_this.markdown)];
    _this.schema = Schema;

    _this.state = {
      // Deserialising the value and caching the result, so that other methods
      value: _this.markdown.deserialize(props.initialValue)
    };
    return _this;
  }

  TextareaMd.prototype.componentDidMount = function componentDidMount() {
    // const { onSaveRegister, onValidateRegister } = this.props;
    this.hotKeys.addListener();
    // if (typeof onSaveRegister === 'function') {
    //   onSaveRegister(this.handleSave.bind(this));
    // }
    // if (typeof onValidateRegister === 'function') {
    //   onValidateRegister(this.validate.bind(this));
    // }
  };

  TextareaMd.prototype.componentWillUnmount = function componentWillUnmount() {
    this.hotKeys.removeListener();
  };

  // handleToggleBlock = type => {
  //   if (type !== 'unordered-list' && type !== 'ordered-list') {
  //     const isActive = this.hasBlock(type);
  //     const isList = this.hasBlock('list-item');

  //     if (isList) {
  //       this.editor
  //         .setBlocks(isActive ? DEFAULT_NODE : type)
  //         .unwrapBlock('unordered-list')
  //         .unwrapBlock('ordered-list');
  //     } else {
  //       this.editor.setBlocks(isActive ? DEFAULT_NODE : type);
  //     }
  //   } else {
  //     const { document } = this.state.value;
  //     const isList = this.hasBlock('list-item');
  //     const isType = this.state.value.blocks.some(block => {
  //       return Boolean(
  //         document.getClosest(block.key, parent => parent.type === type)
  //       );
  //     });

  //     if (isList && isType) {
  //       this.editor
  //         .setBlocks(DEFAULT_NODE)
  //         .unwrapBlock('unordered-list')
  //         .unwrapBlock('ordered-list');
  //     } else if (isList) {
  //       const oldListType =
  //         type === 'unordered-list' ? 'ordered-list' : 'unordered-list';

  //       this.editor.unwrapBlock(oldListType).wrapBlock(type);
  //     } else {
  //       this.editor.setBlocks('list-item').wrapBlock(type);
  //     }
  //   }
  // };

  // handleToggleCode = (valueIsCodeBlock, valueIsCodeMark) => {
  //   if (valueIsCodeBlock) {
  //     return this.editor.setBlocks(DEFAULT_NODE);
  //   }

  //   if (valueIsCodeMark) {
  //     return this.editor.toggleMark('code');
  //   }

  //   const { blocks, selection } = this.state.value;

  //   // If the selection spans across more than one node, we render a code
  //   // block.
  //   let isBlock = blocks.size > 1;

  //   // We do an additional check to see if the selection corresponds to the
  //   // entirety of a node. If it does, we also render a block.
  //   if (!isBlock) {
  //     const { end, start } = selection;
  //     const block = blocks.get(0);

  //     isBlock = start.isAtStartOfNode(block) && end.isAtEndOfNode(block);
  //   }

  //   if (isBlock) {
  //     this.editor.wrapBlock('code');
  //   } else {
  //     this.editor.toggleMark('code');
  //   }
  // };

  // hasInline = type => {
  //   return this.state.value.inlines.some(inline => inline.type === type);
  // };

  // isListOfType = type => {
  //   const { blocks, document } = this.state.value;

  //   let valueIsInList = this.hasBlock(type);

  //   if (blocks.size > 0) {
  //     const parent = document.getParent(blocks.first().key);

  //     valueIsInList =
  //       this.hasBlock('list-item') && parent && parent.type === type;
  //   }

  //   return valueIsInList;
  // };

  // validate = ({ validateFn, value }) => {
  //   if (Value.isValue(value)) {
  //     return Promise.resolve();
  //   }

  //   return validateFn(value);
  // };

  TextareaMd.prototype.render = function render() {
    var _this2 = this;

    // const valueIsCodeBlock = this.hasBlock('code');
    // const valueIsCodeMark = this.hasMark('code');
    // const valueIsLink = this.hasInline(link)

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        {
          // className={editorWrapperStyle.getClasses()}
          ref: function ref(el) {
            return _this2.container = el;
          }
        },
        React.createElement(Editor, {
          onChange: this.handleChange
          // renderInline={this.renderInline}
          , plugins: this.plugins,
          ref: function ref(el) {
            return _this2.editor = el;
          },
          schema: this.schema,
          value: this.state.value
        })
      )
    );
  };

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


  return TextareaMd;
}(React.Component), _class.defaultProps = {
  initialValue: ''
}, _temp);
export { TextareaMd as default };
TextareaMd.propTypes = process.env.NODE_ENV !== "production" ? {
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
  // value: proptypes.oneOfType([proptypes.object, proptypes.string]),
  initialValue: proptypes.oneOfType([proptypes.object, proptypes.string])
} : {};