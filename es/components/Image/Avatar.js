var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  height: ', ';\n'], ['\n  width: ', ';\n  height: ', ';\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box } from '../Box';
import Tile from './Tile';

var SIZES = {
  small: '24px',
  icon: '32px',
  base: '96px'
};

var Wrapper = styled(Box)(_templateObject, function (_ref) {
  var size = _ref.size;
  return SIZES[size] ? SIZES[size] : SIZES['base'];
}, function (_ref2) {
  var size = _ref2.size;
  return SIZES[size] ? SIZES[size] : SIZES['base'];
});

var Avatar = function Avatar(_ref3) {
  var src = _ref3.src,
      size = _ref3.size,
      squared = _ref3.squared,
      rest = _objectWithoutProperties(_ref3, ['src', 'size', 'squared']);

  return React.createElement(
    Wrapper,
    _extends({ size: size }, rest),
    React.createElement(Tile, { src: src, ratio: '1/1', borderRadius: squared ? '12px' : '50%' })
  );
};

Avatar.propTypes = process.env.NODE_ENV !== "production" ? {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  squared: PropTypes.bool,
  display: PropTypes.string
} : {};

Avatar.defaultProps = {
  size: 'default',
  squared: false,
  display: 'inline-block'
};

Avatar.displayName = 'Avatar';

export default Avatar;