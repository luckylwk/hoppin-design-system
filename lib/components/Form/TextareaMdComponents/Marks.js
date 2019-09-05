'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('../../Text');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderMark = function renderMark(_ref, _, next) {
  var children = _ref.children,
      mark = _ref.mark,
      attributes = _ref.attributes;

  switch (mark.type) {
    case 'strong':
    case 'bold':
      return _react2.default.createElement(
        _Text.Text,
        _extends({ fontWeight: 'bold' }, attributes),
        children
      );

    case 'code':
      return _react2.default.createElement(
        'code',
        attributes,
        children
      );

    case 'emphasis':
    case 'italic':
      return _react2.default.createElement(
        _Text.Text,
        _extends({ fontStyle: 'italic' }, attributes),
        children
      );

    default:
      return next();
  }
};

exports.default = { renderMark: renderMark };
module.exports = exports['default'];