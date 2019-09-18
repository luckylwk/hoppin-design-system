var _templateObject = _taggedTemplateLiteralLoose(['\n  0%, 100% {\n    transform: scale(0)\n  } 50% {\n    transform: scale(1.0)\n  }\n'], ['\n  0%, 100% {\n    transform: scale(0)\n  } 50% {\n    transform: scale(1.0)\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n\n  display: inline-block;\n  position: relative;\n\n  width: auto;\n  min-height: ', 'px;\n\n  margin: 0 auto;\n\n  text-align: center;\n'], ['\n  box-sizing: border-box;\n\n  display: inline-block;\n  position: relative;\n\n  width: auto;\n  min-height: ', 'px;\n\n  margin: 0 auto;\n\n  text-align: center;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  position: absolute;\n\n  height: ', 'px;\n  width: ', 'px;\n  top: 0;\n  left: -', 'px;\n\n  background-color: ', ';\n  opacity: 0.6;\n\n  border-radius: 100%;\n\n  animation-fill-mode: both;\n  -webkit-animation: ', ' 2.1s infinite ease-in-out;\n  -moz-animation: ', ' 2.1s infinite ease-in-out;\n  animation: ', ' 2.1s infinite ease-in-out;\n  animation-delay: ', ';\n'], ['\n  display: inline-block;\n  position: absolute;\n\n  height: ', 'px;\n  width: ', 'px;\n  top: 0;\n  left: -', 'px;\n\n  background-color: ', ';\n  opacity: 0.6;\n\n  border-radius: 100%;\n\n  animation-fill-mode: both;\n  -webkit-animation: ', ' 2.1s infinite ease-in-out;\n  -moz-animation: ', ' 2.1s infinite ease-in-out;\n  animation: ', ' 2.1s infinite ease-in-out;\n  animation-delay: ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

var BounceKeyFrame = keyframes(_templateObject);

var BounceWrapper = styled.div(_templateObject2, function (props) {
  return props.size;
});

var Bounce = styled.div(_templateObject3, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return parseInt(0.5 * props.size);
}, function (_ref) {
  var theme = _ref.theme,
      context = _ref.context;
  return theme.colors[context] !== undefined ? theme.colors[context].light : theme.colors.neutral.light;
}, BounceKeyFrame, BounceKeyFrame, BounceKeyFrame, function (props) {
  return props.delay;
});

var BounceLoader = function BounceLoader(_ref2) {
  var type = _ref2.type,
      size = _ref2.size;

  return React.createElement(
    BounceWrapper,
    { size: size },
    React.createElement(Bounce, { delay: '0s', type: type, size: size }),
    React.createElement(Bounce, { delay: '-1s', type: type, size: size })
  );
};

BounceLoader.propTypes = process.env.NODE_ENV !== "production" ? {
  context: PropTypes.string,
  size: PropTypes.number
} : {};

BounceLoader.defaultProps = {
  context: 'neutral',
  size: 60
};

BounceLoader.displayName = 'BounceLoader';

export default BounceLoader;