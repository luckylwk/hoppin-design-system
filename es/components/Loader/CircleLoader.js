var _templateObject = _taggedTemplateLiteralLoose(['\n  0% {transform: rotate(0deg) scale(1)}\n  50% {transform: rotate(180deg) scale(1)}\n  100% {transform: rotate(360deg) scale(1)}\n'], ['\n  0% {transform: rotate(0deg) scale(1)}\n  50% {transform: rotate(180deg) scale(1)}\n  100% {transform: rotate(360deg) scale(1)}\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  background: transparent !important;\n\n  width: ', 'px;\n  height: ', 'px;\n\n  border-radius: 100%;\n  border: 2px solid;\n  border-color: ', ';\n  border-bottom-color: transparent;\n\n  display: inline-block;\n  animation: ', ' 0.75s 0s infinite linear;\n  animation-fill-mode: both;\n'], ['\n  background: transparent !important;\n\n  width: ', 'px;\n  height: ', 'px;\n\n  border-radius: 100%;\n  border: 2px solid;\n  border-color: ', ';\n  border-bottom-color: transparent;\n\n  display: inline-block;\n  animation: ', ' 0.75s 0s infinite linear;\n  animation-fill-mode: both;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

var CircleKeyFrames = keyframes(_templateObject);

var Circle = styled.div(_templateObject2, function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var theme = _ref3.theme,
      context = _ref3.context;
  return theme.colors[context] !== undefined ? theme.colors[context].light : theme.colors.neutral.light;
}, CircleKeyFrames);

var CircleLoader = function CircleLoader(_ref4) {
  var size = _ref4.size,
      context = _ref4.context;

  return React.createElement(Circle, { size: size, context: context });
};

CircleLoader.propTypes = process.env.NODE_ENV !== "production" ? {
  context: PropTypes.string,
  size: PropTypes.number
} : {};

CircleLoader.defaultProps = {
  context: 'neutral',
  size: 60
};

CircleLoader.displayName = 'CircleLoader';

export default CircleLoader;