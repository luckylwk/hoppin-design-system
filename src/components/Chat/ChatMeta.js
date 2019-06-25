import React from 'react';
import { Box } from '../Box';
import styled from 'styled-components';
import propTypes from 'prop-types';

const ChatMeta = styled(Box)`
  align-self: center;
  font-size: ${({ theme }) => theme.fontSizes.label};
`;

ChatMeta.propTypes = {
  ...Box.propTypes,
};

ChatMeta.defaultProps = {
  padding: ['xsmall', 'small'],
  marginY: ['xsmall', 'small'],
  flexGrow: 0,
  color: 'neutrals.lighter',
};

ChatMeta.displayName = 'ChatMeta';

export default ChatMeta;
