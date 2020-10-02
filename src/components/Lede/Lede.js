import styled from 'styled-components';
import {
  space,
  color,
  fontSize,
  textAlign,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';

import { Heading } from '../Heading';

const Lede = styled('p')`
  ${textAlign}
  ${space}
  ${color}
  ${fontSize}
  ${flex}
  ${flexGrow}
  ${flexShrink}
  ${flexBasis}
  ${justifySelf}
  ${alignSelf}
  ${order}

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 0px;
  line-height: ${({ theme }) => theme.lineHeights.base};

  ${Heading} + & {
    margin-top: 0;
  }
`;

Lede.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.textAlign,
  ...propTypes.flex,
  ...propTypes.flexGrow,
  ...propTypes.flexShrink,
  ...propTypes.flexBasis,
  ...propTypes.justifySelf,
  ...propTypes.alignSelf,
  ...propTypes.order,
};

Lede.defaultProps = {
  textAlign: 'inherit',
  fontSize: 4,
  color: 'secondary.darker',
  marginX: 0,
  marginY: 'large',
};

Lede.displayName = 'Lede';

export default Lede;
