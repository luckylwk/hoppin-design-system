import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Button specifically for icons.
 */

const ButtonIcon = styled.button`
  position: relative;
  padding: 0.65rem 0.75rem 0.48rem;
  margin: 0;

  background: transparent;

  font-family: ${props => props.theme.fonts.secondary}, sans-serif;
  font-size: 0.875rem;
  line-height: 1em;
  color: ${props => {
    switch (props.type) {
      case 'primary':
        return props.theme.colors.primary;
      case 'secondary':
        return props.theme.colors.secondary;
      case 'host':
        return props.theme.colors.host_primary;
      case 'host-full':
      case 'white':
        return props.theme.colors.white;
      default:
        return props.theme.colors.grey;
    }
  }};

  border-width: 1px;
  border-style: solid;
  border-color: ${props => {
    switch (props.boxed) {
      case true:
        return props.theme.colors.grey_lighter;
      default:
        return 'transparent';
    }
  }};
  border-radius: ${props => props.theme.borders.default};

  &:hover {
    color: ${props => {
      switch (props.type) {
        case 'primary':
          return props.theme.colors.secondary;
        case 'host':
          return props.theme.colors.secondary;
        case 'white':
          return props.theme.colors.secondary;
        default:
          return props.theme.colors.primary;
      }
    }};
  }

  outline: none;

  cursor: pointer;

  @media (max-width: 768px) {
    padding: ${props => {
      switch (props.space) {
        case 'tight':
          return '0.3rem 0.4rem 0.13rem';
        default:
          return '0.65rem 0.75rem 0.48rem';
      }
    }};
  }
  @media (min-width: 769px) {
  }
`;

ButtonIcon.propTypes = {
  type: PropTypes.string.isRequired,
  boxed: PropTypes.bool.isRequired,
  space: PropTypes.string,
};

ButtonIcon.defaultProps = {
  type: 'default',
  boxed: false,
  space: 'default',
};

ButtonIcon.displayName = 'ButtonIcon';

export default ButtonIcon;
