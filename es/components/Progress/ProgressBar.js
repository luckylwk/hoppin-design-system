var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: ', ';\n  ', ';\n  top: 0;\n  left: 0;\n  right: 0;\n  height: ', ';\n'], ['\n  position: ', ';\n  ', ';\n  top: 0;\n  left: 0;\n  right: 0;\n  height: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: ', '%;\n  ', ';\n\n  transition: all 400ms;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: ', '%;\n  ', ';\n\n  transition: all 400ms;\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { default as systemPropTypes } from '@styled-system/prop-types';
import propTypes from 'prop-types';

import { Box } from '../Box';

var ProgressBarWrapper = styled(Box)(_templateObject, function (_ref) {
  var alignTo = _ref.alignTo;
  return alignTo === 'page' ? 'fixed' : 'absolute';
}, function (_ref2) {
  var alignTo = _ref2.alignTo,
      theme = _ref2.theme;
  return alignTo === 'page' ? 'z-index: ' + theme.zIndexes.overlay : null;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.xsmall;
});

var ProgressBarSlider = styled(Box)(_templateObject2, function (_ref4) {
  var percent = _ref4.percent;
  return percent;
}, color);

var ProgressBar = function ProgressBar(_ref5) {
  var theme = _ref5.theme,
      bg = _ref5.bg,
      percent = _ref5.percent,
      rest = _objectWithoutProperties(_ref5, ['theme', 'bg', 'percent']);

  return React.createElement(
    ProgressBarWrapper,
    _extends({ theme: theme }, rest),
    React.createElement(ProgressBarSlider, { theme: theme, bg: bg, percent: percent })
  );
};

ProgressBar.defaultProps = {
  bg: 'primary.base',
  alignTo: 'page',
  percent: 0
};

ProgressBar.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, systemPropTypes.color, {
  /**
  `page` (fixed to the top of the page) or
  `component` (aligned with the closest parent with a set position attribute).
  */
  alignTo: propTypes.oneOf(['page', 'component']),
  /** 0-100 */
  percent: propTypes.number
}) : {};

export default ProgressBar;