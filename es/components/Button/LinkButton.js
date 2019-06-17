var _templateObject = _taggedTemplateLiteralLoose(['\n  background: none !important;\n\n  border: none;\n  padding: 0 !important;\n\n  font: inherit;\n  color: ', ';\n\n  border-bottom: 1px solid\n    ', ';\n\n  cursor: pointer;\n\n  &:hover {\n    color: ', ';\n    border-color: ', ';\n  }\n'], ['\n  background: none !important;\n\n  border: none;\n  padding: 0 !important;\n\n  font: inherit;\n  color: ', ';\n\n  border-bottom: 1px solid\n    ', ';\n\n  cursor: pointer;\n\n  &:hover {\n    color: ', ';\n    border-color: ', ';\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Component that makes a button look like a general
 * link. This is used to allow for toggling between views
 * in the app without allowing people to open it in a new
 * browser.
 */

var LinkButton = styled.button(_templateObject, function (props) {
  switch (props.type) {
    case 'host':
      return props.theme.colors.host_primary;
    case 'secondary':
      return props.theme.colors.secondary;
    case 'primary':
    default:
      return props.theme.colors.primary;
  }
}, function (props) {
  switch (props.type) {
    case 'host':
      return props.theme.colors.host_primary;
    case 'secondary':
      return props.theme.colors.secondary;
    case 'primary':
    default:
      return props.theme.colors.primary;
  }
}, function (props) {
  return props.theme.colors.secondary;
}, function (props) {
  return props.theme.colors.secondary;
});

LinkButton.propTypes = {
  type: PropTypes.string
};

LinkButton.defaultProps = {
  type: 'primary'
};

LinkButton.displayName = 'LinkButton';

export default LinkButton;