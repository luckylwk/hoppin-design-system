'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  align-self: center;\n  text-align: center;\n  font-size: ', ';\n'], ['\n  align-self: center;\n  text-align: center;\n  font-size: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('../Box');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ChatMeta = (0, _styledComponents2.default)(_Box.Box)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.fontSizes.label;
});

ChatMeta.propTypes = _extends({}, _Box.Box.propTypes);

ChatMeta.defaultProps = {
  padding: ['xsmall', 'small'],
  marginY: ['xsmall', 'small'],
  flexGrow: 0,
  color: 'neutral.lighter'
};

ChatMeta.displayName = 'ChatMeta';

exports.default = ChatMeta;
module.exports = exports['default'];