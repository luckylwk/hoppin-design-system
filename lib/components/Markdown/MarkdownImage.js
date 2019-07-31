'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Lede = require('../Lede');

var _Box = require('../Box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkdownImage = function MarkdownImage(_ref) {
  var src = _ref.src,
      alt = _ref.alt;

  // only render caption if alt text is prefixed with a !
  var caption = typeof alt === 'string' && alt.indexOf('!') === 0 ? alt.substr(1) : undefined;
  return _react2.default.createElement(
    _Box.Box,
    { position: 'relative' },
    _react2.default.createElement('img', { src: src, alt: alt }),
    caption && _react2.default.createElement(
      _Lede.Lede,
      { fontSize: 'label', color: 'neutral.light', marginY: 'xsmall' },
      caption
    )
  );
};

MarkdownImage.displayName = 'MarkdownImage';
exports.default = MarkdownImage;
module.exports = exports['default'];