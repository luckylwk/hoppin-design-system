import styled from 'styled-components';
import { Box } from '../Box';

const FullScreenStepWrapper = styled(Box)`
  ${({ displayMode }) => {
    return displayMode === 'fullscreen'
      ? `position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;`
      : `
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  align-items: stretch;
  `;
  }}
  &.step-appear,
  &.step-enter {
    opacity: 0;
    transform: translate(2%, 0);
    z-index: ${({ theme }) => {
      return theme.zIndexes[1];
    }};
  }

  &.step-appear.step-appear-active,
  &.step-enter.step-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: opacity 300ms ease-in, transform 300ms ease-out;
    transition-delay: 100ms;
  }

  &.step-exit {
    opacity: 1;
    transform: translate(0, 0);
  }

  &.step-exit.step-exit-active {
    opacity: 0;
    transform: translate(-2%, 0);
    transition: opacity 150ms ease-in, transform 200ms ease-in;
  }
`;

FullScreenStepWrapper.displayName = 'FullScreenStepWrapper';

export default FullScreenStepWrapper;
