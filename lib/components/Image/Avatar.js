'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Box = require('../Box');

var _Tile = require('./Tile');

var _Tile2 = _interopRequireDefault(_Tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Wrapper = (0, _styledComponents2.default)(_Box.Box)(_templateObject, (0, _styledSystem.variant)({
  prop: 'size',
  variants: {
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

  return _react2.default.createElement(
    Wrapper,
    _extends({ size: size }, rest),
    _react2.default.createElement(_Tile2.default, { src: src, ratio: '1/1', borderRadius: squared ? '12px' : '50%' })
  );
};

Avatar.propTypes = process.env.NODE_ENV !== "production" ? {
  src: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.string,
  squared: _propTypes2.default.bool
} : {};

Avatar.defaultProps = {
  size: 'base',
  squared: false,
  display: 'inline-block'
};

Avatar.displayName = 'Avatar';

exports.default = Avatar;
module.exports = exports['default'];