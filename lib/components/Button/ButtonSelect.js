'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  background: ', ';\n\n  font-size: ', ';\n  font-weight: ', ';\n\n  border: 0;\n  border-radius: ', ';\n\n  box-shadow: ', ';\n\n  cursor: pointer;\n\n  transition: all ', ';\n\n  ', '\n\n  &:hover {\n    box-shadow: ', ';\n    transform: translateY(-1px);\n  }\n'], ['\n  background: ', ';\n\n  font-size: ', ';\n  font-weight: ', ';\n\n  border: 0;\n  border-radius: ', ';\n\n  box-shadow: ', ';\n\n  cursor: pointer;\n\n  transition: all ', ';\n\n  ', '\n\n  &:hover {\n    box-shadow: ', ';\n    transform: translateY(-1px);\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ButtonNew = require('./ButtonNew');

var _ButtonNew2 = _interopRequireDefault(_ButtonNew);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ButtonSelect = (0, _styledComponents2.default)(_ButtonNew2.default)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.whiteout.lightest;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.body;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontWeights.normal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.radii.xsmall;
}, function (_ref5) {
  var theme = _ref5.theme,
      elevation = _ref5.elevation;
  return theme.shadows[elevation];
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.motions.base;
}, function (_ref7) {
  var theme = _ref7.theme,
      selected = _ref7.selected;
  return selected ? 'background: ' + theme.colors.neutral.darker + '; color: ' + theme.colors.whiteout.lighter + ';' : '';
}, function (_ref8) {
  var theme = _ref8.theme,
      elevation = _ref8.elevation;
  return theme.shadows[elevation + 2];
});

ButtonSelect.propTypes = {
  selected: _propTypes2.default.bool,
  elevation: _propTypes2.default.number
};

ButtonSelect.defaultProps = {
  selected: false,
  elevation: 1
};

ButtonSelect.displayName = 'ButtonSelect';

exports.default = ButtonSelect;
module.exports = exports['default'];