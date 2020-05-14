'use strict';

exports.__esModule = true;
exports.SingleSelectCard = exports.SelectCard = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Flex = require('../Flex');

var _Card = require('../Card');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// ---------------------------

var getIsSelected = function getIsSelected(isMultiSelect, value, option) {
  if (!value) return false;
  if (isMultiSelect) return value.indexOf(option.value) > -1;
  return value === option.value;
};

// ---------------------------

var SelectCard = function SelectCard(_ref) {
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
        type = _ref2$target.type,
        select = _ref2$target.select,
        isSelected = _ref2$target.isSelected;

    if (isMultiSelect) {
      var newValue = [].concat(value);
      if (isSelected) {
        newValue.splice(newValue.indexOf(select), 1);
      } else {
        newValue.push(select);
      }
      onChange({ target: { name: fieldName, type: type, value: newValue } }, event);
    } else {
      onChange({ target: { name: fieldName, type: type, value: select } }, event);
    }
  };

  return _react2.default.createElement(
    _Flex.Flex,
    rest,
    options.map(function (option) {
      var isSelected = getIsSelected(isMultiSelect, value, option);
      return _react2.default.createElement(
        _Card.CardSelectable,
        {
          type: 'button',
          size: 'small',
          context: 'neutral',
          variant: isSelected ? 'full' : 'outline',
          onClick: onClick.bind(undefined, {
            target: { name: name, type: type, select: option.value, isSelected: isSelected }
          }),
          key: type + '-' + name + '-' + option.value,
          marginBottom: 'small',
          marginX: 'xsmall',
          selected: isSelected
        },
        option.label
      );
    })
  );
};

SelectCard.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  options: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  isMultiSelect: _propTypes2.default.bool
} : {};

SelectCard.defaultProps = {
  type: 'select-button',
  isMultiSelect: false
};

SelectCard.displayName = 'SelectCard';

// ---------------------------

var SingleSelectCard = function SingleSelectCard(props) {
  return _react2.default.createElement(SelectCard, props);
};

SingleSelectCard.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes2.default.string
} : {};

SingleSelectCard.defaultProps = {
  type: 'single-select-button'
};

SingleSelectCard.displayName = 'SingleSelectCard';

// ---------------------------

exports.SelectCard = SelectCard;
exports.SingleSelectCard = SingleSelectCard;
exports.default = SelectCard;