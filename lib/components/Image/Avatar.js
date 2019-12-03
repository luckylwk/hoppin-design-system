'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  height: ', ';\n'], ['\n  width: ', ';\n  height: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../Box');

var _Tile = require('./Tile');

var _Tile2 = _interopRequireDefault(_Tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SIZES = {
  small: '24px',
  icon: '32px',
  base: '96px'
};

var Wrapper = (0, _styledComponents2.default)(_Box.Box)(_templateObject, function (_ref) {
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

  return _react2.default.createElement(
    Wrapper,
    _extends({ size: size }, rest),
    _react2.default.createElement(_Tile2.default, { src: src, ratio: '1/1', borderRadius: squared ? '12px' : '50%' })
  );
};

Avatar.propTypes = process.env.NODE_ENV !== "production" ? {
  src: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.string,
  squared: _propTypes2.default.bool,
  display: _propTypes2.default.string
} : {};

Avatar.defaultProps = {
  size: 'default',
  squared: false,
  display: 'inline-block'
};

Avatar.displayName = 'Avatar';

exports.default = Avatar;
module.exports = exports['default'];