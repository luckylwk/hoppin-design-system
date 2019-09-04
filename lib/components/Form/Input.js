'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  display: block;\n\n  ', '\n  ', '\n\n  background: ', ';\n\n  border: 1px solid transparent;\n  border-color: ', ';\n  border-radius: ', ';\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ', ';\n  }\n\n  &::placeholder {\n    font-family: ', ';\n    font-weight: 300;\n    color: ', ';\n  }\n\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  width: 100%;\n  flex: 1 1 100%;\n'], ['\n  box-sizing: border-box;\n  display: block;\n\n  ', '\n  ', '\n\n  background: ', ';\n\n  border: 1px solid transparent;\n  border-color: ', ';\n  border-radius: ', ';\n\n  &:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border-color: ', ';\n  }\n\n  &::placeholder {\n    font-family: ', ';\n    font-weight: 300;\n    color: ', ';\n  }\n\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  width: 100%;\n  flex: 1 1 100%;\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Input = _styledComponents2.default.input(_templateObject, _styledSystem.typography, _styledSystem.space, function (props) {
  return props.isFocused || !props.isEmpty ? props.theme.colors.whiteout.base : props.theme.colors.whiteout.lighter;
}, function (props) {
  if (props.theme.colors[props.state] !== undefined) {
    return props.theme.colors[props.state].light;
  } else {
    return props.theme.colors.neutral.light;
  }
}, function (_ref) {
  var theme = _ref.theme;
  return theme.radii.small;
}, function (props) {
  switch (props.state) {
    case 'danger':
      return props.theme.colors.danger.base;
    case 'neutral':
    default:
      return props.theme.colors.primary.base;
  }
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.secondary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.neutral.light;
});

Input.propTypes = {
  disabled: _propTypes2.default.bool,
  type: _propTypes2.default.string,
  state: _propTypes2.default.string
};

Input.defaultProps = {
  disabled: false,
  type: 'text',
  state: 'neutral',
  fontSize: 'inherit',
  fontFamily: 'secondary',
  fontWeight: 'normal',
  marginBottom: 'base',
  paddingY: 'small',
  paddingX: 'base',
  color: 'neutral.base'
};

Input.displayName = 'Input';

exports.default = Input;
module.exports = exports['default'];