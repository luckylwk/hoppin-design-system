'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  max-width: ', ';\n  margin-left: auto;\n  margin-right: auto;\n'], ['\n  max-width: ', ';\n  margin-left: auto;\n  margin-right: auto;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Flex = require('../Flex');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Container = (0, _styledComponents2.default)(_Flex.Flex)(_templateObject, function (_ref) {
  var theme = _ref.theme,
      maxWidth = _ref.maxWidth;
  return maxWidth ? maxWidth : theme.containerWidth;
});

Container.defaultProps = {
  display: 'flex'
};

exports.default = Container;
module.exports = exports['default'];