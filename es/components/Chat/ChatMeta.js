var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  align-self: center;\n  font-size: ', ';\n'], ['\n  align-self: center;\n  font-size: ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import { Box } from '../Box';
import styled from 'styled-components';
import propTypes from 'prop-types';

var ChatMeta = styled(Box)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.fontSizes.label;
});

ChatMeta.propTypes = _extends({}, Box.propTypes);

ChatMeta.defaultProps = {
  padding: ['xsmall', 'small'],
  marginY: ['xsmall', 'small'],
  flexGrow: 0,
  color: 'neutrals.lighter'
};

ChatMeta.displayName = 'ChatMeta';

export default ChatMeta;