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

const buttonIconSpacing = variant({
  // theme key for variant definitions
  scale: 'buttonIconSpacing',
  // component prop
  prop: 'size',
});

const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.secondary};
  cursor: pointer;

  border: 2px solid transparent;
  border-radius: 2em;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0px;
  text-decoration: none;
  line-height: 1;

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
    // `context` defines color default (host/shadower inherited from context), host, shadower, danger
    const colors = get(theme, `colors.${context}`, { base: '#333' });
    const isShadower = colors.base === theme.colors.shadower.base;

    let variantCSS = '';
    switch (variant) {
      case 'outline':
        variantCSS = `
          border-color: ${colors.light};
          background-color: transparent;
          color: ${context === 'neutral' ? colors.base : colors.dark};
        `;
        break;
      case 'subtle':
        variantCSS = `
          border-color: transparent;
          background-color: transparent;
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
          color: ${
            context === 'whiteout'
              ? theme.colors.primary.dark
              : isShadower
              ? colors.darkest
              : theme.colors.whiteout.lightest
          };
        `;
        break;
    }
    return variantCSS;
  }}

  /* our buttonSize variant */
  ${buttonSize}

  /* icon buttons */
  ${props => props.icon && buttonIconSpacing}

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
    'shadower',
    'host',
    'neutral',
    'danger',
    'whiteout',
  ]),
};

Button.defaultProps = {
  disabled: false,
  variant: 'full',
  context: 'primary',
  size: 'base',
  display: 'block',
};

Button.displayName = 'Button';

export default Button;
