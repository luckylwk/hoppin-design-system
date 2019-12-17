var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

import { Flex } from '../Flex';
import Button from './Button';

/**
 * ButtonGroup component. Helps arrange groups of buttons
 */

var ButtonGroup = styled(Flex)(_templateObject, function (_ref) {
  var theme = _ref.theme,
      flexDirection = _ref.flexDirection;

  if (flexDirection === 'row') {
    return Button + ' + ' + Button + ' {\n        margin-left: ' + theme.space.small + ';\n      }';
  } else {
    return Button + ' + ' + Button + ' {\n        margin-top: ' + theme.space.small + ';\n      }';
  }
});

ButtonGroup.propTypes = {};

ButtonGroup.defaultProps = {
  width: 1, // fill available space
  flexDirection: 'row', // horizontal row of buttons
  justifyContent: 'flex-start' // align left
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;