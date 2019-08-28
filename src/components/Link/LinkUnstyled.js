import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  display,
  space,
  width,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  color,
} from 'styled-system';

import systemPropTypes from '@styled-system/prop-types';

/**
 * Core LinkUnstyled component.
 */

const LinkUnstyled = styled.a`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1em;
  cursor: pointer;
  text-decoration: none;
  padding: 0;

  /* styled-system props */
  ${display}
  ${color}
  ${space}
  ${width}
  ${flex}
  ${flexGrow}
  ${flexShrink}
  ${flexBasis}
  ${justifySelf}
  ${alignSelf}
  ${order}
`;

LinkUnstyled.propTypes = {
  disabled: PropTypes.bool,
  ...systemPropTypes.display,
  ...systemPropTypes.space,
  ...systemPropTypes.width,
  ...systemPropTypes.flex,
  ...systemPropTypes.flexGrow,
  ...systemPropTypes.flexShrink,
  ...systemPropTypes.flexBasis,
  ...systemPropTypes.justifySelf,
  ...systemPropTypes.alignSelf,
  ...systemPropTypes.order,
};

LinkUnstyled.defaultProps = {
  display: 'inline-block',
  color: 'inherit',
};

LinkUnstyled.displayName = 'LinkUnstyled';

export default LinkUnstyled;
