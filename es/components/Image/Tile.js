var _templateObject = _taggedTemplateLiteralLoose(['\n  /* \n    Determine the sizing. It always fills the \n    width and adjusts the height accordingly \n  */\n  width: 100%;\n  padding-top: ', ';\n\n  background-color: ', ';\n  ', ' background-size: cover;\n  background-position: center;\n'], ['\n  /* \n    Determine the sizing. It always fills the \n    width and adjusts the height accordingly \n  */\n  width: 100%;\n  padding-top: ', ';\n\n  background-color: ', ';\n  ', ' background-size: cover;\n  background-position: center;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box } from '../Box';

var ASPECT_RATIOS = {
  '3/2': { paddingTop: '66%' },
  '4/3': { paddingTop: '75%' },
  '1/1': { paddingTop: '100%' }
};

var Tile = styled(Box)(_templateObject, function (_ref) {
  var ratio = _ref.ratio;
  return ASPECT_RATIOS[ratio].paddingTop;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.neutral.dark;
}, function (_ref3) {
  var src = _ref3.src;
  return src && src !== '' ? 'background-image: url(' + src + ');' : '';
});

Tile.propTypes = {
  src: PropTypes.string.isRequired,
  ratio: PropTypes.string,
  borderRadius: PropTypes.string
};

Tile.defaultProps = {
  ratio: '1/1',
  borderRadius: '3px'
};

Tile.displayName = 'Tile';

export default Tile;