'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('../Heading');

var _Lede = require('../Lede');

var _Markdown = require('../Markdown');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepHeader = function StepHeader(_ref) {
  var title = _ref.title,
      lede = _ref.lede;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    title && title.length > 0 && _react2.default.createElement(
      _Heading.Heading,
      { paddingTop: [1, 1, 4], paddingBottom: [0, 0, 2] },
      title
    ),
    lede && lede.length > 0 && _react2.default.createElement(
      _Lede.Lede,
      { as: 'div' },
      _react2.default.createElement(
        _Markdown.Markdown,
        null,
        lede
      )
    )
  );
};

StepHeader.displayName = 'StepHeader';

exports.default = StepHeader;
module.exports = exports['default'];