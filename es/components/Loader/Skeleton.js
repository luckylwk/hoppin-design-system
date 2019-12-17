var _templateObject = _taggedTemplateLiteralLoose(['\n  100% {\n    transform: translateX(100%);\n  }\n'], ['\n  100% {\n    transform: translateX(100%);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  position: relative;\n\n  overflow: hidden;\n\n  width: ', ';\n\n  ', '\n\n  background-color: #eee;\n\n  &::after {\n    display: block;\n    content: \'\';\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    transform: translateX(-100%);\n\n    background: linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.35),\n      transparent\n    );\n\n    animation: ', ' 1.5s infinite;\n  }\n'], ['\n  box-sizing: border-box;\n  position: relative;\n\n  overflow: hidden;\n\n  width: ', ';\n\n  ', '\n\n  background-color: #eee;\n\n  &::after {\n    display: block;\n    content: \'\';\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    transform: translateX(-100%);\n\n    background: linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.35),\n      transparent\n    );\n\n    animation: ', ' 1.5s infinite;\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { variant } from 'styled-system';

import { Box } from '../Box';

/**
 * The card just renders the overall card. For the
 * actual usage it will be wrapped in a box allow for
 * a router link and a favorite icon.
 */

var loading = keyframes(_templateObject);

var LoadingTile = styled(Box)(_templateObject2, function (_ref) {
  var width = _ref.width;
  return width;
}, variant({
  prop: 'ratio',
  variants: {
    '4/5': { paddingTop: '125%' },
    '1/1': { paddingTop: '100%' },
    '3/2': { paddingTop: '66%' },
    '4/3': { paddingTop: '75%' },
    text: { paddingTop: '20px' },
    title: { paddingTop: '26px' }
  }
}), loading);

LoadingTile.propTypes = {
  ratio: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string
};

LoadingTile.defaultProps = {
  ratio: '3/2',
  borderRadius: '3px',
  width: '100%'
};

LoadingTile.displayName = 'LoadingTile';

export default LoadingTile;