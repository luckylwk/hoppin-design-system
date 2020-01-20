import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import _has from 'lodash/has';

import Select from 'react-select';
import Async from 'react-select/async';
import Creatable from 'react-select/creatable';

import getSelectStyling from './SelectStyling';
import {
  Checkbox,
  Input,
  Label,
  TextareaMd,
  RequiredCharacters,
  FieldExplanation,
  SingleSelectButton,
} from '.';

import { Flex } from '../Flex';
import { Box } from '../Box';
import { Button } from '../Button';
import { Paragraph } from '../Paragraph';

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
          clearValue={() => onChange(field.name, { target: { value: '' } })}
          onChange={(option, { action }) => {
            if (
              action === 'select-option' ||
              action === 'create-option' ||
              action === 'remove-value' ||
              action === 'pop-value'
            ) {
              return onChange(field.name, { target: { value: option.value } });
            }
            if (action === 'clear') {
              return onChange(field.name, { target: { value: '' } });
            }
          }}
          formatCreateLabel={userInput => `Click to add: ${userInput}`}
          options={field.options}
          value={{ label: field.value, value: field.value }}
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
            if (
              action === 'select-option' ||
              action === 'remove-value' ||
              action === 'pop-value'
            ) {
              return onChange(field.name, {
                target: {
                  value:
                    field.type === 'multi-select'
                      ? option.map(_option => _option.value)
                      : option,
                  label:
                    field.type === 'multi-select'
                      ? option.map(_option => _option.label)
                      : option,
                },
              });
            }
            if (action === 'clear') {
              return onChange(field.name, {
                target: { value: field.type === 'multi-select' ? [] : {} },
              });
            }
          }}
          options={field.options}
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
        <Async
          cacheOptions={false}
          value={field.value}
          onChange={(option, { action }) => {
            if (
              action === 'select-option' ||
              action === 'remove-value' ||
              action === 'pop-value'
            ) {
              return onChange(field.name, {
                target: {
                  value: option,
                },
              });
            } else if (action === 'clear') {
              return onChange(field.name, {
                target: {
                  value: {},
                },
              });
            }
          }}
          loadOptions={field.options}
          placeholder="Search..."
          noOptionsMessage={() => 'Start typing to start the search'}
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

  if (field.type === 'single-select-button') {
    return (
      <Fragment>
        <SingleSelectButton
          name={field.name}
          options={field.options}
          value={field.value}
          onChange={onChange.bind(null, field.name)}
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
