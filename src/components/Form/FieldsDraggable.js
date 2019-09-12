import React, { Fragment } from 'react';
import styled from 'styled-components';
import has from 'lodash/has';

// Input components...
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Select from 'react-select';
import Creatable from 'react-select/lib/Creatable';
import AsyncSelect from 'react-select/lib/Async';

import SelectStyling from 'common/components/Form/SelectStyling';
import { Checkbox } from 'common/components/Form';

import MoveIcon from 'react-feather/dist/icons/move';

import { Flex, Box } from 'common/components/FlexBox';
import { Button } from 'common/components/Button';
import { Paragraph } from 'common/components/Text';
import { InputFancy, TextAreaDraftJS } from 'common/components/Form';
import { convertHTMLToText } from 'common/utils';

/**
 * Form fields
 */

/**
 * Wrapper for an individual field.
 */
export const FieldWrapper = styled(Box)`
  ${props =>
    !props.isSortable
      ? ''
      : `
    user-select: "none";
    display: flex;
    align-items: center;
    padding: 5px;

    & > div {
      flex: 1;
    }
  `} ${props =>
    !props.isDragging
      ? ''
      : `
    width: 100%;

    @media (min-width: 832px) {}
  `};
`;

const RequiredText = styled.span`
  display: inline-block;

  margin-left: 6px;

  font-size: 12px;
  line-height: 10px;
  font-weight: 600;
  color: rgba(255, 4, 103, 1);

  border-bottom: 1px solid rgba(255, 4, 103, 0.25);
`;

const RequiredCharacters = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin: 0;
  padding: 3px;

  font-size: 12px;
  line-height: 12px;
  color: #888;

  text-align: right;
`;

/**
 * @param {object} field - object that holds the field details.
 * @param {func}   onChange
 * @param {string} type
 */
const renderField = (field, onChange, type) => {
  const plainTextValue = convertHTMLToText(field.value);

  // const charsLeft = plainTextValue
  //   ? field.maxLength - plainTextValue.length
  //   : field.maxLength;
  const charsUsed = plainTextValue ? plainTextValue.length : 0;

  if (field.type === 'textarea') {
    return (
      <Fragment>
        <TextAreaDraftJS
          name={field.name}
          value={field.value}
          label={field.label ? field.label : field.title}
          onTextChange={onChange.bind(null, field.name)}
          renderType={type || 'primary'}
        />
        {field.maxLength && (
          <RequiredCharacters>
            We recommend using no more than{' '}
            {charsUsed !== 0 ? `${charsUsed}/` : ''}
            {field.maxLength} characters.
          </RequiredCharacters>
        )}
      </Fragment>
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
        styles={SelectStyling}
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
        styles={SelectStyling}
      />
    );
  }

  // Used for location (using Google GeoLocation API)
  if (field.type === 'async-select') {
    return (
      <AsyncSelect
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
        styles={SelectStyling}
        placeholder="Search..."
        noOptionsMessage={() => 'Start typing to start the search'}
      />
    );
  }

  if (field.type === 'checkbox') {
    return (
      <Fragment>
        <Flex>
          <Box pt={1}>
            <Checkbox
              name={field.name}
              checked={field.value}
              onChange={onChange.bind(null, field.name)}
              type={type || 'primary'}
            />
          </Box>

          {field.label && field.label !== '' && (
            <Box ml={2}>
              <Paragraph>{field.label}</Paragraph>
            </Box>
          )}
        </Flex>
      </Fragment>
    );
  }

  if (field.type === 'inline-text') {
    const inlineChildren = (
      <Button type="primary" py={3} my={2} disabled={field.isSubmitDisabled}>
        {field.submitText || 'Submit'}
      </Button>
    );

    return (
      <Fragment>
        <InputFancy
          type={field.type}
          value={field.value || ''}
          name={field.name}
          label={field.label ? field.label : field.title}
          handleOnChange={onChange.bind(null, field.name)}
          renderType={type || 'primary'}
          renderWidth={field.renderWidth || 'full'}
          inlineChildren={inlineChildren}
        />
      </Fragment>
    );
  }

  /**
   * Default is a regular input field.
   */
  return (
    <Fragment>
      <InputFancy
        type={field.type}
        value={field.value || ''}
        name={field.name}
        label={field.label ? field.label : field.title}
        handleOnChange={onChange.bind(null, field.name)}
        renderType={type || 'primary'}
        renderWidth={field.renderWidth || 'full'}
      />
      {field.maxLength && (
        <RequiredCharacters>
          We recommend using no more than{' '}
          {charsUsed !== 0 ? `${charsUsed}/` : ''}
          {field.maxLength} characters.
        </RequiredCharacters>
      )}
    </Fragment>
  );
};

const DraggableList = styled(Box)`
  border-radius: ${props => props.theme.borders.small};

  padding: ${props => props.theme.space[3]};
  padding-left: ${props => props.theme.space[1]};

  background: ${props =>
    props.isDraggingOver ? props.theme.backgrounds.white_off : 'transparent'};

  border: 2px dotted
    ${props =>
      props.isDraggingOver ? props.theme.colors.grey_light : 'transparent'};
`;

/**
 *
 */
export const FieldsWrapper = ({
  isSortable,
  onChangeSort,
  onChange,
  fields,
  type,
}) => (
  <Box>
    {/*
    When it is not a sortable field render the fields
    in a normal way.
    */}
    {!isSortable &&
      fields.map(field => (
        <FieldWrapper
          key={field.name}
          mb={has(field, 'marginBottom') ? field.marginBottom : 4}
        >
          {field.type === 'group' ? (
            <Fragment>
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
                        ? renderField(groupedField, onChange, groupedField.type)
                        : null}
                    </Box>
                  ))}
              </Flex>
            </Fragment>
          ) : (
            <Fragment>
              {field.title && (
                <Paragraph m={0} p={0} pt={2} pb={1}>
                  {field.title}
                  {field.required && <RequiredText>required</RequiredText>}
                </Paragraph>
              )}
              {renderField(field, onChange, type)}
            </Fragment>
          )}
        </FieldWrapper>
      ))}

    {/*
    Sortable field. Right now only used
    for the activities drag-and-drop
    */}
    {isSortable && (
      <DragDropContext onDragEnd={onChangeSort}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <DraggableList
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {fields.map((field, index) => (
                <Draggable
                  key={field.name}
                  draggableId={field.name}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={provided.draggableProps.style}
                    >
                      <FieldWrapper
                        key={field.name}
                        my={2}
                        isSortable={true}
                        isDragging={snapshot.isDragging}
                      >
                        <MoveIcon
                          size={16}
                          style={{ marginLeft: '4px', marginRight: '10px' }}
                        />
                        {renderField(field, onChange, type)}
                      </FieldWrapper>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </DraggableList>
          )}
        </Droppable>
      </DragDropContext>
    )}
  </Box>
);
