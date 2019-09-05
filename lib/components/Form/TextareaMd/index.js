'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slateReact = require('slate-react');

var _slateMdSerializer = require('@edithq/slate-md-serializer');

var _slateMdSerializer2 = _interopRequireDefault(_slateMdSerializer);

var _slate = require('slate');

var _Nodes = require('./Plugins/Nodes');

var _Nodes2 = _interopRequireDefault(_Nodes);

var _Marks = require('./Plugins/Marks');

var _Marks2 = _interopRequireDefault(_Marks);

var _MarkdownShortcuts = require('./Plugins/MarkdownShortcuts');

var _MarkdownShortcuts2 = _interopRequireDefault(_MarkdownShortcuts);

var _MarkdownPaste = require('./Plugins/MarkdownPaste');

var _MarkdownPaste2 = _interopRequireDefault(_MarkdownPaste);

var _KeyboardBehaviour = require('./Plugins/KeyboardBehaviour');

var _KeyboardBehaviour2 = _interopRequireDefault(_KeyboardBehaviour);

var _KeyboardShortcuts = require('./Plugins/KeyboardShortcuts');

var _KeyboardShortcuts2 = _interopRequireDefault(_KeyboardShortcuts);

var _schema = require('./lib/schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      if (_slate.Value.isValue(value)) {
        return value;
      }

      if (typeof value === 'string') {
        return _this.markdown.deserialize(value);
      }

      return _slate.Value.fromJSON(value || EMPTY_VALUE);
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
      if (_slate.Value.isValue(value)) {
        return _this.markdown.serialize(value);
      }

      return value;
    };

    _this.markdown = new _slateMdSerializer2.default();
    _this.plugins = [_Nodes2.default, _Marks2.default, (0, _KeyboardBehaviour2.default)(), (0, _KeyboardShortcuts2.default)(), (0, _MarkdownShortcuts2.default)(), (0, _MarkdownPaste2.default)(_this.markdown)];
    _this.schema = _schema2.default;

    _this.state = {
      // Deserialising the value and caching the result, so that other methods
      value: _this.markdown.deserialize(props.initialValue)
    };
    return _this;
  }

  TextareaMd.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      'div',
      { ref: function ref(el) {
          return _this2.container = el;
        } },
      _react2.default.createElement(_slateReact.Editor, {
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
}(_react2.default.Component), _class.defaultProps = {
  initialValue: ''
}, _temp);
exports.default = TextareaMd;
TextareaMd.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the editor.
   */
  children: _propTypes2.default.node,

  /**
   * Callback to be executed when the text loses focus (onBlur event).
   */
  onBlur: _propTypes2.default.func,

  /**
   * A callback function that is fired whenever the content changes.
   */
  onChange: _propTypes2.default.func,

  /**
   * The initial value of the editor.
   */
  // value: proptypes.oneOfType([proptypes.object, proptypes.string]),
  initialValue: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string])
} : {};
module.exports = exports['default'];