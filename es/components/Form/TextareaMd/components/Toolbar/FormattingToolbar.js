function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { withTheme } from 'styled-components';
import { FiBold, FiCode, FiItalic, FiDelete } from 'react-icons/fi';
import ToolbarButton from './ToolbarButton';

var FormattingToolbar = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FormattingToolbar, _React$Component);

  function FormattingToolbar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "hasMark", function (type) {
      try {
        return _this.props.editor.value.marks.some(function (mark) {
          return mark.type === type;
        });
      } catch (_err) {
        return false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isBlock", function (type) {
      var _this$props$editor$va = _this.props.editor.value,
          startBlock = _this$props$editor$va.startBlock,
          document = _this$props$editor$va.document; // accounts for blocks with an inner paragraph tag

      var parent = startBlock && document.getParent(startBlock.key);
      return startBlock && startBlock.type === type || parent && parent.type === type;
    });

    _defineProperty(_assertThisInitialized(_this), "onClickMark", function (ev, type) {
      ev.preventDefault();
      ev.stopPropagation();
      var editor = _this.props.editor;
      editor.toggleMark(type); // ensure we remove any other marks on inline code
      // we don't allow bold / italic / strikethrough code.

      var isInlineCode = _this.hasMark('code') || type === 'code';

      if (isInlineCode) {
        editor.value.marks.forEach(function (mark) {
          if (mark.type !== 'code') editor.removeMark(mark);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClickBlock", function (ev, type) {
      ev.preventDefault();
      ev.stopPropagation();
      var editor = _this.props.editor;
      var _editor$value = editor.value,
          startBlock = _editor$value.startBlock,
          document = _editor$value.document;
      var parent = document.getParent(startBlock.key);
      editor.setNodeByKey(startBlock.key, type); // accounts for blocks with an inner paragraph tag

      if (parent && parent.type && type === 'paragraph') {
        editor.setNodeByKey(parent.key, type);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderMarkButton", function (type) {
      var Tooltip = _this.props.editor.props.tooltip;
      var buttonLabel = markButtonDetails[type].label;
      var ButtonIcon = markButtonDetails[type].Icon;

      var isActive = _this.hasMark(type);

      var onMouseDown = function onMouseDown(ev) {
        return _this.onClickMark(ev, type);
      };

      return /*#__PURE__*/React.createElement(ToolbarButton, {
        onMouseDown: onMouseDown,
        active: isActive,
        key: type
      }, /*#__PURE__*/React.createElement(Tooltip, {
        tooltip: buttonLabel,
        placement: "top"
      }, /*#__PURE__*/React.createElement(ButtonIcon, {
        color: _this.props.theme.colors.whiteout.lightest
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderBlockButton", function (type) {
      // TODO: add block buttons. needs tooltop label and Icon (see above for mark buttons)
      // const Tooltip = this.props.editor.props.tooltip;
      //
      // const isActive = this.isBlock(type);
      //
      // const onMouseDown = ev =>
      //   this.onClickBlock(ev, isActive ? "paragraph" : type);
      // return (
      //   <ToolbarButton onMouseDown={onMouseDown} active={isActive} key={type}>
      //     <Tooltip tooltip={tooltip} placement="top">
      //       <IconClass color={this.props.theme.colors.whiteout.lightest} />
      //     </Tooltip>
      //   </ToolbarButton>
      // );
      return /*#__PURE__*/React.createElement(React.Fragment, null);
    });

    return _this;
  }

  var _proto = FormattingToolbar.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var editor = this.props.editor;
    var blockMarks = editor.getBlockMarks();
    return /*#__PURE__*/React.createElement(React.Fragment, null, blockMarks.map(function (mark) {
      return _this2.renderMarkButton(mark.type);
    }));
  };

  return FormattingToolbar;
}(React.Component);

var markButtonDetails = {
  bold: {
    Icon: FiBold,
    label: 'Bold'
  },
  italic: {
    Icon: FiItalic,
    label: 'Italic'
  },
  deleted: {
    Icon: FiDelete,
    label: 'Deleted'
  },
  code: {
    Icon: FiCode,
    label: 'Code'
  }
};
export default withTheme(FormattingToolbar);