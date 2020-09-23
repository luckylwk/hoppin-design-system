function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  z-index: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../Box';
var Overlay = styled(Box)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.zIndices.overlay - 1;
});
Overlay.propTypes = {
  position: PropTypes.string,
  opacity: PropTypes.string,
  bg: PropTypes.string
};
Overlay.defaultProps = {
  position: 'fixed',
  opacity: '0.97',
  bg: 'whiteout.lightest'
};
Overlay.displayName = 'Overlay';
export default Overlay;