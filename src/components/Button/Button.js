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

import systemPropTypes from '@styled-system/prop-types';
import propTypes from 'prop-types';

/**
 * Core Button component. Allows for rendering different
 * styles using the `type` prop.
 */

// using the variants in styled-system, we can set several css styles
// AND render the component as different HTML tags using the `as` prop of styled-components.
// https://styled-system.com/variants

const buttonSize = variant({
  // theme key for variant definitions
  scale: 'buttonSizes',
  // component prop
  prop: 'size',
});

const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.secondary};
  cursor: pointer;

  border: 1px solid transparent;
  border-radius: 2em;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0.5px;

  outline: none;

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  transition: all 0.5s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.xsmall};
  }

  ${({ theme, variant, context }) => {
    // `variant` defines full color (default), outline, or subtle shape
    // `context` defines color default (host/hopper inherited from context), host, hopper, danger
    const colors = get(theme, `colors.${context}`, '#333');

    let variantCSS = '';
    switch (variant) {
      case 'outline':
        variantCSS = `
          border-color: ${colors.base};
          color: ${colors.base};
        `;
        break;
      case 'subtle':
        variantCSS = `
          border-color: 'transparent';
          color: ${colors.base};

          &:hover {
            box-shadow: none;
          }
        `;
        break;
      case 'full':
      default:
        variantCSS = `
          border-color: ${colors.base};
          background-color: ${colors.base};
          color: ${theme.colors.white};
        `;
        break;
    }
    return variantCSS;
  }}

  & + & {
    margin-left: ${({ theme }) => theme.space.small};
  }

  /* our buttonSize variant */
  ${buttonSize}
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

  /* TODO: delete this? copied over from hoppin-react-blog not sure where this is used. */
  & [role='img'] {
    display: inline-block;
    margin: .25em auto -.25em;
  }
`;

Button.propTypes = {
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
  size: propTypes.oneOf(['small', 'base', 'large']),
  variant: propTypes.oneOf(['full', 'outline', 'subtle']),
  context: propTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'hopper',
    'host',
    'danger',
  ]),
};

Button.defaultProps = {
  disabled: false,
  variant: 'full',
  context: 'primary',
  size: 'base',
  display: 'block',
  flex: '1 0 auto',
};

Button.displayName = 'Button';

export default Button;
