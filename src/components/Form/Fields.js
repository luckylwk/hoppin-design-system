import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import _has from 'lodash/has';

import { FiSearch, FiChevronDown } from 'react-icons/fi';

import Select, { components } from 'react-select';
import Async from 'react-select/async';
import Creatable from 'react-select/creatable';
import AsyncCreatableSelect from 'react-select/async-creatable';

import getSelectStyling from './SelectStyling';
import {
  Checkbox,
  Input,
  Label,
  TextareaMd,
  RequiredCharacters,
  FieldExplanation,
  SelectButton,
} from '.';

import { Flex } from '../Flex';
import { Box } from '../Box';
import { Button } from '../Button';
import { Paragraph } from '../Paragraph';

// ---------------------------

const FiChevronDownStyled = styled(FiChevronDown)`
  color: ${({ theme, focused }) =>
    focused === 'true' ? theme.colors.primary.dark : theme.colors.neutral.base};
`;

const FiSearchStyled = styled(FiSearch)`
  color: ${({ theme, focused }) =>
    focused === 'true' ? theme.colors.primary.dark : theme.colors.neutral.base};
`;

const SearchDropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <FiSearchStyled focused={`${props.isFocused}`} />
  </components.DropdownIndicator>
);

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <FiChevronDownStyled focused={`${props.isFocused}`} />
  </components.DropdownIndicator>
);

const IndicatorSeparator = ({ innerProps }) => (
  <span style={{ backgroundColor: 'transparent' }} {...innerProps} />
);

// ---------------------------

/**
 * @param {object} field - object that holds the field details.
 * @param {func}   onChange
 */
export const renderField = (field, onChange, selectStyling) => {
  const charsUsed = field.value ? field.value.length : 0;

  // To reset the margin underneath a field
  if (field.maxLength && !_has(field, 'props.marginBottom')) {
    field.props = { ...field.props, marginBottom: 0 };
  }

  if (field.type === 'textarea') {
    return (
      <Fragment>
        <TextareaMd
          name={field.name}
          initialValue={field.value}
          label={field.label}
          placeholder={field.placeholder}
          onChange={onChange.bind(null, field.name)}
          context={field.context}
          {...field.props}
        />
        {field.maxLength && (
          <RequiredCharacters>
            We recommend using no more than{' '}
            {charsUsed !== 0 ? `${charsUsed}/` : ''}
            {field.maxLength} characters.
          </RequiredCharacters>
        )}
        {field.explain && <FieldExplanation>{field.explain}</FieldExplanation>}
      </Fragment>
    );
  }

  if (field.type === 'creatable-select') {
    const LabelOrFragment = field.label ? Label : Fragment;
    const labelProps = field.label
      ? { label: field.label, htmlFor: field.name }
      : {};
    return (
      <LabelOrFragment {...labelProps}>
        {field.label}
        <Creatable
          isClearable
          clearValue={() =>
            onChange(field.name, {
              target: {
                action: 'clear',
                name: field.name,
                type: field.type,
                value: {},
              },
            })
          }
          onChange={(option, { action }) => {
            const mockEvent = {
              target: {
                action,
                name: field.name,
                type: field.type,
                value: action === 'clear' ? {} : option,
              },
            };
            return onChange(field.name, mockEvent);
          }}
          formatCreateLabel={userInput => `Click to add: ${userInput}`}
          options={field.options}
          value={field.value}
          components={{ IndicatorSeparator, DropdownIndicator }}
          {...selectStyling}
        />
        {field.explain && <FieldExplanation>{field.explain}</FieldExplanation>}
      </LabelOrFragment>
    );
  }

  if (field.type === 'select' || field.type === 'multi-select') {
    const LabelOrFragment = field.label ? Label : Fragment;
    const labelProps = field.label
      ? { label: field.label, htmlFor: field.name }
      : {};
    return (
      <LabelOrFragment {...labelProps}>
        {field.label}
        <Select
          isMulti={field.type === 'multi-select'}
          isClearable={field.type === 'multi-select'}
          value={field.value}
          onChange={(option, { action }) => {
            const updatedValue =
              field.type === 'multi-select' ? option : option;
            const emptyValue = field.type === 'multi-select' ? [] : {};
            let mockEvent = {
              target: {
                action,
                name: field.name,
                type: field.type,
                value: action === 'clear' ? emptyValue : updatedValue,
              },
            };
            return onChange(field.name, mockEvent);
          }}
          options={field.options}
          components={{ IndicatorSeparator, DropdownIndicator }}
          {...selectStyling}
        />
        {field.explain && <FieldExplanation>{field.explain}</FieldExplanation>}
      </LabelOrFragment>
    );
  }

  // Used for location (using Google GeoLocation API)
  if (field.type === 'async-select') {
    const LabelOrFragment = field.label ? Label : Fragment;
    const labelProps = field.label
      ? { label: field.label, htmlFor: field.name }
      : {};
    return (
      <LabelOrFragment {...labelProps}>
        {field.label}
        <Async
          cacheOptions={false}
          value={field.value}
          onChange={(option, { action }) => {
            const mockEvent = {
              target: {
                action,
                name: field.name,
                type: field.type,
                value: action === 'clear' ? {} : option,
              },
            };
            return onChange(field.name, mockEvent);
          }}
          loadOptions={field.options}
          components={{
            IndicatorSeparator,
            DropdownIndicator: SearchDropdownIndicator,
          }}
          placeholder={field.placeholder || 'Search'}
          noOptionsMessage={() => 'Start typing to start the search'}
          {...selectStyling}
        />
        {field.explain && <FieldExplanation>{field.explain}</FieldExplanation>}
      </LabelOrFragment>
    );
  }

  if (field.type === 'async-creatable-select') {
    const LabelOrFragment = field.label ? Label : Fragment;
    const labelProps = field.label
      ? { label: field.label, htmlFor: field.name }
      : {};
    return (
      <LabelOrFragment {...labelProps}>
        {field.label}
        <AsyncCreatableSelect
          name={field.name}
          cacheOptions={false}
          loadOptions={field.options}
          value={field.value}
          onChange={(option, { action }) => {
            const mockEvent = {
              target: {
                action,
                name: field.name,
                type: field.type,
                value: action === 'clear' ? {} : option,
              },
            };
            return onChange(field.name, mockEvent);
          }}
          components={{
            IndicatorSeparator,
            DropdownIndicator: SearchDropdownIndicator,
          }}
          placeholder={field.placeholder || 'Search'}
          {...selectStyling}
        />
        {field.explain && <FieldExplanation>{field.explain}</FieldExplanation>}
      </LabelOrFragment>
    );
  }

  if (field.type === 'checkbox') {
    return (
      <Checkbox
        name={field.name}
        label={field.label}
        checked={field.checked}
        onChange={onChange.bind(null, field.name)}
      />
    );
  }

  if (field.type === 'single-select-button' || field.type === 'select-button') {
    return (
      <Fragment>
        <SelectButton
          name={field.name}
          options={field.options}
          value={field.value}
          onChange={onChange.bind(null, field.name)}
          isMultiSelect={field.type === 'select-button'}
        />
        {field.explain && (
          <FieldExplanation marginTop="4px">{field.explain}</FieldExplanation>
        )}
      </Fragment>
    );
  }

  if (field.type === 'inline-submit') {
    // if we have a label, wrap input in label add margin-top to input, otherwise no wrapper
    const LabelOrFragment = field.label ? Label : Fragment;
    const labelProps = field.label
      ? { label: field.title ? undefined : field.label, htmlFor: field.name }
      : {};
    const flexProps = field.label
      ? { marginTop: 'small', marginBottom: 'base' }
      : {};
    const inputProps = field.label
      ? { marginTop: 'none', marginBottom: 'none' }
      : {};

    return (
      <LabelOrFragment {...labelProps}>
        <Flex {...flexProps}>
          <Input
            type={field.type}
            value={field.value || ''}
            name={field.name}
            onChange={onChange.bind(null, field.name)}
            context={field.context}
            {...inputProps}
          />
          <Button
            type="primary"
            marginLeft="small"
            disabled={field.isSubmitDisabled}
          >
            {field.submitText || 'Submit'}
          </Button>
        </Flex>
      </LabelOrFragment>
    );
  }

  /**
   * Default is a regular input field.
   */
  return (
    <Fragment>
      <Input
        type={field.type}
        value={field.value || ''}
        name={field.name}
        placeholder={field.placeholder}
        // label={field.title ? undefined : field.label}
        label={field.label}
        onChange={onChange.bind(null, field.name)}
        context={field.context}
        renderWidth={field.renderWidth || 'full'}
        icon={field.icon}
        {...field.props}
      />
      {field.maxLength && (
        <RequiredCharacters>
          We recommend using no more than{' '}
          {charsUsed !== 0 ? `${charsUsed}/` : ''}
          {field.maxLength} characters.
        </RequiredCharacters>
      )}
      {field.explain && <FieldExplanation>{field.explain}</FieldExplanation>}
    </Fragment>
  );
};

// ---------------------------

const Fields = ({ onChange, fields, theme }) => {
  const selectStyling = getSelectStyling(theme);

  return (
    <Box>
      {fields.map(field => (
        <Box
          key={field.name}
          marginBottom={
            _has(field, 'marginBottom') ? field.marginBottom : 'large'
          }
        >
          {field.type === 'group' ? (
            <Fragment>
              {field.title && <Paragraph>{field.title}</Paragraph>}
              <Flex>
                {field.list.length > 0 &&
                  field.list.map((groupedField, ix) => (
                    <Box
                      key={`${field.name}-${groupedField.name}`}
                      flex={1}
                      marginRight="xsmall"
                      marginLeft={ix === 0 ? 'none' : 'xsmall'}
                    >
                      {groupedField.type
                        ? renderField(groupedField, onChange, selectStyling)
                        : null}
                    </Box>
                  ))}
              </Flex>
            </Fragment>
          ) : (
            <Fragment>
              {field.title && (
                <Paragraph paddingTop="small" paddingBottom="xsmall">
                  {field.title}
                </Paragraph>
              )}
              {renderField(field, onChange, selectStyling)}
            </Fragment>
          )}
        </Box>
      ))}
    </Box>
  );
};

Fields.displayName = 'Fields';

Fields.propTypes = {
  /**
   * callback to be called when a field updates fn(fieldName, event)
   */
  onChange: PropTypes.func,
  /**
   * fields config array
   */
  fields: PropTypes.array,
};

export default withTheme(Fields);
