var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import _has from 'lodash/has';

import Select from 'react-select';
import Async from 'react-select/async';
import Creatable from 'react-select/creatable';

import getSelectStyling from './SelectStyling';
import { Checkbox, Input, Label, TextareaMd, RequiredCharacters, FieldExplanation, SingleSelectButton } from '.';

import { Flex } from '../Flex';
import { Box } from '../Box';
import { Button } from '../Button';
import { Paragraph } from '../Paragraph';

// ---------------------------

/**
 * @param {object} field - object that holds the field details.
 * @param {func}   onChange
 */
export var renderField = function renderField(field, _onChange, selectStyling) {
  var charsUsed = field.value ? field.value.length : 0;

  // To reset the margin underneath a field
  if (field.maxLength && !_has(field, 'props.marginBottom')) {
    field.props = _extends({}, field.props, { marginBottom: 0 });
  }

  if (field.type === 'textarea') {
    return React.createElement(
      Fragment,
      null,
      React.createElement(TextareaMd, _extends({
        name: field.name,
        initialValue: field.value,
        label: field.label,
        placeholder: field.placeholder,
        onChange: _onChange.bind(null, field.name),
        context: field.context
      }, field.props)),
      field.maxLength && React.createElement(
        RequiredCharacters,
        null,
        'We recommend using no more than',
        ' ',
        charsUsed !== 0 ? charsUsed + '/' : '',
        field.maxLength,
        ' characters.'
      ),
      field.explain && React.createElement(
        FieldExplanation,
        null,
        field.explain
      )
    );
  }

  if (field.type === 'creatable-select') {
    var LabelOrFragment = field.label ? Label : Fragment;
    var labelProps = field.label ? { label: field.label, htmlFor: field.name } : {};
    return React.createElement(
      LabelOrFragment,
      labelProps,
      field.label,
      React.createElement(Creatable, _extends({
        isClearable: true,
        clearValue: function clearValue() {
          return _onChange(field.name, { target: { value: '' } });
        },
        onChange: function onChange(option, _ref) {
          var action = _ref.action;

          if (action === 'select-option' || action === 'create-option' || action === 'remove-value' || action === 'pop-value') {
            return _onChange(field.name, { target: { value: option.value } });
          }
          if (action === 'clear') {
            return _onChange(field.name, { target: { value: '' } });
          }
        },
        formatCreateLabel: function formatCreateLabel(userInput) {
          return 'Click to add: ' + userInput;
        },
        options: field.options,
        value: { label: field.value, value: field.value }
      }, selectStyling)),
      field.explain && React.createElement(
        FieldExplanation,
        null,
        field.explain
      )
    );
  }

  if (field.type === 'select' || field.type === 'multi-select') {
    var _LabelOrFragment = field.label ? Label : Fragment;
    var _labelProps = field.label ? { label: field.label, htmlFor: field.name } : {};
    return React.createElement(
      _LabelOrFragment,
      _labelProps,
      field.label,
      React.createElement(Select, _extends({
        isMulti: field.type === 'multi-select',
        isClearable: field.type === 'multi-select',
        value: field.value,
        onChange: function onChange(option, _ref2) {
          var action = _ref2.action;

          if (action === 'select-option' || action === 'remove-value' || action === 'pop-value') {
            return _onChange(field.name, {
              target: {
                value: field.type === 'multi-select' ? option.map(function (_option) {
                  return _option.value;
                }) : option,
                label: field.type === 'multi-select' ? option.map(function (_option) {
                  return _option.label;
                }) : option
              }
            });
          }
          if (action === 'clear') {
            return _onChange(field.name, {
              target: { value: field.type === 'multi-select' ? [] : {} }
            });
          }
        },
        options: field.options
      }, selectStyling)),
      field.explain && React.createElement(
        FieldExplanation,
        null,
        field.explain
      )
    );
  }

  // Used for location (using Google GeoLocation API)
  if (field.type === 'async-select') {
    var _LabelOrFragment2 = field.label ? Label : Fragment;
    var _labelProps2 = field.label ? { label: field.label, htmlFor: field.name } : {};
    return React.createElement(
      _LabelOrFragment2,
      _labelProps2,
      React.createElement(Async, _extends({
        cacheOptions: false,
        value: field.value,
        onChange: function onChange(option, _ref3) {
          var action = _ref3.action;

          if (action === 'select-option' || action === 'remove-value' || action === 'pop-value') {
            return _onChange(field.name, {
              target: {
                value: option
              }
            });
          } else if (action === 'clear') {
            return _onChange(field.name, {
              target: {
                value: {}
              }
            });
          }
        },
        loadOptions: field.options,
        placeholder: 'Search...',
        noOptionsMessage: function noOptionsMessage() {
          return 'Start typing to start the search';
        }
      }, selectStyling)),
      field.explain && React.createElement(
        FieldExplanation,
        null,
        field.explain
      )
    );
  }

  if (field.type === 'checkbox') {
    return React.createElement(Checkbox, {
      name: field.name,
      label: field.label,
      checked: field.checked,
      onChange: _onChange.bind(null, field.name)
    });
  }

  if (field.type === 'single-select-button') {
    return React.createElement(
      Fragment,
      null,
      React.createElement(SingleSelectButton, {
        name: field.name,
        options: field.options,
        value: field.value,
        onChange: _onChange.bind(null, field.name)
      }),
      field.explain && React.createElement(
        FieldExplanation,
        { marginTop: '4px' },
        field.explain
      )
    );
  }

  if (field.type === 'inline-submit') {
    // if we have a label, wrap input in label add margin-top to input, otherwise no wrapper
    var _LabelOrFragment3 = field.label ? Label : Fragment;
    var _labelProps3 = field.label ? { label: field.title ? undefined : field.label, htmlFor: field.name } : {};
    var flexProps = field.label ? { marginTop: 'small', marginBottom: 'base' } : {};
    var inputProps = field.label ? { marginTop: 'none', marginBottom: 'none' } : {};

    return React.createElement(
      _LabelOrFragment3,
      _labelProps3,
      React.createElement(
        Flex,
        flexProps,
        React.createElement(Input, _extends({
          type: field.type,
          value: field.value || '',
          name: field.name,
          onChange: _onChange.bind(null, field.name),
          context: field.context
        }, inputProps)),
        React.createElement(
          Button,
          {
            type: 'primary',
            marginLeft: 'small',
            disabled: field.isSubmitDisabled
          },
          field.submitText || 'Submit'
        )
      )
    );
  }

  /**
   * Default is a regular input field.
   */
  return React.createElement(
    Fragment,
    null,
    React.createElement(Input, _extends({
      type: field.type,
      value: field.value || '',
      name: field.name,
      placeholder: field.placeholder
      // label={field.title ? undefined : field.label}
      , label: field.label,
      onChange: _onChange.bind(null, field.name),
      context: field.context,
      renderWidth: field.renderWidth || 'full',
      icon: field.icon
    }, field.props)),
    field.maxLength && React.createElement(
      RequiredCharacters,
      null,
      'We recommend using no more than',
      ' ',
      charsUsed !== 0 ? charsUsed + '/' : '',
      field.maxLength,
      ' characters.'
    ),
    field.explain && React.createElement(
      FieldExplanation,
      null,
      field.explain
    )
  );
};

// ---------------------------

var Fields = function Fields(_ref4) {
  var onChange = _ref4.onChange,
      fields = _ref4.fields,
      theme = _ref4.theme;

  var selectStyling = getSelectStyling(theme);

  return React.createElement(
    Box,
    null,
    fields.map(function (field) {
      return React.createElement(
        Box,
        {
          key: field.name,
          marginBottom: _has(field, 'marginBottom') ? field.marginBottom : 'large'
        },
        field.type === 'group' ? React.createElement(
          Fragment,
          null,
          field.title && React.createElement(
            Paragraph,
            null,
            field.title
          ),
          React.createElement(
            Flex,
            null,
            field.list.length > 0 && field.list.map(function (groupedField, ix) {
              return React.createElement(
                Box,
                {
                  key: field.name + '-' + groupedField.name,
                  flex: 1,
                  marginRight: 'xsmall',
                  marginLeft: ix === 0 ? 'none' : 'xsmall'
                },
                groupedField.type ? renderField(groupedField, onChange, selectStyling) : null
              );
            })
          )
        ) : React.createElement(
          Fragment,
          null,
          field.title && React.createElement(
            Paragraph,
            { paddingTop: 'small', paddingBottom: 'xsmall' },
            field.title
          ),
          renderField(field, onChange, selectStyling)
        )
      );
    })
  );
};

Fields.displayName = 'Fields';

Fields.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * callback to be called when a field updates fn(fieldName, event)
   */
  onChange: PropTypes.func,
  /**
   * fields config array
   */
  fields: PropTypes.array
} : {};

export default withTheme(Fields);