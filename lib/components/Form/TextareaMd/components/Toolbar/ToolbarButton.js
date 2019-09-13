'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  flex: 0;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  margin-left: 10px;\n  border: none;\n  background: none;\n  transition: opacity 100ms ease-in-out;\n  padding: 0;\n  opacity: 0.7;\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  &:hover {\n    opacity: 1;\n  }\n\n  ', ';\n'], ['\n  display: inline-block;\n  flex: 0;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  margin-left: 10px;\n  border: none;\n  background: none;\n  transition: opacity 100ms ease-in-out;\n  padding: 0;\n  opacity: 0.7;\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  &:hover {\n    opacity: 1;\n  }\n\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

exports.default = _styledComponents2.default.button(_templateObject, function (_ref) {
  var active = _ref.active;
  return active && 'opacity: 1;';
});
module.exports = exports['default'];