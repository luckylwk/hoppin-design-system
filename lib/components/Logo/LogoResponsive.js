'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LogoResponsive = function LogoResponsive(_ref) {
  var context = _ref.context,
      rest = _objectWithoutProperties(_ref, ['context']);

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_Logo2.default, _extends({
      size: 'logo',
      context: context
    }, rest, {
      display: ['none', null, 'block']
    })),
    _react2.default.createElement(_Logo2.default, _extends({
      size: 'icon',
      context: context,
      maxHeight: '1.25rem'
    }, rest, {
      display: ['block', null, 'none']
    }))
  );
};

LogoResponsive.propTypes = process.env.NODE_ENV !== "production" ? {
  /** inherits context from design provider, override if needed */
  context: _propTypes2.default.oneOf(['primary', 'shadower', 'host'])
} : {};
LogoResponsive.defaultProps = {
  context: 'primary'
};

LogoResponsive.displayName = 'LogoResponsive';

exports.default = LogoResponsive;
module.exports = exports['default'];