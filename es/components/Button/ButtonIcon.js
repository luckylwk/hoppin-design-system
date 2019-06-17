var _templateObject = _taggedTemplateLiteralLoose(['\n  position: relative;\n  padding: 0.65rem 0.75rem 0.48rem;\n  margin: 0;\n\n  background: transparent;\n\n  font-family: ', ', sans-serif;\n  font-size: 0.875rem;\n  line-height: 1em;\n  color: ', ';\n\n  border-width: 1px;\n  border-style: solid;\n  border-color: ', ';\n  border-radius: ', ';\n\n  &:hover {\n    color: ', ';\n  }\n\n  outline: none;\n\n  cursor: pointer;\n\n  @media (max-width: 768px) {\n    padding: ', ';\n  }\n  @media (min-width: 769px) {\n  }\n'], ['\n  position: relative;\n  padding: 0.65rem 0.75rem 0.48rem;\n  margin: 0;\n\n  background: transparent;\n\n  font-family: ', ', sans-serif;\n  font-size: 0.875rem;\n  line-height: 1em;\n  color: ', ';\n\n  border-width: 1px;\n  border-style: solid;\n  border-color: ', ';\n  border-radius: ', ';\n\n  &:hover {\n    color: ', ';\n  }\n\n  outline: none;\n\n  cursor: pointer;\n\n  @media (max-width: 768px) {\n    padding: ', ';\n  }\n  @media (min-width: 769px) {\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Button specifically for icons.
 */

var ButtonIcon = styled.button(_templateObject, function (props) {
  return props.theme.fonts.secondary;
}, function (props) {
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
}, function (props) {
  switch (props.boxed) {
    case true:
      return props.theme.colors.grey_lighter;
    default:
      return 'transparent';
  }
}, function (props) {
  return props.theme.borders.default;
}, function (props) {
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
}, function (props) {
  switch (props.space) {
    case 'tight':
      return '0.3rem 0.4rem 0.13rem';
    default:
      return '0.65rem 0.75rem 0.48rem';
  }
});

ButtonIcon.propTypes = {
  type: PropTypes.string.isRequired,
  boxed: PropTypes.bool.isRequired,
  space: PropTypes.string
};

ButtonIcon.defaultProps = {
  type: 'default',
  boxed: false,
  space: 'default'
};

ButtonIcon.displayName = 'ButtonIcon';

export default ButtonIcon;