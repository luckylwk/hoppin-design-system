import React from 'react';
import { withTheme } from 'styled-components';
import { FiBold, FiCode, FiItalic, FiDelete } from 'react-icons/fi';

import ToolbarButton from './ToolbarButton';

class FormattingToolbar extends React.Component {
  /**
   * Check if the current selection has a mark with `type` in it.
   *
   * @param {String} type
   * @return {Boolean}
   */
  hasMark = type => {
    try {
      return this.props.editor.value.marks.some(mark => mark.type === type);
    } catch (_err) {
      return false;
    }
  };

  isBlock = type => {
    const { startBlock, document } = this.props.editor.value;

    // accounts for blocks with an inner paragraph tag
    const parent = startBlock && document.getParent(startBlock.key);

    return (
      (startBlock && startBlock.type === type) ||
      (parent && parent.type === type)
    );
  };

  /**
   * When a mark button is clicked, toggle the current mark.
   *
   * @param {Event} ev
   * @param {String} type
   */
  onClickMark = (ev, type) => {
    ev.preventDefault();
    ev.stopPropagation();

    const { editor } = this.props;
    editor.toggleMark(type);

    // ensure we remove any other marks on inline code
    // we don't allow bold / italic / strikethrough code.
    const isInlineCode = this.hasMark('code') || type === 'code';
    if (isInlineCode) {
      editor.value.marks.forEach(mark => {
        if (mark.type !== 'code') editor.removeMark(mark);
      });
    }
  };

  onClickBlock = (ev, type) => {
    ev.preventDefault();
    ev.stopPropagation();
    const { editor } = this.props;
    const { startBlock, document } = editor.value;
    const parent = document.getParent(startBlock.key);

    editor.setNodeByKey(startBlock.key, type);

    // accounts for blocks with an inner paragraph tag
    if (parent && parent.type && type === 'paragraph') {
      editor.setNodeByKey(parent.key, type);
    }
  };

  renderMarkButton = type => {
    const Tooltip = this.props.editor.props.tooltip;

    const buttonLabel = markButtonDetails[type].label;
    const ButtonIcon = markButtonDetails[type].Icon;

    const isActive = this.hasMark(type);
    const onMouseDown = ev => this.onClickMark(ev, type);

    return (
      <ToolbarButton onMouseDown={onMouseDown} active={isActive} key={type}>
        <Tooltip tooltip={buttonLabel} placement="top">
          <ButtonIcon color={this.props.theme.colors.whiteout.lightest} />
        </Tooltip>
      </ToolbarButton>
    );
  };

  renderBlockButton = type => {
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
    return <React.Fragment></React.Fragment>;
  };

  render() {
    const { editor } = this.props;
    const blockMarks = editor.getBlockMarks();

    return (
      <React.Fragment>
        {blockMarks.map(mark => this.renderMarkButton(mark.type))}

        {/*!isSelectionInTable && (
          <React.Fragment>
            {!isSelectionInHeading && <Separator />}
            {this.renderBlockButton("heading1", Heading1Icon, "Heading")}
            {this.renderBlockButton("heading2", Heading2Icon, "Subheading")}
            {!isSelectionInHeading &&
              this.renderBlockButton("block-quote", BlockQuoteIcon, "Quote")}
          </React.Fragment>
        )*/}
        {/*!isSelectionInHeading && (
          <React.Fragment>
            <Separator />
            <ToolbarButton onMouseDown={this.handleCreateLink}>
              <Tooltip tooltip="Create link" placement="top">
                <LinkIcon color={this.props.theme.toolbarItem} />
              </Tooltip>
            </ToolbarButton>
          </React.Fragment>
        )*/}
      </React.Fragment>
    );
  }
}

const markButtonDetails = {
  bold: { Icon: FiBold, label: 'Bold' },
  italic: { Icon: FiItalic, label: 'Italic' },
  deleted: { Icon: FiDelete, label: 'Deleted' },
  code: { Icon: FiCode, label: 'Code' },
};

export default withTheme(FormattingToolbar);
