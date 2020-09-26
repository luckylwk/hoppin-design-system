function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  display: block;\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  background: ", ";\n\n  border: ", ";\n\n  border-radius: ", ";\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ", ";\n    background: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, layout, flexbox, fontSize } from 'styled-system';
import { Label, RequiredText } from '../.';
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
}; // ---------------------------

/**
 * A rich text editor.
 */

var TextareaMdField = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TextareaMdField, _React$Component);

  function TextareaMdField(_props) {
    var _this;

    _this = _React$Component.call(this, _props) || this;

    _defineProperty(_assertThisInitialized(_this), "makeSchema", function (props) {
      if (props === void 0) {
        props = _this.props;
      }

      var _props2 = props,
          enableBlocks = _props2.enableBlocks,
          enableMarks = _props2.enableMarks,
          disableBlocks = _props2.disableBlocks,
          disableMarks = _props2.disableMarks;
      var customNodes = []; // if we have disableBlocks, ignore enableBlocks

      if (disableBlocks && disableBlocks.length > 0) {
        // map over all available nodes in Schema
        Schema.document.nodes[0].match.map(function (node) {
          // pick the ones that are not disabled
          if (disableBlocks.indexOf(node.type) < 0) {
            customNodes.push(node);
          }

          return true;
        }); // if we have don't have disableBlocks, use enableBlocks if available
      } else if (enableBlocks && enableBlocks.length > 0) {
        // map over all available nodes in Schema
        Schema.document.nodes[0].match.map(function (node) {
          // pick the ones that are not disabled
          if (enableBlocks.indexOf(node.type) > -1) {
            customNodes.push(node);
          }

          return true;
        }); // default to Schema as is
      } else {
        customNodes = [].concat(Schema.document.nodes[0].match);
      } // if we have disableMarks, ignore enableMarks


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

              return true;
            });
            Schema.blocks[block].marks = tempBlockMarks;
          }

          return true;
        }); // if we have don't have disableMarks, use enableMarks if available
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

              return true;
            });
            Schema.blocks[block].marks = tempBlockMarks;
          }

          return true;
        }); // default to Schema as is
      }

      var newSchema = _extends({}, Schema);

      newSchema.document.nodes[0].match = customNodes;
      return newSchema;
    });

    _defineProperty(_assertThisInitialized(_this), "deserialize", function (value) {
      if (Value.isValue(value)) {
        return value;
      }

      if (typeof value === 'string') {
        return _this.markdown.deserialize(value);
      }

      return Value.fromJSON(value || EMPTY_VALUE);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (_ref) {
      var value = _ref.value;
      var onChange = _this.props.onChange;
      onChange && onChange({
        target: {
          type: 'textarea',
          name: _this.props.name,
          value: _this.markdown.serialize(value)
        }
      });

      _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event, editor, next) {
      var onBlur = _this.props.onBlur;
      onBlur && onBlur({
        target: {
          type: 'textarea',
          name: _this.props.name,
          value: _this.markdown.serialize(_this.state.value)
        }
      });
      next();
    });

    _defineProperty(_assertThisInitialized(_this), "serialise", function (value) {
      if (Value.isValue(value)) {
        return _this.markdown.serialize(value);
      }

      return value;
    });

    _this.markdown = new MarkdownSerializer();
    _this.plugins = [Nodes, Marks, KeyboardBehaviour(), KeyboardShortcuts(), MarkdownShortcuts(_props.enableBlocks, _props.enableMarks), MarkdownPaste(_this.markdown), Ellipsis(), Chrome()];
    _this.schema = _this.makeSchema(_props);
    _this.state = {
      // Deserialising the value and caching the result, so that other methods
      value: _this.markdown.deserialize(_props.initialValue)
    };
    return _this;
  }

  var _proto = TextareaMdField.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        initialValue = _this$props.initialValue,
        onChange = _this$props.onChange,
        onBlur = _this$props.onBlur,
        enableMarks = _this$props.enableMarks,
        enableBlocks = _this$props.enableBlocks,
        disableMarks = _this$props.disableMarks,
        disableBlocks = _this$props.disableBlocks,
        rest = _objectWithoutPropertiesLoose(_this$props, ["initialValue", "onChange", "onBlur", "enableMarks", "enableBlocks", "disableMarks", "disableBlocks"]);

    return /*#__PURE__*/React.createElement(StyledEditor, _extends({
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
}(React.Component); // ---------------------------


var StyledEditor = styled(Editor)(_templateObject(), space, layout, flexbox, fontSize, function (_ref2) {
  var theme = _ref2.theme,
      initialValue = _ref2.initialValue;
  return initialValue && initialValue.length > 0 ? theme.colors.whiteout.lighter : theme.colors.whiteout.light;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderWidths.base + " solid " + theme.colors.whiteout.dark;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.radii.small;
}, function (_ref5) {
  var theme = _ref5.theme,
      context = _ref5.context;

  switch (context) {
    case 'danger':
      return theme.colors.danger.base;

    case 'neutral':
    default:
      return theme.colors.secondary.lighter;
  }
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.whiteout.lightest;
});
StyledEditor.defaultProps = {
  context: 'neutral',
  marginBottom: 'base',
  paddingY: 'base',
  paddingX: 'base',
  fontSize: 'body',
  fontWeight: 'normal'
}; // ---------------------------

var TextareaMd = function TextareaMd(_ref7) {
  var label = _ref7.label,
      required = _ref7.required,
      rest = _objectWithoutPropertiesLoose(_ref7, ["label", "required"]);

  var LabelOrFragment = label ? Label : Fragment;
  var labelProps = label ? {
    label: label,
    htmlFor: rest.name
  } : {};
  var textareaProps = label ? {
    marginTop: 'small'
  } : {};
  return /*#__PURE__*/React.createElement(LabelOrFragment, labelProps, label, label && required && /*#__PURE__*/React.createElement(RequiredText, null, "*required"), /*#__PURE__*/React.createElement(TextareaMdField, _extends({}, rest, textareaProps)));
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