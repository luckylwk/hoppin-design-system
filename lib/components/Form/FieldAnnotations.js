'use strict';

exports.__esModule = true;
exports.FieldExplanation = exports.RequiredCharacters = exports.RequiredText = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n\n  margin-left: 6px;\n\n  font-size: 12px;\n  line-height: 10px;\n  font-weight: 600;\n\n  color: ', ';\n'], ['\n  display: inline-block;\n\n  margin-left: 6px;\n\n  font-size: 12px;\n  line-height: 10px;\n  font-weight: 600;\n\n  color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin: 0;\n  padding: 4px 3px;\n\n  font-family: ', ';\n\n  font-size: 12px;\n  line-height: 12px;\n  color: ', ';\n\n  text-align: right;\n'], ['\n  margin: 0;\n  padding: 4px 3px;\n\n  font-family: ', ';\n\n  font-size: 12px;\n  line-height: 12px;\n  color: ', ';\n\n  text-align: right;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  margin: 0;\n  margintop: ', ';\n  padding: 4px 3px;\n\n  font-family: ', ';\n\n  font-size: 12px;\n  line-height: 12px;\n  color: ', ';\n\n  text-align: left;\n'], ['\n  margin: 0;\n  margintop: ', ';\n  padding: 4px 3px;\n\n  font-family: ', ';\n\n  font-size: 12px;\n  line-height: 12px;\n  color: ', ';\n\n  text-align: left;\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// ---------------------------

var RequiredText = exports.RequiredText = _styledComponents2.default.span(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary.base;
});

RequiredText.propTypes = {};

RequiredText.defaultProps = {};

RequiredText.displayName = 'RequiredText';

// ---------------------------

var RequiredCharacters = exports.RequiredCharacters = _styledComponents2.default.p(_templateObject2, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.secondary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.neutral.light;
});

RequiredCharacters.propTypes = {};

RequiredCharacters.defaultProps = {};

RequiredCharacters.displayName = 'RequiredCharacters';

// ---------------------------

var FieldExplanation = exports.FieldExplanation = _styledComponents2.default.p(_templateObject3, function (_ref4) {
  var marginTop = _ref4.marginTop;
  return marginTop;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.fonts.secondary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.neutral.base;
});

FieldExplanation.propTypes = {
  marginTop: _propTypes2.default.string
};

FieldExplanation.defaultProps = {
  marginTop: '0px'
};

FieldExplanation.displayName = 'FieldExplanation';