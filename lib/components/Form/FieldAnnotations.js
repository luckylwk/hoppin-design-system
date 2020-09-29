"use strict";

exports.__esModule = true;
exports.FieldExplanation = exports.RequiredCharacters = exports.RequiredText = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  margintop: ", ";\n  padding: 7px 3px 4px 12px;\n\n  font-family: ", ";\n\n  font-size: 13px;\n  line-height: 11px;\n  color: ", ";\n  font-weight: 300;\n\n  text-align: left;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  padding: 4px 3px;\n\n  font-family: ", ";\n\n  font-size: 13px;\n  line-height: 11px;\n  color: ", ";\n\n  text-align: right;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n\n  margin-left: 8px;\n\n  font-size: 13px;\n  line-height: 11px;\n  font-weight: 600;\n\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// ---------------------------
var RequiredText = _styledComponents["default"].span(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.form.required;
});

exports.RequiredText = RequiredText;
RequiredText.propTypes = {};
RequiredText.defaultProps = {};
RequiredText.displayName = 'RequiredText'; // ---------------------------

var RequiredCharacters = _styledComponents["default"].p(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.secondary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.neutral.light;
});

exports.RequiredCharacters = RequiredCharacters;
RequiredCharacters.propTypes = {};
RequiredCharacters.defaultProps = {};
RequiredCharacters.displayName = 'RequiredCharacters'; // ---------------------------

var FieldExplanation = _styledComponents["default"].p(_templateObject3(), function (_ref4) {
  var marginTop = _ref4.marginTop;
  return marginTop;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.fonts.secondary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.form.placeholder;
});

exports.FieldExplanation = FieldExplanation;
FieldExplanation.propTypes = {
  marginTop: _propTypes["default"].string
};
FieldExplanation.defaultProps = {
  marginTop: '0px'
};
FieldExplanation.displayName = 'FieldExplanation';