var _templateObject = _taggedTemplateLiteralLoose(['\n  /* \n    Determine the sizing. It always fills the \n    width and adjusts the height accordingly \n  */\n  width: 100%;\n\n  ', '\n\n  ', ' \n  background-size: cover;\n  background-position: center;\n\n  ', '\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n  color-adjust: exact;\n'], ['\n  /* \n    Determine the sizing. It always fills the \n    width and adjusts the height accordingly \n  */\n  width: 100%;\n\n  ', '\n\n  ', ' \n  background-size: cover;\n  background-position: center;\n\n  ', '\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n  color-adjust: exact;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { Box } from '../Box';

var Tile = styled(Box)(_templateObject, variant({
  prop: 'ratio',
  variants: {
    '1/1': { paddingTop: '100%' },
    '3/2': { paddingTop: '66%' },
    '4/3': { paddingTop: '75%' }
  }
}), function (_ref) {
  var src = _ref.src;
  return src && src !== '' ? 'background-image: url(' + src + ');' : '';
}, '' /* Print bg image, otherwise there's funny white spaces */);

Tile.propTypes = {
  src: PropTypes.string.isRequired,
  ratio: PropTypes.string,
  borderRadius: PropTypes.string
};

Tile.defaultProps = {
  ratio: '1/1',
  borderRadius: '3px',
  bg: 'neutral.dark'
};

Tile.displayName = 'Tile';

export default Tile;