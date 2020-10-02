function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { Box } from '../Box';
import Tile from './Tile';
var Wrapper = styled(Box)(_templateObject(), variant({
  prop: 'size',
  variants: {
    xsmall: {
      width: '16px',
      height: '16px'
    },
    small: {
      width: '24px',
      height: '24px'
    },
    icon: {
      width: '32px',
      height: '32px'
    },
    base: {
      width: '96px',
      height: '96px'
    },
    large: {
      width: '148px',
      height: '148px'
    },
    xlarge: {
      width: '196px',
      height: '196px'
    }
  }
}));

var Avatar = function Avatar(_ref) {
  var src = _ref.src,
      size = _ref.size,
      squared = _ref.squared,
      rest = _objectWithoutPropertiesLoose(_ref, ["src", "size", "squared"]);

  return /*#__PURE__*/React.createElement(Wrapper, _extends({
    size: size
  }, rest), /*#__PURE__*/React.createElement(Tile, {
    src: src,
    ratio: "1/1",
    borderRadius: squared ? '12px' : '50%'
  }));
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