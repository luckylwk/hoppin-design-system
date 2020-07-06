import React, {
  useState,
  // useRef
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _shuffle from 'lodash/shuffle';
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
  randomizeOptions,
  numColumns,
  maxSelect,
  ...rest
}) => {
  const { value, other } = splitValueWithOther(
    valueComposite,
    options.map(o => o.value),
    isMultiSelect
  );

  // const myInputRef = useRef();

  /** Optional shuffling of options */
  const [optionsArray] = useState(
    randomizeOptions ? _shuffle(options) : options
  );

  /** Other related state and functions */

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
      onChange(
        {
          target: {
            name,
            type,
            value: isMultiSelect ? [...value, otherValue] : otherValue,
          },
        },
        event
      );
    } else {
      setOtherValue(null);
      setOtherSelected(false);
      onChange({ target: { name, type, value } }, event);
    }
    setOtherActive(false);
  };

  const onSubmitOther = () => {};

  /** Specific onSelect handler */
  const onSelect = ({ target: { select, isSelected } }, event) => {
    if (isMultiSelect) {
      let newValue = [...value];
      if (isSelected) {
        newValue.splice(newValue.indexOf(select), 1);
      } else if (!maxSelect || (maxSelect && newValue.length < maxSelect)) {
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

  /** Define how many columns we will need. */
  const numOptions = enableOther
    ? optionsArray.length + 1
    : optionsArray.length;
  let optionsColumns = [];
  let columnWidthDesktop = '100%';
  if (numColumns && numColumns > 1) {
    const minItemsPerColumn = Math.floor(numOptions / numColumns);
    const itemsRemaining = numOptions - numColumns * minItemsPerColumn;
    let startIndex = 0;
    let endIndex = minItemsPerColumn + (itemsRemaining > 0 ? 1 : 0);
    for (let i = 0; i < numColumns; i++) {
      const selection = optionsArray.slice(startIndex, endIndex);
      startIndex = endIndex;
      endIndex =
        endIndex + minItemsPerColumn + (itemsRemaining > i + 1 ? 1 : 0);
      optionsColumns.push(selection);
    }
    columnWidthDesktop = `${parseInt(100.0 / numColumns - 2)}%`;
  } else {
    optionsColumns = [optionsArray];
  }

  return (
    <Box>
      <Flex flexWrap="wrap" justifyContent="center">
        {optionsColumns.map((columnOptions, ix) => {
          const isLastColumn = !numColumns || numColumns === ix + 1;
          return (
            <Box
              key={`${name}-opt-${ix}`}
              width={['100%', '100%', columnWidthDesktop]}
              maxWidth={['100%', '100%', columnWidthDesktop]}
              marginY={['base', 'base', 'small']}
              marginX="xsmall"
            >
              <ButtonGroup
                flexDirection={
                  optionsColumns.length > 1
                    ? 'column'
                    : rest.flexDirection || 'column'
                }
              >
                {columnOptions.map(thisOption => {
                  const isSelected = getIsSelected(
                    isMultiSelect,
                    value,
                    thisOption
                  );
                  const mockEvent = {
                    target: { select: thisOption.value, isSelected },
                  };
                  return (
                    <ButtonSelect
                      key={`${type}-${name}-${thisOption.value}`}
                      onClick={onSelect.bind(this, mockEvent)}
                      selected={isSelected}
                      marginY="xsmall"
                      marginX="xsmall"
                      padding={['small', 'small', 'small']}
                      borderTopWidth="0"
                    >
                      {thisOption.label}
                    </ButtonSelect>
                  );
                })}

                {enableOther && isLastColumn && (
                  <ButtonSelect
                    type="button"
                    marginY="xsmall"
                    marginX="xsmall"
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
            </Box>
          );
        })}
      </Flex>
    </Box>
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
  randomizeOptions: PropTypes.bool,
  numColumns: PropTypes.number,
  maxSelect: PropTypes.number,
};

SelectButton.defaultProps = {
  type: 'select-button',
  isMultiSelect: false,
  enableOther: false,
  randomizeOptions: false,
  numColumns: null,
  maxSelect: null,
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
