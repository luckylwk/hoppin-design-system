'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('@styled-system/prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require('prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } // import React from 'react';


var Logo = _styledComponents2.default.img.attrs(function (_ref) {
  var theme = _ref.theme,
      size = _ref.size,
      context = _ref.context;
  return {
    src: theme[size][context]
  };
})(_templateObject, _styledSystem.space, _styledSystem.layout, _styledSystem.flex, _styledSystem.flexGrow, _styledSystem.flexShrink, _styledSystem.flexBasis, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.order, _styledSystem.size, _styledSystem.position);

Logo.propTypes = _extends({}, _propTypes2.default.space, _propTypes2.default.layout, _propTypes2.default.flex, _propTypes2.default.flexGrow, _propTypes2.default.flexShrink, _propTypes2.default.flexBasis, _propTypes2.default.justifySelf, _propTypes2.default.alignSelf, _propTypes2.default.order, _propTypes2.default.color, _propTypes2.default.size, _propTypes2.default.position, {
  /** set to get a different size, defaults to 2rem */
  maxHeight: _propTypes4.default.any,
  /** inherits context from design provider, override if needed */
  context: _propTypes4.default.oneOf(['primary', 'shadower', 'host', 'whiteout']),
  /** full size logo or compact icon */
  size: _propTypes4.default.oneOf(['logo', 'icon'])
});

Logo.defaultProps = {
  display: 'block',
  maxHeight: '2rem',
  maxWidth: '100%',
  marginRight: 'large',
  context: 'primary',
  size: 'logo'
};

Logo.displayName = 'Logo';

exports.default = Logo;
module.exports = exports['default'];