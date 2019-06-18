import React from 'react';
import { Flex } from '../Flex';
import styled from 'styled-components';

const Container = styled(Flex)`
  max-width: ${({ theme, maxWidth }) =>
    maxWidth ? maxWidth : theme.containerWidth};
  margin-left: auto;
  margin-right: auto;
`;

Container.defaultProps = {
  display: 'flex',
};

export default Container;
