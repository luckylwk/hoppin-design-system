import React, { useContext } from 'react';
import NavigationBar from './NavigationBar';
import styled from 'styled-components';

import Color from 'color';
import { Expandable, ExpandableToggle, ExpandableContext } from '../Expandable';
import { Box } from '../Box';

const Navigation = ({ children, menuContent, withOverlay = true, ...rest }) => {
  return (
    <Expandable>
      <NavigationBar {...rest}>{children}</NavigationBar>
      <NavMenu {...{ withOverlay }}>{menuContent}</NavMenu>
    </Expandable>
  );
};

const NavMenu = ({ children, withOverlay }) => {
  const { isExpanded, toggleExpanded } = useContext(ExpandableContext);
  const className = isExpanded ? 'isExpanded' : '';
  return (
    <React.Fragment>
      <NavOverlay
        withOverlay={withOverlay}
        onClick={toggleExpanded}
        className={className}
      ></NavOverlay>
      <NavMenuContent className={className}>{children}</NavMenuContent>
    </React.Fragment>
  );
};

const NavOverlay = styled(Box)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  transform: translate3d(-100vw, 0, 0);
  opacity: 0;
  transition: opacity 0.5s;

  z-index: ${({ theme }) => theme.zIndices.overlay - 1};

  background-color: ${({ theme }) =>
    Color(theme.colors.whiteout.lightest)
      .alpha(0.9)
      .string()};

  &.isExpanded {
    transform: translate3d(0vw, 0, 0);
    opacity: 1;
  }
`;

const NavMenuContent = styled(Box)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  height: 100vh;
  width: 100vw;
  transform: translate3d(100vw, 0, 0);
  opacity: 0;
  transition: opacity 0.5s, transform 0.01s 0.5s;

  z-index: ${({ theme }) => theme.zIndices.overlay - 1};

  &.isExpanded {
    transform: translate3d(0vw, 0, 0);
    opacity: 1;
    transition: opacity 0.5s, transform 0.01s 0s;
    ${'' /*  */}
  }

  ${'' /* ignore clicks on container */}
  pointer-events: none;

  ${'' /* but enable clicks on content */}
  & * {
    pointer-events: auto;
  }
`;

NavOverlay.displayName = 'NavOverlay';

export default Navigation;
export { ExpandableToggle as NavToggle };
