'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Box = require('../Box');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('@styled-system/prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flex = (0, _styledComponents2.default)(_Box.Box)(_styledSystem.flexbox);

Flex.propTypes = _extends({}, _Box.Box.propTypes, _propTypes2.default.flexbox);
Flex.defaultProps = {
  display: 'flex'
};

Flex.displayName = 'Flex';

exports.default = Flex;
module.exports = exports['default'];