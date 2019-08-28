'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-family: ', ';\n  font-size: 1em;\n  cursor: pointer;\n  text-decoration: none;\n  padding: 0;\n\n  /* styled-system props */\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  font-family: ', ';\n  font-size: 1em;\n  cursor: pointer;\n  text-decoration: none;\n  padding: 0;\n\n  /* styled-system props */\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes3 = require('@styled-system/prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/**
 * Core LinkUnstyled component.
 */

var LinkUnstyled = _styledComponents2.default.a(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
}, _styledSystem.display, _styledSystem.color, _styledSystem.space, _styledSystem.width, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order);

LinkUnstyled.propTypes = _extends({
  disabled: _propTypes2.default.bool
}, _propTypes4.default.display, _propTypes4.default.space, _propTypes4.default.width, _propTypes4.default.flex, _propTypes4.default.flexGrow, _propTypes4.default.flexShrink, _propTypes4.default.flexBasis, _propTypes4.default.justifySelf, _propTypes4.default.alignSelf, _propTypes4.default.order);

LinkUnstyled.defaultProps = {
  display: 'inline-block',
  color: 'inherit'
};

LinkUnstyled.displayName = 'LinkUnstyled';

exports.default = LinkUnstyled;
module.exports = exports['default'];