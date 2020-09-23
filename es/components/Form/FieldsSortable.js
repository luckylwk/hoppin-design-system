var _this = this;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: ", ";\n\n  padding: ", ";\n  padding-left: ", ";\n\n  background: ", ";\n\n  border: 2px dotted\n    ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  user-select: 'none';\n  display: flex;\n  align-items: center;\n  padding: 5px;\n\n  & > div {\n    flex: 1;\n  }\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FiMove } from 'react-icons/fi';
import { Box } from '../Box';
import { renderField } from './Fields'; // ---------------------------

export var FieldWrapper = styled(Box)(_templateObject(), function (props) {
  return !props.isDragging ? '' : "\n    width: 100%;\n  ";
}); // ---------------------------

var DraggableList = styled(Box)(_templateObject2(), function (props) {
  return props.theme.radii.small;
}, function (props) {
  return props.theme.space[3];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.isDraggingOver ? props.theme.colors.whiteout.light : 'transparent';
}, function (props) {
  return props.isDraggingOver ? props.theme.colors.neutral.lighter : 'transparent';
}); // ---------------------------

var sortFields = function sortFields(fields, onSort, dropResult) {
  var newFields = [].concat(fields);
  var movedField = newFields.splice(dropResult.source.index, 1)[0];
  newFields.splice(dropResult.destination.index, 0, movedField);
  onSort(newFields);
}; // ---------------------------


export var FieldsSortable = function FieldsSortable(_ref) {
  var onSort = _ref.onSort,
      onChange = _ref.onChange,
      fields = _ref.fields,
      theme = _ref.theme;
  return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(DragDropContext, {
    onDragEnd: sortFields.bind(_this, fields, onSort)
  }, /*#__PURE__*/React.createElement(Droppable, {
    droppableId: "droppable"
  }, function (provided, snapshot) {
    return /*#__PURE__*/React.createElement(DraggableList, {
      ref: provided.innerRef,
      isDraggingOver: snapshot.isDraggingOver
    }, fields.map(function (field, index) {
      return /*#__PURE__*/React.createElement(Draggable, {
        key: field.name,
        draggableId: field.name,
        index: index
      }, function (provided, snapshot) {
        return /*#__PURE__*/React.createElement("div", _extends({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          style: provided.draggableProps.style
        }), /*#__PURE__*/React.createElement(FieldWrapper, {
          key: field.name,
          my: 2,
          isDragging: snapshot.isDragging
        }, /*#__PURE__*/React.createElement(FiMove, {
          size: 16,
          style: {
            marginLeft: '4px',
            marginRight: '10px'
          }
        }), renderField(field, onChange, theme)));
      });
    }), provided.placeholder);
  })));
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