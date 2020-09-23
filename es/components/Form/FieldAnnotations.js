function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  margintop: ", ";\n  padding: 4px 3px;\n\n  font-family: ", ";\n\n  font-size: 12px;\n  line-height: 12px;\n  color: ", ";\n\n  text-align: left;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  padding: 4px 3px;\n\n  font-family: ", ";\n\n  font-size: 12px;\n  line-height: 12px;\n  color: ", ";\n\n  text-align: right;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n\n  margin-left: 6px;\n\n  font-size: 12px;\n  line-height: 10px;\n  font-weight: 600;\n\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import PropTypes from 'prop-types';
import styled from 'styled-components'; // ---------------------------

export var RequiredText = styled.span(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary.base;
});
RequiredText.propTypes = {};
RequiredText.defaultProps = {};
RequiredText.displayName = 'RequiredText'; // ---------------------------

export var RequiredCharacters = styled.p(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.secondary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.neutral.light;
});
RequiredCharacters.propTypes = {};
RequiredCharacters.defaultProps = {};
RequiredCharacters.displayName = 'RequiredCharacters'; // ---------------------------

export var FieldExplanation = styled.p(_templateObject3(), function (_ref4) {
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
  marginTop: PropTypes.string
};
FieldExplanation.defaultProps = {
  marginTop: '0px'
};
FieldExplanation.displayName = 'FieldExplanation';