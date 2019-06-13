'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Test = function Test(_ref) {
  var fontSize = _ref.fontSize,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { style: { fontSize: fontSize } },
    children
  );
};

Test.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Specify the font size here. */
  fontSize: _propTypes2.default.string
} : {};

Test.defaultProps = {
  fontSize: '1em'
};

Test.displayName = 'Test';

exports.default = Test;
module.exports = exports['default'];