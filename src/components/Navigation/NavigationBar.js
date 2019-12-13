import styled from 'styled-components';
import { shadow } from 'styled-system';
import { Flex } from '../Flex';

// ---------------------------

const NavigationBar = styled(Flex)`
  ${shadow}
`;

NavigationBar.propTypes = {
  ...Flex.propTypes,
};

NavigationBar.defaultProps = {
  bg: 'whiteout.lightest',
  padding: 'base',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 'nav',
  boxShadow: 'xsmall',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

NavigationBar.displayName = 'NavigationBar';

// ---------------------------

const NavLeft = styled(Flex)``;

NavLeft.defaultProps = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

NavLeft.displayName = 'NavLeft';

// ---------------------------

const NavCenter = styled(Flex)``;

NavCenter.defaultProps = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

NavCenter.displayName = 'NavCenter';

// ---------------------------

const NavRight = styled(Flex)``;

NavRight.defaultProps = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

NavRight.displayName = 'NavRight';

// ---------------------------

export { NavLeft, NavCenter, NavRight };

export default NavigationBar;
