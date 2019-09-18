'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('../Box');

var _Container = require('../Container');

var _Markdown = require('../Markdown');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepMd = function StepMd(_ref) {
  var title = _ref.title,
      lede = _ref.lede,
      body = _ref.body,
      actions = _ref.actions,
      onNavigate = _ref.onNavigate,
      displayMode = _ref.displayMode;

  var containerProps = displayMode === 'flex' ? { padding: 0 } : {};
  return _react2.default.createElement(
    _Container.Container,
    _extends({
      height: '100%',
      width: 'narrow',
      overflow: 'scroll'
    }, containerProps),
    _react2.default.createElement(_index.StepHeader, { title: title, lede: lede }),
    body && _react2.default.createElement(
      _Markdown.Markdown,
      null,
      body
    ),
    _react2.default.createElement(_Box.Box, { flexGrow: 1 }),
    _react2.default.createElement(_index.ActionButtons, { actions: actions, onNavigate: onNavigate })
  );
};

StepMd.displayName = 'StepMd';

exports.default = StepMd;
module.exports = exports['default'];