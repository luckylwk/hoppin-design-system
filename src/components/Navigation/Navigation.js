import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';

import NavigationBar from './NavigationBar';
import { Expandable, ExpandableToggle, ExpandableContext } from '../Expandable';
import { Box } from '../Box';
import { Overlay } from '../Overlay';

// ---------------------------

const Navigation = ({ children, menuContent, withOverlay = true, ...rest }) => {
  return (
    <Expandable>
      <NavigationBar {...rest}>{children}</NavigationBar>
      <NavMenu {...{ withOverlay }}>{menuContent}</NavMenu>
    </Expandable>
  );
};

// ---------------------------

const NavMenu = ({ children, withOverlay }) => {
  const { isExpanded, toggleExpanded } = useContext(ExpandableContext);
  const className = isExpanded ? 'isExpanded' : '';
  return (
    <Fragment>
      <NavOverlay
        withOverlay={withOverlay}
        onClick={toggleExpanded}
        className={className}
      ></NavOverlay>
      <NavMenuContent className={className}>{children}</NavMenuContent>
    </Fragment>
  );
};

NavMenu.displayName = 'NavMenu';

// ---------------------------

const NavOverlay = styled(Overlay)`
  height: 100vh;
  width: 100vw;

  transform: translate3d(-100vw, 0, 0);
  opacity: 0;

  transition: opacity ${({ theme }) => theme.motions.base};

  &.isExpanded {
    transform: translate3d(0vw, 0, 0);
    opacity: 0.9;
  }
`;

NavOverlay.displayName = 'NavOverlay';

// ---------------------------

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
  transition: opacity ${({ theme }) => theme.motions.base},
    transform 0.01s ${({ theme }) => theme.motions.base};

  z-index: ${({ theme }) => theme.zIndices.overlay - 1};

  &.isExpanded {
    transform: translate3d(0vw, 0, 0);
    opacity: 1;
    transition: opacity ${({ theme }) => theme.motions.base}, transform 0.01s 0s;
    ${'' /*  */}
  }

  ${'' /* ignore clicks on container */}
  pointer-events: none;

  ${'' /* but enable clicks on content */}
  & * {
    pointer-events: auto;
  }
`;

NavMenuContent.displayName = 'NavMenuContent';

// ---------------------------

export default Navigation;

export { ExpandableToggle as NavToggle };
