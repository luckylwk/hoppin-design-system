function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  position: relative;\n\n  overflow: hidden;\n\n  width: ", ";\n\n  ", "\n\n  background-color: #eee;\n\n  &::after {\n    display: block;\n    content: '';\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    transform: translateX(-100%);\n\n    background: linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.35),\n      transparent\n    );\n\n    animation: ", " ", " infinite;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  100% {\n    transform: translateX(100%);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { variant } from 'styled-system';
import { Box } from '../Box'; // ---------------------------

var loadingKeyframes = keyframes(_templateObject()); // ---------------------------

var Skeleton = styled(Box)(_templateObject2(), function (_ref) {
  var width = _ref.width;
  return width;
}, variant({
  prop: 'ratio',
  variants: {
    '4/5': {
      paddingTop: '125%'
    },
    '1/1': {
      paddingTop: '100%'
    },
    '3/2': {
      paddingTop: '66%'
    },
    '4/3': {
      paddingTop: '75%'
    },
    text: {
      paddingTop: '20px'
    },
    title: {
      paddingTop: '26px'
    }
  }
}), loadingKeyframes, function (_ref2) {
  var delay = _ref2.delay;
  return delay;
});
Skeleton.propTypes = {
  ratio: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
  delay: PropTypes.string
};
Skeleton.defaultProps = {
  ratio: '3/2',
  borderRadius: '3px',
  width: '100%',
  delay: '1.5s'
};
Skeleton.displayName = 'Skeleton';
export default Skeleton;