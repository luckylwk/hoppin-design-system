import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  display,
  space,
  color,
  width,
  flex,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  alignSelf,
  order,
} from 'styled-system';

/**
 * Core Button component. Allows for rendering different
 * styles using the `type` prop.
 */

const Button = styled.button`
  margin: 0;
  padding: ${props => props.theme.space[2]} ${props =>
  props.theme.space[4]} ${props => props.theme.space[2]};

  font-family: ${({ theme }) => theme.fonts.secondary};

  background: ${props => {
    switch (props.type) {
      case 'primary':
        return props.theme.colors.primary;
      case 'host':
        return props.theme.colors.host;
      case 'tertiary':
      case 'negative':
        return 'transparent';
      case 'danger':
        return props.theme.colors.danger;
      case 'host_secondary':
      case 'secondary':
      default:
        return props.theme.colors.white;
    }
  }};

  color: ${props => {
    switch (props.type) {
      case 'primary':
      case 'danger':
      case 'host':
        return props.theme.colors.white;
      case 'host_secondary':
        return props.theme.colors.host;
      case 'negative':
        return props.theme.colors.danger;
      case 'tertiary':
        return props.theme.colors.grey_light;
      case 'secondary':
      default:
        return props.theme.colors.primary;
    }
  }};
  cursor: pointer;

  border: 1px solid transparent;
  border-radius: 1em;
  border-color: ${props => {
    switch (props.type) {
      case 'primary':
      case 'secondary':
        return props.theme.colors.primary;
      case 'host':
      case 'host_secondary':
        return props.theme.colors.host;
      case 'tertiary':
        return 'transparent';
      case 'danger':
        return props.theme.colors.danger;
      case 'negative':
        return props.theme.colors.danger;
      default:
        return props.theme.colors.primary;
    }
  }};

  & [role='img'] {
    display: inline-block;
    margin: .25em auto -.25em;
  }

  @media (min-width: 769px) {
    &:hover {
      border-color: ${props => {
        switch (props.type) {
          case 'primary':
            return props.theme.colors.secondary;
          case 'secondary':
            return props.theme.colors.primary;
          case 'host':
          case 'host_secondary':
            return props.theme.colors.secondary;
          default:
            return props.theme.colors.primary;
        }
      }};
    }
  }

  font-weight: 600;
  
  outline: none;

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  ${display}
  ${space}
  ${color}
  ${width}
  ${flex}
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${alignSelf}
  ${order}
`;

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  type: 'secondary',
};

Button.displayName = 'Button';

export default Button;
