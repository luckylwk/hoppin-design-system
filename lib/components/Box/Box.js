'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('@styled-system/prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = (0, _styledComponents2.default)('div')({
  boxSizing: 'border-box',
  minWidth: 0
}, _styledSystem.space, _styledSystem.layout, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flex, _styledSystem.color, _styledSystem.border, _styledSystem.textAlign);

Box.propTypes = _extends({}, _propTypes2.default.space, _propTypes2.default.layout, _propTypes2.default.flexGrow, _propTypes2.default.flexShrink, _propTypes2.default.flex, _propTypes2.default.color, _propTypes2.default.border, _propTypes2.default.textAlign);

Box.defaultProps = {
  display: 'block',
  flexGrow: 1
};

Box.displayName = 'Box';

exports.default = Box;
module.exports = exports['default'];