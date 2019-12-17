function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { withTheme } from 'styled-components';
import { FiBold, FiCode, FiItalic, FiDelete } from 'react-icons/fi';

import ToolbarButton from './ToolbarButton';

var FormattingToolbar = function (_React$Component) {
  _inherits(FormattingToolbar, _React$Component);

  function FormattingToolbar() {
    var _temp, _this, _ret;

    _classCallCheck(this, FormattingToolbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.hasMark = function (type) {
      try {
        return _this.props.editor.value.marks.some(function (mark) {
          return mark.type === type;
        });
      } catch (_err) {
        return false;
      }
    }, _this.isBlock = function (type) {
      var _this$props$editor$va = _this.props.editor.value,
          startBlock = _this$props$editor$va.startBlock,
          document = _this$props$editor$va.document;

      // accounts for blocks with an inner paragraph tag

      var parent = startBlock && document.getParent(startBlock.key);

      return startBlock && startBlock.type === type || parent && parent.type === type;
    }, _this.onClickMark = function (ev, type) {
      ev.preventDefault();
      ev.stopPropagation();

      var editor = _this.props.editor;

      editor.toggleMark(type);

      // ensure we remove any other marks on inline code
      // we don't allow bold / italic / strikethrough code.
      var isInlineCode = _this.hasMark('code') || type === 'code';
      if (isInlineCode) {
        editor.value.marks.forEach(function (mark) {
          if (mark.type !== 'code') editor.removeMark(mark);
        });
      }
    }, _this.onClickBlock = function (ev, type) {
      ev.preventDefault();
      ev.stopPropagation();
      var editor = _this.props.editor;
      var _editor$value = editor.value,
          startBlock = _editor$value.startBlock,
          document = _editor$value.document;

      var parent = document.getParent(startBlock.key);

      editor.setNodeByKey(startBlock.key, type);

      // accounts for blocks with an inner paragraph tag
      if (parent && parent.type && type === 'paragraph') {
        editor.setNodeByKey(parent.key, type);
      }
    }, _this.renderMarkButton = function (type) {
      var Tooltip = _this.props.editor.props.tooltip;

      var buttonLabel = markButtonDetails[type].label;
      var ButtonIcon = markButtonDetails[type].Icon;

      var isActive = _this.hasMark(type);
      var onMouseDown = function onMouseDown(ev) {
        return _this.onClickMark(ev, type);
      };

      return React.createElement(
        ToolbarButton,
        { onMouseDown: onMouseDown, active: isActive, key: type },
        React.createElement(
          Tooltip,
          { tooltip: buttonLabel, placement: 'top' },
          React.createElement(ButtonIcon, { color: _this.props.theme.colors.whiteout.lightest })
        )
      );
    }, _this.renderBlockButton = function (type) {
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
      return React.createElement(React.Fragment, null);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /**
   * Check if the current selection has a mark with `type` in it.
   *
   * @param {String} type
   * @return {Boolean}
   */


  /**
   * When a mark button is clicked, toggle the current mark.
   *
   * @param {Event} ev
   * @param {String} type
   */


  FormattingToolbar.prototype.render = function render() {
    var _this2 = this;

    var editor = this.props.editor;

    var blockMarks = editor.getBlockMarks();

    return React.createElement(
      React.Fragment,
      null,
      blockMarks.map(function (mark) {
        return _this2.renderMarkButton(mark.type);
      })
    );
  };

  return FormattingToolbar;
}(React.Component);

var markButtonDetails = {
  bold: { Icon: FiBold, label: 'Bold' },
  italic: { Icon: FiItalic, label: 'Italic' },
  deleted: { Icon: FiDelete, label: 'Deleted' },
  code: { Icon: FiCode, label: 'Code' }
};

export default withTheme(FormattingToolbar);