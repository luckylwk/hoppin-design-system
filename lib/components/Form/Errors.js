'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  background-color: ', ';\n  border-left: 4px solid ', ';\n  border-radius: ', ';\n'], ['\n  background-color: ', ';\n  border-left: 4px solid ', ';\n  border-radius: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Text = require('../Text');

var _Box = require('../Box');

var _Paragraph = require('../Paragraph');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// ---------------------------

var BoxDanger = (0, _styledComponents2.default)(_Box.Box)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.danger.lightest;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.danger.base;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.radii.small;
});

// ---------------------------

var Errors = function Errors(_ref4) {
  var errors = _ref4.errors;
  return _react2.default.createElement(
    _Box.Box,
    null,
    errors.length > 0 && _react2.default.createElement(
      BoxDanger,
      { mt: 2, py: 2, px: 3 },
      _react2.default.createElement(
        _Text.Text,
        { display: 'block', color: 'error.darker', 'data-cy': 'error' },
        errors.map(function (error) {
          return _react2.default.createElement(
            _Paragraph.Paragraph,
            { marginBottom: 0, key: error.msg || error.message },
            error.msg || error.message
          );
        })
      )
    )
  );
};

Errors.propTypes = process.env.NODE_ENV !== "production" ? {
  /** [ { msg: 'Custom errors from the backend' }, new Error("And standard errors are supported") ] */
  errors: _propTypes2.default.array.isRequired
} : {};

Errors.defaultProps = {
  errors: [],
  onlyShowOne: true
};

Errors.displayName = 'Errors';

exports.default = Errors;
module.exports = exports['default'];