import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Editor,
  EditorState,
  RichUtils,
  ContentState,
  convertFromHTML,
  convertToRaw,
} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { stateToHTML } from 'draft-js-export-html';

import { Box } from '../Box';

export const convertHTMLToText = html => {
  if (typeof html !== 'string') {
    return '';
  }

  // Strip all HTML tags
  const htmlLessValue = html.replace(/<(?:.|\n)*?>/gm, '');

  // Strip all HTML Entities
  const plainTextArea = document && document.createElement('textarea');
  if (plainTextArea) {
    plainTextArea.innerHTML = htmlLessValue;
  }

  const plainTextValue = plainTextArea ? plainTextArea.value : htmlLessValue;

  // Remove duplicate spaces from HTML Entity removal
  return plainTextValue.replace(/\s+/g, ' ');
};

/**
 * https://github.com/nikgraf/awesome-draft-js#common-utilities
 * Version with more features: https://github.com/jpuri/react-draft-wysiwyg
 * Utils: https://github.com/jpuri/draftjs-utils
 *
 * https://codepulse.blog/how-to-display-draft-js-content-as-html/
 * https://codepulse.blog/simple-easy-way-display-draft-js-content/
 * https://codepulse.blog/how-to-store-draft-js-content/
 */

const Wrapper = styled(Box)`
  box-sizing: border-box;
  position: relative;

  width: 100%;
  height: auto;
  /* min-height: 100px; */

  margin: 0;
  margin-top: 8px;

  background: transparent;

  @media (max-width: 768px) {
  }
  @media (min-width: 769px) {
  }
`;

const EditorWrapper = styled(Box)`
  box-sizing: border-box;

  position: relative;
  width: 100%;
  height: auto;
  left: 0;
  top: 0;

  height: auto;

  padding: 8px 12px;

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  color: ${props => props.theme.colors.grey};

  background: ${props =>
    props.isFocused || !props.isEmpty
      ? 'white'
      : props.theme.backgrounds.inputs};

  border: 2px solid transparent;
  border-color: ${props => {
    switch (true) {
      case props.state === 'danger':
        return props.theme.colors.danger;
      case props.isFocused && props.renderType === 'host':
        return props.theme.colors.host_primary;
      case props.isFocused && props.renderType === 'primary':
        return typeof props.theme.colors.primary === 'object'
          ? props.theme.colors.primary.base
          : props.theme.colors.primary;
      default:
        return props.theme.colors.grey_lighter;
    }
  }};
  border-radius: 5px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;

  -webkit-animation: 1ms void-animation-out;

  &::placeholder {
    opacity: 1;
    color: ${props =>
      props.isFocused || !props.isEmpty ? '#cfd7df' : 'transparent'};
    transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  @media (max-width: 831px) {
    min-height: 100px;
    font-size: ${props => props.theme.defaults.fontSizeMobile};
    line-height: 21px;
  }
  @media (min-width: 832px) {
    min-height: 85px;
    font-size: ${props => props.theme.defaults.fontSize};
    line-height: 24px;
  }
`;

const Label = styled.label`
  box-sizing: border-box;
  position: absolute;
  width: auto;
  left: 8px;
  top: 10px;

  padding: 4px 6px;

  background: ${props =>
    props.isFocused || !props.isEmpty
      ? `linear-gradient(
         to top,
         ${props.theme.backgrounds.white} 0%,
         ${props.theme.backgrounds.white} 48%,
         rgba(255,255,255,0.0) 54%,
         rgba(255,255,255,0.0) 100%
      );`
      : 'transparent'};

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 300;
  color: ${props => {
    switch (true) {
      case props.isFocused && props.renderType === 'host':
        return props.theme.colors.host_primary;
      case props.isFocused && props.renderType === 'primary':
        return typeof props.theme.colors.primary === 'object'
          ? props.theme.colors.primary.base
          : props.theme.colors.primary;
      default:
        return props.theme.colors.grey_light;
    }
  }};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transform-origin: 0 50%;
  transform: ${props =>
    props.isFocused || !props.isEmpty
      ? 'scale(0.80) translateY(-30px)'
      : 'none'};
  cursor: ${props => (props.isFocused || !props.isEmpty ? 'default' : 'text')};

  transition-property: color, transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);

  /* Responsive */
  @media (max-width: 831px) {
    font-size: ${props => props.theme.defaults.fontSizeMobile};
    line-height: ${props => props.theme.defaults.fontSizeMobile};
  }
  @media (min-width: 832px) {
    font-size: ${props => props.theme.defaults.fontSize};
    line-height: ${props => props.theme.defaults.fontSize};
  }
`;

class TextAreaDraftJS extends Component {
  constructor(props) {
    super(props);

    let isEmpty = props.value === '';

    let state;
    if (!isEmpty) {
      const blocksFromHTML = convertFromHTML(props.value);
      if (blocksFromHTML.contentBlocks) {
        state = ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap
        );
      } else {
        isEmpty = true;
      }
    }

    this.state = {
      focused: false,
      empty: isEmpty,
      // Immutable record...
      editorState: isEmpty
        ? EditorState.createEmpty()
        : EditorState.createWithContent(state),
    };

    this._setEditor = editor => {
      this.editor = editor;
    };
    this._focusEditor = () => {
      if (this.editor) {
        this.editor.focus();
      }
    };
  }

  _onChange = editorState => {
    const contentState = editorState.getCurrentContent();
    const jsonContent = convertToRaw(contentState);
    const empty =
      jsonContent.blocks.length === 1 && jsonContent.blocks[0].text === '';

    this.setState({ editorState, empty });

    const html = stateToHTML(contentState);

    // Fire the externally provided onTextChange function.
    const mockEvent = {
      target: { value: html, type: 'textarea', _json: jsonContent },
    };
    // console.warn(JSON.stringify(jsonContent))
    this.props.onTextChange(mockEvent);
  };

  _handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this._onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  // _onBoldClick = (event) => {
  //   event.preventDefault();
  //   this._onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  // };

  _onFocus = _ => {
    this.setState({ focused: !this.state.focused });
  };

  _onBlur = _ => {
    this.setState({ focused: false });
  };

  render() {
    const { name, label, renderType } = this.props;

    const { focused, empty, editorState } = this.state;

    return (
      <Box position="relative">
        {/* <button onClick={this._onBoldClick}>Bold</button> */}
        <Wrapper>
          <EditorWrapper
            onClick={this._focusEditor} // focuses the editor itself.
            renderType={renderType}
            isEmpty={empty}
            isFocused={focused}
            data-cy={`textarea-${name}`}
          >
            <Editor
              ref={this._setEditor}
              editorState={editorState}
              handleKeyCommand={this._handleKeyCommand}
              onChange={this._onChange}
              onFocus={this._onFocus}
              onBlur={this._onBlur}
            />
          </EditorWrapper>
          {label && label !== '_' && (
            <Label
              htmlFor={name}
              isFocused={focused}
              isEmpty={empty}
              renderType={renderType}
            >
              {label}
            </Label>
          )}
        </Wrapper>
      </Box>
    );
  }
}

TextAreaDraftJS.propTypes = {
  // Input mechanics
  name: PropTypes.string.isRequired, // also used for id
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // State of field
  // state: PropTypes.string,
  // disabled: PropTypes.bool,
  // Handlers
  onTextChange: PropTypes.func.isRequired,
  // Rendering
  renderType: PropTypes.string,
};

TextAreaDraftJS.defaultProps = {
  // disabled: false,
  // state: 'normal',
  renderType: 'primary',
};

TextAreaDraftJS.displayName = 'TextAreaDraftJS';

export default TextAreaDraftJS;
