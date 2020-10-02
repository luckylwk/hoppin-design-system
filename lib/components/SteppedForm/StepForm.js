"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = require("../Box");

var _Container = require("../Container");

var _Form = require("../Form");

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _isArrayLike2 = _interopRequireDefault(require("lodash/isArrayLike"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StepForm = function StepForm(_ref) {
  var title = _ref.title,
      lede = _ref.lede,
      fields = _ref.fields,
      actions = _ref.actions,
      onNavigate = _ref.onNavigate,
      onChange = _ref.onChange,
      validationErrors = _ref.validationErrors,
      saveErrors = _ref.saveErrors,
      isSaving = _ref.isSaving,
      displayMode = _ref.displayMode;

  var hasRequiredFieldValues = function hasRequiredFieldValues() {
    return fields.map(function (field) {
      var fieldHasValue = false;

      if (field.type === 'group') {
        fieldHasValue = !field.list || // catch if field is defined as group but has no list of fields
        field.list // map over all grouped fields, check each one
        .map(function (groupField) {
          return !groupField.required || groupField.value && groupField.value.length > 0 || groupField.checked === 'checked';
        }) // check if all are true
        .reduce(function (all, current) {
          return all && current;
        });
      } else {
        // normal fields are easy to check
        fieldHasValue = !field.required || (0, _isArrayLike2["default"])(field.value) && field.value.length > 0 || !(0, _isEmpty2["default"])(field.value) || field.checked === 'checked';
      }

      return fieldHasValue;
    }) // check if all are true
    .reduce(function (all, current) {
      return all && current;
    });
  };

  var containerProps = displayMode === 'flex' ? {
    padding: 'small'
  } : {};
  return /*#__PURE__*/_react["default"].createElement(_Container.Container, _extends({
    as: "form",
    height: "100%",
    width: "narrow",
    overflowX: "hidden",
    overflowY: "scroll"
  }, containerProps), /*#__PURE__*/_react["default"].createElement(_index.StepHeader, {
    title: title,
    lede: lede
  }), /*#__PURE__*/_react["default"].createElement(_Form.Fields, {
    isSortable: false,
    onChangeSort: function onChangeSort() {},
    onChange: onChange,
    fields: fields,
    type: "host"
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

StepForm.displayName = 'StepForm';
var _default = StepForm;
exports["default"] = _default;
module.exports = exports.default;