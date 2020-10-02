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
} from 'styled-system';

import systemPropTypes from '@styled-system/prop-types';
import propTypes from 'prop-types';

/**
 * Core Link component.
 * Adds link styling, use RoutedLink for internal links that get picked up by react-router
 */

const LinkStyled = styled.a`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1em;
  cursor: pointer;
  text-decoration: none;
  padding: 0;

  border: none;
  border-bottom: 1px solid
    ${({ theme, context }) => {
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

LinkStyled.propTypes = {
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
    'shadower',
    'host',
    'danger',
  ]),
};

LinkStyled.defaultProps = {
  disabled: false,
  display: 'inline-block',
};

LinkStyled.displayName = 'LinkStyled';

export default LinkStyled;
