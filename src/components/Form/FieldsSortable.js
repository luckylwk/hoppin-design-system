import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

// Input components...
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FiMove } from 'react-icons/fi';
import { Box } from '../Box';
import { renderField } from './Fields';

/**
 * Wrapper for an individual field.
 */
export const FieldWrapper = styled(Box)`
  user-select: 'none';
  display: flex;
  align-items: center;
  padding: 5px;

  & > div {
    flex: 1;
  }

  ${props =>
    !props.isDragging
      ? ''
      : `
    width: 100%;
  `};
`;

const DraggableList = styled(Box)`
  border-radius: ${props => props.theme.radii.small};

  padding: ${props => props.theme.space[3]};
  padding-left: ${props => props.theme.space[1]};

  background: ${props =>
    props.isDraggingOver ? props.theme.colors.whiteout.light : 'transparent'};

  border: 2px dotted
    ${props =>
      props.isDraggingOver
        ? props.theme.colors.neutral.lighter
        : 'transparent'};
`;

/**
 *
 */

const sortFields = (fields, onSort, dropResult) => {
  let newFields = [...fields];
  const movedField = newFields.splice(dropResult.source.index, 1)[0];
  newFields.splice(dropResult.destination.index, 0, movedField);
  onSort(newFields);
};

export const FieldsSortable = ({ onSort, onChange, fields, theme }) => (
  <Box>
    <DragDropContext onDragEnd={sortFields.bind(this, fields, onSort)}>
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
                      isDragging={snapshot.isDragging}
                    >
                      <FiMove
                        size={16}
                        style={{ marginLeft: '4px', marginRight: '10px' }}
                      />
                      {renderField(field, onChange, theme)}
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
  </Box>
);

FieldsSortable.displayName = 'fields';
FieldsSortable.propTypes = {
  /**
   * callback to be called when a field updates fn(fieldName, event)
   */
  onChange: PropTypes.func,
  /**
   * callback to be called when the fields have been sorted fn(newFieldsArray)
   */
  onSort: PropTypes.func,
  /**
   * fields config array
   */
  fields: PropTypes.array,
};

export default withTheme(FieldsSortable);
