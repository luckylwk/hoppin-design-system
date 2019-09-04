'use strict';

exports.__esModule = true;
exports.FieldsWrapper = exports.FieldWrapper = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', ' ', ';\n'], ['\n  ', ' ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n\n  margin-left: 6px;\n\n  font-size: 12px;\n  line-height: 10px;\n  font-weight: 600;\n  color: rgba(255, 4, 103, 1);\n\n  border-bottom: 1px solid rgba(255, 4, 103, 0.25);\n'], ['\n  display: inline-block;\n\n  margin-left: 6px;\n\n  font-size: 12px;\n  line-height: 10px;\n  font-weight: 600;\n  color: rgba(255, 4, 103, 1);\n\n  border-bottom: 1px solid rgba(255, 4, 103, 0.25);\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  font-family: ', ';\n  margin: 0;\n  padding: 3px;\n\n  font-size: 12px;\n  line-height: 12px;\n  color: #888;\n\n  text-align: right;\n'], ['\n  font-family: ', ';\n  margin: 0;\n  padding: 3px;\n\n  font-size: 12px;\n  line-height: 12px;\n  color: #888;\n\n  text-align: right;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  border-radius: ', ';\n\n  padding: ', ';\n  padding-left: ', ';\n\n  background: ', ';\n\n  border: 2px dotted\n    ', ';\n'], ['\n  border-radius: ', ';\n\n  padding: ', ';\n  padding-left: ', ';\n\n  background: ', ';\n\n  border: 2px dotted\n    ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _has = require('lodash/has');

var _has2 = _interopRequireDefault(_has);

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _Creatable = require('react-select/lib/Creatable');

var _Creatable2 = _interopRequireDefault(_Creatable);

var _Async = require('react-select/lib/Async');

var _Async2 = _interopRequireDefault(_Async);

var _SelectStyling = require('common/components/Form/SelectStyling');

var _SelectStyling2 = _interopRequireDefault(_SelectStyling);

var _Form = require('common/components/Form');

var _move = require('react-feather/dist/icons/move');

var _move2 = _interopRequireDefault(_move);

var _FlexBox = require('common/components/FlexBox');

var _Button = require('common/components/Button');

var _Text = require('common/components/Text');

var _utils = require('common/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// Input components...


/**
 * Form fields
 */

/**
 * Wrapper for an individual field.
 */
var FieldWrapper = exports.FieldWrapper = (0, _styledComponents2.default)(_FlexBox.Box)(_templateObject, function (props) {
  return !props.isSortable ? '' : '\n    user-select: "none";\n    display: flex;\n    align-items: center;\n    padding: 5px;\n\n    & > div {\n      flex: 1;\n    }\n  ';
}, function (props) {
  return !props.isDragging ? '' : '\n    width: 100%;\n\n    @media (min-width: 832px) {}\n  ';
});

var RequiredText = _styledComponents2.default.span(_templateObject2);

var RequiredCharacters = _styledComponents2.default.p(_templateObject3, function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.secondary;
});

/**
 * @param {object} field - object that holds the field details.
 * @param {func}   onChange
 * @param {string} type
 */
var renderField = function renderField(field, _onChange, type) {
  var plainTextValue = (0, _utils.convertHTMLToText)(field.value);

  // const charsLeft = plainTextValue
  //   ? field.maxLength - plainTextValue.length
  //   : field.maxLength;
  var charsUsed = plainTextValue ? plainTextValue.length : 0;

  if (field.type === 'textarea') {
    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(_Form.TextAreaDraftJS, {
        name: field.name,
        value: field.value,
        label: field.label ? field.label : field.title,
        onTextChange: _onChange.bind(null, field.name),
        renderType: type || 'primary'
      }),
      field.maxLength && _react2.default.createElement(
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
    return _react2.default.createElement(_Creatable2.default, {
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
      styles: _SelectStyling2.default
    });
  }

  if (field.type === 'select' || field.type === 'multi-select') {
    return _react2.default.createElement(_reactSelect2.default, {
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
      styles: _SelectStyling2.default
    });
  }

  // Used for location (using Google GeoLocation API)
  if (field.type === 'async-select') {
    return _react2.default.createElement(_Async2.default, {
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
      styles: _SelectStyling2.default,
      placeholder: 'Search...',
      noOptionsMessage: function noOptionsMessage() {
        return 'Start typing to start the search';
      }
    });
  }

  if (field.type === 'checkbox') {
    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        _FlexBox.Flex,
        null,
        _react2.default.createElement(
          _FlexBox.Box,
          { pt: 1 },
          _react2.default.createElement(_Form.Checkbox, {
            name: field.name,
            checked: field.value,
            onChange: _onChange.bind(null, field.name),
            type: type || 'primary'
          })
        ),
        field.label && field.label !== '' && _react2.default.createElement(
          _FlexBox.Box,
          { ml: 2 },
          _react2.default.createElement(
            _Text.Paragraph,
            null,
            field.label
          )
        )
      )
    );
  }

  if (field.type === 'inline-text') {
    var inlineChildren = _react2.default.createElement(
      _Button.Button,
      { type: 'primary', py: 3, my: 2, disabled: field.isSubmitDisabled },
      field.submitText || 'Submit'
    );

    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(_Form.InputFancy, {
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
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_Form.InputFancy, {
      type: field.type,
      value: field.value || '',
      name: field.name,
      label: field.label ? field.label : field.title,
      handleOnChange: _onChange.bind(null, field.name),
      renderType: type || 'primary',
      renderWidth: field.renderWidth || 'full'
    }),
    field.maxLength && _react2.default.createElement(
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

var DraggableList = (0, _styledComponents2.default)(_FlexBox.Box)(_templateObject4, function (props) {
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
var FieldsWrapper = exports.FieldsWrapper = function FieldsWrapper(_ref5) {
  var isSortable = _ref5.isSortable,
      onChangeSort = _ref5.onChangeSort,
      onChange = _ref5.onChange,
      fields = _ref5.fields,
      type = _ref5.type;
  return _react2.default.createElement(
    _FlexBox.Box,
    null,
    !isSortable && fields.map(function (field) {
      return _react2.default.createElement(
        FieldWrapper,
        {
          key: field.name,
          mb: (0, _has2.default)(field, 'marginBottom') ? field.marginBottom : 4
        },
        field.type === 'group' ? _react2.default.createElement(
          _react.Fragment,
          null,
          field.title && _react2.default.createElement(
            _Text.Paragraph,
            { m: 0, p: 0 },
            field.title,
            field.required && _react2.default.createElement(
              RequiredText,
              null,
              'required'
            )
          ),
          _react2.default.createElement(
            _FlexBox.Flex,
            null,
            field.list.length > 0 && field.list.map(function (groupedField, ix) {
              return _react2.default.createElement(
                _FlexBox.Box,
                {
                  key: field.name + '-' + groupedField.name,
                  flex: 1,
                  mr: 1,
                  ml: ix === 0 ? 0 : 1
                },
                groupedField.type && groupedField.title && _react2.default.createElement(
                  _Text.Paragraph,
                  { m: 0, p: 0 },
                  groupedField.title,
                  groupedField.required && _react2.default.createElement(
                    RequiredText,
                    null,
                    'required'
                  )
                ),
                groupedField.type ? renderField(groupedField, onChange, groupedField.type) : null
              );
            })
          )
        ) : _react2.default.createElement(
          _react.Fragment,
          null,
          field.title && _react2.default.createElement(
            _Text.Paragraph,
            { m: 0, p: 0, pt: 2, pb: 1 },
            field.title,
            field.required && _react2.default.createElement(
              RequiredText,
              null,
              'required'
            )
          ),
          renderField(field, onChange, type)
        )
      );
    }),
    isSortable && _react2.default.createElement(
      _reactBeautifulDnd.DragDropContext,
      { onDragEnd: onChangeSort },
      _react2.default.createElement(
        _reactBeautifulDnd.Droppable,
        { droppableId: 'droppable' },
        function (provided, snapshot) {
          return _react2.default.createElement(
            DraggableList,
            {
              ref: provided.innerRef,
              isDraggingOver: snapshot.isDraggingOver
            },
            fields.map(function (field, index) {
              return _react2.default.createElement(
                _reactBeautifulDnd.Draggable,
                {
                  key: field.name,
                  draggableId: field.name,
                  index: index
                },
                function (provided, snapshot) {
                  return _react2.default.createElement(
                    'div',
                    _extends({
                      ref: provided.innerRef
                    }, provided.draggableProps, provided.dragHandleProps, {
                      style: provided.draggableProps.style
                    }),
                    _react2.default.createElement(
                      FieldWrapper,
                      {
                        key: field.name,
                        my: 2,
                        isSortable: true,
                        isDragging: snapshot.isDragging
                      },
                      _react2.default.createElement(_move2.default, {
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