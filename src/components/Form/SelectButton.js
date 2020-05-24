import React from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup, ButtonSelect } from '../Button';

// ---------------------------

const getIsSelected = (isMultiSelect, value, option) => {
  if (!value) return false;
  if (isMultiSelect) return value.indexOf(option.value) > -1;
  return value === option.value;
};

// ---------------------------

const SelectButton = ({
  name,
  type,
  options,
  value,
  onChange,
  isMultiSelect,
  ...rest
}) => {
  const onClick = (
    { target: { name: fieldName, type: fieldType, select, isSelected } },
    event
  ) => {
    if (isMultiSelect) {
      let newValue = [...value];
      if (isSelected) {
        newValue.splice(newValue.indexOf(select), 1);
      } else {
        newValue.push(select);
      }
      onChange(
        { target: { name: fieldName, type: fieldType, value: newValue } },
        event
      );
    } else {
      onChange(
        { target: { name: fieldName, type: fieldType, value: select } },
        event
      );
    }
  };

  return (
    <ButtonGroup {...rest}>
      {options.map((option, ix) => {
        const isSelected = getIsSelected(isMultiSelect, value, option);
        return (
          <ButtonSelect
            key={`${type}-${name}-${option.value}`}
            type="button"
            onClick={onClick.bind(this, {
              target: { name, type, select: option.value, isSelected },
            })}
            selected={isSelected}
            marginRight={ix > options.length - 1 ? 'small' : 'none'}
            marginBottom="small"
          >
            {option.label}
          </ButtonSelect>
        );
      })}
    </ButtonGroup>
  );
};

SelectButton.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  isMultiSelect: PropTypes.bool,
};

SelectButton.defaultProps = {
  type: 'select-button',
  isMultiSelect: false,
};

SelectButton.displayName = 'SelectButton';

// ---------------------------

const SingleSelectButton = props => <SelectButton {...props} />;

SingleSelectButton.propTypes = {
  type: PropTypes.string,
};

SingleSelectButton.defaultProps = {
  type: 'single-select-button',
};

SingleSelectButton.displayName = 'SingleSelectButton';

// ---------------------------

export { SelectButton, SingleSelectButton };

export default SelectButton;
