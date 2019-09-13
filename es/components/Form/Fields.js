var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n\n  margin-left: 6px;\n\n  font-size: 12px;\n  line-height: 10px;\n  font-weight: 600;\n  color: ', ';\n\n  border-bottom: 1px solid ', ';\n'], ['\n  display: inline-block;\n\n  margin-left: 6px;\n\n  font-size: 12px;\n  line-height: 10px;\n  font-weight: 600;\n  color: ', ';\n\n  border-bottom: 1px solid ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  font-family: ', ';\n  margin: 0;\n  padding: 3px;\n\n  font-size: 12px;\n  line-height: 12px;\n  color: ', ';\n\n  text-align: right;\n'], ['\n  font-family: ', ';\n  margin: 0;\n  padding: 3px;\n\n  font-size: 12px;\n  line-height: 12px;\n  color: ', ';\n\n  text-align: right;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import _has from 'lodash/has';

// Input components...
import Select from 'react-select';
import Async from 'react-select/async';
import Creatable from 'react-select/creatable';

import getSelectStyling from './selectStyling';
import Checkbox from './Checkbox';
// import Calendar from './Calendar';
import Input from './Input';
import TextareaMd from './TextareaMd';

import { Flex } from '../Flex';
import { Box } from '../Box';
// import { Button } from '../Button';
import { Paragraph } from '../Paragraph';

/**
 * Form fields
 */

var RequiredText = styled.span(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary.base;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary.darker;
});

var RequiredCharacters = styled.p(_templateObject2, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fonts.secondary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.neutral.light;
});

/**
 * @param {object} field - object that holds the field details.
 * @param {func}   onChange
 */
export var renderField = function renderField(field, _onChange, selectStyling) {
  // const charsLeft = plainTextValue
  //   ? field.maxLength - plainTextValue.length
  //   : field.maxLength;
  var charsUsed = field.value ? field.value.length : 0;

  if (field.type === 'textarea') {
    return React.createElement(
      Fragment,
      null,
      React.createElement(TextareaMd, {
        name: field.name,
        initialValue: field.value,
        label: field.title ? undefined : field.label,
        onChange: _onChange.bind(null, field.name),
        context: field.context
      }),
      field.maxLength && React.createElement(
        RequiredCharacters,
        null,
        'We recommend using no more than',
        ' ',
        charsUsed !== 0 ? charsUsed + '/' : '',
        field.maxLength,
        ' characters.'
      )
    );
  }

  if (field.type === 'creatable-select') {
    return React.createElement(Creatable, _extends({
      isClearable: true,
      clearValue: function clearValue() {
        return _onChange(field.name, { target: { value: '' } });
      },
      onChange: function onChange(option, _ref5) {
        var action = _ref5.action;

        if (action === 'select-option' || action === 'create-option') {
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
    }, selectStyling));
  }

  if (field.type === 'select' || field.type === 'multi-select') {
    return React.createElement(Select, _extends({
      isMulti: field.type === 'multi-select',
      isClearable: field.type === 'multi-select',
      value: field.value,
      onChange: function onChange(option, _ref6) {
        var action = _ref6.action;

        if (action === 'select-option' || action === 'remove-value') {
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
    }, selectStyling));
  }

  // Used for location (using Google GeoLocation API)
  if (field.type === 'async-select') {
    return React.createElement(Async, _extends({
      cacheOptions: false,
      value: field.value,
      onChange: function onChange(option, _ref7) {
        var action = _ref7.action;

        if (action === 'select-option') {
          return _onChange(field.name, {
            target: {
              value: option
            }
          });
        }
      },
      loadOptions: field.options,
      placeholder: 'Search...',
      noOptionsMessage: function noOptionsMessage() {
        return 'Start typing to start the search';
      }
    }, selectStyling));
  }

  if (field.type === 'checkbox') {
    return React.createElement(Checkbox, {
      name: field.name,
      label: field.label,
      checked: field.checked,
      onChange: _onChange.bind(null, field.name),
      context: field.context
    });
  }

  // if (field.type === 'inline-text') {
  //   const inlineChildren = (
  //     <Button type="primary" py={3} my={2} disabled={field.isSubmitDisabled}>
  //       {field.submitText || 'Submit'}
  //     </Button>
  //   );

  //   return (
  //     <Fragment>
  //       <InputFancy
  //         type={field.type}
  //         value={field.value || ''}
  //         name={field.name}
  //         label={field.label ? field.label : field.title}
  //         handleOnChange={onChange.bind(null, field.name)}
  //         renderType={type || 'primary'}
  //         renderWidth={field.renderWidth || 'full'}
  //         inlineChildren={inlineChildren}
  //       />
  //     </Fragment>
  //   );
  // }

  /**
   * Default is a regular input field.
   */
  return React.createElement(
    Fragment,
    null,
    React.createElement(Input, {
      type: field.type,
      value: field.value || '',
      name: field.name,
      label: field.title ? undefined : field.label,
      onChange: _onChange.bind(null, field.name),
      context: field.context,
      renderWidth: field.renderWidth || 'full'
    }),
    field.maxLength && React.createElement(
      RequiredCharacters,
      null,
      'We recommend using no more than',
      ' ',
      charsUsed !== 0 ? charsUsed + '/' : '',
      field.maxLength,
      ' characters.'
    )
  );
};

var Fields = function Fields(_ref8) {
  var onChange = _ref8.onChange,
      fields = _ref8.fields,
      theme = _ref8.theme;

  var selectStyling = getSelectStyling(theme);

  return React.createElement(
    Box,
    null,
    fields.map(function (field) {
      return React.createElement(
        Box,
        {
          key: field.name,
          mb: _has(field, 'marginBottom') ? field.marginBottom : 4
        },
        field.type === 'group' ? React.createElement(
          Fragment,
          null,
          field.title && React.createElement(
            Paragraph,
            { m: 0, p: 0 },
            field.title,
            field.required && React.createElement(
              RequiredText,
              null,
              'required'
            )
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
                  mr: 1,
                  ml: ix === 0 ? 0 : 1
                },
                groupedField.type && groupedField.title && React.createElement(
                  Paragraph,
                  { m: 0, p: 0 },
                  groupedField.title,
                  groupedField.required && React.createElement(
                    RequiredText,
                    null,
                    'required'
                  )
                ),
                groupedField.type ? renderField(groupedField, onChange, selectStyling) : null
              );
            })
          )
        ) : React.createElement(
          Fragment,
          null,
          field.title && React.createElement(
            Paragraph,
            { m: 0, p: 0, pt: 2, pb: 1 },
            field.title,
            field.required && React.createElement(
              RequiredText,
              null,
              'required'
            )
          ),
          renderField(field, onChange, selectStyling)
        )
      );
    })
  );
};

Fields.displayName = 'fields';
Fields.propTypes = process.env.NODE_ENV !== "production" ? {
  onChange: PropTypes.func,
  fields: PropTypes.array
} : {};

export default withTheme(Fields);