var _this = this;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: -2px 2px;\n  padding: 4px 4px 2px 4px;\n\n  outline: none;\n  appearance: none;\n\n  background: ", ";\n  color: white;\n\n  border-radius: ", ";\n\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100%;\n\n  background: transparent;\n\n  margin: 0;\n  padding: 2px 8px;\n\n  border: 0px;\n  border-radius: 0px;\n  box-shadow: 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _shuffle from 'lodash/shuffle';
import _intersection from 'lodash/intersection';
import _difference from 'lodash/difference';
import { FiCheck } from 'react-icons/fi';
import { Flex } from '../Flex';
import { Box } from '../Box';
import { InputField } from '.';
import { ButtonGroup, ButtonSelect } from '../Button'; // ---------------------------

var InputFieldStyled = styled(InputField)(_templateObject());
var SpanStyled = styled.span(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.neutral.darker;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.radii.xsmall;
}); // ---------------------------

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
      return {
        value: compositeValue,
        other: null
      };
    } else {
      return {
        value: options_value,
        other: other_value
      };
    }
  } else {
    if (optionValues.indexOf(compositeValue) > -1) {
      return {
        value: compositeValue,
        other: null
      };
    } else {
      return {
        value: null,
        other: compositeValue
      };
    }
  }
}; // ---------------------------


var SelectButton = function SelectButton(_ref3) {
  var name = _ref3.name,
      type = _ref3.type,
      options = _ref3.options,
      valueComposite = _ref3.value,
      onChange = _ref3.onChange,
      isMultiSelect = _ref3.isMultiSelect,
      enableOther = _ref3.enableOther,
      enableWildcard = _ref3.enableWildcard,
      wildcardText = _ref3.wildcardText,
      randomizeOptions = _ref3.randomizeOptions,
      numColumns = _ref3.numColumns,
      maxSelect = _ref3.maxSelect,
      rest = _objectWithoutPropertiesLoose(_ref3, ["name", "type", "options", "value", "onChange", "isMultiSelect", "enableOther", "enableWildcard", "wildcardText", "randomizeOptions", "numColumns", "maxSelect"]);

  var _splitValueWithOther = splitValueWithOther(valueComposite, options.map(function (o) {
    return o.value;
  }), isMultiSelect),
      value = _splitValueWithOther.value,
      other = _splitValueWithOther.other;
  /** Optional shuffling of options */


  var _useState = useState(!enableOther && !enableWildcard && randomizeOptions ? _shuffle(options) : options),
      optionsArray = _useState[0];
  /** Other related state and functions */


  var _useState2 = useState(other ? true : false),
      otherSelected = _useState2[0],
      setOtherSelected = _useState2[1];

  var _useState3 = useState(other),
      otherValue = _useState3[0],
      setOtherValue = _useState3[1];

  var _useState4 = useState(false),
      otherActive = _useState4[0],
      setOtherActive = _useState4[1];

  var onToggleOther = useCallback(function () {
    setOtherActive(true);
  }, [setOtherActive]);
  var onChangeOther = useCallback(function (event) {
    setOtherValue(event.target.value);
  }, [setOtherValue]);
  var onBlurOther = useCallback(function (event) {
    if (otherValue && otherValue.length > 0) {
      setOtherSelected(true);
      onChange({
        target: {
          name: name,
          type: type,
          value: isMultiSelect ? [].concat(value, [otherValue]) : otherValue
        }
      }, event);
    } else {
      setOtherValue(null);
      setOtherSelected(false);
      onChange({
        target: {
          name: name,
          type: type,
          value: value
        }
      }, event);
    }

    setOtherActive(false);
  }, [isMultiSelect, name, type, value, otherValue, setOtherSelected, setOtherValue, onChange]);

  var onSubmitOther = function onSubmitOther() {};
  /** Specific onSelect handler */


  var onSelect = useCallback(function (_ref4, event) {
    var _ref4$target = _ref4.target,
        select = _ref4$target.select,
        isSelected = _ref4$target.isSelected;

    if (isMultiSelect) {
      var newValue = [].concat(value);

      if (enableWildcard && select === wildcardText) {
        newValue = [];
      }

      if (isSelected) {
        newValue.splice(newValue.indexOf(select), 1);
      } else if (!maxSelect || maxSelect && newValue.length < maxSelect) {
        newValue.push(select);
      }

      if (otherValue && otherValue.length > 0) {
        newValue = [].concat(newValue, [otherValue]);
      }

      onChange({
        target: {
          name: name,
          type: type,
          value: newValue
        }
      }, event);
    } else {
      onChange({
        target: {
          name: name,
          type: type,
          value: select
        }
      }, event);
      setOtherSelected(false);
      setOtherValue(null);
    }
  }, [isMultiSelect, enableWildcard, wildcardText, otherValue, setOtherSelected, setOtherValue, onChange, name, type, value, maxSelect]);
  /** Define how many columns we will need. */

  var numOptions = enableOther ? optionsArray.length + 1 : optionsArray.length;
  var optionsColumns = [];
  var columnWidthDesktop = '100%';

  if (numColumns && numColumns > 1) {
    var minItemsPerColumn = Math.floor(numOptions / numColumns);
    var itemsRemaining = numOptions - numColumns * minItemsPerColumn;
    var startIndex = 0;
    var endIndex = minItemsPerColumn + (itemsRemaining > 0 ? 1 : 0);

    for (var i = 0; i < numColumns; i++) {
      var selection = optionsArray.slice(startIndex, endIndex);
      startIndex = endIndex;
      endIndex = endIndex + minItemsPerColumn + (itemsRemaining > i + 1 ? 1 : 0);
      optionsColumns.push(selection);
    }

    columnWidthDesktop = parseInt(100.0 / numColumns - 2) + "%";
  } else {
    optionsColumns = [optionsArray];
  }

  var isWildcardSelected = enableWildcard && getIsSelected(isMultiSelect, other, {
    value: wildcardText
  });
  return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Flex, {
    flexWrap: "wrap",
    justifyContent: "center"
  }, optionsColumns.map(function (columnOptions, ix) {
    var isLastColumn = !numColumns || numColumns === ix + 1;
    return /*#__PURE__*/React.createElement(Box, {
      key: name + "-opt-" + ix,
      width: ['100%', '100%', columnWidthDesktop],
      maxWidth: ['100%', '100%', columnWidthDesktop],
      marginY: ['none', 'base', 'small'],
      marginX: "xsmall"
    }, /*#__PURE__*/React.createElement(ButtonGroup, {
      flexDirection: optionsColumns.length > 1 ? 'column' : rest.flexDirection || 'column'
    }, columnOptions.map(function (thisOption) {
      var isSelected = getIsSelected(isMultiSelect, value, thisOption);
      var mockEvent = {
        target: {
          select: thisOption.value,
          isSelected: isSelected
        }
      };
      return /*#__PURE__*/React.createElement(ButtonSelect, {
        key: type + "-" + name + "-" + thisOption.value,
        onClick: onSelect.bind(_this, mockEvent),
        selected: isSelected,
        marginY: "xsmall",
        marginX: "xsmall",
        padding: ['small', 'small', 'small'],
        borderTopWidth: "0"
      }, thisOption.label);
    }), enableWildcard && isLastColumn && /*#__PURE__*/React.createElement(ButtonSelect, {
      onClick: onSelect.bind(_this, {
        target: {
          select: wildcardText,
          isSelected: isWildcardSelected
        }
      }),
      selected: isWildcardSelected,
      marginY: "xsmall",
      marginX: "xsmall",
      padding: ['small', 'small', 'small'],
      borderTopWidth: "0"
    }, wildcardText), !enableWildcard && enableOther && isLastColumn && /*#__PURE__*/React.createElement(ButtonSelect, {
      type: "button",
      marginY: "xsmall",
      marginX: "xsmall",
      paddingX: otherActive ? 'xsmall' : 'base',
      paddingY: otherActive ? 'xsmall' : 'small',
      onClick: onToggleOther,
      selected: otherSelected && !otherActive
    }, otherActive ? /*#__PURE__*/React.createElement(Flex, {
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(Box, {
      flexGrow: "1"
    }, /*#__PURE__*/React.createElement(InputFieldStyled, {
      name: "other",
      value: otherValue || '',
      onChange: onChangeOther,
      onBlur: onBlurOther
    })), /*#__PURE__*/React.createElement(SpanStyled, {
      onClick: onSubmitOther
    }, /*#__PURE__*/React.createElement(FiCheck, {
      size: 16
    }))) : other ? "Other: " + other : 'Other')));
  })));
};

SelectButton.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  isMultiSelect: PropTypes.bool,
  enableOther: PropTypes.bool,
  enableWildcard: PropTypes.bool,
  wildcardText: PropTypes.string,
  randomizeOptions: PropTypes.bool,
  numColumns: PropTypes.number,
  maxSelect: PropTypes.number
} : {};
SelectButton.defaultProps = {
  type: 'select-button',
  isMultiSelect: false,
  enableOther: false,
  enableWildcard: false,
  wildcardText: 'All of the above',
  randomizeOptions: false,
  numColumns: null,
  maxSelect: null
};
SelectButton.displayName = 'SelectButton'; // ---------------------------

var SingleSelectButton = function SingleSelectButton(props) {
  return /*#__PURE__*/React.createElement(SelectButton, props);
};

SingleSelectButton.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.string
} : {};
SingleSelectButton.defaultProps = {
  type: 'single-select-button'
};
SingleSelectButton.displayName = 'SingleSelectButton'; // ---------------------------

export { SelectButton, SingleSelectButton };
export default SelectButton;