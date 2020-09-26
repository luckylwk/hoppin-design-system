"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rcCheckbox = _interopRequireDefault(require("rc-checkbox"));

var _Label = _interopRequireDefault(require("./Label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  vertical-align: text-top;\n\n  width: 18px;\n  height: 18px;\n\n  ", " & {\n    margin-right: ", ";\n  }\n\n  background: ", ";\n  border: 2px solid\n    ", ";\n\n  border-radius: ", ";\n\n  transition: all 150ms;\n\n  ", ":focus + & {\n    box-shadow: ", ";\n  }\n\n  ", " {\n    visibility: ", ";\n  }\n"]);

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

/**
 * Taken from
 * https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
 */
// ---------------------------
var CheckboxContainer = _styledComponents["default"].div(_templateObject()); // ---------------------------


var Icon = _styledComponents["default"].svg(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary.dark;
}); // ---------------------------
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
// const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`


_rcCheckbox["default"].displayName = 'RcCheckbox'; // ---------------------------

var HiddenCheckbox = (0, _styledComponents["default"])(_rcCheckbox["default"])(_templateObject3());
HiddenCheckbox.displayName = 'HiddenCheckbox'; // ---------------------------

var StyledCheckbox = _styledComponents["default"].div(_templateObject4(), _Label["default"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.small;
}, function (_ref3) {
  var checked = _ref3.checked,
      theme = _ref3.theme;
  return !checked ? theme.colors.neutral.lightest : theme.colors.primary.lightest;
}, function (_ref4) {
  var checked = _ref4.checked,
      theme = _ref4.theme;
  return !checked ? theme.colors.neutral.lighter : theme.colors.secondary.lighter;
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
      onChange = _ref8.onChange;

  var onClick = function onClick(e) {
    e.preventDefault();
    onChange({
      target: {
        type: 'checkbox',
        name: name,
        value: !checked ? 'on' : null,
        checked: !checked
      }
    });
  };

  var CheckBoxWrapper = label ? _Label["default"] : CheckboxContainer;
  return /*#__PURE__*/_react["default"].createElement(CheckBoxWrapper, {
    onClick: onClick,
    htmlFor: name
  }, /*#__PURE__*/_react["default"].createElement(HiddenCheckbox, {
    checked: checked,
    name: name
  }), /*#__PURE__*/_react["default"].createElement(StyledCheckbox, {
    checked: checked
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label);
};

Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  name: _propTypes["default"].string.isRequired,
  checked: _propTypes["default"].bool,
  onChange: _propTypes["default"].func.isRequired,

  /** Omit label prop to render Checkbox without a label */
  label: _propTypes["default"].string
} : {};
Checkbox.defaultProps = {
  checked: false
};
Checkbox.displayName = 'Checkbox';
var _default = Checkbox;
exports["default"] = _default;
module.exports = exports.default;