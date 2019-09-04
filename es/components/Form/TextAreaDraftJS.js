var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  position: relative;\n\n  width: 100%;\n  height: auto;\n  /* min-height: 100px; */\n\n  margin: 0;\n  margin-top: 8px;\n\n  background: transparent;\n\n  @media (max-width: 768px) {\n  }\n  @media (min-width: 769px) {\n  }\n'], ['\n  box-sizing: border-box;\n  position: relative;\n\n  width: 100%;\n  height: auto;\n  /* min-height: 100px; */\n\n  margin: 0;\n  margin-top: 8px;\n\n  background: transparent;\n\n  @media (max-width: 768px) {\n  }\n  @media (min-width: 769px) {\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n\n  position: relative;\n  width: 100%;\n  height: auto;\n  left: 0;\n  top: 0;\n\n  height: auto;\n\n  padding: 8px 12px;\n\n  font-family: ', ';\n  font-weight: 400;\n  color: ', ';\n\n  background: ', ';\n\n  border: 2px solid transparent;\n  border-color: ', ';\n  border-radius: 5px;\n\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n\n  -webkit-animation: 1ms void-animation-out;\n\n  &::placeholder {\n    opacity: 1;\n    color: ', ';\n    transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);\n  }\n\n  @media (max-width: 831px) {\n    min-height: 100px;\n    font-size: ', ';\n    line-height: 21px;\n  }\n  @media (min-width: 832px) {\n    min-height: 85px;\n    font-size: ', ';\n    line-height: 24px;\n  }\n'], ['\n  box-sizing: border-box;\n\n  position: relative;\n  width: 100%;\n  height: auto;\n  left: 0;\n  top: 0;\n\n  height: auto;\n\n  padding: 8px 12px;\n\n  font-family: ', ';\n  font-weight: 400;\n  color: ', ';\n\n  background: ', ';\n\n  border: 2px solid transparent;\n  border-color: ', ';\n  border-radius: 5px;\n\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n\n  -webkit-animation: 1ms void-animation-out;\n\n  &::placeholder {\n    opacity: 1;\n    color: ', ';\n    transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);\n  }\n\n  @media (max-width: 831px) {\n    min-height: 100px;\n    font-size: ', ';\n    line-height: 21px;\n  }\n  @media (min-width: 832px) {\n    min-height: 85px;\n    font-size: ', ';\n    line-height: 24px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  position: absolute;\n  width: auto;\n  left: 8px;\n  top: 10px;\n\n  padding: 4px 6px;\n\n  background: ', ';\n\n  font-family: ', ';\n  font-weight: 300;\n  color: ', ';\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  transform-origin: 0 50%;\n  transform: ', ';\n  cursor: ', ';\n\n  transition-property: color, transform;\n  transition-duration: 0.3s;\n  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n\n  /* Responsive */\n  @media (max-width: 831px) {\n    font-size: ', ';\n    line-height: ', ';\n  }\n  @media (min-width: 832px) {\n    font-size: ', ';\n    line-height: ', ';\n  }\n'], ['\n  box-sizing: border-box;\n  position: absolute;\n  width: auto;\n  left: 8px;\n  top: 10px;\n\n  padding: 4px 6px;\n\n  background: ', ';\n\n  font-family: ', ';\n  font-weight: 300;\n  color: ', ';\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  transform-origin: 0 50%;\n  transform: ', ';\n  cursor: ', ';\n\n  transition-property: color, transform;\n  transition-duration: 0.3s;\n  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n\n  /* Responsive */\n  @media (max-width: 831px) {\n    font-size: ', ';\n    line-height: ', ';\n  }\n  @media (min-width: 832px) {\n    font-size: ', ';\n    line-height: ', ';\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Editor, EditorState, RichUtils, ContentState, convertFromHTML, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { stateToHTML } from 'draft-js-export-html';

import { Box } from '../Box';

export var convertHTMLToText = function convertHTMLToText(html) {
  if (typeof html !== 'string') {
    return '';
  }

  // Strip all HTML tags
  var htmlLessValue = html.replace(/<(?:.|\n)*?>/gm, '');

  // Strip all HTML Entities
  var plainTextArea = document && document.createElement('textarea');
  if (plainTextArea) {
    plainTextArea.innerHTML = htmlLessValue;
  }

  var plainTextValue = plainTextArea ? plainTextArea.value : htmlLessValue;

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

var Wrapper = styled(Box)(_templateObject);

var EditorWrapper = styled(Box)(_templateObject2, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, function (props) {
  return props.theme.colors.grey;
}, function (props) {
  return props.isFocused || !props.isEmpty ? 'white' : props.theme.backgrounds.inputs;
}, function (props) {
  switch (true) {
    case props.state === 'danger':
      return props.theme.colors.danger;
    case props.isFocused && props.renderType === 'host':
      return props.theme.colors.host_primary;
    case props.isFocused && props.renderType === 'primary':
      return _typeof(props.theme.colors.primary) === 'object' ? props.theme.colors.primary.base : props.theme.colors.primary;
    default:
      return props.theme.colors.grey_lighter;
  }
}, function (props) {
  return props.isFocused || !props.isEmpty ? '#cfd7df' : 'transparent';
}, function (props) {
  return props.theme.defaults.fontSizeMobile;
}, function (props) {
  return props.theme.defaults.fontSize;
});

var Label = styled.label(_templateObject3, function (props) {
  return props.isFocused || !props.isEmpty ? 'linear-gradient(\n         to top,\n         ' + props.theme.backgrounds.white + ' 0%,\n         ' + props.theme.backgrounds.white + ' 48%,\n         rgba(255,255,255,0.0) 54%,\n         rgba(255,255,255,0.0) 100%\n      );' : 'transparent';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.secondary;
}, function (props) {
  switch (true) {
    case props.isFocused && props.renderType === 'host':
      return props.theme.colors.host_primary;
    case props.isFocused && props.renderType === 'primary':
      return _typeof(props.theme.colors.primary) === 'object' ? props.theme.colors.primary.base : props.theme.colors.primary;
    default:
      return props.theme.colors.grey_light;
  }
}, function (props) {
  return props.isFocused || !props.isEmpty ? 'scale(0.80) translateY(-30px)' : 'none';
}, function (props) {
  return props.isFocused || !props.isEmpty ? 'default' : 'text';
}, function (props) {
  return props.theme.defaults.fontSizeMobile;
}, function (props) {
  return props.theme.defaults.fontSizeMobile;
}, function (props) {
  return props.theme.defaults.fontSize;
}, function (props) {
  return props.theme.defaults.fontSize;
});

var TextAreaDraftJS = function (_Component) {
  _inherits(TextAreaDraftJS, _Component);

  function TextAreaDraftJS(props) {
    _classCallCheck(this, TextAreaDraftJS);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this._onChange = function (editorState) {
      var contentState = editorState.getCurrentContent();
      var jsonContent = convertToRaw(contentState);
      var empty = jsonContent.blocks.length === 1 && jsonContent.blocks[0].text === '';

      _this.setState({ editorState: editorState, empty: empty });

      var html = stateToHTML(contentState);

      // Fire the externally provided onTextChange function.
      var mockEvent = {
        target: { value: html, type: 'textarea', _json: jsonContent }
      };
      // console.warn(JSON.stringify(jsonContent))
      _this.props.onTextChange(mockEvent);
    };

    _this._handleKeyCommand = function (command, editorState) {
      var newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        _this._onChange(newState);
        return 'handled';
      }
      return 'not-handled';
    };

    _this._onFocus = function (_) {
      _this.setState({ focused: !_this.state.focused });
    };

    _this._onBlur = function (_) {
      _this.setState({ focused: false });
    };

    var isEmpty = props.value === '';

    var state = void 0;
    if (!isEmpty) {
      var blocksFromHTML = convertFromHTML(props.value);
      if (blocksFromHTML.contentBlocks) {
        state = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
      } else {
        isEmpty = true;
      }
    }

    _this.state = {
      focused: false,
      empty: isEmpty,
      // Immutable record...
      editorState: isEmpty ? EditorState.createEmpty() : EditorState.createWithContent(state)
    };

    _this._setEditor = function (editor) {
      _this.editor = editor;
    };
    _this._focusEditor = function () {
      if (_this.editor) {
        _this.editor.focus();
      }
    };
    return _this;
  }

  // _onBoldClick = (event) => {
  //   event.preventDefault();
  //   this._onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  // };

  TextAreaDraftJS.prototype.render = function render() {
    var _props = this.props,
        name = _props.name,
        label = _props.label,
        renderType = _props.renderType;
    var _state = this.state,
        focused = _state.focused,
        empty = _state.empty,
        editorState = _state.editorState;


    return React.createElement(
      Box,
      { position: 'relative' },
      React.createElement(
        Wrapper,
        null,
        React.createElement(
          EditorWrapper,
          {
            onClick: this._focusEditor // focuses the editor itself.
            , renderType: renderType,
            isEmpty: empty,
            isFocused: focused,
            'data-cy': 'textarea-' + name
          },
          React.createElement(Editor, {
            ref: this._setEditor,
            editorState: editorState,
            handleKeyCommand: this._handleKeyCommand,
            onChange: this._onChange,
            onFocus: this._onFocus,
            onBlur: this._onBlur
          })
        ),
        label && label !== '_' && React.createElement(
          Label,
          {
            htmlFor: name,
            isFocused: focused,
            isEmpty: empty,
            renderType: renderType
          },
          label
        )
      )
    );
  };

  return TextAreaDraftJS;
}(Component);

TextAreaDraftJS.propTypes = process.env.NODE_ENV !== "production" ? {
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
  renderType: PropTypes.string
} : {};

TextAreaDraftJS.defaultProps = {
  // disabled: false,
  // state: 'normal',
  renderType: 'primary'
};

TextAreaDraftJS.displayName = 'TextAreaDraftJS';

export default TextAreaDraftJS;