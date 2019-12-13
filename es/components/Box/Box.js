var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import styled from 'styled-components';
import { space, border, color, layout, textAlign, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, size, position, boxShadow } from 'styled-system';
import propTypes from '@styled-system/prop-types';

var Box = styled('div')({
  boxSizing: 'border-box',
  minWidth: 0
}, space, layout, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, color, border, textAlign, size, position, boxShadow);

Box.propTypes = _extends({}, propTypes.space, propTypes.layout, propTypes.flex, propTypes.flexGrow, propTypes.flexShrink, propTypes.flexBasis, propTypes.justifySelf, propTypes.alignSelf, propTypes.order, propTypes.color, propTypes.border, propTypes.textAlign, propTypes.size, propTypes.position, propTypes.boxShadow);

Box.defaultProps = {
  display: 'block',
  flexGrow: 1
};

Box.displayName = 'Box';

export default Box;