'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n\n  background-image: url(', ');\n  background-size: cover;\n  background-position: center;\n\n  border-radius: ', ';\n\n  width: ', ';\n  height: ', ';\n'], ['\n  ', '\n\n  background-image: url(', ');\n  background-size: cover;\n  background-position: center;\n\n  border-radius: ', ';\n\n  width: ', ';\n  height: ', ';\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes3 = require('@styled-system/prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Box = require('../Box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var determineSize = function determineSize(_ref) {
  var size = _ref.size;

  switch (size) {
    case 'small':
      return '24px';
    case 'icon':
      return '32px';
    case 'base':
    default:
      return '96px';
  }
};

var Avatar = (0, _styledComponents2.default)(_Box.Box)(_templateObject, _styledSystem.layout, function (_ref2) {
  var src = _ref2.src;
  return src;
}, function (_ref3) {
  var squared = _ref3.squared;

  switch (squared) {
    case true:
      return '12px';
    case false:
    default:
      return '50%';
  }
}, determineSize, determineSize);

Avatar.propTypes = _extends({}, _propTypes4.default.layout, {
  size: _propTypes2.default.string,
  squared: _propTypes2.default.bool
});

Avatar.defaultProps = {
  display: 'inline-block',
  size: 'default',
  squared: false
};

Avatar.displayName = 'Avatar';

exports.default = Avatar;
module.exports = exports['default'];