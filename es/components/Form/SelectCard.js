var _this = this;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../Flex';
import { CardSelectable } from '../Card'; // ---------------------------

var getIsSelected = function getIsSelected(isMultiSelect, value, option) {
  if (!value) return false;
  if (isMultiSelect) return value.indexOf(option.value) > -1;
  return value === option.value;
}; // ---------------------------


var SelectCard = function SelectCard(_ref) {
  var name = _ref.name,
      type = _ref.type,
      options = _ref.options,
      value = _ref.value,
      onChange = _ref.onChange,
      isMultiSelect = _ref.isMultiSelect,
      rest = _objectWithoutPropertiesLoose(_ref, ["name", "type", "options", "value", "onChange", "isMultiSelect"]);

  var onSelect = function onSelect(_ref2, event) {
    var _ref2$target = _ref2.target,
        select = _ref2$target.select,
        isSelected = _ref2$target.isSelected;

    if (isMultiSelect) {
      var newValue = [].concat(value);

      if (isSelected) {
        newValue.splice(newValue.indexOf(select), 1);
      } else {
        newValue.push(select);
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
    }
  };

  return /*#__PURE__*/React.createElement(Flex, rest, options.map(function (option) {
    var isSelected = getIsSelected(isMultiSelect, value, option);
    return /*#__PURE__*/React.createElement(CardSelectable, {
      type: "button",
      size: "small",
      context: "neutral",
      variant: isSelected ? 'full' : 'outline',
      onClick: onSelect.bind(_this, {
        target: {
          select: option.value,
          isSelected: isSelected
        }
      }),
      key: type + "-" + name + "-" + option.value,
      marginBottom: "small",
      marginX: "xsmall",
      selected: isSelected
    }, option.label);
  }));
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
SelectCard.displayName = 'SelectCard'; // ---------------------------

var SingleSelectCard = function SingleSelectCard(props) {
  return /*#__PURE__*/React.createElement(SelectCard, props);
};

SingleSelectCard.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.string
} : {};
SingleSelectCard.defaultProps = {
  type: 'single-select-button'
};
SingleSelectCard.displayName = 'SingleSelectCard'; // ---------------------------

export { SelectCard, SingleSelectCard };
export default SelectCard;