var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: relative;\n  border: 0px;\n  border-radius: ', ';\n  box-shadow: ', ';\n  overflow: visible;\n  ', '\n\n  &:before {\n    content: \'\';\n    position: absolute;\n    display: none;\n    top: ', ';;\n    left: -3rem;\n    width: 2rem;\n    height: 2rem;\n    border-radius: ', ';\n    background-color: ', ';\n    background-size: cover;\n    ', '\n    box-shadow: ', ';\n  }\n\n  ', ';\n\n  /* TODO: pretty typing animation. */\n  ', ';\n'], ['\n  position: relative;\n  border: 0px;\n  border-radius: ', ';\n  box-shadow: ', ';\n  overflow: visible;\n  ', '\n\n  &:before {\n    content: \'\';\n    position: absolute;\n    display: none;\n    top: ', ';;\n    left: -3rem;\n    width: 2rem;\n    height: 2rem;\n    border-radius: ', ';\n    background-color: ', ';\n    background-size: cover;\n    ', '\n    box-shadow: ', ';\n  }\n\n  ', ';\n\n  /* TODO: pretty typing animation. */\n  ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import { Box } from '../Box';
import styled from 'styled-components';
import { typography } from 'styled-system';
import propTypes from 'prop-types';

var ChatBubble = styled(Box)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.radii.medium;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.shadows[2];
}, typography, function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.xsmall;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.radii.xlarge;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.neutral.lighter;
}, function (_ref6) {
  var avatarURL = _ref6.avatarURL;
  return avatarURL ? 'background-image: url(' + avatarURL + ');' : '';
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.shadows[2];
}, function (_ref8) {
  var theme = _ref8.theme,
      variant = _ref8.variant;

  var variantCSS = void 0;
  switch (variant) {
    case 'me':
      variantCSS = '\n          align-self: flex-end;\n          margin-left: 25%;\n          background-color: ' + theme.colors.primary.lighter + ';\n          border-bottom-right-radius: ' + theme.radii.xsmall + ';\n        ';
      break;
    case 'them':
    default:
      variantCSS = '\n          align-self: flex-start;\n          margin-right: ' + theme.space.large + '\n          margin-left: 3rem;\n          background-color: ' + theme.colors.white + ';\n          border-bottom-left-radius: ' + theme.radii.xsmall + ';\n\n          &: before {\n            display: block;\n          }\n        ';
      break;
  }
  return variantCSS;
}, function (_ref9) {
  var isTyping = _ref9.isTyping;
  return isTyping && '\n      &:after {\n        content: \'...\';\n        dis\n      }\n    ';
});

ChatBubble.propTypes = _extends({}, Box.propTypes, {
  variant: propTypes.oneOf(['me', 'them'])
});

ChatBubble.defaultProps = {
  padding: 'small',
  marginY: ['xsmall', 'small'],
  flexGrow: 0,
  color: 'neutral.darker',
  fontFamily: 'secondary',
  fontSize: 'body'
};

ChatBubble.displayName = 'ChatBubble';

export default ChatBubble;