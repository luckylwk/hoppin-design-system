var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { Box } from '../Box';
import Tile from './Tile';

var Wrapper = styled(Box)(_templateObject, variant({
  prop: 'size',
  variants: {
    xsmall: { width: '12px', height: '12px' },
    smaller: { width: '16px', height: '16px' },
    small: { width: '24px', height: '24px' },
    icon: { width: '32px', height: '32px' },
    base: { width: '96px', height: '96px' }
  }
}));

var Avatar = function Avatar(_ref) {
  var src = _ref.src,
      size = _ref.size,
      squared = _ref.squared,
      rest = _objectWithoutProperties(_ref, ['src', 'size', 'squared']);

  return React.createElement(
    Wrapper,
    _extends({ size: size }, rest),
    React.createElement(Tile, { src: src, ratio: '1/1', borderRadius: squared ? '12px' : '50%' })
  );
};

Avatar.propTypes = process.env.NODE_ENV !== "production" ? {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  squared: PropTypes.bool
} : {};

Avatar.defaultProps = {
  size: 'base',
  squared: false,
  display: 'inline-block'
};

Avatar.displayName = 'Avatar';

export default Avatar;