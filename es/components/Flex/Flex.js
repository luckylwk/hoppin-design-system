function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Box } from '../Box';
import styled from 'styled-components';
import { flexbox } from 'styled-system';
import propTypes from '@styled-system/prop-types';
var Flex = styled(Box)(flexbox);
Flex.propTypes = _extends({}, Box.propTypes, propTypes.flexbox);
Flex.defaultProps = {
  display: 'flex'
};
Flex.displayName = 'Flex';
export default Flex;