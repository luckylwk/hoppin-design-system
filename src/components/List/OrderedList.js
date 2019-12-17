import styled from 'styled-components';
import {
  space,
  position,
  color,
  textAlign,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
} from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';

const OrderedList = styled('ul')`
  font-size: ${({ theme }) => theme.fontSizes.body || '1em'};
  font-family: ${({ theme }) => theme.fonts.secondary || 'sans-serif'};
  line-height: ${({ theme }) => theme.lineHeights.body || '1.4em'};
  ${textAlign}
  ${space}
  ${position}
  ${color}
  ${flex}
  ${flexGrow}
  ${flexShrink}
  ${flexBasis}
  ${justifySelf}
  ${alignSelf}
  ${order}

  list-style-type: none;
  counter-reset: list;
`;

OrderedList.propTypes = {
  ...systemPropTypes.space,
  ...systemPropTypes.position,
  ...systemPropTypes.color,
  ...systemPropTypes.textAlign,
  ...systemPropTypes.flex,
  ...systemPropTypes.flexGrow,
  ...systemPropTypes.flexShrink,
  ...systemPropTypes.flexBasis,
  ...systemPropTypes.justifySelf,
  ...systemPropTypes.alignSelf,
  ...systemPropTypes.order,
};

OrderedList.defaultProps = {
  marginTop: 0,
  marginBottom: 3,
  color: 'inherit', // respond to context, if we're white on dark background or dark on light.
  textAlign: 'inherit',
  type: 'decimal',
  position: 'relative',
};

OrderedList.displayName = 'OrderedList';

export default OrderedList;
