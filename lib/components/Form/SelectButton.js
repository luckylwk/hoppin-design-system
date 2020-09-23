"use strict";

exports.__esModule = true;
exports["default"] = exports.SingleSelectButton = exports.SelectButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shuffle2 = _interopRequireDefault(require("lodash/shuffle"));

var _intersection2 = _interopRequireDefault(require("lodash/intersection"));

var _difference2 = _interopRequireDefault(require("lodash/difference"));

var _fi = require("react-icons/fi");

var _Flex = require("../Flex");

var _Box = require("../Box");

var _ = require(".");

var _Button = require("../Button");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: -2px 2px;\n  padding: 4px 4px 2px 4px;\n\n  outline: none;\n  appearance: none;\n\n  background: ", ";\n  color: white;\n\n  border-radius: ", ";\n\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100%;\n\n  background: transparent;\n\n  margin: 0;\n  padding: 2px 8px;\n\n  border: 0px;\n  border-radius: 0px;\n  box-shadow: 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// ---------------------------
var InputFieldStyled = (0, _styledComponents["default"])(_.InputField)(_templateObject());

var SpanStyled = _styledComponents["default"].span(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.neutral.darker;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.radii.xsmall;
}); // ---------------------------


var getIsSelected = function getIsSelected(isMultiSelect, value, option) {
  if (!value) return false;
  if (isMultiSelect) return value.indexOf(option.value) > -1;
  return value === option.value;
};

var splitValueWithOther = function splitValueWithOther(compositeValue, optionValues, isMultiSelect) {
  if (isMultiSelect) {
    var options_value = (0, _intersection2["default"])(optionValues, compositeValue);
    var other_value = (0, _difference2["default"])(compositeValue, options_value);

    if (other_value.length === 0) {
      return {
        value: compositeValue,
        other: null
      };
    } else {
      return {
        value: options_value,
        other: other_value
      };
    }
  } else {
    if (optionValues.indexOf(compositeValue) > -1) {
      return {
        value: compositeValue,
        other: null
      };
    } else {
      return {
        value: null,
        other: compositeValue
      };
    }
  }
}; // ---------------------------


var SelectButton = function SelectButton(_ref3) {
  var name = _ref3.name,
      type = _ref3.type,
      options = _ref3.options,
      valueComposite = _ref3.value,
      onChange = _ref3.onChange,
      isMultiSelect = _ref3.isMultiSelect,
      enableOther = _ref3.enableOther,
      enableWildcard = _ref3.enableWildcard,
      wildcardText = _ref3.wildcardText,
      randomizeOptions = _ref3.randomizeOptions,
      numColumns = _ref3.numColumns,
      maxSelect = _ref3.maxSelect,
      rest = _objectWithoutPropertiesLoose(_ref3, ["name", "type", "options", "value", "onChange", "isMultiSelect", "enableOther", "enableWildcard", "wildcardText", "randomizeOptions", "numColumns", "maxSelect"]);

  var _splitValueWithOther = splitValueWithOther(valueComposite, options.map(function (o) {
    return o.value;
  }), isMultiSelect),
      value = _splitValueWithOther.value,
      other = _splitValueWithOther.other; // const myInputRef = useRef();

  /** Optional shuffling of options */


  var _useState = (0, _react.useState)(!enableOther && !enableWildcard && randomizeOptions ? (0, _shuffle2["default"])(options) : options),
      optionsArray = _useState[0];
  /** Other related state and functions */


  var _useState2 = (0, _react.useState)(other ? true : false),
      otherSelected = _useState2[0],
      setOtherSelected = _useState2[1];

  var _useState3 = (0, _react.useState)(other),
      otherValue = _useState3[0],
      setOtherValue = _useState3[1];

  var _useState4 = (0, _react.useState)(false),
      otherActive = _useState4[0],
      setOtherActive = _useState4[1];

  var onToggleOther = function onToggleOther() {
    setOtherActive(true); // console.log(myInputRef);
  };

  var onChangeOther = function onChangeOther(event) {
    setOtherValue(event.target.value);
  };

  var onBlurOther = function onBlurOther(event) {
    if (otherValue && otherValue.length > 0) {
      setOtherSelected(true);
      onChange({
        target: {
          name: name,
          type: type,
          value: isMultiSelect ? [].concat(value, [otherValue]) : otherValue
        }
      }, event);
    } else {
      setOtherValue(null);
      setOtherSelected(false);
      onChange({
        target: {
          name: name,
          type: type,
          value: value
        }
      }, event);
    }

    setOtherActive(false);
  };

  var onSubmitOther = function onSubmitOther() {};
  /** Specific onSelect handler */


  var onSelect = function onSelect(_ref4, event) {
    var _ref4$target = _ref4.target,
        select = _ref4$target.select,
        isSelected = _ref4$target.isSelected;

    if (isMultiSelect) {
      var newValue = [].concat(value);

      if (enableWildcard && select === wildcardText) {
        newValue = [];
      }

      if (isSelected) {
        newValue.splice(newValue.indexOf(select), 1);
      } else if (!maxSelect || maxSelect && newValue.length < maxSelect) {
        newValue.push(select);
      }

      if (otherValue && otherValue.length > 0) {
        newValue = [].concat(newValue, [otherValue]);
      }

      onChange({
        target: {
          name: name,
          type: type,
          value: newValue
        }
      }, event);
    } else {
      onChange({
        target: {
          name: name,
          type: type,
          value: select
        }
      }, event);
      setOtherSelected(false);
      setOtherValue(null);
    }
  };
  /** Define how many columns we will need. */


  var numOptions = enableOther ? optionsArray.length + 1 : optionsArray.length;
  var optionsColumns = [];
  var columnWidthDesktop = '100%';

  if (numColumns && numColumns > 1) {
    var minItemsPerColumn = Math.floor(numOptions / numColumns);
    var itemsRemaining = numOptions - numColumns * minItemsPerColumn;
    var startIndex = 0;
    var endIndex = minItemsPerColumn + (itemsRemaining > 0 ? 1 : 0);

    for (var i = 0; i < numColumns; i++) {
      var selection = optionsArray.slice(startIndex, endIndex);
      startIndex = endIndex;
      endIndex = endIndex + minItemsPerColumn + (itemsRemaining > i + 1 ? 1 : 0);
      optionsColumns.push(selection);
    }

    columnWidthDesktop = parseInt(100.0 / numColumns - 2) + "%";
  } else {
    optionsColumns = [optionsArray];
  }

  var isWildcardSelected = enableWildcard && getIsSelected(isMultiSelect, other, {
    value: wildcardText
  });
  console.log('isWildcardSelected', isWildcardSelected);
  return /*#__PURE__*/_react["default"].createElement(_Box.Box, null, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    flexWrap: "wrap",
    justifyContent: "center"
  }, optionsColumns.map(function (columnOptions, ix) {
    var isLastColumn = !numColumns || numColumns === ix + 1;
    return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      key: name + "-opt-" + ix,
      width: ['100%', '100%', columnWidthDesktop],
      maxWidth: ['100%', '100%', columnWidthDesktop],
      marginY: ['none', 'base', 'small'],
      marginX: "xsmall"
    }, /*#__PURE__*/_react["default"].createElement(_Button.ButtonGroup, {
      flexDirection: optionsColumns.length > 1 ? 'column' : rest.flexDirection || 'column'
    }, columnOptions.map(function (thisOption) {
      var isSelected = getIsSelected(isMultiSelect, value, thisOption);
      var mockEvent = {
        target: {
          select: thisOption.value,
          isSelected: isSelected
        }
      };
      return /*#__PURE__*/_react["default"].createElement(_Button.ButtonSelect, {
        key: type + "-" + name + "-" + thisOption.value,
        onClick: onSelect.bind(_this, mockEvent),
        selected: isSelected,
        marginY: "xsmall",
        marginX: "xsmall",
        padding: ['small', 'small', 'small'],
        borderTopWidth: "0"
      }, thisOption.label);
    }), enableWildcard && isLastColumn && /*#__PURE__*/_react["default"].createElement(_Button.ButtonSelect, {
      onClick: onSelect.bind(_this, {
        target: {
          select: wildcardText,
          isSelected: isWildcardSelected
        }
      }),
      selected: isWildcardSelected,
      marginY: "xsmall",
      marginX: "xsmall",
      padding: ['small', 'small', 'small'],
      borderTopWidth: "0"
    }, wildcardText), !enableWildcard && enableOther && isLastColumn && /*#__PURE__*/_react["default"].createElement(_Button.ButtonSelect, {
      type: "button",
      marginY: "xsmall",
      marginX: "xsmall",
      paddingX: otherActive ? 'xsmall' : 'base',
      paddingY: otherActive ? 'xsmall' : 'small',
      onClick: onToggleOther,
      selected: otherSelected && !otherActive
    }, otherActive ? /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      flexGrow: "1"
    }, /*#__PURE__*/_react["default"].createElement(InputFieldStyled, {
      name: "other",
      value: otherValue || '',
      onChange: onChangeOther,
      onBlur: onBlurOther
    })), /*#__PURE__*/_react["default"].createElement(SpanStyled, {
      onClick: onSubmitOther
    }, /*#__PURE__*/_react["default"].createElement(_fi.FiCheck, {
      size: 16
    }))) : other ? "Other: " + other : 'Other')));
  })));
};

exports.SelectButton = SelectButton;
SelectButton.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes["default"].string,
  name: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  options: _propTypes["default"].array.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  isMultiSelect: _propTypes["default"].bool,
  enableOther: _propTypes["default"].bool,
  enableWildcard: _propTypes["default"].bool,
  wildcardText: _propTypes["default"].string,
  randomizeOptions: _propTypes["default"].bool,
  numColumns: _propTypes["default"].number,
  maxSelect: _propTypes["default"].number
} : {};
SelectButton.defaultProps = {
  type: 'select-button',
  isMultiSelect: false,
  enableOther: false,
  enableWildcard: false,
  wildcardText: 'All of the above',
  randomizeOptions: false,
  numColumns: null,
  maxSelect: null
};
SelectButton.displayName = 'SelectButton'; // ---------------------------

var SingleSelectButton = function SingleSelectButton(props) {
  return /*#__PURE__*/_react["default"].createElement(SelectButton, props);
};

exports.SingleSelectButton = SingleSelectButton;
SingleSelectButton.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes["default"].string
} : {};
SingleSelectButton.defaultProps = {
  type: 'single-select-button'
};
SingleSelectButton.displayName = 'SingleSelectButton'; // ---------------------------

var _default = SelectButton;
exports["default"] = _default;