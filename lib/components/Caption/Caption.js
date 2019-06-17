'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: block;\n  ', '\n  ', '\n  font-family: ', ';\n  font-size: ', ';\n  text-transform: uppercase;\n  letter-spacing: 1px;\n\n  & + ', ' {\n    margin-top: 0;\n  }\n'], ['\n  display: block;\n  ', '\n  ', '\n  font-family: ', ';\n  font-size: ', ';\n  text-transform: uppercase;\n  letter-spacing: 1px;\n\n  & + ', ' {\n    margin-top: 0;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('@styled-system/prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Heading = require('components/Heading');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Caption = (0, _styledComponents2.default)('span')(_templateObject, _styledSystem.space, _styledSystem.color, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.label;
}, _Heading.Heading);

Caption.propTypes = _extends({}, _propTypes2.default.space, _propTypes2.default.color);

Caption.defaultProps = {
  color: 'neutrals.light',
  marginTop: 'small',
  marginBottom: 0
};
exports.default = Caption;
module.exports = exports['default'];