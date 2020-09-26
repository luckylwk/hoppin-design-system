"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _ = require("../.");

var _slateReact = require("slate-react");

var _slateMdSerializer = _interopRequireDefault(require("slate-md-serializer"));

var _slate = require("slate");

var _Nodes = _interopRequireDefault(require("./Plugins/Nodes"));

var _Marks = _interopRequireDefault(require("./Plugins/Marks"));

var _MarkdownShortcuts = _interopRequireDefault(require("./Plugins/MarkdownShortcuts"));

var _MarkdownPaste = _interopRequireDefault(require("./Plugins/MarkdownPaste"));

var _KeyboardBehaviour = _interopRequireDefault(require("./Plugins/KeyboardBehaviour"));

var _KeyboardShortcuts = _interopRequireDefault(require("./Plugins/KeyboardShortcuts"));

var _Ellipsis = _interopRequireDefault(require("./Plugins/Ellipsis"));

var _Chrome = _interopRequireDefault(require("./Plugins/Chrome"));

var _Schema = _interopRequireDefault(require("./lib/Schema"));

var _queries = _interopRequireDefault(require("./lib/queries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
        _Schema["default"].document.nodes[0].match.map(function (node) {
          // pick the ones that are not disabled
          if (disableBlocks.indexOf(node.type) < 0) {
            customNodes.push(node);
          }

          return true;
        }); // if we have don't have disableBlocks, use enableBlocks if available

      } else if (enableBlocks && enableBlocks.length > 0) {
        // map over all available nodes in Schema
        _Schema["default"].document.nodes[0].match.map(function (node) {
          // pick the ones that are not disabled
          if (enableBlocks.indexOf(node.type) > -1) {
            customNodes.push(node);
          }

          return true;
        }); // default to Schema as is

      } else {
        customNodes = [].concat(_Schema["default"].document.nodes[0].match);
      } // if we have disableMarks, ignore enableMarks


      if (disableMarks && disableMarks.length > 0) {
        // map over all available marks in Schema
        Object.keys(_Schema["default"].blocks).map(function (block) {
          var tempBlockMarks = [];
          var blockMarks = _Schema["default"].blocks[block].marks;

          if (blockMarks && blockMarks.length > 0) {
            blockMarks.map(function (mark) {
              // pick the ones that are not disabled
              if (disableMarks.indexOf(mark.type) < 0) {
                tempBlockMarks.push(mark);
              }

              return true;
            });
            _Schema["default"].blocks[block].marks = tempBlockMarks;
          }

          return true;
        }); // if we have don't have disableMarks, use enableMarks if available
      } else if (enableMarks && enableMarks.length > 0) {
        // map over all available marks in Schema
        Object.keys(_Schema["default"].blocks).map(function (block) {
          var tempBlockMarks = [];
          var blockMarks = _Schema["default"].blocks[block].marks;

          if (blockMarks && blockMarks.length > 0) {
            blockMarks.map(function (mark) {
              // pick the ones that are not disabled
              if (enableMarks.indexOf(mark.type) > -1) {
                tempBlockMarks.push(mark);
              }

              return true;
            });
            _Schema["default"].blocks[block].marks = tempBlockMarks;
          }

          return true;
        }); // default to Schema as is
      }

      var newSchema = _extends({}, _Schema["default"]);

      newSchema.document.nodes[0].match = customNodes;
      return newSchema;
    });

    _defineProperty(_assertThisInitialized(_this), "deserialize", function (value) {
      if (_slate.Value.isValue(value)) {
        return value;
      }

      if (typeof value === 'string') {
        return _this.markdown.deserialize(value);
      }

      return _slate.Value.fromJSON(value || EMPTY_VALUE);
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
      if (_slate.Value.isValue(value)) {
        return _this.markdown.serialize(value);
      }

      return value;
    });

    _this.markdown = new _slateMdSerializer["default"]();
    _this.plugins = [_Nodes["default"], _Marks["default"], (0, _KeyboardBehaviour["default"])(), (0, _KeyboardShortcuts["default"])(), (0, _MarkdownShortcuts["default"])(_props.enableBlocks, _props.enableMarks), (0, _MarkdownPaste["default"])(_this.markdown), (0, _Ellipsis["default"])(), (0, _Chrome["default"])()];
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

    return /*#__PURE__*/_react["default"].createElement(StyledEditor, _extends({
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      plugins: this.plugins,
      ref: function ref(el) {
        return _this2.editor = el;
      },
      schema: this.schema,
      queries: _queries["default"],
      value: this.state.value,
      tooltip: this.props.tooltip
    }, rest));
  };

  return TextareaMdField;
}(_react["default"].Component); // ---------------------------


var StyledEditor = (0, _styledComponents["default"])(_slateReact.Editor)(_templateObject(), _styledSystem.space, _styledSystem.layout, _styledSystem.flexbox, _styledSystem.fontSize, function (_ref2) {
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

  var LabelOrFragment = label ? _.Label : _react.Fragment;
  var labelProps = label ? {
    label: label,
    htmlFor: rest.name
  } : {};
  var textareaProps = label ? {
    marginTop: 'small'
  } : {};
  return /*#__PURE__*/_react["default"].createElement(LabelOrFragment, labelProps, label, label && required && /*#__PURE__*/_react["default"].createElement(_.RequiredText, null, "*required"), /*#__PURE__*/_react["default"].createElement(TextareaMdField, _extends({}, rest, textareaProps)));
};

TextareaMd.displayName = 'TextareaMd';
TextareaMd.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * supply a label prop and the InputField gets wrapped in a Label, omit it to render the InputField alone
   * */
  label: _propTypes["default"].string,

  /**
   * The initial value of the editor.
   */
  initialValue: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),

  /**
   * A callback function that is fired whenever the content changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * Callback to be executed when the text loses focus (onBlur event).
   */
  onBlur: _propTypes["default"].func,

  /**
   * Supply an array of permissible blocks, disable all others
   */
  enableBlocks: _propTypes["default"].array,

  /**
   * Supply an array of permissible marks, disable all others
   */
  enableMarks: _propTypes["default"].array,

  /**
   * Alternatively supply an array of blocks to disable, keep all others. Only supply either enableBlocks OR disableBlocks. Disable wins in case both are supplied.
   */
  disableBlocks: _propTypes["default"].array,

  /**
   * Alternatively supply an array of marks to disable, keep all others. Only supply either enableMarks OR disableMarks. Disable wins in case both are supplied.
   */
  disableMarks: _propTypes["default"].array,

  /**
   * Provide context (any of colors.contexts) to change the outline color
   */
  context: _propTypes["default"].string
} : {};
TextareaMd.defaultProps = {
  initialValue: '',
  tooltip: 'span',
  enableBlocks: ['paragraph', 'heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6', 'code', 'block-quote', 'list-item', 'ordered-list', 'unordered-list'],
  enableMarks: ['bold', 'italic', 'strikethrough', 'code'],
  disableBlocks: null,
  disableMarks: null
};
var _default = TextareaMd;
exports["default"] = _default;
module.exports = exports.default;