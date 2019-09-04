'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _InputField = require('./InputField');

var _InputField2 = _interopRequireDefault(_InputField);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Input = function Input(_ref) {
  var label = _ref.label,
      rest = _objectWithoutProperties(_ref, ['label']);

  var Wrapper = label ? _Label2.default : _react.Fragment;
  var wrapperProps = label ? { label: label, htmlFor: rest.name } : {};
  var inputProps = label ? { marginTop: 'small' } : {};
  return _react2.default.createElement(
    Wrapper,
    wrapperProps,
    label,
    _react2.default.createElement(_InputField2.default, _extends({}, rest, inputProps))
  );
};
Input.propTypes = process.env.NODE_ENV !== "production" ? {
  /** supply a label prop and the InputField gets wrapped in a Label, omit it to render the InputField alone */
  label: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  /** any text-like input type will work */
  type: _propTypes2.default.string,
  state: _propTypes2.default.string
} : {};

Input.defaultProps = {
  disabled: false,
  type: 'text',
  state: 'neutral'
};

Input.displayName = 'Input';

exports.default = Input;
module.exports = exports['default'];