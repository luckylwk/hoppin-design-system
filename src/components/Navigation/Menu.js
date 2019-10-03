import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavToggle } from './Navigation';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Box } from '../Box';
import { Logo } from '../Logo';
import { FiMenu, FiX } from 'react-icons/fi';
import { ExpandableContext } from '../Expandable';

const MenuToggle = () => (
  <NavToggle>
    <Button variant="subtle">
      <FiMenu />
    </Button>
  </NavToggle>
);

MenuToggle.displayName = 'MenuToggle';

const MenuButton = styled(Button)``;
MenuButton.defaultProps = {
  variant: 'subtle',
  context: 'whiteout',
  size: 'large',
  paddingLeft: 0,
};

const MenuSheet = ({
  children,
  context = 'primary',
  onLogoClick = () => {},
  ...rest
}) => {
  const { toggleExpanded } = useContext(ExpandableContext);
  const handleLogoClick = e => {
    e.preventDefault();
    toggleExpanded();
    onLogoClick();
  };
  return (
    <Flex
      width={['85%', null, '50%']}
      height="100%"
      bg={`${context}.base`}
      position="absolute"
      right={0}
      padding="large"
      flexDirection="column"
    >
      <Flex>
        <Box objectFit="contain" onClick={handleLogoClick}>
          <Logo context="whiteout" />
        </Box>
        <NavToggle>
          <Button
            variant="subtle"
            context="whiteout"
            padding={['xsmall', null, 'small']}
          >
            <FiX />
          </Button>
        </NavToggle>
      </Flex>
      <Flex
        flexDirection="column"
        flexGrow={2}
        justifyItems="flex-end"
        justifyContent="flex-end"
        alignItems="flex-start"
        {...rest}
      >
        {children}
      </Flex>
    </Flex>
  );
};

MenuSheet.propTypes = {
  /** Works best with MenuButtons */
  children: PropTypes.any,
  /** Callback for click on Logo, use to link up to your router implementation. */
  onLogoClick: PropTypes.func,
};
MenuSheet.displayName = 'MenuSheet';

export { MenuToggle, MenuSheet, MenuButton };
