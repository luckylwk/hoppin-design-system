"use strict";

exports.__esModule = true;
exports["default"] = exports.renderField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _has2 = _interopRequireDefault(require("lodash/has"));

var _fi = require("react-icons/fi");

var _reactSelect = _interopRequireWildcard(require("react-select"));

var _async = _interopRequireDefault(require("react-select/async"));

var _creatable = _interopRequireDefault(require("react-select/creatable"));

var _asyncCreatable = _interopRequireDefault(require("react-select/async-creatable"));

var _SelectStyling = _interopRequireDefault(require("./SelectStyling"));

var _ = require(".");

var _Flex = require("../Flex");

var _Box = require("../Box");

var _Button = require("../Button");

var _Paragraph = require("../Paragraph");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// ---------------------------
var FiChevronDownStyled = (0, _styledComponents["default"])(_fi.FiChevronDown)(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      focused = _ref.focused;
  return focused === 'true' ? theme.colors.primary.dark : theme.colors.neutral.base;
});
var FiSearchStyled = (0, _styledComponents["default"])(_fi.FiSearch)(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme,
      focused = _ref2.focused;
  return focused === 'true' ? theme.colors.primary.dark : theme.colors.neutral.base;
});

var SearchDropdownIndicator = function SearchDropdownIndicator(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactSelect.components.DropdownIndicator, props, /*#__PURE__*/_react["default"].createElement(FiSearchStyled, {
    focused: "" + props.isFocused
  }));
};

var DropdownIndicator = function DropdownIndicator(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactSelect.components.DropdownIndicator, props, /*#__PURE__*/_react["default"].createElement(FiChevronDownStyled, {
    focused: "" + props.isFocused
  }));
};

var IndicatorSeparator = function IndicatorSeparator(_ref3) {
  var innerProps = _ref3.innerProps;
  return /*#__PURE__*/_react["default"].createElement("span", _extends({
    style: {
      backgroundColor: 'transparent'
    }
  }, innerProps));
}; // ---------------------------

/**
 * @param {object} field - object that holds the field details.
 * @param {func}   onChange
 */


var renderField = function renderField(field, _onChange, selectStyling) {
  var charsUsed = field.value ? field.value.length : 0; // To reset the margin underneath a field

  if (field.maxLength && !(0, _has2["default"])(field, 'props.marginBottom')) {
    field.props = _extends({}, field.props, {
      marginBottom: 0
    });
  }

  if (field.type === 'textarea') {
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_.TextareaMd, _extends({
      name: field.name,
      initialValue: field.value,
      label: field.label,
      placeholder: field.placeholder,
      onChange: _onChange.bind(null, field.name),
      context: field.context
    }, field.props)), field.maxLength && /*#__PURE__*/_react["default"].createElement(_.RequiredCharacters, null, "We recommend using no more than", ' ', charsUsed !== 0 ? charsUsed + "/" : '', field.maxLength, " characters."), field.explain && /*#__PURE__*/_react["default"].createElement(_.FieldExplanation, null, field.explain));
  }

  if (field.type === 'creatable-select') {
    var LabelOrFragment = field.label ? _.Label : _react.Fragment;
    var labelProps = field.label ? {
      label: field.label,
      htmlFor: field.name
    } : {};
    return /*#__PURE__*/_react["default"].createElement(LabelOrFragment, labelProps, field.label, /*#__PURE__*/_react["default"].createElement(_creatable["default"], _extends({
      isClearable: true,
      clearValue: function clearValue() {
        return _onChange(field.name, {
          target: {
            action: 'clear',
            name: field.name,
            type: field.type,
            value: {}
          }
        });
      },
      onChange: function onChange(option, _ref4) {
        var action = _ref4.action;
        var mockEvent = {
          target: {
            action: action,
            name: field.name,
            type: field.type,
            value: action === 'clear' ? {} : option
          }
        };
        return _onChange(field.name, mockEvent);
      },
      formatCreateLabel: function formatCreateLabel(userInput) {
        return "Click to add: " + userInput;
      },
      options: field.options,
      value: field.value,
      components: {
        IndicatorSeparator: IndicatorSeparator,
        DropdownIndicator: DropdownIndicator
      }
    }, selectStyling)), field.explain && /*#__PURE__*/_react["default"].createElement(_.FieldExplanation, null, field.explain));
  }

  if (field.type === 'select' || field.type === 'multi-select') {
    var _LabelOrFragment = field.label ? _.Label : _react.Fragment;

    var _labelProps = field.label ? {
      label: field.label,
      htmlFor: field.name
    } : {};

    return /*#__PURE__*/_react["default"].createElement(_LabelOrFragment, _labelProps, field.label, /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], _extends({
      isMulti: field.type === 'multi-select',
      isClearable: field.type === 'multi-select',
      value: field.value,
      onChange: function onChange(option, _ref5) {
        var action = _ref5.action;
        var updatedValue = field.type === 'multi-select' ? option : option;
        var emptyValue = field.type === 'multi-select' ? [] : {};
        var mockEvent = {
          target: {
            action: action,
            name: field.name,
            type: field.type,
            value: action === 'clear' ? emptyValue : updatedValue
          }
        };
        return _onChange(field.name, mockEvent);
      },
      options: field.options,
      components: {
        IndicatorSeparator: IndicatorSeparator,
        DropdownIndicator: DropdownIndicator
      }
    }, selectStyling)), field.explain && /*#__PURE__*/_react["default"].createElement(_.FieldExplanation, null, field.explain));
  } // Used for location (using Google GeoLocation API)


  if (field.type === 'async-select') {
    var _LabelOrFragment2 = field.label ? _.Label : _react.Fragment;

    var _labelProps2 = field.label ? {
      label: field.label,
      htmlFor: field.name
    } : {};

    return /*#__PURE__*/_react["default"].createElement(_LabelOrFragment2, _labelProps2, field.label, /*#__PURE__*/_react["default"].createElement(_async["default"], _extends({
      cacheOptions: false,
      value: field.value,
      onChange: function onChange(option, _ref6) {
        var action = _ref6.action;
        var mockEvent = {
          target: {
            action: action,
            name: field.name,
            type: field.type,
            value: action === 'clear' ? {} : option
          }
        };
        return _onChange(field.name, mockEvent);
      },
      loadOptions: field.options,
      components: {
        IndicatorSeparator: IndicatorSeparator,
        DropdownIndicator: SearchDropdownIndicator
      },
      placeholder: field.placeholder || 'Search',
      noOptionsMessage: function noOptionsMessage() {
        return 'Start typing to start the search';
      }
    }, selectStyling)), field.explain && /*#__PURE__*/_react["default"].createElement(_.FieldExplanation, null, field.explain));
  }

  if (field.type === 'async-creatable-select') {
    var _LabelOrFragment3 = field.label ? _.Label : _react.Fragment;

    var _labelProps3 = field.label ? {
      label: field.label,
      htmlFor: field.name
    } : {};

    return /*#__PURE__*/_react["default"].createElement(_LabelOrFragment3, _labelProps3, field.label, /*#__PURE__*/_react["default"].createElement(_asyncCreatable["default"], _extends({
      name: field.name,
      cacheOptions: false,
      loadOptions: field.options,
      value: field.value,
      onChange: function onChange(option, _ref7) {
        var action = _ref7.action;
        var mockEvent = {
          target: {
            action: action,
            name: field.name,
            type: field.type,
            value: action === 'clear' ? {} : option
          }
        };
        return _onChange(field.name, mockEvent);
      },
      components: {
        IndicatorSeparator: IndicatorSeparator,
        DropdownIndicator: SearchDropdownIndicator
      },
      placeholder: field.placeholder || 'Search'
    }, selectStyling)), field.explain && /*#__PURE__*/_react["default"].createElement(_.FieldExplanation, null, field.explain));
  }

  if (field.type === 'checkbox') {
    return /*#__PURE__*/_react["default"].createElement(_.Checkbox, {
      name: field.name,
      label: field.label,
      checked: field.checked,
      onChange: _onChange.bind(null, field.name)
    });
  }

  if (field.type === 'single-select-button' || field.type === 'select-button') {
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_.SelectButton, {
      name: field.name,
      options: field.options,
      value: field.value,
      onChange: _onChange.bind(null, field.name),
      isMultiSelect: field.type === 'select-button'
    }), field.explain && /*#__PURE__*/_react["default"].createElement(_.FieldExplanation, {
      marginTop: "4px"
    }, field.explain));
  }

  if (field.type === 'inline-submit') {
    // if we have a label, wrap input in label add margin-top to input, otherwise no wrapper
    var _LabelOrFragment4 = field.label ? _.Label : _react.Fragment;

    var _labelProps4 = field.label ? {
      label: field.title ? undefined : field.label,
      htmlFor: field.name
    } : {};

    var flexProps = field.label ? {
      marginTop: 'small',
      marginBottom: 'base'
    } : {};
    var inputProps = field.label ? {
      marginTop: 'none',
      marginBottom: 'none'
    } : {};
    return /*#__PURE__*/_react["default"].createElement(_LabelOrFragment4, _labelProps4, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, flexProps, /*#__PURE__*/_react["default"].createElement(_.Input, _extends({
      type: field.type,
      value: field.value || '',
      name: field.name,
      onChange: _onChange.bind(null, field.name),
      context: field.context
    }, inputProps)), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "primary",
      marginLeft: "small",
      disabled: field.isSubmitDisabled
    }, field.submitText || 'Submit')));
  }
  /**
   * Default is a regular input field.
   */


  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_.Input, _extends({
    type: field.type,
    value: field.value || '',
    name: field.name,
    placeholder: field.placeholder // label={field.title ? undefined : field.label}
    ,
    label: field.label,
    onChange: _onChange.bind(null, field.name),
    context: field.context,
    renderWidth: field.renderWidth || 'full',
    icon: field.icon
  }, field.props)), field.maxLength && /*#__PURE__*/_react["default"].createElement(_.RequiredCharacters, null, "We recommend using no more than", ' ', charsUsed !== 0 ? charsUsed + "/" : '', field.maxLength, " characters."), field.explain && /*#__PURE__*/_react["default"].createElement(_.FieldExplanation, null, field.explain));
}; // ---------------------------


exports.renderField = renderField;

var Fields = function Fields(_ref8) {
  var onChange = _ref8.onChange,
      fields = _ref8.fields,
      theme = _ref8.theme;
  var selectStyling = (0, _SelectStyling["default"])(theme);
  return /*#__PURE__*/_react["default"].createElement(_Box.Box, null, fields.map(function (field) {
    return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      key: field.name,
      marginBottom: (0, _has2["default"])(field, 'marginBottom') ? field.marginBottom : 'large'
    }, field.type === 'group' ? /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, field.title && /*#__PURE__*/_react["default"].createElement(_Paragraph.Paragraph, null, field.title), /*#__PURE__*/_react["default"].createElement(_Flex.Flex, null, field.list.length > 0 && field.list.map(function (groupedField, ix) {
      return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
        key: field.name + "-" + groupedField.name,
        flex: 1,
        marginRight: "xsmall",
        marginLeft: ix === 0 ? 'none' : 'xsmall'
      }, groupedField.type ? renderField(groupedField, onChange, selectStyling) : null);
    }))) : /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, field.title && /*#__PURE__*/_react["default"].createElement(_Paragraph.Paragraph, {
      paddingTop: "small",
      paddingBottom: "xsmall"
    }, field.title), renderField(field, onChange, selectStyling)));
  }));
};

Fields.displayName = 'Fields';
Fields.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * callback to be called when a field updates fn(fieldName, event)
   */
  onChange: _propTypes["default"].func,

  /**
   * fields config array
   */
  fields: _propTypes["default"].array
} : {};

var _default = (0, _styledComponents.withTheme)(Fields);

exports["default"] = _default;