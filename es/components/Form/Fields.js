function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import _has from 'lodash/has';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import Select, { components } from 'react-select';
import Async from 'react-select/async';
import Creatable from 'react-select/creatable';
import AsyncCreatableSelect from 'react-select/async-creatable';
import getSelectStyling from './SelectStyling';
import { Checkbox, Input, Label, TextareaMd, Textarea, PhoneInput, RequiredCharacters, FieldExplanation, SelectButton } from '.';
import { Flex } from '../Flex';
import { Box } from '../Box';
import { Button } from '../Button';
import { Paragraph } from '../Paragraph'; // ---------------------------

var FiChevronDownStyled = styled(FiChevronDown)(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      focused = _ref.focused;
  return focused === 'true' ? theme.colors.form.focused.border : theme.colors.form.border;
});
var FiSearchStyled = styled(FiSearch)(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme,
      focused = _ref2.focused;
  return focused === 'true' ? theme.colors.form.focused.border : theme.colors.form.border;
});

var SearchDropdownIndicator = function SearchDropdownIndicator(props) {
  return /*#__PURE__*/React.createElement(components.DropdownIndicator, props, /*#__PURE__*/React.createElement(FiSearchStyled, {
    focused: "" + props.isFocused
  }));
};

var DropdownIndicator = function DropdownIndicator(props) {
  return /*#__PURE__*/React.createElement(components.DropdownIndicator, props, /*#__PURE__*/React.createElement(FiChevronDownStyled, {
    focused: "" + props.isFocused
  }));
};

var IndicatorSeparator = function IndicatorSeparator(_ref3) {
  var innerProps = _ref3.innerProps;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      backgroundColor: 'transparent'
    }
  }, innerProps));
}; // ---------------------------

/**
 * @param {object} field - object that holds the field details.
 * @param {func}   onChange
 */


export var renderField = function renderField(field, _onChange, selectStyling) {
  var charsUsed = field.value ? field.value.length : 0; // To reset the margin underneath a field

  if (field.maxLength && !_has(field, 'props.marginBottom')) {
    field.props = _extends({}, field.props, {
      marginBottom: 0
    });
  }

  if (field.type === 'textareamd') {
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(TextareaMd, _extends({
      name: field.name,
      initialValue: field.value,
      label: field.label,
      placeholder: field.placeholder,
      onChange: _onChange.bind(null, field.name),
      context: field.context
    }, field.props)), field.maxLength && /*#__PURE__*/React.createElement(RequiredCharacters, null, "We recommend using no more than", ' ', charsUsed !== 0 ? charsUsed + "/" : '', field.maxLength, " characters."), field.explain && /*#__PURE__*/React.createElement(FieldExplanation, null, field.explain));
  }

  if (field.type === 'textarea') {
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Textarea, _extends({
      name: field.name,
      value: field.value,
      label: field.label,
      placeholder: field.placeholder,
      onChange: _onChange.bind(null, field.name),
      context: field.context
    }, field.props)), field.maxLength && /*#__PURE__*/React.createElement(RequiredCharacters, null, "We recommend using no more than", ' ', charsUsed !== 0 ? charsUsed + "/" : '', field.maxLength, " characters."), field.explain && /*#__PURE__*/React.createElement(FieldExplanation, null, field.explain));
  }

  if (field.type === 'creatable-select') {
    var LabelOrFragment = field.label ? Label : Fragment;
    var labelProps = field.label ? {
      label: field.label,
      htmlFor: field.name
    } : {};
    return /*#__PURE__*/React.createElement(LabelOrFragment, labelProps, field.label, /*#__PURE__*/React.createElement(Creatable, _extends({
      isClearable: true,
      clearValue: function clearValue() {
        return _onChange(field.name, {
          target: {
            action: 'clear',
            name: field.name,
            type: field.type,
            value: {}
          }
        });
      },
      onChange: function onChange(option, _ref4) {
        var action = _ref4.action;
        var mockEvent = {
          target: {
            action: action,
            name: field.name,
            type: field.type,
            value: action === 'clear' ? {} : option
          }
        };
        return _onChange(field.name, mockEvent);
      },
      formatCreateLabel: function formatCreateLabel(userInput) {
        return "Click to add: " + userInput;
      },
      options: field.options,
      value: field.value,
      components: {
        IndicatorSeparator: IndicatorSeparator,
        DropdownIndicator: DropdownIndicator
      }
    }, selectStyling)), field.explain && /*#__PURE__*/React.createElement(FieldExplanation, null, field.explain));
  }

  if (field.type === 'select' || field.type === 'multi-select') {
    var _LabelOrFragment = field.label ? Label : Fragment;

    var _labelProps = field.label ? {
      label: field.label,
      htmlFor: field.name
    } : {};

    return /*#__PURE__*/React.createElement(_LabelOrFragment, _labelProps, field.label, /*#__PURE__*/React.createElement(Select, _extends({
      isMulti: field.type === 'multi-select',
      isClearable: field.type === 'multi-select',
      value: field.value,
      onChange: function onChange(option, _ref5) {
        var action = _ref5.action;
        var updatedValue = field.type === 'multi-select' ? option : option;
        var emptyValue = field.type === 'multi-select' ? [] : {};
        var mockEvent = {
          target: {
            action: action,
            name: field.name,
            type: field.type,
            value: action === 'clear' ? emptyValue : updatedValue
          }
        };
        return _onChange(field.name, mockEvent);
      },
      options: field.options,
      components: {
        IndicatorSeparator: IndicatorSeparator,
        DropdownIndicator: DropdownIndicator
      }
    }, selectStyling)), field.explain && /*#__PURE__*/React.createElement(FieldExplanation, null, field.explain));
  } // Used for location (using Google GeoLocation API)


  if (field.type === 'async-select') {
    var _LabelOrFragment2 = field.label ? Label : Fragment;

    var _labelProps2 = field.label ? {
      label: field.label,
      htmlFor: field.name
    } : {};

    return /*#__PURE__*/React.createElement(_LabelOrFragment2, _labelProps2, field.label, /*#__PURE__*/React.createElement(Async, _extends({
      cacheOptions: false,
      value: field.value,
      onChange: function onChange(option, _ref6) {
        var action = _ref6.action;
        var mockEvent = {
          target: {
            action: action,
            name: field.name,
            type: field.type,
            value: action === 'clear' ? {} : option
          }
        };
        return _onChange(field.name, mockEvent);
      },
      loadOptions: field.options,
      components: {
        IndicatorSeparator: IndicatorSeparator,
        DropdownIndicator: SearchDropdownIndicator
      },
      placeholder: field.placeholder || 'Search',
      noOptionsMessage: function noOptionsMessage() {
        return 'Start typing to start the search';
      }
    }, selectStyling)), field.explain && /*#__PURE__*/React.createElement(FieldExplanation, null, field.explain));
  }

  if (field.type === 'async-creatable-select') {
    var _LabelOrFragment3 = field.label ? Label : Fragment;

    var _labelProps3 = field.label ? {
      label: field.label,
      htmlFor: field.name
    } : {};

    return /*#__PURE__*/React.createElement(_LabelOrFragment3, _labelProps3, field.label, /*#__PURE__*/React.createElement(AsyncCreatableSelect, _extends({
      name: field.name,
      cacheOptions: false,
      loadOptions: field.options,
      value: field.value,
      onChange: function onChange(option, _ref7) {
        var action = _ref7.action;
        var mockEvent = {
          target: {
            action: action,
            name: field.name,
            type: field.type,
            value: action === 'clear' ? {} : option
          }
        };
        return _onChange(field.name, mockEvent);
      },
      components: {
        IndicatorSeparator: IndicatorSeparator,
        DropdownIndicator: SearchDropdownIndicator
      },
      placeholder: field.placeholder || 'Search'
    }, selectStyling)), field.explain && /*#__PURE__*/React.createElement(FieldExplanation, null, field.explain));
  }

  if (field.type === 'checkbox') {
    return /*#__PURE__*/React.createElement(Checkbox, {
      name: field.name,
      label: field.label,
      checked: field.checked,
      onChange: _onChange.bind(null, field.name)
    });
  }

  if (field.type === 'phoneinput') {
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(PhoneInput, _extends({
      value: field.value || '',
      name: field.name,
      placeholder: field.placeholder,
      label: field.label,
      onChange: _onChange.bind(null, field.name),
      context: field.context,
      overrideBg: field.overrideBg
    }, field.props)), field.maxLength && /*#__PURE__*/React.createElement(RequiredCharacters, null, "We recommend using no more than", ' ', charsUsed !== 0 ? charsUsed + "/" : '', field.maxLength, " characters."), field.explain && /*#__PURE__*/React.createElement(FieldExplanation, null, field.explain));
  }

  if (field.type === 'single-select-button' || field.type === 'select-button') {
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(SelectButton, {
      name: field.name,
      options: field.options,
      value: field.value,
      onChange: _onChange.bind(null, field.name),
      isMultiSelect: field.type === 'select-button'
    }), field.explain && /*#__PURE__*/React.createElement(FieldExplanation, {
      marginTop: "4px"
    }, field.explain));
  }

  if (field.type === 'inline-submit') {
    // if we have a label, wrap input in label add margin-top to input, otherwise no wrapper
    var _LabelOrFragment4 = field.label ? Label : Fragment;

    var _labelProps4 = field.label ? {
      label: field.title ? undefined : field.label,
      htmlFor: field.name
    } : {};

    var flexProps = field.label ? {
      marginTop: 'small',
      marginBottom: 'base'
    } : {};
    var inputProps = field.label ? {
      marginTop: 'none',
      marginBottom: 'none'
    } : {};
    return /*#__PURE__*/React.createElement(_LabelOrFragment4, _labelProps4, /*#__PURE__*/React.createElement(Flex, flexProps, /*#__PURE__*/React.createElement(Input, _extends({
      type: field.type,
      value: field.value || '',
      name: field.name,
      onChange: _onChange.bind(null, field.name),
      context: field.context
    }, inputProps)), /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      marginLeft: "small",
      disabled: field.isSubmitDisabled
    }, field.submitText || 'Submit')));
  }
  /**
   * Default is a regular input field.
   */


  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Input, _extends({
    type: field.type,
    value: field.value || '',
    name: field.name,
    placeholder: field.placeholder,
    label: field.label,
    onChange: _onChange.bind(null, field.name),
    context: field.context,
    renderWidth: field.renderWidth || 'full',
    icon: field.icon
  }, field.props)), field.maxLength && /*#__PURE__*/React.createElement(RequiredCharacters, null, "We recommend using no more than", ' ', charsUsed !== 0 ? charsUsed + "/" : '', field.maxLength, " characters."), field.explain && /*#__PURE__*/React.createElement(FieldExplanation, null, field.explain));
}; // ---------------------------

var Fields = function Fields(_ref8) {
  var onChange = _ref8.onChange,
      fields = _ref8.fields,
      theme = _ref8.theme;
  var selectStyling = getSelectStyling(theme);
  return /*#__PURE__*/React.createElement(Box, null, fields.map(function (field) {
    return /*#__PURE__*/React.createElement(Box, {
      key: field.name,
      marginBottom: _has(field, 'marginBottom') ? field.marginBottom : 'large'
    }, field.type === 'group' ? /*#__PURE__*/React.createElement(Fragment, null, field.title && /*#__PURE__*/React.createElement(Paragraph, null, field.title), /*#__PURE__*/React.createElement(Flex, null, field.list.length > 0 && field.list.map(function (groupedField, ix) {
      return /*#__PURE__*/React.createElement(Box, {
        key: field.name + "-" + groupedField.name,
        flex: 1,
        marginRight: "xsmall",
        marginLeft: ix === 0 ? 'none' : 'xsmall'
      }, groupedField.type ? renderField(groupedField, onChange, selectStyling) : null);
    }))) : /*#__PURE__*/React.createElement(Fragment, null, field.title && /*#__PURE__*/React.createElement(Paragraph, {
      paddingTop: "small",
      paddingBottom: "xsmall"
    }, field.title), renderField(field, onChange, selectStyling)));
  }));
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