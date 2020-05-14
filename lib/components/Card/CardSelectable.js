'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  border-top: ', ' solid\n    ', ';\n  box-shadow: ', ';\n\n  cursor: pointer;\n\n  transition: all 0.5s;\n\n  ', '\n\n  &:hover {\n    box-shadow: ', ';\n    transform: translateY(-1px);\n  }\n'], ['\n  border-top: ', ' solid\n    ', ';\n  box-shadow: ', ';\n\n  cursor: pointer;\n\n  transition: all 0.5s;\n\n  ', '\n\n  &:hover {\n    box-shadow: ', ';\n    transform: translateY(-1px);\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CardSelectable = (0, _styledComponents2.default)(_Card2.default)(_templateObject, function (_ref) {
  var borderTopWidth = _ref.borderTopWidth;
  return borderTopWidth;
}, function (_ref2) {
  var selected = _ref2.selected,
      theme = _ref2.theme;
  return selected ? theme.colors.neutral.darkest : theme.colors.primary.base;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.shadows[1];
}, function (_ref4) {
  var theme = _ref4.theme,
      selected = _ref4.selected;
  return selected ? 'background: ' + theme.colors.neutral.darker + '; color: ' + theme.colors.whiteout.lighter + ';' : '';
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.shadows[3];
});

CardSelectable.propTypes = {
  selected: _propTypes2.default.bool,
  borderTopWidth: _propTypes2.default.string
};

CardSelectable.defaultProps = {
  selected: false,
  borderTopWidth: '2px'
};

CardSelectable.displayName = 'CardSelectable';

exports.default = CardSelectable;
module.exports = exports['default'];