'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fi = require('react-icons/fi');

var _Button = require('../Button');

var _Flex = require('../Flex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionButtons = function ActionButtons(_ref) {
  var actions = _ref.actions,
      onNavigate = _ref.onNavigate,
      _ref$disableNext = _ref.disableNext,
      disableNext = _ref$disableNext === undefined ? false : _ref$disableNext,
      _ref$isSaving = _ref.isSaving,
      isSaving = _ref$isSaving === undefined ? false : _ref$isSaving;

  var handleOnClick = function handleOnClick(action, event) {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    if (action.navigate === 'external') {
      return window.open(action.url, action.target || '_blank');
    } else {
      return onNavigate(action);
    }
  };

  return _react2.default.createElement(
    _Flex.Flex,
    { marginY: 'base', flexGrow: 0, justifyContent: 'space-between' },
    actions && actions.map(function (action, index) {
      if (action.navigate === 'back' || typeof action.label === 'string' && action.label.toLowerCase() === 'back') {
        return _react2.default.createElement(
          _Button.Button,
          {
            key: 'back',
            type: 'button',
            variant: action.variant ? action.variant : 'outline',
            icon: true,
            onClick: handleOnClick.bind(null, action),
            order: -1,
            alignSelf: 'flex-start',
            marginRight: 'auto',
            disabled: isSaving
          },
          _react2.default.createElement(_fi.FiArrowLeft, { alt: action.label })
        );
      }

      return _react2.default.createElement(
        _Button.Button,
        {
          key: index,
          type: action.navigate === 'next' ? 'submit' : 'button',
          variant: action.variant ? action.variant : action.navigate === 'next' ? 'full' : 'outline',
          marginLeft: 'small',
          onClick: handleOnClick.bind(null, action),
          disabled: action.navigate === 'next' && disableNext || isSaving
        },
        action.label
      );
    })
  );
};

ActionButtons.displayName = 'ActionButtons';

exports.default = ActionButtons;
module.exports = exports['default'];