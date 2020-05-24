var _templateObject = _taggedTemplateLiteralLoose(['\n  background: ', ';\n\n  border: 0;\n  border-radius: ', ';\n\n  box-shadow: ', ';\n\n  cursor: pointer;\n\n  transition: all ', ';\n\n  ', '\n\n  &:hover {\n    box-shadow: ', ';\n    transform: translateY(-1px);\n  }\n'], ['\n  background: ', ';\n\n  border: 0;\n  border-radius: ', ';\n\n  box-shadow: ', ';\n\n  cursor: pointer;\n\n  transition: all ', ';\n\n  ', '\n\n  &:hover {\n    box-shadow: ', ';\n    transform: translateY(-1px);\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';
import PropTypes from 'prop-types';

import ButtonNew from './ButtonNew';

var ButtonSelect = styled(ButtonNew)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.whiteout.lightest;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.radii.xsmall;
}, function (_ref3) {
  var theme = _ref3.theme,
      elevation = _ref3.elevation;
  return theme.shadows[elevation];
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.motions.base;
}, function (_ref5) {
  var theme = _ref5.theme,
      selected = _ref5.selected;
  return selected ? 'background: ' + theme.colors.neutral.darker + '; color: ' + theme.colors.whiteout.lighter + ';' : '';
}, function (_ref6) {
  var theme = _ref6.theme,
      elevation = _ref6.elevation;
  return theme.shadows[elevation + 2];
});

ButtonSelect.propTypes = {
  selected: PropTypes.bool,
  elevation: PropTypes.number
};

ButtonSelect.defaultProps = {
  selected: false,
  elevation: 1
};

ButtonSelect.displayName = 'ButtonSelect';

export default ButtonSelect;