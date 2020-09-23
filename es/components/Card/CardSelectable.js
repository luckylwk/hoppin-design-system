function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border-top: ", " solid\n    ", ";\n  box-shadow: ", ";\n\n  cursor: pointer;\n\n  transition: all 0.5s;\n\n  ", "\n\n  &:hover {\n    box-shadow: ", ";\n    transform: translateY(-1px);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';
var CardSelectable = styled(Card)(_templateObject(), function (_ref) {
  var borderTopWidth = _ref.borderTopWidth;
  return borderTopWidth;
}, function (_ref2) {
  var selected = _ref2.selected,
      theme = _ref2.theme;
  return selected ? theme.colors.neutral.darkest : theme.colors.primary.base;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.shadows[1];
}, function (_ref4) {
  var theme = _ref4.theme,
      selected = _ref4.selected;
  return selected ? "background: " + theme.colors.neutral.darker + "; color: " + theme.colors.whiteout.lighter + ";" : "";
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.shadows[3];
});
CardSelectable.propTypes = {
  selected: PropTypes.bool,
  borderTopWidth: PropTypes.string
};
CardSelectable.defaultProps = {
  selected: false,
  borderTopWidth: '2px'
};
CardSelectable.displayName = 'CardSelectable';
export default CardSelectable;