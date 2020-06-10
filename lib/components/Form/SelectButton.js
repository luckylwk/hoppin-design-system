'use strict';

exports.__esModule = true;
exports.SingleSelectButton = exports.SelectButton = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: block;\n  width: 100%;\n\n  background: transparent;\n\n  margin: 0;\n  padding: 0px 8px;\n\n  border: 0px;\n  border-radius: 0px;\n  box-shadow: 0px;\n'], ['\n  display: block;\n  width: 100%;\n\n  background: transparent;\n\n  margin: 0;\n  padding: 0px 8px;\n\n  border: 0px;\n  border-radius: 0px;\n  box-shadow: 0px;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin: -2px 2px;\n  padding: 4px 4px 2px 4px;\n\n  outline: none;\n  appearance: none;\n\n  background: ', ';\n  color: white;\n\n  border-radius: ', ';\n\n  cursor: pointer;\n'], ['\n  margin: -2px 2px;\n  padding: 4px 4px 2px 4px;\n\n  outline: none;\n  appearance: none;\n\n  background: ', ';\n  color: white;\n\n  border-radius: ', ';\n\n  cursor: pointer;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

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

var InputStyled = (0, _styledComponents2.default)(_.InputField)(_templateObject);

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
      rest = _objectWithoutProperties(_ref3, ['name', 'type', 'options', 'value', 'onChange', 'isMultiSelect', 'enableOther']);

  var _splitValueWithOther = splitValueWithOther(valueComposite, options.map(function (o) {
    return o.value;
  }), isMultiSelect),
      value = _splitValueWithOther.value,
      other = _splitValueWithOther.other;

  var _useState = (0, _react.useState)(other ? true : false),
      otherSelected = _useState[0],
      setOtherSelected = _useState[1];

  var _useState2 = (0, _react.useState)(other),
      otherValue = _useState2[0],
      setOtherValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      otherActive = _useState3[0],
      setOtherActive = _useState3[1];

  var onToggleOther = function onToggleOther() {
    setOtherActive(true);
  };

  var onChangeOther = function onChangeOther(event) {
    setOtherValue(event.target.value);
  };

  var onBlurOther = function onBlurOther(event) {
    if (otherValue && otherValue.length > 0) {
      setOtherSelected(true);
      if (isMultiSelect) {
        onChange({ target: { name: name, type: type, value: [].concat(value, [otherValue]) } }, event);
      } else {
        onChange({ target: { name: name, type: type, value: otherValue } }, event);
      }
    } else {
      setOtherValue(null);
      setOtherSelected(false);
      onChange({ target: { name: name, type: type, value: value } }, event);
    }
    setOtherActive(false);
  };

  var onSubmitOther = function onSubmitOther() {};

  var onSelect = function onSelect(_ref4, event) {
    var _ref4$target = _ref4.target,
        select = _ref4$target.select,
        isSelected = _ref4$target.isSelected;

    if (isMultiSelect) {
      var newValue = [].concat(value);
      if (isSelected) {
        newValue.splice(newValue.indexOf(select), 1);
      } else {
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

  return _react2.default.createElement(
    _Button.ButtonGroup,
    rest,
    options.map(function (option, ix) {
      var isSelected = getIsSelected(isMultiSelect, value, option);
      return _react2.default.createElement(
        _Button.ButtonSelect,
        {
          key: type + '-' + name + '-' + option.value,
          type: 'button',
          onClick: onSelect.bind(undefined, {
            target: { select: option.value, isSelected: isSelected }
          }),
          selected: isSelected,
          marginRight: ix > options.length - 1 ? 'small' : 'none',
          marginBottom: 'small'
        },
        option.label
      );
    }),
    enableOther && _react2.default.createElement(
      _Button.ButtonSelect,
      {
        type: 'button',
        marginBottom: 'small',
        paddingX: otherActive ? 'xsmall' : 'base',
        paddingY: otherActive ? 'small' : 'small',
        onClick: onToggleOther,
        selected: otherSelected && !otherActive
      },
      otherActive ? _react2.default.createElement(
        _Flex.Flex,
        { alignItems: 'center' },
        _react2.default.createElement(
          _Box.Box,
          { flexGrow: '1' },
          _react2.default.createElement(InputStyled, {
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
  );
};

SelectButton.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  options: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  isMultiSelect: _propTypes2.default.bool,
  enableOther: _propTypes2.default.bool
} : {};

SelectButton.defaultProps = {
  type: 'select-button',
  isMultiSelect: false,
  enableOther: false
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