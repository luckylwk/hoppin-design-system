var _this = this;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: block;\n  width: 100%;\n\n  background: transparent;\n\n  margin: 0;\n  padding: 2px 8px;\n\n  border: 0px;\n  border-radius: 0px;\n  box-shadow: 0px;\n'], ['\n  display: block;\n  width: 100%;\n\n  background: transparent;\n\n  margin: 0;\n  padding: 2px 8px;\n\n  border: 0px;\n  border-radius: 0px;\n  box-shadow: 0px;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin: -2px 2px;\n  padding: 4px 4px 2px 4px;\n\n  outline: none;\n  appearance: none;\n\n  background: ', ';\n  color: white;\n\n  border-radius: ', ';\n\n  cursor: pointer;\n'], ['\n  margin: -2px 2px;\n  padding: 4px 4px 2px 4px;\n\n  outline: none;\n  appearance: none;\n\n  background: ', ';\n  color: white;\n\n  border-radius: ', ';\n\n  cursor: pointer;\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _intersection from 'lodash/intersection';
import _difference from 'lodash/difference';

import { FiCheck } from 'react-icons/fi';

import { Flex } from '../Flex';
import { Box } from '../Box';
import { InputField } from '.';
import { ButtonGroup, ButtonSelect } from '../Button';

// ---------------------------

var InputStyled = styled(InputField)(_templateObject);

var SpanStyled = styled.span(_templateObject2, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.neutral.darker;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.radii.xsmall;
});

// ---------------------------

var getIsSelected = function getIsSelected(isMultiSelect, value, option) {
  if (!value) return false;
  if (isMultiSelect) return value.indexOf(option.value) > -1;
  return value === option.value;
};

var splitValueWithOther = function splitValueWithOther(compositeValue, optionValues, isMultiSelect) {
  if (isMultiSelect) {
    var options_value = _intersection(optionValues, compositeValue);
    var other_value = _difference(compositeValue, options_value);
    if (other_value.length === 0) {
      return { value: compositeValue, other: null };
    } else {
      return { value: options_value, other: other_value };
    }
  } else {
    if (optionValues.indexOf(compositeValue) > -1) {
      return { value: compositeValue, other: null };
    } else {
      return { value: null, other: compositeValue };
    }
  }
};

// ---------------------------

var SelectButton = function SelectButton(_ref3) {
  var name = _ref3.name,
      type = _ref3.type,
      options = _ref3.options,
      valueComposite = _ref3.value,
      onChange = _ref3.onChange,
      isMultiSelect = _ref3.isMultiSelect,
      enableOther = _ref3.enableOther,
      rest = _objectWithoutProperties(_ref3, ['name', 'type', 'options', 'value', 'onChange', 'isMultiSelect', 'enableOther']);

  var _splitValueWithOther = splitValueWithOther(valueComposite, options.map(function (o) {
    return o.value;
  }), isMultiSelect),
      value = _splitValueWithOther.value,
      other = _splitValueWithOther.other;

  var _useState = useState(other ? true : false),
      otherSelected = _useState[0],
      setOtherSelected = _useState[1];

  var _useState2 = useState(other),
      otherValue = _useState2[0],
      setOtherValue = _useState2[1];

  var _useState3 = useState(false),
      otherActive = _useState3[0],
      setOtherActive = _useState3[1];

  var onToggleOther = function onToggleOther() {
    setOtherActive(true);
  };

  var onChangeOther = function onChangeOther(event) {
    setOtherValue(event.target.value);
  };

  var onBlurOther = function onBlurOther(event) {
    if (otherValue && otherValue.length > 0) {
      setOtherSelected(true);
      if (isMultiSelect) {
        onChange({ target: { name: name, type: type, value: [].concat(value, [otherValue]) } }, event);
      } else {
        onChange({ target: { name: name, type: type, value: otherValue } }, event);
      }
    } else {
      setOtherValue(null);
      setOtherSelected(false);
      onChange({ target: { name: name, type: type, value: value } }, event);
    }
    setOtherActive(false);
  };

  var onSubmitOther = function onSubmitOther() {};

  var onSelect = function onSelect(_ref4, event) {
    var _ref4$target = _ref4.target,
        select = _ref4$target.select,
        isSelected = _ref4$target.isSelected;

    if (isMultiSelect) {
      var newValue = [].concat(value);
      if (isSelected) {
        newValue.splice(newValue.indexOf(select), 1);
      } else {
        newValue.push(select);
      }
      if (otherValue && otherValue.length > 0) {
        newValue = [].concat(newValue, [otherValue]);
      }
      onChange({ target: { name: name, type: type, value: newValue } }, event);
    } else {
      onChange({ target: { name: name, type: type, value: select } }, event);
      setOtherSelected(false);
      setOtherValue(null);
    }
  };

  return React.createElement(
    ButtonGroup,
    rest,
    options.map(function (option, ix) {
      var isSelected = getIsSelected(isMultiSelect, value, option);
      return React.createElement(
        ButtonSelect,
        {
          key: type + '-' + name + '-' + option.value,
          type: 'button',
          onClick: onSelect.bind(_this, {
            target: { select: option.value, isSelected: isSelected }
          }),
          selected: isSelected,
          marginRight: ix > options.length - 1 ? 'small' : 'none',
          marginBottom: 'small'
        },
        option.label
      );
    }),
    enableOther && React.createElement(
      ButtonSelect,
      {
        type: 'button',
        marginBottom: 'small',
        paddingX: otherActive ? 'xsmall' : 'base',
        paddingY: otherActive ? 'xsmall' : 'small',
        onClick: onToggleOther,
        selected: otherSelected && !otherActive
      },
      otherActive ? React.createElement(
        Flex,
        { alignItems: 'center' },
        React.createElement(
          Box,
          { flexGrow: '1' },
          React.createElement(InputStyled, {
            name: 'other',
            value: otherValue || '',
            onChange: onChangeOther,
            onBlur: onBlurOther
          })
        ),
        React.createElement(
          SpanStyled,
          { onClick: onSubmitOther },
          React.createElement(FiCheck, { size: 16 })
        )
      ) : other ? 'Other: ' + other : 'Other'
    )
  );
};

SelectButton.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  isMultiSelect: PropTypes.bool,
  enableOther: PropTypes.bool
} : {};

SelectButton.defaultProps = {
  type: 'select-button',
  isMultiSelect: false,
  enableOther: false
};

SelectButton.displayName = 'SelectButton';

// ---------------------------

var SingleSelectButton = function SingleSelectButton(props) {
  return React.createElement(SelectButton, props);
};

SingleSelectButton.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.string
} : {};

SingleSelectButton.defaultProps = {
  type: 'single-select-button'
};

SingleSelectButton.displayName = 'SingleSelectButton';

// ---------------------------

export { SelectButton, SingleSelectButton };

export default SelectButton;