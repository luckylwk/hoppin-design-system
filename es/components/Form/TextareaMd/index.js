var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  display: block;\n\n  ', '\n  ', '\n  ', '\n\n  background: ', ';\n\n  border: 1px solid transparent;\n  border-color: ', ';\n  border-radius: ', ';\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ', ';\n    background: ', ';\n  }\n'], ['\n  box-sizing: border-box;\n  display: block;\n\n  ', '\n  ', '\n  ', '\n\n  background: ', ';\n\n  border: 1px solid transparent;\n  border-color: ', ';\n  border-radius: ', ';\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ', ';\n    background: ', ';\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { space, layout, flexbox } from 'styled-system';

import Label from '../Label';

import { Editor } from 'slate-react';
import MarkdownSerializer from 'slate-md-serializer';
import { Value } from 'slate';
import Nodes from './Plugins/Nodes';
import Marks from './Plugins/Marks';
import MarkdownShortcuts from './Plugins/MarkdownShortcuts';
import MarkdownPaste from './Plugins/MarkdownPaste';
import KeyboardBehaviour from './Plugins/KeyboardBehaviour';
import KeyboardShortcuts from './Plugins/KeyboardShortcuts';
import Ellipsis from './Plugins/Ellipsis';
import Chrome from './Plugins/Chrome';

import Schema from './lib/Schema';
import queries from './lib/queries';

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
var TextareaMdField = (_temp = _class = function (_React$Component) {
  _inherits(TextareaMdField, _React$Component);

  function TextareaMdField(props) {
    _classCallCheck(this, TextareaMdField);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    _this.markdown = new MarkdownSerializer();
    _this.plugins = [Nodes, Marks, KeyboardBehaviour(), KeyboardShortcuts(), MarkdownShortcuts(), MarkdownPaste(_this.markdown), Ellipsis(), Chrome()];
    _this.schema = _this.makeSchema(props);

    _this.state = {
      // Deserialising the value and caching the result, so that other methods
      value: _this.markdown.deserialize(props.initialValue)
    };
    return _this;
  }

  TextareaMdField.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        initialValue = _props.initialValue,
        onChange = _props.onChange,
        onBlur = _props.onBlur,
        enableMarks = _props.enableMarks,
        enableBlocks = _props.enableBlocks,
        disableMarks = _props.disableMarks,
        disableBlocks = _props.disableBlocks,
        rest = _objectWithoutProperties(_props, ['initialValue', 'onChange', 'onBlur', 'enableMarks', 'enableBlocks', 'disableMarks', 'disableBlocks']);

    return React.createElement(StyledEditor, _extends({
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      plugins: this.plugins,
      ref: function ref(el) {
        return _this2.editor = el;
      },
      schema: this.schema,
      queries: queries,
      value: this.state.value,
      tooltip: this.props.tooltip
    }, rest));
  };

  return TextareaMdField;
}(React.Component), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.makeSchema = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this3.props;
    var enableBlocks = props.enableBlocks,
        enableMarks = props.enableMarks,
        disableBlocks = props.disableBlocks,
        disableMarks = props.disableMarks;


    var customNodes = [];
    // if we have disableBlocks, ignore enableBlocks
    if (disableBlocks && disableBlocks.length > 0) {
      // map over all available nodes in Schema
      Schema.document.nodes[0].match.map(function (node) {
        // pick the ones that are not disabled
        if (disableBlocks.indexOf(node.type) < 0) {
          customNodes.push(node);
        }
      });
      // if we have don't have disableBlocks, use enableBlocks if available
    } else if (enableBlocks && enableBlocks.length > 0) {
      // map over all available nodes in Schema
      Schema.document.nodes[0].match.map(function (node) {
        // pick the ones that are not disabled
        if (enableBlocks.indexOf(node.type) > -1) {
          customNodes.push(node);
        }
      });
      // default to Schema as is
    } else {
      customNodes = [].concat(Schema.document.nodes[0].match);
    }

    // if we have disableMarks, ignore enableMarks
    if (disableMarks && disableMarks.length > 0) {
      // map over all available marks in Schema
      Object.keys(Schema.blocks).map(function (block) {
        var tempBlockMarks = [];
        var blockMarks = Schema.blocks[block].marks;
        if (blockMarks && blockMarks.length > 0) {
          blockMarks.map(function (mark) {
            // pick the ones that are not disabled
            if (disableMarks.indexOf(mark.type) < 0) {
              tempBlockMarks.push(mark);
            }
          });
          Schema.blocks[block].marks = tempBlockMarks;
        }
      });

      // if we have don't have disableMarks, use enableMarks if available
    } else if (enableMarks && enableMarks.length > 0) {
      // map over all available marks in Schema
      Object.keys(Schema.blocks).map(function (block) {
        var tempBlockMarks = [];
        var blockMarks = Schema.blocks[block].marks;
        if (blockMarks && blockMarks.length > 0) {
          blockMarks.map(function (mark) {
            // pick the ones that are not disabled
            if (enableMarks.indexOf(mark.type) > -1) {
              tempBlockMarks.push(mark);
            }
          });
          Schema.blocks[block].marks = tempBlockMarks;
        }
      });
      // default to Schema as is
    }

    var newSchema = _extends({}, Schema);
    newSchema.document.nodes[0].match = customNodes;
    return newSchema;
  };

  this.deserialize = function (value) {
    if (Value.isValue(value)) {
      return value;
    }

    if (typeof value === 'string') {
      return _this3.markdown.deserialize(value);
    }

    return Value.fromJSON(value || EMPTY_VALUE);
  };

  this.handleChange = function (_ref) {
    var value = _ref.value;
    var onChange = _this3.props.onChange;

    onChange && onChange(_this3.markdown.serialize(value));

    _this3.setState({ value: value });
  };

  this.handleBlur = function (event, editor, next) {
    var onBlur = _this3.props.onBlur;

    onBlur && onBlur(_this3.markdown.serialize(_this3.state.value));

    next();
  };

  this.serialise = function (value) {
    if (Value.isValue(value)) {
      return _this3.markdown.serialize(value);
    }

    return value;
  };
}, _temp);


var StyledEditor = styled(Editor)(_templateObject, space, layout, flexbox, function (props) {
  return props.theme.colors.whiteout.lighter;
}, function (props) {
  if (props.theme.colors[props.context] !== undefined) {
    return props.theme.colors[props.context].light;
  } else {
    return props.theme.colors.neutral.light;
  }
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.radii.small;
}, function (props) {
  if (props.context !== 'neutral' && props.theme.colors[props.context] !== undefined) {
    return props.theme.colors[props.context].base;
  } else {
    return props.theme.colors.primary.base;
  }
}, function (props) {
  return props.theme.colors.whiteout.base;
});

StyledEditor.defaultProps = {
  context: 'neutral',
  marginBottom: 'base',
  paddingY: 'small',
  paddingX: 'base'
};

var TextareaMd = function TextareaMd(_ref3) {
  var label = _ref3.label,
      rest = _objectWithoutProperties(_ref3, ['label']);

  var Wrapper = label ? Label : Fragment;
  var wrapperProps = label ? { label: label, htmlFor: rest.name } : {};
  var inputProps = label ? { marginTop: 'small' } : {};
  return React.createElement(
    Wrapper,
    wrapperProps,
    label,
    React.createElement(TextareaMdField, _extends({}, rest, inputProps))
  );
};

TextareaMd.displayName = 'TextareaMd';

TextareaMd.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * supply a label prop and the InputField gets wrapped in a Label, omit it to render the InputField alone
   * */
  label: PropTypes.string,

  /**
   * The initial value of the editor.
   */
  initialValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * A callback function that is fired whenever the content changes.
   */
  onChange: PropTypes.func,

  /**
   * Callback to be executed when the text loses focus (onBlur event).
   */
  onBlur: PropTypes.func,

  /**
   * Supply an array of permissible blocks, disable all others
   */
  enableBlocks: PropTypes.array,

  /**
   * Supply an array of permissible marks, disable all others
   */
  enableMarks: PropTypes.array,

  /**
   * Alternatively supply an array of blocks to disable, keep all others. Only supply either enableBlocks OR disableBlocks. Disable wins in case both are supplied.
   */
  disableBlocks: PropTypes.array,
  /**
   * Alternatively supply an array of marks to disable, keep all others. Only supply either enableMarks OR disableMarks. Disable wins in case both are supplied.
   */
  disableMarks: PropTypes.array,
  /**
   * Provide context (any of colors.contexts) to change the outline color
   */
  context: PropTypes.string
} : {};

TextareaMd.defaultProps = {
  initialValue: '',
  tooltip: 'span',
  enableBlocks: ['paragraph', 'heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6', 'code', 'block-quote', 'list-item', 'ordered-list', 'unordered-list'],
  enableMarks: ['bold', 'italic', 'strikethrough', 'code'],
  disableBlocks: null,
  disableMarks: null
};

export default TextareaMd;