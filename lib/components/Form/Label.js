'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  vertical-align: middle;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  width: 100%;\n  flex: 1 1 100%;\n'], ['\n  display: inline-block;\n  vertical-align: middle;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  width: 100%;\n  flex: 1 1 100%;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('@styled-system/prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Label = (0, _styledComponents2.default)('label')(_templateObject, _styledSystem.typography, _styledSystem.space, _styledSystem.color, _styledSystem.position);

Label.propTypes = _extends({}, _propTypes2.default.space, _propTypes2.default.color, _propTypes2.default.typography);
Label.defaultProps = {
  lineHeight: 0,
  fontFamily: 'secondary',
  fontSize: 'label',
  color: 'inherit', // respond to context, if we're white on dark background or dark on light.
  marginRight: 'large',
  position: 'relative'
};

Label.displayName = 'Label';
exports.default = Label;
module.exports = exports['default'];