import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import _has from 'lodash/has';

// Input components...
import Select from 'react-select';
import Async from 'react-select/async';
import Creatable from 'react-select/creatable';

import getSelectStyling from './selectStyling';
import Checkbox from './Checkbox';
// import Calendar from './Calendar';
import Input from './Input';
import TextareaMd from './TextareaMd';

import { Flex } from '../Flex';
import { Box } from '../Box';
// import { Button } from '../Button';
import { Paragraph } from '../Paragraph';

/**
 * Form fields
 */

const RequiredText = styled.span`
  display: inline-block;

  margin-left: 6px;

  font-size: 12px;
  line-height: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.base};

  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.darker};
`;

const RequiredCharacters = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin: 0;
  padding: 3px;

  font-size: 12px;
  line-height: 12px;
  color: ${({ theme }) => theme.colors.neutral.light};

  text-align: right;
`;

/**
 * @param {object} field - object that holds the field details.
 * @param {func}   onChange
 */
export const renderField = (field, onChange, selectStyling) => {
  // const charsLeft = plainTextValue
  //   ? field.maxLength - plainTextValue.length
  //   : field.maxLength;
  const charsUsed = field.value ? field.value.length : 0;

  if (field.type === 'textarea') {
    return (
      <>
        <TextareaMd
          name={field.name}
          initialValue={field.value}
          label={field.title ? undefined : field.label}
          onChange={onChange.bind(null, field.name)}
          context={field.context}
        />
        {field.maxLength && (
          <RequiredCharacters>
            We recommend using no more than{' '}
            {charsUsed !== 0 ? `${charsUsed}/` : ''}
            {field.maxLength} characters.
          </RequiredCharacters>
        )}
      </>
    );
  }

  if (field.type === 'creatable-select') {
    return (
      <Creatable
        isClearable
        clearValue={() => onChange(field.name, { target: { value: '' } })}
        onChange={(option, { action }) => {
          if (action === 'select-option' || action === 'create-option') {
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
    );
  }

  if (field.type === 'select' || field.type === 'multi-select') {
    return (
      <Select
        isMulti={field.type === 'multi-select'}
        isClearable={field.type === 'multi-select'}
        value={field.value}
        onChange={(option, { action }) => {
          if (action === 'select-option' || action === 'remove-value') {
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
    );
  }

  // Used for location (using Google GeoLocation API)
  if (field.type === 'async-select') {
    return (
      <Async
        cacheOptions={false}
        value={field.value}
        onChange={(option, { action }) => {
          if (action === 'select-option') {
            return onChange(field.name, {
              target: {
                value: option,
              },
            });
          }
        }}
        loadOptions={field.options}
        placeholder="Search..."
        noOptionsMessage={() => 'Start typing to start the search'}
        {...selectStyling}
      />
    );
  }

  if (field.type === 'checkbox') {
    return (
      <Checkbox
        name={field.name}
        label={field.label}
        checked={field.checked}
        onChange={onChange.bind(null, field.name)}
        context={field.context}
      />
    );
  }

  // if (field.type === 'inline-text') {
  //   const inlineChildren = (
  //     <Button type="primary" py={3} my={2} disabled={field.isSubmitDisabled}>
  //       {field.submitText || 'Submit'}
  //     </Button>
  //   );

  //   return (
  //     <>
  //       <InputFancy
  //         type={field.type}
  //         value={field.value || ''}
  //         name={field.name}
  //         label={field.label ? field.label : field.title}
  //         handleOnChange={onChange.bind(null, field.name)}
  //         renderType={type || 'primary'}
  //         renderWidth={field.renderWidth || 'full'}
  //         inlineChildren={inlineChildren}
  //       />
  //     </>
  //   );
  // }

  /**
   * Default is a regular input field.
   */
  return (
    <>
      <Input
        type={field.type}
        value={field.value || ''}
        name={field.name}
        label={field.title ? undefined : field.label}
        onChange={onChange.bind(null, field.name)}
        context={field.context}
        renderWidth={field.renderWidth || 'full'}
      />
      {field.maxLength && (
        <RequiredCharacters>
          We recommend using no more than{' '}
          {charsUsed !== 0 ? `${charsUsed}/` : ''}
          {field.maxLength} characters.
        </RequiredCharacters>
      )}
    </>
  );
};

const Fields = ({ onChange, fields, theme }) => {
  const selectStyling = getSelectStyling(theme);

  return (
    <Box>
      {fields.map(field => (
        <Box
          key={field.name}
          mb={_has(field, 'marginBottom') ? field.marginBottom : 4}
        >
          {field.type === 'group' ? (
            <>
              {field.title && (
                <Paragraph m={0} p={0}>
                  {field.title}
                  {field.required && <RequiredText>required</RequiredText>}
                </Paragraph>
              )}
              <Flex>
                {field.list.length > 0 &&
                  field.list.map((groupedField, ix) => (
                    <Box
                      key={`${field.name}-${groupedField.name}`}
                      flex={1}
                      mr={1}
                      ml={ix === 0 ? 0 : 1}
                    >
                      {groupedField.type && groupedField.title && (
                        <Paragraph m={0} p={0}>
                          {groupedField.title}
                          {groupedField.required && (
                            <RequiredText>required</RequiredText>
                          )}
                        </Paragraph>
                      )}
                      {groupedField.type
                        ? renderField(groupedField, onChange, selectStyling)
                        : null}
                    </Box>
                  ))}
              </Flex>
            </>
          ) : (
            <>
              {field.title && (
                <Paragraph m={0} p={0} pt={2} pb={1}>
                  {field.title}
                  {field.required && <RequiredText>required</RequiredText>}
                </Paragraph>
              )}
              {renderField(field, onChange, selectStyling)}
            </>
          )}
        </Box>
      ))}
    </Box>
  );
};

Fields.displayName = 'fields';
Fields.propTypes = {
  onChange: PropTypes.func,
  fields: PropTypes.array,
};

export default withTheme(Fields);
