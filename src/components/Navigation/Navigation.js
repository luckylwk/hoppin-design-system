import React, { useContext } from 'react';
import NavigationBar from './NavigationBar';
import {
  Expandable,
  ExpandableToggle,
  ExpandableBody,
  ExpandableContext,
} from '../Expandable';
import { Box } from '../Box';
import styled from 'styled-components';
import Color from 'color';

const Navigation = ({ children, menuContent, withOverlay = true, ...rest }) => {
  return (
    <Expandable>
      <NavigationBar {...rest}>{children}</NavigationBar>
      <NavMenu {...{ withOverlay }}>{menuContent}</NavMenu>
    </Expandable>
  );
};

const NavMenu = ({ children, withOverlay }) => {
  const { toggleExpanded } = useContext(ExpandableContext);

  return (
    <ExpandableBody>
      <NavOverlay
        withOverlay={withOverlay}
        onClick={toggleExpanded}
      ></NavOverlay>
      <NavMenuContent>{children}</NavMenuContent>
    </ExpandableBody>
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

  z-index: ${({ theme }) => theme.zIndices.overlay - 1};

  background-color: ${({ theme }) =>
    Color(theme.colors.whiteout.lightest)
      .alpha(0.9)
      .string()};
`;

const NavMenuContent = styled(Box)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  z-index: ${({ theme }) => theme.zIndices.overlay - 1};

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
