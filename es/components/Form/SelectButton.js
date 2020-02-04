var _this = this;

import React from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonGroup } from '../Button';

// ---------------------------

var getIsSelected = function getIsSelected(isMultiSelect, value, option) {
  if (!value) return false;
  if (isMultiSelect) return value.indexOf(option.value) > -1;
  return value === option.value;
};

// ---------------------------

var SelectButton = function SelectButton(_ref) {
  var name = _ref.name,
      type = _ref.type,
      options = _ref.options,
      value = _ref.value,
      onChange = _ref.onChange,
      isMultiSelect = _ref.isMultiSelect;

  var onClick = function onClick(_ref2, event) {
    var _ref2$target = _ref2.target,
        name = _ref2$target.name,
        type = _ref2$target.type,
        select = _ref2$target.select,
        isSelected = _ref2$target.isSelected;

    if (isMultiSelect) {
      var newValue = [].concat(value);
      if (isSelected) {
        newValue.splice(newValue.indexOf(select), 1);
      } else {
        newValue.push(select);
      }
      onChange({ target: { name: name, type: type, value: newValue } }, event);
    } else {
      onChange({ target: { name: name, type: type, value: select } }, event);
    }
  };

  return React.createElement(
    ButtonGroup,
    null,
    options.map(function (option) {
      var isSelected = getIsSelected(isMultiSelect, value, option);
      return React.createElement(
        Button,
        {
          type: 'button',
          context: isSelected ? 'primary' : 'neutral',
          variant: isSelected ? 'full' : 'outline',
          onClick: onClick.bind(_this, {
            target: { name: name, type: type, select: option.value, isSelected: isSelected }
          }),
          key: type + '-' + name + '-' + option.value
        },
        option.label
      );
    })
  );
};

SelectButton.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  isMultiSelect: PropTypes.bool
} : {};

SelectButton.defaultProps = {
  type: 'select-button',
  isMultiSelect: false
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