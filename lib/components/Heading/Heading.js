'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('@styled-system/prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// using the variants in styled-system, we can set several css styles
// AND render the component as different HTML tags using the `as` prop of styled-components.
// https://styled-system.com/variants

var headingStyles = (0, _styledSystem.variant)({
  // theme key for variant definitions
  scale: 'headings',
  // component prop
  prop: 'as'
});

var Heading = (0, _styledComponents2.default)('h2')(_templateObject, headingStyles, _styledSystem.space, _styledSystem.color, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order);

Heading.propTypes = _extends({}, _propTypes2.default.space, _propTypes2.default.color, _propTypes2.default.flex, _propTypes2.default.flexGrow, _propTypes2.default.flexShrink, _propTypes2.default.flexBasis, _propTypes2.default.justifySelf, _propTypes2.default.alignSelf, _propTypes2.default.order);

Heading.defaultProps = {
  as: 'h2',
  marginBottom: 'base',
  marginTop: 'xlarge'
};

Heading.displayName = 'Heading';

exports.default = Heading;
module.exports = exports['default'];