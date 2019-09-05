var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import proptypes from 'prop-types';
import React from 'react';

import { Editor } from 'slate-react';
import MarkdownSerializer from '@edithq/slate-md-serializer';

import { Value } from 'slate';
import Nodes from './Plugins/Nodes';
import Marks from './Plugins/Marks';
import MarkdownShortcuts from './Plugins/MarkdownShortcuts';
import MarkdownPaste from './Plugins/MarkdownPaste';
import KeyboardBehaviour from './Plugins/KeyboardBehaviour';
import KeyboardShortcuts from './Plugins/KeyboardShortcuts';
import schema from './lib/schema';

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

      onChange && onChange(_this.markdown.serialize(value));

      _this.setState({ value: value });
    };

    _this.handleBlur = function (event, editor, next) {
      var onBlur = _this.props.onBlur;

      onBlur && onBlur(_this.markdown.serialize(_this.state.value));

      next();
    };

    _this.serialise = function (value) {
      if (Value.isValue(value)) {
        return _this.markdown.serialize(value);
      }

      return value;
    };

    _this.markdown = new MarkdownSerializer();
    _this.plugins = [Nodes, Marks, KeyboardBehaviour(), KeyboardShortcuts(), MarkdownShortcuts(), MarkdownPaste(_this.markdown)];
    _this.schema = schema;

    _this.state = {
      // Deserialising the value and caching the result, so that other methods
      value: _this.markdown.deserialize(props.initialValue)
    };
    return _this;
  }

  TextareaMd.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      'div',
      { ref: function ref(el) {
          return _this2.container = el;
        } },
      React.createElement(Editor, {
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        plugins: this.plugins,
        ref: function ref(el) {
          return _this2.editor = el;
        },
        schema: this.schema,
        value: this.state.value
      })
    );
  };

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
   * Callback to be executed when the text loses focus (onBlur event).
   */
  onBlur: proptypes.func,

  /**
   * A callback function that is fired whenever the content changes.
   */
  onChange: proptypes.func,

  /**
   * The initial value of the editor.
   */
  // value: proptypes.oneOfType([proptypes.object, proptypes.string]),
  initialValue: proptypes.oneOfType([proptypes.object, proptypes.string])
} : {};