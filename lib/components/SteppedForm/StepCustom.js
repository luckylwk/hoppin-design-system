"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = require("../Box");

var _Container = require("../Container");

var _Form = require("../Form");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StepCustom = function StepCustom(_ref) {
  var title = _ref.title,
      lede = _ref.lede,
      SlideContent = _ref.SlideContent,
      fields = _ref.fields,
      formData = _ref.formData,
      slug = _ref.slug,
      actions = _ref.actions,
      onNavigate = _ref.onNavigate,
      onChange = _ref.onChange,
      validationErrors = _ref.validationErrors,
      saveErrors = _ref.saveErrors,
      isSaving = _ref.isSaving,
      displayMode = _ref.displayMode;

  var hasRequiredFieldValues = function hasRequiredFieldValues() {
    return fields && Array.isArray(fields) && fields.length > 0 && fields.map(function (field) {
      return !field.required || formData[field.name] && formData[field.name] !== '';
    }) // check if all are true
    .reduce(function (all, current) {
      return all && current;
    });
  };

  var containerProps = displayMode === 'flex' ? {
    padding: 0
  } : {};
  return /*#__PURE__*/_react["default"].createElement(_Container.Container, _extends({
    height: "100%",
    width: "narrow"
  }, containerProps), /*#__PURE__*/_react["default"].createElement(_index.StepHeader, {
    title: title,
    lede: lede
  }), /*#__PURE__*/_react["default"].createElement(SlideContent, {
    formData: formData,
    slug: slug,
    onChange: onChange,
    onNavigate: onNavigate,
    validationErrors: validationErrors,
    saveErrors: saveErrors
  }), /*#__PURE__*/_react["default"].createElement(_Form.Errors, {
    errors: [].concat(validationErrors, saveErrors)
  }), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    flexGrow: 1
  }), /*#__PURE__*/_react["default"].createElement(_index.ActionButtons, {
    actions: actions,
    onNavigate: onNavigate,
    disableNext: validationErrors.length > 0 || !hasRequiredFieldValues(),
    isSaving: isSaving || false
  }));
};

StepCustom.displayName = 'StepCustom';
var _default = StepCustom;
exports["default"] = _default;
module.exports = exports.default;