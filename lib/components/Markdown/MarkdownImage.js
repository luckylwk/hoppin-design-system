'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  width: 100%;\n  padding: ', ';\n'], ['\n  display: inline-block;\n  width: 100%;\n  padding: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  max-width: 100%;\n'], ['\n  max-width: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Lede = require('../Lede');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ImageWrapper = _styledComponents2.default.span(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.space.base;
});
var Image = _styledComponents2.default.img(_templateObject2);

var MarkdownImage = function MarkdownImage(_ref2) {
  var src = _ref2.src,
      alt = _ref2.alt;

  // only render caption if alt text is prefixed with a !
  var caption = typeof alt === 'string' && alt.indexOf('!') === 0 ? alt.substr(1) : undefined;
  return _react2.default.createElement(
    ImageWrapper,
    null,
    _react2.default.createElement(Image, { src: src, alt: alt }),
    caption && _react2.default.createElement(
      _Lede.Lede,
      { as: 'span', fontSize: 'label', color: 'neutral.light', marginY: 'xsmall' },
      caption
    )
  );
};

MarkdownImage.displayName = 'MarkdownImage';
exports.default = MarkdownImage;
module.exports = exports['default'];