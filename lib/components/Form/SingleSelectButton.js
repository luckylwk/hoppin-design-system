'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SingleSelectButton = function SingleSelectButton(_ref) {
  var name = _ref.name,
      type = _ref.type,
      options = _ref.options,
      value = _ref.value,
      onChange = _ref.onChange;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _Button.ButtonGroup,
      null,
      options.map(function (option) {
        var isSelected = value === option.value;
        return _react2.default.createElement(
          _Button.Button,
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

SingleSelectButton.propTypes = process.env.NODE_ENV !== "production" ? {
  name: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  value: _propTypes2.default.string,
  options: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func.isRequired
} : {};

SingleSelectButton.defaultProps = {
  type: 'single-select-button'
};

SingleSelectButton.displayName = 'SingleSelectButton';

exports.default = SingleSelectButton;
module.exports = exports['default'];