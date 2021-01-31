'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-size: ', ';\n  font-family: ', ';\n  line-height: ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  position: relative;\n  padding-left: ', ';\n\n  ', ' & svg {\n    color: ', ';\n\n    position: absolute;\n    top: 0.2em;\n    left: -', ';\n    width: 1em;\n    height: 1em;\n  }\n\n  ', ' & svg {\n    display: none;\n  }\n\n  ', ' &:before {\n    counter-increment: list;\n    content: counter(list);\n    position: absolute;\n    top: 0;\n    left: -', ';\n    color: ', ';\n    font-weight: ', ';\n  }\n'], ['\n  font-size: ', ';\n  font-family: ', ';\n  line-height: ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  position: relative;\n  padding-left: ', ';\n\n  ', ' & svg {\n    color: ', ';\n\n    position: absolute;\n    top: 0.2em;\n    left: -', ';\n    width: 1em;\n    height: 1em;\n  }\n\n  ', ' & svg {\n    display: none;\n  }\n\n  ', ' &:before {\n    counter-increment: list;\n    content: counter(list);\n    position: absolute;\n    top: 0;\n    left: -', ';\n    color: ', ';\n    font-weight: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('@styled-system/prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require('prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _OrderedList = require('./OrderedList');

var _OrderedList2 = _interopRequireDefault(_OrderedList);

var _UnorderedList = require('./UnorderedList');

var _UnorderedList2 = _interopRequireDefault(_UnorderedList);

var _fi = require('react-icons/fi');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ListItemWrapper = (0, _styledComponents2.default)('li')(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.fontSizes.body || '1em';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.secondary || 'sans-serif';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.lineHeights.body || '1.4em';
}, _styledSystem.textAlign, _styledSystem.space, _styledSystem.color, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order, function (_ref4) {
  var theme = _ref4.theme;
  return theme.space.base;
}, _UnorderedList2.default, function (_ref5) {
  var variant = _ref5.variant,
      theme = _ref5.theme;
  return variant === 'unchecked' ? theme.colors.neutral.light : theme.colors.primary.base;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.space.base;
}, _OrderedList2.default, _OrderedList2.default, function (_ref7) {
  var theme = _ref7.theme;
  return theme.space.base;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.primary.base;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.fontWeights.bold;
});

ListItemWrapper.propTypes = _extends({}, _propTypes2.default.space, _propTypes2.default.position, _propTypes2.default.color, _propTypes2.default.textAlign, _propTypes2.default.flex, _propTypes2.default.flexGrow, _propTypes2.default.flexShrink, _propTypes2.default.flexBasis, _propTypes2.default.justifySelf, _propTypes2.default.alignSelf, _propTypes2.default.order, {
  variant: _propTypes4.default.oneOf(['bullet', 'checked', 'unchecked'])
});

ListItemWrapper.defaultProps = {
  marginTop: 0,
  marginBottom: 3,
  color: 'inherit', // respond to context, if we're white on dark background or dark on light.
  textAlign: 'inherit',
  variant: 'bullet'
};

ListItemWrapper.displayName = 'ListItemWrapper';

var ListItem = function ListItem(_ref10) {
  var variant = _ref10.variant,
      children = _ref10.children,
      rest = _objectWithoutProperties(_ref10, ['variant', 'children']);

  var Bullet = variant === 'unchecked' ? _fi.FiCircle : variant === 'checked' ? _fi.FiCheckCircle : _fi.FiChevronRight;
  return _react2.default.createElement(
    ListItemWrapper,
    _extends({ variant: variant }, rest),
    _react2.default.createElement(Bullet, null),
    ' ',
    children
  );
};
ListItem.displayName = 'ListItem';

exports.default = ListItem;
module.exports = exports['default'];