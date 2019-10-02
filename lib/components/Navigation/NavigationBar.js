'use strict';

exports.__esModule = true;
exports.NavRight = exports.NavCenter = exports.NavLeft = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Flex = require('../Flex');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('@styled-system/prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var NavigationBar = (0, _styledComponents2.default)(_Flex.Flex)(_templateObject, _styledSystem.shadow);

NavigationBar.propTypes = _extends({}, _Flex.Flex.propTypes);
NavigationBar.defaultProps = {
  bg: 'whiteout.lightest',
  padding: 'base',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 'nav',
  boxShadow: 'xsmall',
  flexDirection: 'row',
  justifyContent: 'space-between'
};

NavigationBar.displayName = 'NavigationBar';

var NavLeft = (0, _styledComponents2.default)(_Flex.Flex)(_templateObject2);
NavLeft.defaultProps = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center'
};
NavLeft.displayName = 'NavLeft';

var NavCenter = (0, _styledComponents2.default)(_Flex.Flex)(_templateObject2);
NavCenter.defaultProps = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
};
NavCenter.displayName = 'NavLeft';

var NavRight = (0, _styledComponents2.default)(_Flex.Flex)(_templateObject2);
NavRight.defaultProps = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center'
};
NavRight.displayName = 'NavLeft';

exports.NavLeft = NavLeft;
exports.NavCenter = NavCenter;
exports.NavRight = NavRight;
exports.default = NavigationBar;