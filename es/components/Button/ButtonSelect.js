function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  background: ", ";\n\n  font-size: ", ";\n  font-weight: ", ";\n\n  border: 0;\n  border-radius: ", ";\n\n  box-shadow: ", ";\n\n  cursor: pointer;\n\n  transition: all ", ";\n\n  ", "\n\n  &:hover {\n    box-shadow: ", ";\n    transform: translateY(-1px);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
var ButtonSelect = styled(Button)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.whiteout.lightest;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.body;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontWeights.normal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.radii.xsmall;
}, function (_ref5) {
  var theme = _ref5.theme,
      elevation = _ref5.elevation;
  return theme.shadows[elevation];
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.motions.base;
}, function (_ref7) {
  var theme = _ref7.theme,
      selected = _ref7.selected;
  return selected ? "background: " + theme.colors.neutral.darker + "; color: " + theme.colors.whiteout.lighter + ";" : "";
}, function (_ref8) {
  var theme = _ref8.theme,
      elevation = _ref8.elevation;
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