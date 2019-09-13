var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { Box } from '../Box';
import { Container } from '../Container';
import { Errors } from '../Form';
import { ActionButtons, StepHeader } from './index';

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
    })
    // check if all are true
    .reduce(function (all, current) {
      return all && current;
    });
  };

  var containerProps = displayMode === 'flex' ? { padding: 0 } : {};
  return React.createElement(
    Container,
    _extends({ height: '100%', width: 'narrow' }, containerProps),
    React.createElement(StepHeader, { title: title, lede: lede }),
    React.createElement(SlideContent, {
      formData: formData,
      slug: slug,
      onChange: onChange,
      onNavigate: onNavigate,
      validationErrors: validationErrors,
      saveErrors: saveErrors
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

StepCustom.displayName = 'StepCustom';
export default StepCustom;