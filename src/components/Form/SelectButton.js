import React, {
  useState, //useRef
} from 'react';
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

const InputFieldStyled = styled(InputField)`
  display: block;
  width: 100%;

  background: transparent;

  margin: 0;
  padding: 2px 8px;

  border: 0px;
  border-radius: 0px;
  box-shadow: 0px;
`;

const SpanStyled = styled.span`
  margin: -2px 2px;
  padding: 4px 4px 2px 4px;

  outline: none;
  appearance: none;

  background: ${({ theme }) => theme.colors.neutral.darker};
  color: white;

  border-radius: ${({ theme }) => theme.radii.xsmall};

  cursor: pointer;
`;

// ---------------------------

const getIsSelected = (isMultiSelect, value, option) => {
  if (!value) return false;
  if (isMultiSelect) return value.indexOf(option.value) > -1;
  return value === option.value;
};

const splitValueWithOther = (compositeValue, optionValues, isMultiSelect) => {
  if (isMultiSelect) {
    const options_value = _intersection(optionValues, compositeValue);
    const other_value = _difference(compositeValue, options_value);
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

const SelectButton = ({
  name,
  type,
  options,
  value: valueComposite,
  onChange,
  isMultiSelect,
  enableOther,
  ...rest
}) => {
  const { value, other } = splitValueWithOther(
    valueComposite,
    options.map(o => o.value),
    isMultiSelect
  );

  // const myInputRef = useRef();

  const [otherSelected, setOtherSelected] = useState(other ? true : false);
  const [otherValue, setOtherValue] = useState(other);
  const [otherActive, setOtherActive] = useState(false);

  const onToggleOther = () => {
    setOtherActive(true);
    // console.log(myInputRef);
  };

  const onChangeOther = event => {
    setOtherValue(event.target.value);
  };

  const onBlurOther = event => {
    if (otherValue && otherValue.length > 0) {
      setOtherSelected(true);
      if (isMultiSelect) {
        onChange(
          { target: { name, type, value: [...value, otherValue] } },
          event
        );
      } else {
        onChange({ target: { name, type, value: otherValue } }, event);
      }
    } else {
      setOtherValue(null);
      setOtherSelected(false);
      onChange({ target: { name, type, value } }, event);
    }
    setOtherActive(false);
  };

  const onSubmitOther = () => {};

  const onSelect = ({ target: { select, isSelected } }, event) => {
    if (isMultiSelect) {
      let newValue = [...value];
      if (isSelected) {
        newValue.splice(newValue.indexOf(select), 1);
      } else {
        newValue.push(select);
      }
      if (otherValue && otherValue.length > 0) {
        newValue = [...newValue, otherValue];
      }
      onChange({ target: { name, type, value: newValue } }, event);
    } else {
      onChange({ target: { name, type, value: select } }, event);
      setOtherSelected(false);
      setOtherValue(null);
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
            onClick={onSelect.bind(this, {
              target: { select: option.value, isSelected },
            })}
            selected={isSelected}
            marginRight={ix > options.length - 1 ? 'small' : 'none'}
            marginBottom="small"
          >
            {option.label}
          </ButtonSelect>
        );
      })}
      {enableOther && (
        <ButtonSelect
          type="button"
          marginBottom="small"
          paddingX={otherActive ? 'xsmall' : 'base'}
          paddingY={otherActive ? 'xsmall' : 'small'}
          onClick={onToggleOther}
          selected={otherSelected && !otherActive}
        >
          {otherActive ? (
            <Flex alignItems="center">
              <Box flexGrow="1">
                <InputFieldStyled
                  name="other"
                  value={otherValue || ''}
                  onChange={onChangeOther}
                  onBlur={onBlurOther}
                  // inputRef={input => input && input.focus()}
                  // autofocus="true"
                />
              </Box>
              <SpanStyled onClick={onSubmitOther}>
                <FiCheck size={16} />
              </SpanStyled>
            </Flex>
          ) : other ? (
            `Other: ${other}`
          ) : (
            'Other'
          )}
        </ButtonSelect>
      )}
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
  enableOther: PropTypes.bool,
};

SelectButton.defaultProps = {
  type: 'select-button',
  isMultiSelect: false,
  enableOther: false,
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
