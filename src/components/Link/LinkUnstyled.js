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

import { Link as RouterLink } from 'react-router-dom';
import systemPropTypes from '@styled-system/prop-types';
import propTypes from 'prop-types';

/**
 * Core Link component.
 * needs react-router-dom as a peer dependency. So it will pick up withever version of react-router-dom you're using in the app.
 * This is to avoid version clashes. HDS does not bundle react-router-dom.
 * Use the `as` prop to replace the react-router-dom <Link/> with a standard <a/> tag for external links.
 */

const LinkUnstyled = styled(RouterLink)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1em;
  cursor: pointer;
  text-decoration: none;
  padding: 0;

  & + & {
    margin-left: ${({ theme }) => theme.space.small};
  }

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
