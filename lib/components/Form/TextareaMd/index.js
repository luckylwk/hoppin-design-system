'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  display: block;\n\n  ', '\n  ', '\n  ', '\n  ', '\n\n  background: ', ';\n\n  border: ', ';\n\n  border-radius: ', ';\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ', ';\n    background: ', ';\n  }\n'], ['\n  box-sizing: border-box;\n  display: block;\n\n  ', '\n  ', '\n  ', '\n  ', '\n\n  background: ', ';\n\n  border: ', ';\n\n  border-radius: ', ';\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ', ';\n    background: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _ = require('../.');

var _slateReact = require('slate-react');

var _slateMdSerializer = require('slate-md-serializer');

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

var _Ellipsis = require('./Plugins/Ellipsis');

var _Ellipsis2 = _interopRequireDefault(_Ellipsis);

var _Chrome = require('./Plugins/Chrome');

var _Chrome2 = _interopRequireDefault(_Chrome);

var _Schema = require('./lib/Schema');

var _Schema2 = _interopRequireDefault(_Schema);

var _queries = require('./lib/queries');

var _queries2 = _interopRequireDefault(_queries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

// ---------------------------

/**
 * A rich text editor.
 */
var TextareaMdField = (_temp = _class = function (_React$Component) {
  _inherits(TextareaMdField, _React$Component);

  function TextareaMdField(props) {
    _classCallCheck(this, TextareaMdField);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    _this.markdown = new _slateMdSerializer2.default();
    _this.plugins = [_Nodes2.default, _Marks2.default, (0, _KeyboardBehaviour2.default)(), (0, _KeyboardShortcuts2.default)(), (0, _MarkdownShortcuts2.default)(props.enableBlocks, props.enableMarks), (0, _MarkdownPaste2.default)(_this.markdown), (0, _Ellipsis2.default)(), (0, _Chrome2.default)()];
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

    return _react2.default.createElement(StyledEditor, _extends({
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      plugins: this.plugins,
      ref: function ref(el) {
        return _this2.editor = el;
      },
      schema: this.schema,
      queries: _queries2.default,
      value: this.state.value,
      tooltip: this.props.tooltip
    }, rest));
  };

  return TextareaMdField;
}(_react2.default.Component), _initialiseProps = function _initialiseProps() {
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
      _Schema2.default.document.nodes[0].match.map(function (node) {
        // pick the ones that are not disabled
        if (disableBlocks.indexOf(node.type) < 0) {
          customNodes.push(node);
        }
        return true;
      });
      // if we have don't have disableBlocks, use enableBlocks if available
    } else if (enableBlocks && enableBlocks.length > 0) {
      // map over all available nodes in Schema
      _Schema2.default.document.nodes[0].match.map(function (node) {
        // pick the ones that are not disabled
        if (enableBlocks.indexOf(node.type) > -1) {
          customNodes.push(node);
        }
        return true;
      });
      // default to Schema as is
    } else {
      customNodes = [].concat(_Schema2.default.document.nodes[0].match);
    }

    // if we have disableMarks, ignore enableMarks
    if (disableMarks && disableMarks.length > 0) {
      // map over all available marks in Schema
      Object.keys(_Schema2.default.blocks).map(function (block) {
        var tempBlockMarks = [];
        var blockMarks = _Schema2.default.blocks[block].marks;
        if (blockMarks && blockMarks.length > 0) {
          blockMarks.map(function (mark) {
            // pick the ones that are not disabled
            if (disableMarks.indexOf(mark.type) < 0) {
              tempBlockMarks.push(mark);
            }
            return true;
          });
          _Schema2.default.blocks[block].marks = tempBlockMarks;
        }
        return true;
      });

      // if we have don't have disableMarks, use enableMarks if available
    } else if (enableMarks && enableMarks.length > 0) {
      // map over all available marks in Schema
      Object.keys(_Schema2.default.blocks).map(function (block) {
        var tempBlockMarks = [];
        var blockMarks = _Schema2.default.blocks[block].marks;
        if (blockMarks && blockMarks.length > 0) {
          blockMarks.map(function (mark) {
            // pick the ones that are not disabled
            if (enableMarks.indexOf(mark.type) > -1) {
              tempBlockMarks.push(mark);
            }
            return true;
          });
          _Schema2.default.blocks[block].marks = tempBlockMarks;
        }
        return true;
      });
      // default to Schema as is
    }

    var newSchema = _extends({}, _Schema2.default);
    newSchema.document.nodes[0].match = customNodes;
    return newSchema;
  };

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

    onChange && onChange({
      target: {
        type: 'textarea',
        name: _this3.props.name,
        value: _this3.markdown.serialize(value)
      }
    });

    _this3.setState({ value: value });
  };

  this.handleBlur = function (event, editor, next) {
    var onBlur = _this3.props.onBlur;

    onBlur && onBlur({
      target: {
        type: 'textarea',
        name: _this3.props.name,
        value: _this3.markdown.serialize(_this3.state.value)
      }
    });

    next();
  };

  this.serialise = function (value) {
    if (_slate.Value.isValue(value)) {
      return _this3.markdown.serialize(value);
    }

    return value;
  };
}, _temp);

// ---------------------------

var StyledEditor = (0, _styledComponents2.default)(_slateReact.Editor)(_templateObject, _styledSystem.space, _styledSystem.layout, _styledSystem.flexbox, _styledSystem.fontSize, function (_ref2) {
  var theme = _ref2.theme,
      initialValue = _ref2.initialValue;
  return initialValue && initialValue.length > 0 ? theme.colors.whiteout.lighter : theme.colors.whiteout.light;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderWidths.base + ' solid ' + theme.colors.whiteout.dark;
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
      return theme.colors.primary.base;
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
};

// ---------------------------

var TextareaMd = function TextareaMd(_ref7) {
  var label = _ref7.label,
      required = _ref7.required,
      rest = _objectWithoutProperties(_ref7, ['label', 'required']);

  var LabelOrFragment = label ? _.Label : _react.Fragment;
  var labelProps = label ? { label: label, htmlFor: rest.name } : {};
  var textareaProps = label ? { marginTop: 'small' } : {};
  return _react2.default.createElement(
    LabelOrFragment,
    labelProps,
    label,
    label && required && _react2.default.createElement(
      _.RequiredText,
      null,
      '*required'
    ),
    _react2.default.createElement(TextareaMdField, _extends({}, rest, textareaProps))
  );
};

TextareaMd.displayName = 'TextareaMd';

TextareaMd.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * supply a label prop and the InputField gets wrapped in a Label, omit it to render the InputField alone
   * */
  label: _propTypes2.default.string,

  /**
   * The initial value of the editor.
   */
  initialValue: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),

  /**
   * A callback function that is fired whenever the content changes.
   */
  onChange: _propTypes2.default.func,

  /**
   * Callback to be executed when the text loses focus (onBlur event).
   */
  onBlur: _propTypes2.default.func,

  /**
   * Supply an array of permissible blocks, disable all others
   */
  enableBlocks: _propTypes2.default.array,

  /**
   * Supply an array of permissible marks, disable all others
   */
  enableMarks: _propTypes2.default.array,

  /**
   * Alternatively supply an array of blocks to disable, keep all others. Only supply either enableBlocks OR disableBlocks. Disable wins in case both are supplied.
   */
  disableBlocks: _propTypes2.default.array,
  /**
   * Alternatively supply an array of marks to disable, keep all others. Only supply either enableMarks OR disableMarks. Disable wins in case both are supplied.
   */
  disableMarks: _propTypes2.default.array,
  /**
   * Provide context (any of colors.contexts) to change the outline color
   */
  context: _propTypes2.default.string
} : {};

TextareaMd.defaultProps = {
  initialValue: '',
  tooltip: 'span',
  enableBlocks: ['paragraph', 'heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6', 'code', 'block-quote', 'list-item', 'ordered-list', 'unordered-list'],
  enableMarks: ['bold', 'italic', 'strikethrough', 'code'],
  disableBlocks: null,
  disableMarks: null
};

exports.default = TextareaMd;
module.exports = exports['default'];