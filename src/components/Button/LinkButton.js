import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Component that makes a button look like a general
 * link. This is used to allow for toggling between views
 * in the app without allowing people to open it in a new
 * browser.
 */

const LinkButton = styled.button`
  background: none !important;

  border: none;
  padding: 0 !important;

  font: inherit;
  color: ${props => {
    switch (props.type) {
      case 'host':
        return props.theme.colors.host_primary;
      case 'secondary':
        return props.theme.colors.secondary;
      case 'primary':
      default:
        return props.theme.colors.primary;
    }
  }};

  border-bottom: 1px solid
    ${props => {
      switch (props.type) {
        case 'host':
          return props.theme.colors.host_primary;
        case 'secondary':
          return props.theme.colors.secondary;
        case 'primary':
        default:
          return props.theme.colors.primary;
      }
    }};

  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.secondary};
  }
`;

LinkButton.propTypes = {
  type: PropTypes.string,
};

LinkButton.defaultProps = {
  type: `primary`,
};

LinkButton.displayName = 'LinkButton';

export default LinkButton;
