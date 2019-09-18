'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('../Box');

var _Container = require('../Container');

var _Form = require('../Form');

var _Button = require('../Button');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepForm = function StepForm(_ref) {
  var title = _ref.title,
      lede = _ref.lede,
      options = _ref.options,
      minChoices = _ref.minChoices,
      maxChoices = _ref.maxChoices,
      value = _ref.value,
      actions = _ref.actions,
      onNavigate = _ref.onNavigate,
      onChange = _ref.onChange,
      validationErrors = _ref.validationErrors,
      saveErrors = _ref.saveErrors,
      isSaving = _ref.isSaving,
      displayMode = _ref.displayMode;

  /*
   * Handle multiple choice logic in component.
   * Makes this component behave similar to StepForm
   */
  var handleClick = function handleClick(option, event) {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    // add the freshly clicked option to the array, if id doesn't exist yet.
    var newValue = [].concat(value);
    var index = newValue.indexOf(option.value);
    if (index >= 0) {
      // the option was already selected, deselect it
      newValue.splice(index, 1);
    } else {
      // add the option to the selection.
      newValue.push(option.value);
    }
    // if we got too many options now, take the last chosen ones (from  end of array)
    if (newValue.length > maxChoices) {
      newValue = newValue.slice(-maxChoices);
    }
    // call onChange(slideSlug, fieldName, event)
    // slideSlug and fieldName are already bound
    // -> fake event to be picked up.
    onChange({ target: { value: newValue } });
  };

  var containerProps = displayMode === 'flex' ? { padding: 0 } : {};

  return _react2.default.createElement(
    _Container.Container,
    {
      as: 'form',
      height: '100%',
      width: 'full',
      overflow: 'scroll',
      padding: 0
    },
    _react2.default.createElement(
      _Container.Container,
      _extends({ width: 'narrow' }, containerProps),
      _react2.default.createElement(_index.StepHeader, { title: title, lede: lede })
    ),
    _react2.default.createElement(
      _Button.ButtonGroup,
      {
        flexWrap: 'wrap',
        flexGrow: 0,
        justifyContent: 'center',
        margin: ['base', 'large', 'xlarge']
      },
      options.length > 0 && options.map(function (option) {
        return _react2.default.createElement(
          _Button.Button,
          {
            key: option.value,
            variant: value.indexOf(option.value) >= 0 ? 'full' : 'outline',
            type: 'button',
            context: 'neutral',
            size: 'large',
            onClick: handleClick.bind(null, option),
            marginBottom: 'large'
          },
          option.label
        );
      })
    ),
    _react2.default.createElement(
      _Container.Container,
      _extends({ width: 'narrow' }, containerProps),
      _react2.default.createElement(_Form.Errors, { errors: [].concat(validationErrors, saveErrors) }),
      _react2.default.createElement(_Box.Box, { flexGrow: 1 }),
      _react2.default.createElement(_index.ActionButtons, {
        actions: actions,
        onNavigate: onNavigate,
        disableNext: value.length < minChoices,
        isSaving: isSaving || false
      })
    )
  );
};

StepForm.displayName = 'StepForm';

exports.default = StepForm;
module.exports = exports['default'];