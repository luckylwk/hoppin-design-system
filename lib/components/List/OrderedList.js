'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-size: ', ';\n  font-family: ', ';\n  line-height: ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  list-style-type: none;\n  counter-reset: list;\n'], ['\n  font-size: ', ';\n  font-family: ', ';\n  line-height: ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  list-style-type: none;\n  counter-reset: list;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('@styled-system/prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var OrderedList = (0, _styledComponents2.default)('ul')(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.fontSizes.body || '1em';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.secondary || 'sans-serif';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.lineHeights.body || '1.4em';
}, _styledSystem.textAlign, _styledSystem.space, _styledSystem.position, _styledSystem.color, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order);

OrderedList.propTypes = _extends({}, _propTypes2.default.space, _propTypes2.default.position, _propTypes2.default.color, _propTypes2.default.textAlign, _propTypes2.default.flex, _propTypes2.default.flexGrow, _propTypes2.default.flexShrink, _propTypes2.default.flexBasis, _propTypes2.default.justifySelf, _propTypes2.default.alignSelf, _propTypes2.default.order);

OrderedList.defaultProps = {
  marginTop: 0,
  marginBottom: 3,
  color: 'inherit', // respond to context, if we're white on dark background or dark on light.
  textAlign: 'inherit',
  type: 'decimal',
  position: 'relative'
};

OrderedList.displayName = 'OrderedList';

exports.default = OrderedList;
module.exports = exports['default'];