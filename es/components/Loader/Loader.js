var _templateObject = _taggedTemplateLiteralLoose(['\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  } \n  40% {\n    -webkit-transform: scale(1.0);\n    transform: scale(1.0);\n  }\n'], ['\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  } \n  40% {\n    -webkit-transform: scale(1.0);\n    transform: scale(1.0);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  margin: 0 auto;\n  width: auto;\n\n  text-align: center;\n'], ['\n  display: inline-block;\n  margin: 0 auto;\n  width: auto;\n\n  text-align: center;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n\n  width: ', 'px;\n  height: ', 'px;\n  margin-top: -0.2rem;\n  margin-right: 0.1rem;\n  margin-bottom: 0.1rem;\n  margin-left: 0.1rem;\n\n  background-color: ', ';\n\n  border-radius: 100%;\n\n  -webkit-animation: ', ' 1.4s infinite ease-in-out both;\n  -moz-animation: ', ' 1.4s infinite ease-in-out both;\n  animation: ', ' 1.4s infinite ease-in-out both;\n  animation-delay: ', ';\n'], ['\n  display: inline-block;\n\n  width: ', 'px;\n  height: ', 'px;\n  margin-top: -0.2rem;\n  margin-right: 0.1rem;\n  margin-bottom: 0.1rem;\n  margin-left: 0.1rem;\n\n  background-color: ', ';\n\n  border-radius: 100%;\n\n  -webkit-animation: ', ' 1.4s infinite ease-in-out both;\n  -moz-animation: ', ' 1.4s infinite ease-in-out both;\n  animation: ', ' 1.4s infinite ease-in-out both;\n  animation-delay: ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// ---------------------------

var DotKeyframes = keyframes(_templateObject);

// ---------------------------

var Wrapper = styled.div(_templateObject2);

// ---------------------------

var Dot = styled.div(_templateObject3, function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var theme = _ref3.theme,
      context = _ref3.context;
  return theme.colors[context] !== undefined ? theme.colors[context].light : theme.colors.neutral.light;
}, DotKeyframes, DotKeyframes, DotKeyframes, function (_ref4) {
  var delay = _ref4.delay;
  return delay;
});

// ---------------------------

var Loader = function Loader(_ref5) {
  var size = _ref5.size,
      context = _ref5.context;

  return React.createElement(
    Wrapper,
    null,
    React.createElement(Dot, { delay: '-0.32s', size: size, context: context }),
    React.createElement(Dot, { delay: '-0.16s', size: size, context: context }),
    React.createElement(Dot, { delay: '0.0s', size: size, context: context })
  );
};

Loader.propTypes = process.env.NODE_ENV !== "production" ? {
  context: PropTypes.string,
  size: PropTypes.number
} : {};

Loader.defaultProps = {
  context: 'neutral',
  size: 16
};

Loader.displayName = 'DotLoader';

export default Loader;