import React from 'react';
import { Box } from '../Box';
import styled from 'styled-components';
import { typography } from 'styled-system';
import propTypes from 'prop-types';

const ChatMeta = styled(Box)`
  align-self: center;
  text-align: center;
  ${typography}
`;

ChatMeta.propTypes = {
  ...Box.propTypes,
};

ChatMeta.defaultProps = {
  padding: ['xsmall', 'small'],
  marginY: ['xsmall', 'small'],
  flexGrow: 0,
  color: 'neutral.lighter',
  fontFamily: 'secondary',
  fontSize: 'label',
};

ChatMeta.displayName = 'ChatMeta';

export default ChatMeta;
