'use strict';

exports.__esModule = true;
exports.renderField = exports.RequiredCharacters = exports.RequiredText = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n\n  margin-left: 6px;\n\n  font-size: 12px;\n  line-height: 10px;\n  font-weight: 600;\n  color: ', ';\n'], ['\n  display: inline-block;\n\n  margin-left: 6px;\n\n  font-size: 12px;\n  line-height: 10px;\n  font-weight: 600;\n  color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  font-family: ', ';\n  margin: 0;\n  padding: 3px;\n\n  font-size: 12px;\n  line-height: 12px;\n  color: ', ';\n\n  text-align: right;\n'], ['\n  font-family: ', ';\n  margin: 0;\n  padding: 3px;\n\n  font-size: 12px;\n  line-height: 12px;\n  color: ', ';\n\n  text-align: right;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _async = require('react-select/async');

var _async2 = _interopRequireDefault(_async);

var _creatable = require('react-select/creatable');

var _creatable2 = _interopRequireDefault(_creatable);

var _selectStyling = require('./selectStyling');

var _selectStyling2 = _interopRequireDefault(_selectStyling);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _TextareaMd = require('./TextareaMd');

var _TextareaMd2 = _interopRequireDefault(_TextareaMd);

var _Flex = require('../Flex');

var _Box = require('../Box');

var _Button = require('../Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// Input components...

// import Calendar from './Calendar';


/**
 * Form fields
 */

var RequiredText = exports.RequiredText = _styledComponents2.default.span(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary.base;
});

var RequiredCharacters = exports.RequiredCharacters = _styledComponents2.default.p(_templateObject2, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.secondary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.neutral.light;
});

/**
 * @param {object} field - object that holds the field details.
 * @param {func}   onChange
 */
var renderField = exports.renderField = function renderField(field, _onChange, selectStyling) {
  // const charsLeft = plainTextValue
  //   ? field.maxLength - plainTextValue.length
  //   : field.maxLength;
  var charsUsed = field.value ? field.value.length : 0;

  if (field.type === 'textarea') {
    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(_TextareaMd2.default, {
        name: field.name,
        initialValue: field.value,
        label: field.title ? undefined : field.label,
        onChange: _onChange.bind(null, field.name),
        context: field.context
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
    return _react2.default.createElement(_creatable2.default, _extends({
      isClearable: true,
      clearValue: function clearValue() {
        return _onChange(field.name, { target: { value: '' } });
      },
      onChange: function onChange(option, _ref4) {
        var action = _ref4.action;

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
    return _react2.default.createElement(_reactSelect2.default, _extends({
      isMulti: field.type === 'multi-select',
      isClearable: field.type === 'multi-select',
      value: field.value,
      onChange: function onChange(option, _ref5) {
        var action = _ref5.action;

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
    return _react2.default.createElement(_async2.default, _extends({
      cacheOptions: false,
      value: field.value,
      onChange: function onChange(option, _ref6) {
        var action = _ref6.action;

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
    return _react2.default.createElement(_Checkbox2.default, {
      name: field.name,
      label: field.label,
      checked: field.checked,
      onChange: _onChange.bind(null, field.name),
      context: field.context
    });
  }

  if (field.type === 'inline-submit') {
    // if we have a label, wrap input in label add margin-top to input, otherwise no wrapper
    var LabelOrFragment = field.label ? _Label2.default : _react.Fragment;
    var labelProps = field.label ? { label: field.title ? undefined : field.label, htmlFor: field.name } : {};
    var flexProps = field.label ? { marginTop: 'small', marginBottom: 'base' } : {};
    var inputProps = field.label ? { marginTop: 'none', marginBottom: 'none' } : {};

    return _react2.default.createElement(
      LabelOrFragment,
      labelProps,
      _react2.default.createElement(
        _Flex.Flex,
        flexProps,
        _react2.default.createElement(_Input2.default, _extends({
          type: field.type,
          value: field.value || '',
          name: field.name,
          onChange: _onChange.bind(null, field.name),
          context: field.context
        }, inputProps)),
        _react2.default.createElement(
          _Button.Button,
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
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_Input2.default, {
      type: field.type,
      value: field.value || '',
      name: field.name,
      label: field.title ? undefined : field.label,
      onChange: _onChange.bind(null, field.name),
      context: field.context,
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

var Fields = function Fields(_ref7) {
  var onChange = _ref7.onChange,
      fields = _ref7.fields,
      theme = _ref7.theme;

  var selectStyling = (0, _selectStyling2.default)(theme);

  return _react2.default.createElement(
    _Box.Box,
    null,
    fields.map(function (field) {
      return _react2.default.createElement(
        _Box.Box,
        {
          key: field.name,
          mb: (0, _has3.default)(field, 'marginBottom') ? field.marginBottom : 4
        },
        field.type === 'group' ? _react2.default.createElement(
          _react.Fragment,
          null,
          field.title && _react2.default.createElement(
            _Label2.default,
            null,
            field.title,
            field.required && _react2.default.createElement(
              RequiredText,
              null,
              '*required'
            )
          ),
          _react2.default.createElement(
            _Flex.Flex,
            null,
            field.list.length > 0 && field.list.map(function (groupedField, ix) {
              return _react2.default.createElement(
                _Box.Box,
                {
                  key: field.name + '-' + groupedField.name,
                  flex: 1,
                  mr: 1,
                  ml: ix === 0 ? 0 : 1
                },
                groupedField.type && groupedField.title && _react2.default.createElement(
                  _Label2.default,
                  null,
                  groupedField.title,
                  groupedField.required && _react2.default.createElement(
                    RequiredText,
                    null,
                    '*required'
                  )
                ),
                groupedField.type ? renderField(groupedField, onChange, selectStyling) : null
              );
            })
          )
        ) : _react2.default.createElement(
          _react.Fragment,
          null,
          field.title && _react2.default.createElement(
            _Label2.default,
            { paddingTop: 'small', paddingBottom: 'xsmall' },
            field.title,
            field.required && _react2.default.createElement(
              RequiredText,
              null,
              '*required'
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
  /**
   * callback to be called when a field updates fn(fieldName, event)
   */
  onChange: _propTypes2.default.func,
  /**
   * fields config array
   */
  fields: _propTypes2.default.array
} : {};

exports.default = (0, _styledComponents.withTheme)(Fields);