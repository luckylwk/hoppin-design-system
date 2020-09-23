"use strict";

exports.__esModule = true;
exports["default"] = exports.FieldsSortable = exports.FieldWrapper = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _fi = require("react-icons/fi");

var _Box = require("../Box");

var _Fields = require("./Fields");

var _this = void 0;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

// ---------------------------
var FieldWrapper = (0, _styledComponents["default"])(_Box.Box)(_templateObject(), function (props) {
  return !props.isDragging ? '' : "\n    width: 100%;\n  ";
}); // ---------------------------

exports.FieldWrapper = FieldWrapper;
var DraggableList = (0, _styledComponents["default"])(_Box.Box)(_templateObject2(), function (props) {
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


var FieldsSortable = function FieldsSortable(_ref) {
  var onSort = _ref.onSort,
      onChange = _ref.onChange,
      fields = _ref.fields,
      theme = _ref.theme;
  return /*#__PURE__*/_react["default"].createElement(_Box.Box, null, /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.DragDropContext, {
    onDragEnd: sortFields.bind(_this, fields, onSort)
  }, /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.Droppable, {
    droppableId: "droppable"
  }, function (provided, snapshot) {
    return /*#__PURE__*/_react["default"].createElement(DraggableList, {
      ref: provided.innerRef,
      isDraggingOver: snapshot.isDraggingOver
    }, fields.map(function (field, index) {
      return /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.Draggable, {
        key: field.name,
        draggableId: field.name,
        index: index
      }, function (provided, snapshot) {
        return /*#__PURE__*/_react["default"].createElement("div", _extends({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          style: provided.draggableProps.style
        }), /*#__PURE__*/_react["default"].createElement(FieldWrapper, {
          key: field.name,
          my: 2,
          isDragging: snapshot.isDragging
        }, /*#__PURE__*/_react["default"].createElement(_fi.FiMove, {
          size: 16,
          style: {
            marginLeft: '4px',
            marginRight: '10px'
          }
        }), (0, _Fields.renderField)(field, onChange, theme)));
      });
    }), provided.placeholder);
  })));
};

exports.FieldsSortable = FieldsSortable;
FieldsSortable.displayName = 'FieldsSortable';
FieldsSortable.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * callback to be called when a field updates fn(fieldName, event)
   */
  onChange: _propTypes["default"].func,

  /**
   * callback to be called when the fields have been sorted fn(newFieldsArray)
   */
  onSort: _propTypes["default"].func,

  /**
   * fields config array
   */
  fields: _propTypes["default"].array
} : {};

var _default = (0, _styledComponents.withTheme)(FieldsSortable);

exports["default"] = _default;