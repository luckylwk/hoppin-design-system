var _templateObject = _taggedTemplateLiteralLoose(['\n  display: ', ';\n\n  border: 0px;\n  border-bottom: 4px solid;\n  border-bottom-color: ', ';\n'], ['\n  display: ', ';\n\n  border: 0px;\n  border-bottom: 4px solid;\n  border-bottom-color: ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from 'color';

import Text from './Text';

var Emphasize = styled(Text)(_templateObject, function (_ref) {
  var display = _ref.display;
  return display;
}, function (_ref2) {
  var theme = _ref2.theme;
  return Color(theme.colors.primary.base).alpha('0.45').rgb().string();
});

Emphasize.propTypes = {
  display: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string
};

Emphasize.defaultProps = {
  display: 'inline-block',
  fontWeight: 'medium',
  lineHeight: '0.75'
};

Emphasize.displayName = 'Emphasize';

export default Emphasize;