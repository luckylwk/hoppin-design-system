'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

// import {RichEditorToolbar, RichEditorToolbarButton} from './RichEditorToolbar'
// import Button from 'components/Button/Button'
// import DocumentFilters from 'containers/DocumentFilters/DocumentFilters'
// import DocumentGridList from 'components/DocumentGridList/DocumentGridList'
// import DocumentList from 'containers/DocumentList/DocumentList'
// import DocumentListToolbar from 'components/DocumentListToolbar/DocumentListToolbar'

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


// import RichEditorLink from './RichEditorLink'

// import { Link } from '../Link';


var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slateReact = require('slate-react');

var _HotKeys = require('../../utils/HotKeys');

var _HotKeys2 = _interopRequireDefault(_HotKeys);

var _slateMdSerializer = require('@edithq/slate-md-serializer');

var _slateMdSerializer2 = _interopRequireDefault(_slateMdSerializer);

var _slate = require('slate');

var _Heading = require('../Heading');

var _Paragraph = require('../Paragraph');

var _Text = require('../Text');

var _List = require('../List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var NODE_BLOCKQUOTE = 'block-quote';
var NODE_BOLD = 'bold';
var NODE_CODE = 'code';
var NODE_HEADING1 = 'heading1';
var NODE_HEADING2 = 'heading2';
var NODE_HEADING3 = 'heading3';
var NODE_HEADING4 = 'heading4';
var NODE_HEADING5 = 'heading5';
var NODE_HEADING6 = 'heading6';
var NODE_PARAGRAPH = 'paragraph';
var NODE_ITALIC = 'italic';
// const NODE_IMAGE = 'image';
// const NODE_LINK = 'link';
var NODE_BULLETED_LIST = 'bulleted-list';
var NODE_NUMBERED_LIST = 'ordered-list';
var NODE_LIST_ITEM = 'list-item';
var SCHEMA = {
  blocks: {
    image: {
      isVoid: true
    }
  }
};

/**
 * A rich text editor.
 */
var RichEditor = (_temp = _class = function (_React$Component) {
  _inherits(RichEditor, _React$Component);

  function RichEditor(props) {
    _classCallCheck(this, RichEditor);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    _this.hotKeys = new _HotKeys2.default({
      'mod+b': _this.handleToggleMark.bind(_this, 'bold'),
      'mod+i': _this.handleToggleMark.bind(_this, 'italic')
    });

    _this.markdown = new _slateMdSerializer2.default();

    _this.state = {
      // Deserialising the value and caching the result, so that other methods
      value: _this.markdown.deserialize(props.initialValue)
    };
    return _this;
  }

  RichEditor.prototype.componentDidMount = function componentDidMount() {
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

  RichEditor.prototype.componentWillMount = function componentWillMount() {
    this.hotKeys.removeListener();
  };

  RichEditor.prototype.render = function render() {
    var _this2 = this;

    var valueIsCodeBlock = this.hasBlock(NODE_CODE);
    var valueIsCodeMark = this.hasMark(NODE_CODE);
    // const valueIsLink = this.hasInline(NODE_LINK)

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        {
          // className={editorWrapperStyle.getClasses()}
          ref: function ref(el) {
            return _this2.container = el;
          }
        },
        _react2.default.createElement(_slateReact.Editor, {
          onChange: this.handleChange,
          renderBlock: this.renderBlock
          // renderInline={this.renderInline}
          , renderMark: this.renderMark,
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


  return RichEditor;
}(_react2.default.Component), _class.defaultProps = {
  initialValue: ''
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.deserialize = function (value) {
    if (_slate.Value.isValue(value)) {
      return value;
    }

    if (typeof value === 'string') {
      return _this3.markdown.deserialize(value);
    }

    return _slate.Value.fromJSON(value || EMPTY_VALUE);
  };

  this.handleChange = function (_ref) {
    var value = _ref.value;
    var onChange = _this3.props.onChange;

    _this3.setState({ value: value });

    onChange && onChange(_this3.markdown.serialize(value));
  };

  this.handleToggleBlock = function (type) {
    if (type !== NODE_BULLETED_LIST && type !== NODE_NUMBERED_LIST) {
      var isActive = _this3.hasBlock(type);
      var isList = _this3.hasBlock(NODE_LIST_ITEM);

      if (isList) {
        _this3.editor.setBlocks(isActive ? DEFAULT_NODE : type).unwrapBlock(NODE_BULLETED_LIST).unwrapBlock(NODE_NUMBERED_LIST);
      } else {
        _this3.editor.setBlocks(isActive ? DEFAULT_NODE : type);
      }
    } else {
      var document = _this3.state.value.document;

      var _isList = _this3.hasBlock(NODE_LIST_ITEM);
      var isType = _this3.state.value.blocks.some(function (block) {
        return Boolean(document.getClosest(block.key, function (parent) {
          return parent.type === type;
        }));
      });

      if (_isList && isType) {
        _this3.editor.setBlocks(DEFAULT_NODE).unwrapBlock(NODE_BULLETED_LIST).unwrapBlock(NODE_NUMBERED_LIST);
      } else if (_isList) {
        var oldListType = type === NODE_BULLETED_LIST ? NODE_NUMBERED_LIST : NODE_BULLETED_LIST;

        _this3.editor.unwrapBlock(oldListType).wrapBlock(type);
      } else {
        _this3.editor.setBlocks(NODE_LIST_ITEM).wrapBlock(type);
      }
    }
  };

  this.handleToggleCode = function (valueIsCodeBlock, valueIsCodeMark) {
    if (valueIsCodeBlock) {
      return _this3.editor.setBlocks(DEFAULT_NODE);
    }

    if (valueIsCodeMark) {
      return _this3.editor.toggleMark(NODE_CODE);
    }

    var _state$value = _this3.state.value,
        blocks = _state$value.blocks,
        selection = _state$value.selection;

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
      _this3.editor.wrapBlock(NODE_CODE);
    } else {
      _this3.editor.toggleMark(NODE_CODE);
    }
  };

  this.handleToggleMark = function (type) {
    _this3.editor.toggleMark(type);
  };

  this.hasBlock = function (type) {
    return _this3.state.value.blocks.some(function (block) {
      return block.type === type;
    });
  };

  this.hasInline = function (type) {
    return _this3.state.value.inlines.some(function (inline) {
      return inline.type === type;
    });
  };

  this.hasMark = function (type) {
    return _this3.state.value.activeMarks.some(function (mark) {
      return mark.type === type;
    });
  };

  this.isListOfType = function (type) {
    var _state$value2 = _this3.state.value,
        blocks = _state$value2.blocks,
        document = _state$value2.document;


    var valueIsInList = _this3.hasBlock(type);

    if (blocks.size > 0) {
      var parent = document.getParent(blocks.first().key);

      valueIsInList = _this3.hasBlock(NODE_LIST_ITEM) && parent && parent.type === type;
    }

    return valueIsInList;
  };

  this.renderBlock = function (props, _, next) {
    var attributes = props.attributes,
        children = props.children,
        isFocused = props.isFocused,
        node = props.node;


    switch (node.type) {
      case NODE_CODE:
        return _react2.default.createElement(
          'code',
          attributes,
          children
        );

      case NODE_BLOCKQUOTE:
        return _react2.default.createElement(
          'blockquote',
          attributes,
          children
        );

      case NODE_HEADING1:
        return _react2.default.createElement(
          _Heading.Heading,
          _extends({ as: 'h1' }, attributes),
          children
        );

      case NODE_HEADING2:
        return _react2.default.createElement(
          _Heading.Heading,
          _extends({ as: 'h2' }, attributes),
          children
        );

      case NODE_HEADING3:
        return _react2.default.createElement(
          _Heading.Heading,
          _extends({ as: 'h3' }, attributes),
          children
        );

      case NODE_HEADING4:
        return _react2.default.createElement(
          _Heading.Heading,
          _extends({ as: 'h4' }, attributes),
          children
        );

      case NODE_HEADING5:
        return _react2.default.createElement(
          _Heading.Heading,
          _extends({ as: 'h5' }, attributes),
          children
        );
      case NODE_HEADING6:
        return _react2.default.createElement(
          _Heading.Heading,
          _extends({ as: 'h6' }, attributes),
          children
        );

      case NODE_LIST_ITEM:
        return _react2.default.createElement(
          _List.ListItem,
          attributes,
          children
        );

      case NODE_NUMBERED_LIST:
        return _react2.default.createElement(
          _List.OrderedList,
          attributes,
          children
        );

      case NODE_BULLETED_LIST:
        return _react2.default.createElement(
          _List.UnorderedList,
          attributes,
          children
        );

      case NODE_PARAGRAPH:
        return _react2.default.createElement(
          _Paragraph.Paragraph,
          attributes,
          children
        );

      default:
        return next();
    }
  };

  this.renderMark = function (_ref2, _, next) {
    var children = _ref2.children,
        mark = _ref2.mark,
        attributes = _ref2.attributes;

    switch (mark.type) {
      case NODE_BOLD:
        return _react2.default.createElement(
          _Text.Text,
          _extends({ fontWeight: 'bold' }, attributes),
          children
        );

      case NODE_CODE:
        return _react2.default.createElement(
          'code',
          attributes,
          children
        );

      case NODE_ITALIC:
        return _react2.default.createElement(
          _Text.Text,
          _extends({ fontStyle: 'italic' }, attributes),
          children
        );

      default:
        return next();
    }
  };

  this.serialise = function (value) {
    if (_slate.Value.isValue(value)) {
      return _this3.markdown.serialize(value);
    }

    return value;
  };

  this.validate = function (_ref3) {
    var validateFn = _ref3.validateFn,
        value = _ref3.value;

    if (_slate.Value.isValue(value)) {
      return Promise.resolve();
    }

    return validateFn(value);
  };
}, _temp);
exports.default = RichEditor;
RichEditor.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the editor.
   */
  children: _propTypes2.default.node,

  /**
   * The unique cache key for the document being edited.
   */
  contentKey: _propTypes2.default.string,

  /**
   * Callback to be executed when the text loses focus (onBlur event).
   */
  onBlur: _propTypes2.default.func,

  /**
   * A callback function that is fired whenever the content changes.
   */
  onChange: _propTypes2.default.func,

  /**
   * A callback to be fired when the components mounts, in case it wishes to
   * register an `onSave` callback with the store. That callback is then
   * fired before the field is saved, allowing the function to modify its
   * value before it is persisted.
   */
  onSaveRegister: _propTypes2.default.func,

  /**
   * A callback to be fired when the components mounts, in case it wishes to
   * register an `onValidate` callback with the store. That callback is then
   * fired when the field is validated, overriding the default validation
   * method introduced by the API validator module.
   */
  onValidateRegister: _propTypes2.default.func,

  /**
   * The initial value of the editor.
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  initialValue: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string])
} : {};
module.exports = exports['default'];