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

var Text = (0, _styledComponents2.default)('span')(_styledSystem.typography, _styledSystem.space, _styledSystem.color
/*
  do we need layout and background props, too?
  or keep the component simple and looking after text only?
*/
);

Text.propTypes = _extends({}, _propTypes2.default.space, _propTypes2.default.color, _propTypes2.default.typography);

Text.defaultProps = {
  fontFamily: 'secondary',
  fontSize: 'inherit',
  color: 'inherit' // respond to context, if we're white on dark background or dark on light.
};

Text.displayName = 'Text';
exports.default = Text;
module.exports = exports['default'];