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

var SCHEMA = {
  blocks: {
    image: {
      isVoid: true
    }
  }
};

var plugins = [Nodes, Marks];

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

    _this.handleToggleBlock = function (type) {
      if (type !== 'unordered-list' && type !== 'ordered-list') {
        var isActive = _this.hasBlock(type);
        var isList = _this.hasBlock(list - item);

        if (isList) {
          _this.editor.setBlocks(isActive ? DEFAULT_NODE : type).unwrapBlock('unordered-list').unwrapBlock(ordered - list);
        } else {
          _this.editor.setBlocks(isActive ? DEFAULT_NODE : type);
        }
      } else {
        var document = _this.state.value.document;

        var _isList = _this.hasBlock(list - item);
        var isType = _this.state.value.blocks.some(function (block) {
          return Boolean(document.getClosest(block.key, function (parent) {
            return parent.type === type;
          }));
        });

        if (_isList && isType) {
          _this.editor.setBlocks(DEFAULT_NODE).unwrapBlock('unordered-list').unwrapBlock(ordered - list);
        } else if (_isList) {
          var oldListType = type === 'unordered-list' ? 'ordered-list' : 'unordered-list';

          _this.editor.unwrapBlock(oldListType).wrapBlock(type);
        } else {
          _this.editor.setBlocks(list - item).wrapBlock(type);
        }
      }
    };

    _this.handleToggleCode = function (valueIsCodeBlock, valueIsCodeMark) {
      if (valueIsCodeBlock) {
        return _this.editor.setBlocks(DEFAULT_NODE);
      }

      if (valueIsCodeMark) {
        return _this.editor.toggleMark('code');
      }

      var _this$state$value = _this.state.value,
          blocks = _this$state$value.blocks,
          selection = _this$state$value.selection;

      // If the selection spans across more than one node, we render a code
      // block.

      var isBlock = blocks.size > 1;

      // We do an additional check to see if the selection corresponds to the
      // entirety of a node. If it does, we also render a block.
      if (!isBlock) {
        var end = selection.end,
            start = selection.start;

        var block = blocks.get(0);

        isBlock = start.isAtStartOfNode(block) && end.isAtEndOfNode(block);
      }

      if (isBlock) {
        _this.editor.wrapBlock('code');
      } else {
        _this.editor.toggleMark('code');
      }
    };

    _this.handleToggleMark = function (type) {
      _this.editor.toggleMark(type);
    };

    _this.hasBlock = function (type) {
      return _this.state.value.blocks.some(function (block) {
        return block.type === type;
      });
    };

    _this.hasInline = function (type) {
      return _this.state.value.inlines.some(function (inline) {
        return inline.type === type;
      });
    };

    _this.hasMark = function (type) {
      return _this.state.value.activeMarks.some(function (mark) {
        return mark.type === type;
      });
    };

    _this.isListOfType = function (type) {
      var _this$state$value2 = _this.state.value,
          blocks = _this$state$value2.blocks,
          document = _this$state$value2.document;


      var valueIsInList = _this.hasBlock(type);

      if (blocks.size > 0) {
        var parent = document.getParent(blocks.first().key);

        valueIsInList = _this.hasBlock('list-item') && parent && parent.type === type;
      }

      return valueIsInList;
    };

    _this.serialise = function (value) {
      if (Value.isValue(value)) {
        return _this.markdown.serialize(value);
      }

      return value;
    };

    _this.validate = function (_ref2) {
      var validateFn = _ref2.validateFn,
          value = _ref2.value;

      if (Value.isValue(value)) {
        return Promise.resolve();
      }

      return validateFn(value);
    };

    _this.hotKeys = new HotKeys({
      'mod+b': _this.handleToggleMark.bind(_this, 'bold'),
      'mod+i': _this.handleToggleMark.bind(_this, 'italic')
    });

    _this.markdown = new MarkdownSerializer();

    _this.state = {
      // Deserialising the value and caching the result, so that other methods
      value: _this.markdown.deserialize(props.initialValue)
    };
    return _this;
  }

  TextareaMd.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        onSaveRegister = _props.onSaveRegister,
        onValidateRegister = _props.onValidateRegister;


    this.hotKeys.addListener();

    if (typeof onSaveRegister === 'function') {
      onSaveRegister(this.handleSave.bind(this));
    }

    if (typeof onValidateRegister === 'function') {
      onValidateRegister(this.validate.bind(this));
    }
  };

  TextareaMd.prototype.componentWillUnmount = function componentWillUnmount() {
    this.hotKeys.removeListener();
  };

  TextareaMd.prototype.render = function render() {
    var _this2 = this;

    var valueIsCodeBlock = this.hasBlock('code');
    var valueIsCodeMark = this.hasMark('code');
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
          , plugins: plugins,
          ref: function ref(el) {
            return _this2.editor = el;
          },
          schema: SCHEMA,
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
  value: proptypes.oneOfType([proptypes.object, proptypes.string]),
  initialValue: proptypes.oneOfType([proptypes.object, proptypes.string])
} : {};