import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from '../Flex';
import { CardSelectable } from '../Card';

// ---------------------------

const getIsSelected = (isMultiSelect, value, option) => {
  if (!value) return false;
  if (isMultiSelect) return value.indexOf(option.value) > -1;
  return value === option.value;
};

// ---------------------------

const SelectCard = ({
  name,
  type,
  options,
  value,
  onChange,
  isMultiSelect,
  ...rest
}) => {
  const onSelect = ({ target: { select, isSelected } }, event) => {
    if (isMultiSelect) {
      let newValue = [...value];
      if (isSelected) {
        newValue.splice(newValue.indexOf(select), 1);
      } else {
        newValue.push(select);
      }
      onChange({ target: { name, type, value: newValue } }, event);
    } else {
      onChange({ target: { name, type, value: select } }, event);
    }
  };

  return (
    <Flex {...rest}>
      {options.map((option) => {
        const isSelected = getIsSelected(isMultiSelect, value, option);
        return (
          <CardSelectable
            type="button"
            size="small"
            context="neutral"
            variant={isSelected ? 'full' : 'outline'}
            onClick={onSelect.bind(this, {
              target: { select: option.value, isSelected },
            })}
            key={`${type}-${name}-${option.value}`}
            marginBottom="small"
            marginX="xsmall"
            selected={isSelected}
          >
            {option.label}
          </CardSelectable>
        );
      })}
    </Flex>
  );
};

SelectCard.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  isMultiSelect: PropTypes.bool,
};

SelectCard.defaultProps = {
  type: 'select-button',
  isMultiSelect: false,
};

SelectCard.displayName = 'SelectCard';

// ---------------------------

const SingleSelectCard = (props) => <SelectCard {...props} />;

SingleSelectCard.propTypes = {
  type: PropTypes.string,
};

SingleSelectCard.defaultProps = {
  type: 'single-select-button',
};

SingleSelectCard.displayName = 'SingleSelectCard';

// ---------------------------

export { SelectCard, SingleSelectCard };

export default SelectCard;
