'use strict';

exports.__esModule = true;
exports.SingleSelectButton = exports.SelectButton = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// ---------------------------

var getIsSelected = function getIsSelected(isMultiSelect, value, option) {
  if (!value) return false;
  if (isMultiSelect) return value.indexOf(option.value) > -1;
  return value === option.value;
};

// ---------------------------

var SelectButton = function SelectButton(_ref) {
  var name = _ref.name,
      type = _ref.type,
      options = _ref.options,
      value = _ref.value,
      onChange = _ref.onChange,
      isMultiSelect = _ref.isMultiSelect,
      rest = _objectWithoutProperties(_ref, ['name', 'type', 'options', 'value', 'onChange', 'isMultiSelect']);

  var onClick = function onClick(_ref2, event) {
    var _ref2$target = _ref2.target,
        fieldName = _ref2$target.name,
        fieldType = _ref2$target.type,
        select = _ref2$target.select,
        isSelected = _ref2$target.isSelected;

    if (isMultiSelect) {
      var newValue = [].concat(value);
      if (isSelected) {
        newValue.splice(newValue.indexOf(select), 1);
      } else {
        newValue.push(select);
      }
      onChange({ target: { name: fieldName, type: fieldType, value: newValue } }, event);
    } else {
      onChange({ target: { name: fieldName, type: fieldType, value: select } }, event);
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
          onClick: onClick.bind(undefined, {
            target: { name: name, type: type, select: option.value, isSelected: isSelected }
          }),
          selected: isSelected,
          marginRight: ix > options.length - 1 ? 'small' : 'none',
          marginBottom: 'small'
        },
        option.label
      );
    })
  );
};

SelectButton.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  options: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  isMultiSelect: _propTypes2.default.bool
} : {};

SelectButton.defaultProps = {
  type: 'select-button',
  isMultiSelect: false
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