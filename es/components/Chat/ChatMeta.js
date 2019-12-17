var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  align-self: center;\n  text-align: center;\n  ', '\n'], ['\n  align-self: center;\n  text-align: center;\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import { Box } from '../Box';
import styled from 'styled-components';
import { typography } from 'styled-system';

var ChatMeta = styled(Box)(_templateObject, typography);

ChatMeta.propTypes = _extends({}, Box.propTypes);

ChatMeta.defaultProps = {
  padding: ['xsmall', 'small'],
  marginY: ['xsmall', 'small'],
  flexGrow: 0,
  color: 'neutral.lighter',
  fontFamily: 'secondary',
  fontSize: 'label'
};

ChatMeta.displayName = 'ChatMeta';

export default ChatMeta;