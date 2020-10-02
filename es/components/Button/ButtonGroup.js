function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { Flex } from '../Flex';
import Button from './Button';
var ButtonGroup = styled(Flex)(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      flexDirection = _ref.flexDirection;

  if (flexDirection === 'row') {
    return Button + ":not(:last-child) {\n        margin-right: " + theme.space.small + "\n      }";
  } else {
    return Button + " + " + Button + " {\n        margin-top: " + theme.space.small + ";\n      }";
  }
});
ButtonGroup.propTypes = {};
ButtonGroup.defaultProps = {
  width: 1,
  // fill available space
  flexDirection: 'row',
  // horizontal row of buttons
  justifyContent: 'flex-start',
  // align left
  flexWrap: 'wrap'
};
ButtonGroup.displayName = 'ButtonGroup';
export default ButtonGroup;