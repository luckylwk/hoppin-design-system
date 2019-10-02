import React from 'react';
import styled from 'styled-components';
import { NavToggle } from './Navigation';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Box } from '../Box';
import { Logo } from '../Logo';
import { FiMenu, FiX } from 'react-icons/fi';

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

const MenuSheet = ({ children, context = 'primary', ...rest }) => (
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
      <Box objectFit="contain">
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

MenuSheet.displayName = 'MenuSheet';

export { MenuToggle, MenuSheet, MenuButton };
