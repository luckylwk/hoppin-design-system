var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { Box } from '../Box';
import { Container } from '../Container';
import { Errors } from '../Form';
import { Button, ButtonGroup } from '../Button';

import { ActionButtons, StepHeader } from './index';

var StepForm = function StepForm(_ref) {
  var title = _ref.title,
      lede = _ref.lede,
      options = _ref.options,
      minChoices = _ref.minChoices,
      maxChoices = _ref.maxChoices,
      value = _ref.value,
      actions = _ref.actions,
      onNavigate = _ref.onNavigate,
      onChange = _ref.onChange,
      validationErrors = _ref.validationErrors,
      saveErrors = _ref.saveErrors,
      isSaving = _ref.isSaving,
      displayMode = _ref.displayMode;

  /*
   * Handle multiple choice logic in component.
   * Makes this component behave similar to StepForm
   */
  var handleClick = function handleClick(option, event) {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    // add the freshly clicked option to the array, if id doesn't exist yet.
    var newValue = [].concat(value);
    var index = newValue.indexOf(option.value);
    if (index >= 0) {
      // the option was already selected, deselect it
      newValue.splice(index, 1);
    } else {
      // add the option to the selection.
      newValue.push(option.value);
    }
    // if we got too many options now, take the last chosen ones (from  end of array)
    if (newValue.length > maxChoices) {
      newValue = newValue.slice(-maxChoices);
    }
    // call onChange(slideSlug, fieldName, event)
    // slideSlug and fieldName are already bound
    // -> fake event to be picked up.
    onChange({ target: { value: newValue } });
  };

  var containerProps = displayMode === 'flex' ? { padding: 0 } : {};

  return React.createElement(
    Container,
    {
      as: 'form',
      height: '100%',
      width: 'full',
      overflow: 'scroll',
      padding: 0
    },
    React.createElement(
      Container,
      _extends({ width: 'narrow' }, containerProps),
      React.createElement(StepHeader, { title: title, lede: lede })
    ),
    React.createElement(
      ButtonGroup,
      {
        flexWrap: 'wrap',
        flexGrow: 0,
        justifyContent: 'center',
        margin: ['base', 'large', 'xlarge']
      },
      options.length > 0 && options.map(function (option) {
        return React.createElement(
          Button,
          {
            key: option.value,
            variant: value.indexOf(option.value) >= 0 ? 'full' : 'outline',
            type: 'button',
            context: 'neutral',
            size: 'large',
            onClick: handleClick.bind(null, option),
            marginBottom: 'large'
          },
          option.label
        );
      })
    ),
    React.createElement(
      Container,
      _extends({ width: 'narrow' }, containerProps),
      React.createElement(Errors, { errors: [].concat(validationErrors, saveErrors) }),
      React.createElement(Box, { flexGrow: 1 }),
      React.createElement(ActionButtons, {
        actions: actions,
        onNavigate: onNavigate,
        disableNext: value.length < minChoices,
        isSaving: isSaving || false
      })
    )
  );
};

StepForm.displayName = 'StepForm';

export default StepForm;