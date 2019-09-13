'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: 100%;\n  width: 1px;\n  background: ', ';\n  opacity: 0.2;\n  display: inline-block;\n  margin-left: 10px;\n'], ['\n  height: 100%;\n  width: 1px;\n  background: ', ';\n  opacity: 0.2;\n  display: inline-block;\n  margin-left: 10px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Separator = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.props.theme.colors.whiteout.lightest;
});

exports.default = Separator;
module.exports = exports['default'];