'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  max-width: ', ';\n  margin-left: auto;\n  margin-right: auto;\n'], ['\n  width: 100%;\n  max-width: ', ';\n  margin-left: auto;\n  margin-right: auto;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Flex = require('../Flex');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Container = (0, _styledComponents2.default)(_Flex.Flex)(_templateObject, function (_ref) {
  var theme = _ref.theme,
      width = _ref.width,
      maxWidth = _ref.maxWidth;
  return maxWidth ? maxWidth : theme.containerWidths[width];
});

Container.propTypes = _extends({}, _Flex.Flex.propTypes);

Container.defaultProps = {
  width: 'base',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: ['large', 'large', 'xlarge']
};

Container.displayName = 'Container';

exports.default = Container;
module.exports = exports['default'];