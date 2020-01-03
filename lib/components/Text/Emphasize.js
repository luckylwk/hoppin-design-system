'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: ', ';\n\n  border: 0px;\n  border-bottom: 4px solid;\n  border-bottom-color: ', ';\n'], ['\n  display: ', ';\n\n  border: 0px;\n  border-bottom: 4px solid;\n  border-bottom-color: ', ';\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Emphasize = (0, _styledComponents2.default)(_Text2.default)(_templateObject, function (_ref) {
  var display = _ref.display;
  return display;
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _color2.default)(theme.colors.primary.base).alpha('0.45').rgb().string();
});

Emphasize.propTypes = {
  display: _propTypes2.default.string,
  fontWeight: _propTypes2.default.string,
  lineHeight: _propTypes2.default.string
};

Emphasize.defaultProps = {
  display: 'inline-block',
  fontWeight: '600',
  lineHeight: '0.75'
};

Emphasize.displayName = 'Emphasize';

exports.default = Emphasize;
module.exports = exports['default'];