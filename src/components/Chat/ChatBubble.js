import React from 'react';
import { Box } from '../Box';
import styled from 'styled-components';
import propTypes from 'prop-types';

const ChatBubble = styled(Box)`
  position: relative;
  border: 0px;
  border-radius: ${({ theme }) => theme.radii.medium};
  box-shadow: ${({ theme }) => theme.shadows[2]};
  overflow: visible;

  &:before {
    content: '';
    position: absolute;
    display: none;
    top: ${({ theme }) => theme.space.xsmall};;
    left: -3rem;
    width: 2rem;
    height: 2rem;
    border-radius: ${({ theme }) => theme.radii.xlarge};
    background-color: ${({ theme }) => theme.colors.neutral.lighter};
    background-size: cover;
    ${({ avatarURL }) =>
      avatarURL ? `background-image: url(${avatarURL});` : ''}
    box-shadow: ${({ theme }) => theme.shadows[2]};
  }

  ${({ theme, variant }) => {
    let variantCSS;
    switch (variant) {
      case 'me':
        variantCSS = `
          align-self: flex-end;
          margin-left: 25%;
          background-color: ${theme.colors.primary.lighter};
          border-bottom-right-radius: ${theme.radii.xsmall};
        `;
        break;
      case 'them':
      default:
        variantCSS = `
          align-self: flex-start;
          margin-right: ${theme.space.large}
          margin-left: 3rem;
          background-color: ${theme.colors.white};
          border-bottom-left-radius: ${theme.radii.xsmall};

          &: before {
            display: block;
          }
        `;
        break;
    }
    return variantCSS;
  }};

  /* TODO: pretty typing animation. */
  ${({ isTyping }) =>
    isTyping &&
    `
      &:after {
        content: '...';
        dis
      }
    `};
`;

ChatBubble.propTypes = {
  ...Box.propTypes,
  variant: propTypes.oneOf(['me', 'them']),
};

ChatBubble.defaultProps = {
  padding: 'small',
  marginY: ['xsmall', 'small'],
  flexGrow: 0,
  color: 'neutral.darker',
};

ChatBubble.displayName = 'ChatBubble';

export default ChatBubble;
