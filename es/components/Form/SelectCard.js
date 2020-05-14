var _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from '../Flex';
import { CardSelectable } from '../Card';

// ---------------------------

var getIsSelected = function getIsSelected(isMultiSelect, value, option) {
  if (!value) return false;
  if (isMultiSelect) return value.indexOf(option.value) > -1;
  return value === option.value;
};

// ---------------------------

var SelectCard = function SelectCard(_ref) {
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
      onChange({ target: { name: fieldName, type: type, value: newValue } }, event);
    } else {
      onChange({ target: { name: fieldName, type: type, value: select } }, event);
    }
  };

  return React.createElement(
    Flex,
    rest,
    options.map(function (option) {
      var isSelected = getIsSelected(isMultiSelect, value, option);
      return React.createElement(
        CardSelectable,
        {
          type: 'button',
          size: 'small',
          context: 'neutral',
          variant: isSelected ? 'full' : 'outline',
          onClick: onClick.bind(_this, {
            target: { name: name, type: type, select: option.value, isSelected: isSelected }
          }),
          key: type + '-' + name + '-' + option.value,
          marginBottom: 'small',
          marginX: 'xsmall',
          selected: isSelected
        },
        option.label
      );
    })
  );
};

SelectCard.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  isMultiSelect: PropTypes.bool
} : {};

SelectCard.defaultProps = {
  type: 'select-button',
  isMultiSelect: false
};

SelectCard.displayName = 'SelectCard';

// ---------------------------

var SingleSelectCard = function SingleSelectCard(props) {
  return React.createElement(SelectCard, props);
};

SingleSelectCard.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.string
} : {};

SingleSelectCard.defaultProps = {
  type: 'single-select-button'
};

SingleSelectCard.displayName = 'SingleSelectCard';

// ---------------------------

export { SelectCard, SingleSelectCard };

export default SelectCard;