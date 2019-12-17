import { Box } from '../Box';
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

Flex.displayName = 'Flex';

export default Flex;
