var _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup, ButtonSelect } from '../Button';

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
      isMultiSelect = _ref.isMultiSelect,
      rest = _objectWithoutProperties(_ref, ['name', 'type', 'options', 'value', 'onChange', 'isMultiSelect']);

  var onClick = function onClick(_ref2, event) {
    var _ref2$target = _ref2.target,
        fieldName = _ref2$target.name,
        fieldType = _ref2$target.type,
        select = _ref2$target.select,
        isSelected = _ref2$target.isSelected;

    if (isMultiSelect) {
      var newValue = [].concat(value);
      if (isSelected) {
        newValue.splice(newValue.indexOf(select), 1);
      } else {
        newValue.push(select);
      }
      onChange({ target: { name: fieldName, type: fieldType, value: newValue } }, event);
    } else {
      onChange({ target: { name: fieldName, type: fieldType, value: select } }, event);
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
          onClick: onClick.bind(_this, {
            target: { name: name, type: type, select: option.value, isSelected: isSelected }
          }),
          selected: isSelected,
          marginRight: ix > options.length - 1 ? 'small' : 'none',
          marginBottom: 'small'
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