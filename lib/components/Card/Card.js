'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  border: 0px;\n\n  border-top-width: ', ';\n  border-style: solid;\n  border-top-color: ', ';\n  border-radius: ', ';\n\n  box-shadow: ', ';\n\n  ', '\n'], ['\n  border: 0px;\n\n  border-top-width: ', ';\n  border-style: solid;\n  border-top-color: ', ';\n  border-radius: ', ';\n\n  box-shadow: ', ';\n\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('@styled-system/prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Box = require('../Box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Card = (0, _styledComponents2.default)(_Box.Box)(_templateObject, function (_ref) {
  var theme = _ref.theme,
      borderWidth = _ref.borderWidth;
  return theme.borderWidths[borderWidth] ? theme.borderWidths[borderWidth] : theme.borderWidths['large'];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary.base;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.radii.xsmall;
}, function (_ref4) {
  var theme = _ref4.theme,
      elevation = _ref4.elevation;
  return theme.shadows[elevation];
}, _styledSystem.flexbox);

Card.propTypes = _extends({}, _Box.Box.propTypes, _propTypes2.default.flexbox);

Card.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  padding: ['xsmall', 'small'],
  flexGrow: 1,
  elevation: 3,
  bg: 'white',
  borderWidth: 'large'
};

Card.displayName = 'Card';

exports.default = Card;
module.exports = exports['default'];