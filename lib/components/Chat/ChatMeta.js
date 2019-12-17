'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  align-self: center;\n  text-align: center;\n  ', '\n'], ['\n  align-self: center;\n  text-align: center;\n  ', '\n']);

var _Box = require('../Box');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ChatMeta = (0, _styledComponents2.default)(_Box.Box)(_templateObject, _styledSystem.typography);

ChatMeta.propTypes = _extends({}, _Box.Box.propTypes);

ChatMeta.defaultProps = {
  padding: ['xsmall', 'small'],
  marginY: ['xsmall', 'small'],
  flexGrow: 0,
  color: 'neutral.lighter',
  fontFamily: 'secondary',
  fontSize: 'label'
};

ChatMeta.displayName = 'ChatMeta';

exports.default = ChatMeta;
module.exports = exports['default'];