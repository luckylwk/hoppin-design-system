function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  vertical-align: text-top;\n\n  width: 18px;\n  height: 18px;\n\n  ", " & {\n    margin-right: ", ";\n  }\n\n  background: ", ";\n  border: 2px solid\n    ", ";\n\n  border-radius: ", ";\n\n  transition: all 150ms;\n\n  ", ":focus + & {\n    box-shadow: ", ";\n  }\n\n  ", " {\n    visibility: ", ";\n  }\n\n  cursor: pointer;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 2px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  fill: none;\n  stroke: ", ";\n  stroke-width: 4px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  vertical-align: middle;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RcCheckbox from 'rc-checkbox';
import { Label, RequiredText } from '.';
/**
 * Taken from
 * https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
 */
// ---------------------------

var CheckboxContainer = styled.div(_templateObject()); // ---------------------------

var Icon = styled.svg(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary.lightest;
}); // ---------------------------
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
// const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`

RcCheckbox.displayName = 'RcCheckbox'; // ---------------------------

var HiddenCheckbox = styled(RcCheckbox)(_templateObject3());
HiddenCheckbox.displayName = 'HiddenCheckbox'; // ---------------------------

var StyledCheckbox = styled.div(_templateObject4(), Label, function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.small;
}, function (_ref3) {
  var checked = _ref3.checked,
      theme = _ref3.theme;
  return !checked ? theme.colors.form.background : theme.colors.primary.darkest;
}, function (_ref4) {
  var checked = _ref4.checked,
      theme = _ref4.theme;
  return !checked ? theme.colors.form.border : theme.colors.primary.darkest;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.radii.xsmall;
}, HiddenCheckbox, function (_ref6) {
  var theme = _ref6.theme;
  return theme.shadows.xsmall;
}, Icon, function (_ref7) {
  var checked = _ref7.checked;
  return checked ? 'visible' : 'hidden';
});
StyledCheckbox.displayName = 'StyledCheckbox'; // ---------------------------

var Checkbox = function Checkbox(_ref8) {
  var name = _ref8.name,
      checked = _ref8.checked,
      label = _ref8.label,
      required = _ref8.required,
      onChange = _ref8.onChange;
  var onClick = useCallback(function (e) {
    e.preventDefault();
    onChange({
      target: {
        type: 'checkbox',
        name: name,
        value: !checked ? 'on' : null,
        checked: !checked
      }
    });
  }, [onChange, checked, name]);
  var LabelOrCheckboxContainer = !!label ? Label : CheckboxContainer;
  return /*#__PURE__*/React.createElement(LabelOrCheckboxContainer, {
    onClick: onClick,
    htmlFor: name
  }, /*#__PURE__*/React.createElement(HiddenCheckbox, {
    checked: checked,
    name: name
  }), /*#__PURE__*/React.createElement(StyledCheckbox, {
    checked: checked
  }, /*#__PURE__*/React.createElement(Icon, {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label, label && required && /*#__PURE__*/React.createElement(RequiredText, null, "*required"));
};

Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,

  /** Omit label prop to render Checkbox without a label */
  label: PropTypes.string,
  required: PropTypes.bool
} : {};
Checkbox.defaultProps = {
  checked: false,
  required: false
};
Checkbox.displayName = 'Checkbox';
export default Checkbox;