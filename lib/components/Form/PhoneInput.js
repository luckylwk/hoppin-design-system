"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require(".");

var _Box = require("../Box");

var _libphonenumberJs = require("libphonenumber-js");

var _reactPhoneInput = _interopRequireDefault(require("react-phone-input-2"));

var _PhoneInputBaseStyles = _interopRequireDefault(require("./PhoneInputBaseStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  &&& > div {\n    .form-control {\n      width: 100%;\n      height: auto;\n      appearance: none;\n      outline: none;\n\n      padding-top: 9px;\n      padding-bottom: 9px;\n      padding-right: ", ";\n      padding-left: 68px;\n\n      font-size: ", ";\n      line-height: 1;\n      font-weight: ", ";\n\n      font-family: ", ";\n      color: ", ";\n\n      background: ", ";\n\n      border-radius: ", ";\n\n      &:focus {\n        background-color: ", ";\n        border-color: ", ";\n      }\n\n      &:disabled {\n        opacity: 0.25;\n        cursor: not-allowed;\n      }\n\n      &::placeholder {\n        font-family: ", ";\n        font-weight: ", ";\n        color: ", ";\n      }\n    }\n\n    .flag-dropdown {\n      padding-left: 8px;\n      padding-right: 8px;\n\n      background: ", ";\n      border-radius: ", " 0 0\n        ", ";\n\n      &:hover {\n        border-radius: ", " 0 0\n          ", ";\n      }\n    }\n\n    .form-control,\n    .flag-dropdown {\n      border: ", " solid\n        ", ";\n      border-color: ", ";\n    }\n\n    .form-control:focus + .flag-dropdown {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var PhoneStyler = (0, _styledComponents["default"])(_Box.Box)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.space.base;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.body;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontWeights.normal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.fonts.secondary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.neutral.darker;
}, function (_ref6) {
  var value = _ref6.value,
      theme = _ref6.theme;
  return value && value.length > 0 ? theme.colors.form.focused.background : theme.colors.form.background;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.radii.small;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.form.focused.background;
}, function (_ref9) {
  var theme = _ref9.theme,
      overrideBg = _ref9.overrideBg;
  return overrideBg || theme.colors.form.focused.border;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.fonts.secondary;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.fontWeights.normal;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.neutral.light;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.form.background;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.radii.small;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.radii.small;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.radii.small;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.radii.small;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.borderWidths.base;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.colors.form.border;
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.colors.form.border;
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.colors.form.focused.background;
}, function (_ref22) {
  var theme = _ref22.theme,
      overrideBg = _ref22.overrideBg;
  return overrideBg || theme.colors.form.focused.border;
}); // --------------------------

var PhoneInput = function PhoneInput(_ref23) {
  var name = _ref23.name,
      label = _ref23.label,
      value = _ref23.value,
      onChange = _ref23.onChange,
      overrideBg = _ref23.overrideBg;

  var onChangePhone = function onChangePhone(phoneNumber, _phone) {
    var parsedPhoneNumber = (0, _libphonenumberJs.parsePhoneNumberFromString)(phoneNumber);
    var mockEvent = {
      target: {
        name: name,
        type: 'tel',
        value: parsedPhoneNumber && parsedPhoneNumber.number ? parsedPhoneNumber.number : phoneNumber,
        _phone: _phone || false
      }
    };
    onChange(mockEvent);
  };

  return /*#__PURE__*/_react["default"].createElement(_PhoneInputBaseStyles["default"], null, label && /*#__PURE__*/_react["default"].createElement(_.Label, {
    htmlFor: name
  }, label), /*#__PURE__*/_react["default"].createElement(PhoneStyler, {
    marginTop: "small",
    marginBottom: "base",
    overrideBg: overrideBg
  }, /*#__PURE__*/_react["default"].createElement(_reactPhoneInput["default"], {
    country: "us",
    preferredCountries: ['us', 'ca', 'gb'],
    value: value,
    onChange: onChangePhone
  })));
};

PhoneInput.propTypes = process.env.NODE_ENV !== "production" ? {
  name: _propTypes["default"].string,
  label: _propTypes["default"].string,
  value: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  overrideBg: _propTypes["default"].string
} : {};
PhoneInput.defaultProps = {
  name: 'phone',
  label: null,
  overrideBg: null
};
PhoneInput.displayName = 'PhoneInput';
var _default = PhoneInput;
exports["default"] = _default;
module.exports = exports.default;