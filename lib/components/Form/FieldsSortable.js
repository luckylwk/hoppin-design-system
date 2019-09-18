'use strict';

exports.__esModule = true;
exports.FieldsSortable = exports.FieldWrapper = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  user-select: \'none\';\n  display: flex;\n  align-items: center;\n  padding: 5px;\n\n  & > div {\n    flex: 1;\n  }\n\n  ', ';\n'], ['\n  user-select: \'none\';\n  display: flex;\n  align-items: center;\n  padding: 5px;\n\n  & > div {\n    flex: 1;\n  }\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  border-radius: ', ';\n\n  padding: ', ';\n  padding-left: ', ';\n\n  background: ', ';\n\n  border: 2px dotted\n    ', ';\n'], ['\n  border-radius: ', ';\n\n  padding: ', ';\n  padding-left: ', ';\n\n  background: ', ';\n\n  border: 2px dotted\n    ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _fi = require('react-icons/fi');

var _Box = require('../Box');

var _Fields = require('./Fields');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// Input components...


/**
 * Wrapper for an individual field.
 */
var FieldWrapper = exports.FieldWrapper = (0, _styledComponents2.default)(_Box.Box)(_templateObject, function (props) {
  return !props.isDragging ? '' : '\n    width: 100%;\n  ';
});

var DraggableList = (0, _styledComponents2.default)(_Box.Box)(_templateObject2, function (props) {
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

var FieldsSortable = exports.FieldsSortable = function FieldsSortable(_ref) {
  var onSort = _ref.onSort,
      onChange = _ref.onChange,
      fields = _ref.fields,
      theme = _ref.theme;
  return _react2.default.createElement(
    _Box.Box,
    null,
    _react2.default.createElement(
      _reactBeautifulDnd.DragDropContext,
      { onDragEnd: sortFields.bind(undefined, fields, onSort) },
      _react2.default.createElement(
        _reactBeautifulDnd.Droppable,
        { droppableId: 'droppable' },
        function (provided, snapshot) {
          return _react2.default.createElement(
            DraggableList,
            {
              ref: provided.innerRef,
              isDraggingOver: snapshot.isDraggingOver
            },
            fields.map(function (field, index) {
              return _react2.default.createElement(
                _reactBeautifulDnd.Draggable,
                {
                  key: field.name,
                  draggableId: field.name,
                  index: index
                },
                function (provided, snapshot) {
                  return _react2.default.createElement(
                    'div',
                    _extends({
                      ref: provided.innerRef
                    }, provided.draggableProps, provided.dragHandleProps, {
                      style: provided.draggableProps.style
                    }),
                    _react2.default.createElement(
                      FieldWrapper,
                      {
                        key: field.name,
                        my: 2,
                        isDragging: snapshot.isDragging
                      },
                      _react2.default.createElement(_fi.FiMove, {
                        size: 16,
                        style: { marginLeft: '4px', marginRight: '10px' }
                      }),
                      (0, _Fields.renderField)(field, onChange, theme)
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

FieldsSortable.displayName = 'fields';
FieldsSortable.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * callback to be called when a field updates fn(fieldName, event)
   */
  onChange: _propTypes2.default.func,
  /**
   * callback to be called when the fields have been sorted fn(newFieldsArray)
   */
  onSort: _propTypes2.default.func,
  /**
   * fields config array
   */
  fields: _propTypes2.default.array
} : {};

exports.default = (0, _styledComponents.withTheme)(FieldsSortable);