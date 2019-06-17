'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  ', '\n  ', '\n  font-family: ', ';\n  font-size: ', ';\n  text-transform: uppercase;\n  letter-spacing: 1px;\n\n  &::before {\n    content: \'\';\n    background-color: ', ';\n    width: 4px;\n    height: 4px;\n    border-radius: 2px;\n    vertical-align: middle;\n    -webkit-transform: translateY(-.1rem);\n    transform: translateY(-.1rem);\n    display: inline-block;\n    margin: 0 .5rem;\n  }\n\n  &:first-of-type::before {\n    display: none;\n  }\n\n  & + ', ' {\n    margin-top: 0;\n  }\n'], ['\n  display: inline-block;\n  ', '\n  ', '\n  font-family: ', ';\n  font-size: ', ';\n  text-transform: uppercase;\n  letter-spacing: 1px;\n\n  &::before {\n    content: \'\';\n    background-color: ', ';\n    width: 4px;\n    height: 4px;\n    border-radius: 2px;\n    vertical-align: middle;\n    -webkit-transform: translateY(-.1rem);\n    transform: translateY(-.1rem);\n    display: inline-block;\n    margin: 0 .5rem;\n  }\n\n  &:first-of-type::before {\n    display: none;\n  }\n\n  & + ', ' {\n    margin-top: 0;\n  }\n']);

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

var Tag = (0, _styledComponents2.default)('span')(_templateObject, _styledSystem.space, _styledSystem.color, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.label;
}, function (props) {
  return (0, _styledSystem.get)(props, 'theme.colors.' + props.color, '#ddd');
}, _Heading.Heading);

Tag.propTypes = _extends({}, _propTypes2.default.space, _propTypes2.default.color);

Tag.defaultProps = {
  color: 'neutrals.light',
  marginTop: 'small',
  marginBottom: 0
};
exports.default = Tag;
module.exports = exports['default'];