'use strict';

exports.__esModule = true;
exports.renderField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  color: ', ';\n'], ['\n  color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _fi = require('react-icons/fi');

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _async = require('react-select/async');

var _async2 = _interopRequireDefault(_async);

var _creatable = require('react-select/creatable');

var _creatable2 = _interopRequireDefault(_creatable);

var _asyncCreatable = require('react-select/async-creatable');

var _asyncCreatable2 = _interopRequireDefault(_asyncCreatable);

var _SelectStyling = require('./SelectStyling');

var _SelectStyling2 = _interopRequireDefault(_SelectStyling);

var _ = require('.');

var _Flex = require('../Flex');

var _Box = require('../Box');

var _Button = require('../Button');

var _Paragraph = require('../Paragraph');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// ---------------------------

var FiSearchStyled = (0, _styledComponents2.default)(_fi.FiSearch)(_templateObject, function (_ref) {
  var theme = _ref.theme,
      focused = _ref.focused;
  return focused === 'true' ? theme.colors.primary.base : theme.colors.neutral.light;
});

var DropdownIndicator = function DropdownIndicator(props) {
  return _react2.default.createElement(
    _reactSelect.components.DropdownIndicator,
    props,
    _react2.default.createElement(FiSearchStyled, { focused: '' + props.isFocused })
  );
};

var IndicatorSeparator = function IndicatorSeparator(_ref2) {
  var innerProps = _ref2.innerProps;
  return _react2.default.createElement('span', _extends({ style: { backgroundColor: 'transparent' } }, innerProps));
};

// ---------------------------

/**
 * @param {object} field - object that holds the field details.
 * @param {func}   onChange
 */
var renderField = exports.renderField = function renderField(field, _onChange, selectStyling) {
  var charsUsed = field.value ? field.value.length : 0;

  // To reset the margin underneath a field
  if (field.maxLength && !(0, _has3.default)(field, 'props.marginBottom')) {
    field.props = _extends({}, field.props, { marginBottom: 0 });
  }

  if (field.type === 'textarea') {
    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(_.TextareaMd, _extends({
        name: field.name,
        initialValue: field.value,
        label: field.label,
        placeholder: field.placeholder,
        onChange: _onChange.bind(null, field.name),
        context: field.context
      }, field.props)),
      field.maxLength && _react2.default.createElement(
        _.RequiredCharacters,
        null,
        'We recommend using no more than',
        ' ',
        charsUsed !== 0 ? charsUsed + '/' : '',
        field.maxLength,
        ' characters.'
      ),
      field.explain && _react2.default.createElement(
        _.FieldExplanation,
        null,
        field.explain
      )
    );
  }

  if (field.type === 'async-creatable-select') {
    var LabelOrFragment = field.label ? _.Label : _react.Fragment;
    var labelProps = field.label ? { label: field.label, htmlFor: field.name } : {};
    return _react2.default.createElement(
      LabelOrFragment,
      labelProps,
      field.label,
      _react2.default.createElement(_asyncCreatable2.default, _extends({
        name: field.name,
        cacheOptions: false,
        loadOptions: field.options,
        onChange: function onChange(option, _ref3) {
          var action = _ref3.action;

          if (action === 'create-option' || action === 'select-option' || action === 'remove-value' || action === 'pop-value') {
            return _onChange(field.name, {
              target: {
                name: field.name,
                type: field.type,
                value: option,
                action: action
              }
            });
          } else if (action === 'clear') {
            return _onChange(field.name, {
              target: {
                name: field.name,
                type: field.type,
                value: {},
                action: action
              }
            });
          }
        },
        placeholder: field.placeholder || 'Search',
        components: { IndicatorSeparator: IndicatorSeparator, DropdownIndicator: DropdownIndicator }
      }, selectStyling)),
      field.explain && _react2.default.createElement(
        _.FieldExplanation,
        null,
        field.explain
      )
    );
  }

  if (field.type === 'creatable-select') {
    var _LabelOrFragment = field.label ? _.Label : _react.Fragment;
    var _labelProps = field.label ? { label: field.label, htmlFor: field.name } : {};
    return _react2.default.createElement(
      _LabelOrFragment,
      _labelProps,
      field.label,
      _react2.default.createElement(_creatable2.default, _extends({
        isClearable: true,
        clearValue: function clearValue() {
          return _onChange(field.name, { target: { value: '' } });
        },
        onChange: function onChange(option, _ref4) {
          var action = _ref4.action;

          if (action === 'select-option' || action === 'create-option' || action === 'remove-value' || action === 'pop-value') {
            return _onChange(field.name, {
              target: {
                action: action,
                name: field.name,
                type: field.type,
                value: option.value
              }
            });
          }
          if (action === 'clear') {
            return _onChange(field.name, {
              target: {
                action: action,
                type: field.type,
                name: field.name,
                value: ''
              }
            });
          }
        },
        formatCreateLabel: function formatCreateLabel(userInput) {
          return 'Click to add: ' + userInput;
        },
        options: field.options,
        value: { label: field.value, value: field.value }
      }, selectStyling)),
      field.explain && _react2.default.createElement(
        _.FieldExplanation,
        null,
        field.explain
      )
    );
  }

  if (field.type === 'select' || field.type === 'multi-select') {
    var _LabelOrFragment2 = field.label ? _.Label : _react.Fragment;
    var _labelProps2 = field.label ? { label: field.label, htmlFor: field.name } : {};
    return _react2.default.createElement(
      _LabelOrFragment2,
      _labelProps2,
      field.label,
      _react2.default.createElement(_reactSelect2.default, _extends({
        isMulti: field.type === 'multi-select',
        isClearable: field.type === 'multi-select',
        value: field.value,
        onChange: function onChange(option, _ref5) {
          var action = _ref5.action;

          if (action === 'select-option' || action === 'remove-value' || action === 'pop-value') {
            return _onChange(field.name, {
              target: {
                action: action,
                name: field.name,
                type: field.type,

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
              target: {
                action: action,
                name: field.name,
                type: field.type,
                value: field.type === 'multi-select' ? [] : {}
              }
            });
          }
        },
        options: field.options
      }, selectStyling)),
      field.explain && _react2.default.createElement(
        _.FieldExplanation,
        null,
        field.explain
      )
    );
  }

  // Used for location (using Google GeoLocation API)
  if (field.type === 'async-select') {
    var _LabelOrFragment3 = field.label ? _.Label : _react.Fragment;
    var _labelProps3 = field.label ? { label: field.label, htmlFor: field.name } : {};
    return _react2.default.createElement(
      _LabelOrFragment3,
      _labelProps3,
      _react2.default.createElement(_async2.default, _extends({
        cacheOptions: false,
        value: field.value,
        onChange: function onChange(option, _ref6) {
          var action = _ref6.action;

          if (action === 'select-option' || action === 'remove-value' || action === 'pop-value') {
            return _onChange(field.name, {
              target: {
                action: action,
                name: field.name,
                type: field.type,
                value: option
              }
            });
          } else if (action === 'clear') {
            return _onChange(field.name, {
              target: {
                action: action,
                name: field.name,
                type: field.type,
                value: {}
              }
            });
          }
        },
        loadOptions: field.options,
        placeholder: field.placeholder || 'Search',
        components: { IndicatorSeparator: IndicatorSeparator, DropdownIndicator: DropdownIndicator },
        noOptionsMessage: function noOptionsMessage() {
          return 'Start typing to start the search';
        }
      }, selectStyling)),
      field.explain && _react2.default.createElement(
        _.FieldExplanation,
        null,
        field.explain
      )
    );
  }

  if (field.type === 'checkbox') {
    return _react2.default.createElement(_.Checkbox, {
      name: field.name,
      label: field.label,
      checked: field.checked,
      onChange: _onChange.bind(null, field.name)
    });
  }

  if (field.type === 'single-select-button') {
    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(_.SingleSelectButton, {
        name: field.name,
        options: field.options,
        value: field.value,
        onChange: _onChange.bind(null, field.name)
      }),
      field.explain && _react2.default.createElement(
        _.FieldExplanation,
        { marginTop: '4px' },
        field.explain
      )
    );
  }

  if (field.type === 'inline-submit') {
    // if we have a label, wrap input in label add margin-top to input, otherwise no wrapper
    var _LabelOrFragment4 = field.label ? _.Label : _react.Fragment;
    var _labelProps4 = field.label ? { label: field.title ? undefined : field.label, htmlFor: field.name } : {};
    var flexProps = field.label ? { marginTop: 'small', marginBottom: 'base' } : {};
    var inputProps = field.label ? { marginTop: 'none', marginBottom: 'none' } : {};

    return _react2.default.createElement(
      _LabelOrFragment4,
      _labelProps4,
      _react2.default.createElement(
        _Flex.Flex,
        flexProps,
        _react2.default.createElement(_.Input, _extends({
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
    _react2.default.createElement(_.Input, _extends({
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
    field.maxLength && _react2.default.createElement(
      _.RequiredCharacters,
      null,
      'We recommend using no more than',
      ' ',
      charsUsed !== 0 ? charsUsed + '/' : '',
      field.maxLength,
      ' characters.'
    ),
    field.explain && _react2.default.createElement(
      _.FieldExplanation,
      null,
      field.explain
    )
  );
};

// ---------------------------

var Fields = function Fields(_ref7) {
  var onChange = _ref7.onChange,
      fields = _ref7.fields,
      theme = _ref7.theme;

  var selectStyling = (0, _SelectStyling2.default)(theme);

  return _react2.default.createElement(
    _Box.Box,
    null,
    fields.map(function (field) {
      return _react2.default.createElement(
        _Box.Box,
        {
          key: field.name,
          marginBottom: (0, _has3.default)(field, 'marginBottom') ? field.marginBottom : 'large'
        },
        field.type === 'group' ? _react2.default.createElement(
          _react.Fragment,
          null,
          field.title && _react2.default.createElement(
            _Paragraph.Paragraph,
            null,
            field.title
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
                  marginRight: 'xsmall',
                  marginLeft: ix === 0 ? 'none' : 'xsmall'
                },
                groupedField.type ? renderField(groupedField, onChange, selectStyling) : null
              );
            })
          )
        ) : _react2.default.createElement(
          _react.Fragment,
          null,
          field.title && _react2.default.createElement(
            _Paragraph.Paragraph,
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
  onChange: _propTypes2.default.func,
  /**
   * fields config array
   */
  fields: _propTypes2.default.array
} : {};

exports.default = (0, _styledComponents.withTheme)(Fields);