var _templateObject = _taggedTemplateLiteralLoose(['\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  z-index: ', ';\n\n  background-color: ', ';\n'], ['\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  z-index: ', ';\n\n  background-color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  height: 100vh;\n  width: 100vw;\n\n  transform: translate3d(-100vw, 0, 0);\n  opacity: 0;\n  transition: opacity 0.5s;\n\n  &.isExpanded {\n    transform: translate3d(0vw, 0, 0);\n    opacity: 1;\n  }\n'], ['\n  height: 100vh;\n  width: 100vw;\n\n  transform: translate3d(-100vw, 0, 0);\n  opacity: 0;\n  transition: opacity 0.5s;\n\n  &.isExpanded {\n    transform: translate3d(0vw, 0, 0);\n    opacity: 1;\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Box } from '../Box';

import Color from 'color';

// ---------------------------

var Overlay = styled(Box)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.zIndices.overlay - 1;
}, function (_ref2) {
  var theme = _ref2.theme;
  return Color(theme.colors.whiteout.lightest).alpha(0.9).string();
});

Overlay.propTypes = {
  position: PropTypes.string,
  opacity: PropTypes.string
};

Overlay.defaultProps = {
  position: 'fixed',
  opacity: '0.97'
};

Overlay.displayName = 'Overlay';

// ---------------------------

var NavOverlay = styled(Overlay)(_templateObject2);

NavOverlay.displayName = 'NavOverlay';

// ---------------------------

export default Overlay;

export { NavOverlay };