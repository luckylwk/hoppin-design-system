var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _this = this;

var _templateObject = _taggedTemplateLiteralLoose(['\n  user-select: \'none\';\n  display: flex;\n  align-items: center;\n  padding: 5px;\n\n  & > div {\n    flex: 1;\n  }\n\n  ', ';\n'], ['\n  user-select: \'none\';\n  display: flex;\n  align-items: center;\n  padding: 5px;\n\n  & > div {\n    flex: 1;\n  }\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  border-radius: ', ';\n\n  padding: ', ';\n  padding-left: ', ';\n\n  background: ', ';\n\n  border: 2px dotted\n    ', ';\n'], ['\n  border-radius: ', ';\n\n  padding: ', ';\n  padding-left: ', ';\n\n  background: ', ';\n\n  border: 2px dotted\n    ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

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
export var FieldWrapper = styled(Box)(_templateObject, function (props) {
  return !props.isDragging ? '' : '\n    width: 100%;\n  ';
});

var DraggableList = styled(Box)(_templateObject2, function (props) {
  return props.theme.radii.small;
}, function (props) {
  return props.theme.space[3];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.isDraggingOver ? props.theme.colors.whiteout.light : 'transparent';
}, function (props) {
  return props.isDraggingOver ? props.theme.colors.neutral.lighter : 'transparent';
});

/**
 *
 */

var sortFields = function sortFields(fields, onSort, dropResult) {
  var newFields = [].concat(fields);
  var movedField = newFields.splice(dropResult.source.index, 1)[0];
  newFields.splice(dropResult.destination.index, 0, movedField);
  onSort(newFields);
};

export var FieldsSortable = function FieldsSortable(_ref) {
  var onSort = _ref.onSort,
      onChange = _ref.onChange,
      fields = _ref.fields,
      theme = _ref.theme;
  return React.createElement(
    Box,
    null,
    React.createElement(
      DragDropContext,
      { onDragEnd: sortFields.bind(_this, fields, onSort) },
      React.createElement(
        Droppable,
        { droppableId: 'droppable' },
        function (provided, snapshot) {
          return React.createElement(
            DraggableList,
            {
              ref: provided.innerRef,
              isDraggingOver: snapshot.isDraggingOver
            },
            fields.map(function (field, index) {
              return React.createElement(
                Draggable,
                {
                  key: field.name,
                  draggableId: field.name,
                  index: index
                },
                function (provided, snapshot) {
                  return React.createElement(
                    'div',
                    _extends({
                      ref: provided.innerRef
                    }, provided.draggableProps, provided.dragHandleProps, {
                      style: provided.draggableProps.style
                    }),
                    React.createElement(
                      FieldWrapper,
                      {
                        key: field.name,
                        my: 2,
                        isDragging: snapshot.isDragging
                      },
                      React.createElement(FiMove, {
                        size: 16,
                        style: { marginLeft: '4px', marginRight: '10px' }
                      }),
                      renderField(field, onChange, theme)
                    )
                  );
                }
              );
            }),
            provided.placeholder
          );
        }
      )
    )
  );
};

FieldsSortable.displayName = 'FieldsSortable';
FieldsSortable.propTypes = process.env.NODE_ENV !== "production" ? {
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
  fields: PropTypes.array
} : {};

export default withTheme(FieldsSortable);