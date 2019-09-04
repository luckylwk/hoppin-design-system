'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  background-color: #edf0f2;\n\n  border-left: 4px solid #dc3030;\n'], ['\n  background-color: #edf0f2;\n\n  border-left: 4px solid #dc3030;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Text = require('../Text');

var _Box = require('../Box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// import AlertIcon from 'react-feather/dist/icons/alert-triangle';

/**
 * Errors (array) will have the following structure:
 *
 * [ { msg: 'error message 1' }, { msg: 'error message 2' } ]
 */

var BoxDanger = (0, _styledComponents2.default)(_Box.Box)(_templateObject);

var Errors = function Errors(_ref) {
  var errors = _ref.errors;
  return _react2.default.createElement(
    _Box.Box,
    null,
    errors.length > 0 && _react2.default.createElement(
      BoxDanger,
      { mt: 2, py: 2, px: 3 },
      _react2.default.createElement(
        _Text.Text,
        { display: 'block', style: { color: '#881B1B' }, 'data-cy': 'error' },
        errors[0].msg
      )
    )
  );
};

Errors.propTypes = process.env.NODE_ENV !== "production" ? {
  errors: _propTypes2.default.array.isRequired
} : {};

Errors.defaultProps = {
  errors: [],
  onlyShowOne: true
};

Errors.displayName = 'Errors';

exports.default = Errors;
module.exports = exports['default'];