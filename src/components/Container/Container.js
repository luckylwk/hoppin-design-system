import React from 'react';
import { Flex } from '../Flex';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled(Flex)`
  max-width: ${({ theme, width, maxWidth }) =>
    maxWidth ? maxWidth : theme.containerWidths[width]};
  margin-left: auto;
  margin-right: auto;
`;

Container.propTypes = {
  ...Flex.propTypes,
};

Container.defaultProps = {
  width: 'base',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: ['large', 'large', 'xlarge'],
};

Container.displayName = 'Container';

export default Container;
