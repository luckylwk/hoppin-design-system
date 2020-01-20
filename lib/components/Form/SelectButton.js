'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoppinDesignSystem = require('hoppin-design-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Single select only!
var SelectButton = function SelectButton(_ref) {
  var name = _ref.name,
      type = _ref.type,
      title = _ref.title,
      options = _ref.options,
      value = _ref.value,
      onChange = _ref.onChange;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    title && _react2.default.createElement(
      _hoppinDesignSystem.Paragraph,
      null,
      title
    ),
    _react2.default.createElement(
      _hoppinDesignSystem.ButtonGroup,
      null,
      options.map(function (option) {
        var isSelected = value === option.value;
        return _react2.default.createElement(
          _hoppinDesignSystem.Button,
          {
            context: isSelected ? 'primary' : 'neutral',
            variant: isSelected ? 'full' : 'outline',
            onClick: onChange.bind(undefined, {
              target: { name: name, type: type, value: option.value }
            }),
            key: type + '-' + name + '-' + option.value
          },
          option.label
        );
      })
    )
  );
};

SelectButton.propTypes = process.env.NODE_ENV !== "production" ? {
  name: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  title: _propTypes2.default.string,
  options: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func.isRequired
} : {};

SelectButton.defaultProps = {
  type: 'select-button'
};

SelectButton.displayName = 'SelectButton';

exports.default = SelectButton;
module.exports = exports['default'];