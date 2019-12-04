var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { Box } from '../Box';
import { Container } from '../Container';
import { Fields, Errors } from '../Form';
import _isEmpty from 'lodash/isEmpty';
import _isArrayLike from 'lodash/isArrayLike';

import { ActionButtons, StepHeader } from './index';

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
        fieldHasValue = !field.required || _isArrayLike(field.value) && field.value.length > 0 || !_isEmpty(field.value) || field.checked === 'checked';
      }
      return fieldHasValue;
    })
    // check if all are true
    .reduce(function (all, current) {
      return all && current;
    });
  };

  var containerProps = displayMode === 'flex' ? { padding: 'small' } : {};
  return React.createElement(
    Container,
    _extends({
      as: 'form',
      height: '100%',
      width: 'narrow',
      overflowX: 'hidden',
      overflowY: 'scroll'
    }, containerProps),
    React.createElement(StepHeader, { title: title, lede: lede }),
    React.createElement(Fields, {
      isSortable: false,
      onChangeSort: function onChangeSort() {},
      onChange: onChange,
      fields: fields,
      type: 'host'
    }),
    React.createElement(Errors, { errors: [].concat(validationErrors, saveErrors) }),
    React.createElement(Box, { flexGrow: 1 }),
    React.createElement(ActionButtons, {
      actions: actions,
      onNavigate: onNavigate,
      disableNext: validationErrors.length > 0 || !hasRequiredFieldValues(),
      isSaving: isSaving || false
    })
  );
};

StepForm.displayName = 'StepForm';
export default StepForm;