'use strict';

exports.__esModule = true;
exports.SingleSelectButton = exports.SelectButton = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: block;\n  width: 100%;\n\n  background: transparent;\n\n  margin: 0;\n  padding: 2px 8px;\n\n  border: 0px;\n  border-radius: 0px;\n  box-shadow: 0px;\n'], ['\n  display: block;\n  width: 100%;\n\n  background: transparent;\n\n  margin: 0;\n  padding: 2px 8px;\n\n  border: 0px;\n  border-radius: 0px;\n  box-shadow: 0px;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin: -2px 2px;\n  padding: 4px 4px 2px 4px;\n\n  outline: none;\n  appearance: none;\n\n  background: ', ';\n  color: white;\n\n  border-radius: ', ';\n\n  cursor: pointer;\n'], ['\n  margin: -2px 2px;\n  padding: 4px 4px 2px 4px;\n\n  outline: none;\n  appearance: none;\n\n  background: ', ';\n  color: white;\n\n  border-radius: ', ';\n\n  cursor: pointer;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _shuffle2 = require('lodash/shuffle');

var _shuffle3 = _interopRequireDefault(_shuffle2);

var _intersection2 = require('lodash/intersection');

var _intersection3 = _interopRequireDefault(_intersection2);

var _difference2 = require('lodash/difference');

var _difference3 = _interopRequireDefault(_difference2);

var _fi = require('react-icons/fi');

var _Flex = require('../Flex');

var _Box = require('../Box');

var _ = require('.');

var _Button = require('../Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// ---------------------------

var InputFieldStyled = (0, _styledComponents2.default)(_.InputField)(_templateObject);

var SpanStyled = _styledComponents2.default.span(_templateObject2, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.neutral.darker;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.radii.xsmall;
});

// ---------------------------

var getIsSelected = function getIsSelected(isMultiSelect, value, option) {
  if (!value) return false;
  if (isMultiSelect) return value.indexOf(option.value) > -1;
  return value === option.value;
};

var splitValueWithOther = function splitValueWithOther(compositeValue, optionValues, isMultiSelect) {
  if (isMultiSelect) {
    var options_value = (0, _intersection3.default)(optionValues, compositeValue);
    var other_value = (0, _difference3.default)(compositeValue, options_value);
    if (other_value.length === 0) {
      return { value: compositeValue, other: null };
    } else {
      return { value: options_value, other: other_value };
    }
  } else {
    if (optionValues.indexOf(compositeValue) > -1) {
      return { value: compositeValue, other: null };
    } else {
      return { value: null, other: compositeValue };
    }
  }
};

// ---------------------------

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
      rest = _objectWithoutProperties(_ref3, ['name', 'type', 'options', 'value', 'onChange', 'isMultiSelect', 'enableOther', 'enableWildcard', 'wildcardText', 'randomizeOptions', 'numColumns', 'maxSelect']);

  var _splitValueWithOther = splitValueWithOther(valueComposite, options.map(function (o) {
    return o.value;
  }), isMultiSelect),
      value = _splitValueWithOther.value,
      other = _splitValueWithOther.other;

  // const myInputRef = useRef();

  /** Optional shuffling of options */


  var _useState = (0, _react.useState)(!enableOther && !enableWildcard && randomizeOptions ? (0, _shuffle3.default)(options) : options),
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
    setOtherActive(true);
    // console.log(myInputRef);
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
      onChange({ target: { name: name, type: type, value: value } }, event);
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
      onChange({ target: { name: name, type: type, value: newValue } }, event);
    } else {
      onChange({ target: { name: name, type: type, value: select } }, event);
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
    columnWidthDesktop = parseInt(100.0 / numColumns - 2) + '%';
  } else {
    optionsColumns = [optionsArray];
  }

  var isWildcardSelected = enableWildcard && getIsSelected(isMultiSelect, other, { value: wildcardText });
  console.log('isWildcardSelected', isWildcardSelected);

  return _react2.default.createElement(
    _Box.Box,
    null,
    _react2.default.createElement(
      _Flex.Flex,
      { flexWrap: 'wrap', justifyContent: 'center' },
      optionsColumns.map(function (columnOptions, ix) {
        var isLastColumn = !numColumns || numColumns === ix + 1;
        return _react2.default.createElement(
          _Box.Box,
          {
            key: name + '-opt-' + ix,
            width: ['100%', '100%', columnWidthDesktop],
            maxWidth: ['100%', '100%', columnWidthDesktop],
            marginY: ['none', 'base', 'small'],
            marginX: 'xsmall'
          },
          _react2.default.createElement(
            _Button.ButtonGroup,
            {
              flexDirection: optionsColumns.length > 1 ? 'column' : rest.flexDirection || 'column'
            },
            columnOptions.map(function (thisOption) {
              var isSelected = getIsSelected(isMultiSelect, value, thisOption);
              var mockEvent = {
                target: { select: thisOption.value, isSelected: isSelected }
              };
              return _react2.default.createElement(
                _Button.ButtonSelect,
                {
                  key: type + '-' + name + '-' + thisOption.value,
                  onClick: onSelect.bind(undefined, mockEvent),
                  selected: isSelected,
                  marginY: 'xsmall',
                  marginX: 'xsmall',
                  padding: ['small', 'small', 'small'],
                  borderTopWidth: '0'
                },
                thisOption.label
              );
            }),
            enableWildcard && isLastColumn && _react2.default.createElement(
              _Button.ButtonSelect,
              {
                onClick: onSelect.bind(undefined, {
                  target: {
                    select: wildcardText,
                    isSelected: isWildcardSelected
                  }
                }),
                selected: isWildcardSelected,
                marginY: 'xsmall',
                marginX: 'xsmall',
                padding: ['small', 'small', 'small'],
                borderTopWidth: '0'
              },
              wildcardText
            ),
            !enableWildcard && enableOther && isLastColumn && _react2.default.createElement(
              _Button.ButtonSelect,
              {
                type: 'button',
                marginY: 'xsmall',
                marginX: 'xsmall',
                paddingX: otherActive ? 'xsmall' : 'base',
                paddingY: otherActive ? 'xsmall' : 'small',
                onClick: onToggleOther,
                selected: otherSelected && !otherActive
              },
              otherActive ? _react2.default.createElement(
                _Flex.Flex,
                { alignItems: 'center' },
                _react2.default.createElement(
                  _Box.Box,
                  { flexGrow: '1' },
                  _react2.default.createElement(InputFieldStyled, {
                    name: 'other',
                    value: otherValue || '',
                    onChange: onChangeOther,
                    onBlur: onBlurOther
                  })
                ),
                _react2.default.createElement(
                  SpanStyled,
                  { onClick: onSubmitOther },
                  _react2.default.createElement(_fi.FiCheck, { size: 16 })
                )
              ) : other ? 'Other: ' + other : 'Other'
            )
          )
        );
      })
    )
  );
};

SelectButton.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  options: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  isMultiSelect: _propTypes2.default.bool,
  enableOther: _propTypes2.default.bool,
  enableWildcard: _propTypes2.default.bool,
  wildcardText: _propTypes2.default.string,
  randomizeOptions: _propTypes2.default.bool,
  numColumns: _propTypes2.default.number,
  maxSelect: _propTypes2.default.number
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

SelectButton.displayName = 'SelectButton';

// ---------------------------

var SingleSelectButton = function SingleSelectButton(props) {
  return _react2.default.createElement(SelectButton, props);
};

SingleSelectButton.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes2.default.string
} : {};

SingleSelectButton.defaultProps = {
  type: 'single-select-button'
};

SingleSelectButton.displayName = 'SingleSelectButton';

// ---------------------------

exports.SelectButton = SelectButton;
exports.SingleSelectButton = SingleSelectButton;
exports.default = SelectButton;