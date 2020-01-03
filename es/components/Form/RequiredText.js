var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n\n  margin-left: 6px;\n\n  font-size: 12px;\n  line-height: 10px;\n  font-weight: 600;\n\n  color: ', ';\n'], ['\n  display: inline-block;\n\n  margin-left: 6px;\n\n  font-size: 12px;\n  line-height: 10px;\n  font-weight: 600;\n\n  color: ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// import PropTypes from 'prop-types';
import styled from 'styled-components';

export var RequiredText = styled.span(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary.base;
});

RequiredText.propTypes = {
  // color: PropTypes.string,
};

RequiredText.defaultProps = {
  // color: 'primary.base',
};

RequiredText.displayName = 'RequiredText';

export default RequiredText;