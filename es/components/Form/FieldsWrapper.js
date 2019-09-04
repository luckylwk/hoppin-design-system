var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', ' ', ';\n'], ['\n  ', ' ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n\n  margin-left: 6px;\n\n  font-size: 12px;\n  line-height: 10px;\n  font-weight: 600;\n  color: rgba(255, 4, 103, 1);\n\n  border-bottom: 1px solid rgba(255, 4, 103, 0.25);\n'], ['\n  display: inline-block;\n\n  margin-left: 6px;\n\n  font-size: 12px;\n  line-height: 10px;\n  font-weight: 600;\n  color: rgba(255, 4, 103, 1);\n\n  border-bottom: 1px solid rgba(255, 4, 103, 0.25);\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  font-family: ', ';\n  margin: 0;\n  padding: 3px;\n\n  font-size: 12px;\n  line-height: 12px;\n  color: #888;\n\n  text-align: right;\n'], ['\n  font-family: ', ';\n  margin: 0;\n  padding: 3px;\n\n  font-size: 12px;\n  line-height: 12px;\n  color: #888;\n\n  text-align: right;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  border-radius: ', ';\n\n  padding: ', ';\n  padding-left: ', ';\n\n  background: ', ';\n\n  border: 2px dotted\n    ', ';\n'], ['\n  border-radius: ', ';\n\n  padding: ', ';\n  padding-left: ', ';\n\n  background: ', ';\n\n  border: 2px dotted\n    ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { Fragment } from 'react';
import styled from 'styled-components';
import has from 'lodash/has';

// Input components...
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Select from 'react-select';
import Creatable from 'react-select/lib/Creatable';
import AsyncSelect from 'react-select/lib/Async';

import SelectStyling from 'common/components/Form/SelectStyling';
import { Checkbox } from 'common/components/Form';

import MoveIcon from 'react-feather/dist/icons/move';

import { Flex, Box } from 'common/components/FlexBox';
import { Button } from 'common/components/Button';
import { Paragraph } from 'common/components/Text';
import { InputFancy, TextAreaDraftJS } from 'common/components/Form';
import { convertHTMLToText } from 'common/utils';

/**
 * Form fields
 */

/**
 * Wrapper for an individual field.
 */
export var FieldWrapper = styled(Box)(_templateObject, function (props) {
  return !props.isSortable ? '' : '\n    user-select: "none";\n    display: flex;\n    align-items: center;\n    padding: 5px;\n\n    & > div {\n      flex: 1;\n    }\n  ';
}, function (props) {
  return !props.isDragging ? '' : '\n    width: 100%;\n\n    @media (min-width: 832px) {}\n  ';
});

var RequiredText = styled.span(_templateObject2);

var RequiredCharacters = styled.p(_templateObject3, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
});

/**
 * @param {object} field - object that holds the field details.
 * @param {func}   onChange
 * @param {string} type
 */
var renderField = function renderField(field, _onChange, type) {
  var plainTextValue = convertHTMLToText(field.value);

  // const charsLeft = plainTextValue
  //   ? field.maxLength - plainTextValue.length
  //   : field.maxLength;
  var charsUsed = plainTextValue ? plainTextValue.length : 0;

  if (field.type === 'textarea') {
    return React.createElement(
      Fragment,
      null,
      React.createElement(TextAreaDraftJS, {
        name: field.name,
        value: field.value,
        label: field.label ? field.label : field.title,
        onTextChange: _onChange.bind(null, field.name),
        renderType: type || 'primary'
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
    return React.createElement(Creatable, {
      isClearable: true,
      clearValue: function clearValue() {
        return _onChange(field.name, { target: { value: '' } });
      },
      onChange: function onChange(option, _ref2) {
        var action = _ref2.action;

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
      value: { label: field.value, value: field.value },
      styles: SelectStyling
    });
  }

  if (field.type === 'select' || field.type === 'multi-select') {
    return React.createElement(Select, {
      isMulti: field.type === 'multi-select',
      isClearable: field.type === 'multi-select',
      value: field.value,
      onChange: function onChange(option, _ref3) {
        var action = _ref3.action;

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
      options: field.options,
      styles: SelectStyling
    });
  }

  // Used for location (using Google GeoLocation API)
  if (field.type === 'async-select') {
    return React.createElement(AsyncSelect, {
      cacheOptions: false,
      value: field.value,
      onChange: function onChange(option, _ref4) {
        var action = _ref4.action;

        if (action === 'select-option') {
          return _onChange(field.name, {
            target: {
              value: option
            }
          });
        }
      },
      loadOptions: field.options,
      styles: SelectStyling,
      placeholder: 'Search...',
      noOptionsMessage: function noOptionsMessage() {
        return 'Start typing to start the search';
      }
    });
  }

  if (field.type === 'checkbox') {
    return React.createElement(
      Fragment,
      null,
      React.createElement(
        Flex,
        null,
        React.createElement(
          Box,
          { pt: 1 },
          React.createElement(Checkbox, {
            name: field.name,
            checked: field.value,
            onChange: _onChange.bind(null, field.name),
            type: type || 'primary'
          })
        ),
        field.label && field.label !== '' && React.createElement(
          Box,
          { ml: 2 },
          React.createElement(
            Paragraph,
            null,
            field.label
          )
        )
      )
    );
  }

  if (field.type === 'inline-text') {
    var inlineChildren = React.createElement(
      Button,
      { type: 'primary', py: 3, my: 2, disabled: field.isSubmitDisabled },
      field.submitText || 'Submit'
    );

    return React.createElement(
      Fragment,
      null,
      React.createElement(InputFancy, {
        type: field.type,
        value: field.value || '',
        name: field.name,
        label: field.label ? field.label : field.title,
        handleOnChange: _onChange.bind(null, field.name),
        renderType: type || 'primary',
        renderWidth: field.renderWidth || 'full',
        inlineChildren: inlineChildren
      })
    );
  }

  /**
   * Default is a regular input field.
   */
  return React.createElement(
    Fragment,
    null,
    React.createElement(InputFancy, {
      type: field.type,
      value: field.value || '',
      name: field.name,
      label: field.label ? field.label : field.title,
      handleOnChange: _onChange.bind(null, field.name),
      renderType: type || 'primary',
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

var DraggableList = styled(Box)(_templateObject4, function (props) {
  return props.theme.borders.small;
}, function (props) {
  return props.theme.space[3];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.isDraggingOver ? props.theme.backgrounds.white_off : 'transparent';
}, function (props) {
  return props.isDraggingOver ? props.theme.colors.grey_light : 'transparent';
});

/**
 *
 */
export var FieldsWrapper = function FieldsWrapper(_ref5) {
  var isSortable = _ref5.isSortable,
      onChangeSort = _ref5.onChangeSort,
      onChange = _ref5.onChange,
      fields = _ref5.fields,
      type = _ref5.type;
  return React.createElement(
    Box,
    null,
    !isSortable && fields.map(function (field) {
      return React.createElement(
        FieldWrapper,
        {
          key: field.name,
          mb: has(field, 'marginBottom') ? field.marginBottom : 4
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
                groupedField.type ? renderField(groupedField, onChange, groupedField.type) : null
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
          renderField(field, onChange, type)
        )
      );
    }),
    isSortable && React.createElement(
      DragDropContext,
      { onDragEnd: onChangeSort },
      React.createElement(
        Droppable,
        { droppableId: 'droppable' },
        function (provided, snapshot) {
          return React.createElement(
            DraggableList,
            {
              ref: provided.innerRef,
              isDraggingOver: snapshot.isDraggingOver
            },
            fields.map(function (field, index) {
              return React.createElement(
                Draggable,
                {
                  key: field.name,
                  draggableId: field.name,
                  index: index
                },
                function (provided, snapshot) {
                  return React.createElement(
                    'div',
                    _extends({
                      ref: provided.innerRef
                    }, provided.draggableProps, provided.dragHandleProps, {
                      style: provided.draggableProps.style
                    }),
                    React.createElement(
                      FieldWrapper,
                      {
                        key: field.name,
                        my: 2,
                        isSortable: true,
                        isDragging: snapshot.isDragging
                      },
                      React.createElement(MoveIcon, {
                        size: 16,
                        style: { marginLeft: '4px', marginRight: '10px' }
                      }),
                      renderField(field, onChange, type)
                    )
                  );
                }
              );
            }),
            provided.placeholder
          );
        }
      )
    )
  );
};