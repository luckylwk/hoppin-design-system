import React from 'react';
import { Box } from 'components/Box';
import styled from 'styled-components';
import { flexbox } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Flex = styled(Box)(flexbox);

Flex.propTypes = {
  ...Box.propTypes,
  ...propTypes.flexbox,
};
Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
