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
  get,
  variant,
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

const Link = styled(RouterLink)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1em;
  cursor: pointer;
  text-decoration: none;
  padding: 0;

  border: none;
  border-bottom: 1px solid ${({ theme, context }) => {
    const colors = get(theme.colors, context, theme.colors.primary);
    return colors.light;
  }};

  color: ${({ theme, context }) => {
    const colors = get(theme.colors, context, theme.colors.primary);
    return colors.darker;
  }};

  font-weight: ${({ theme }) => theme.fontWeights.normal};
  letter-spacing: 0.5px;

  outline: none;

  transition: all 0.5s;

  &:hover {
    transform: translateY(-1px);
    text-shadow: ${({ theme }) => theme.shadows.small};
  }

  & + & {
    margin-left: ${({ theme }) => theme.space.small};
  }

  /* styled-system props */
  ${display}
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

Link.propTypes = {
  disabled: PropTypes.bool,
  ...systemPropTypes.buttonStyle,
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

  context: propTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'hopper',
    'host',
    'danger',
  ]),
};

Link.defaultProps = {
  disabled: false,
  display: 'inline-block',
};

Link.displayName = 'Link';

export default Link;
