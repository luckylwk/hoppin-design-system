'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Flex = require('../Flex');

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Timeline(_ref) {
  var steps = _ref.steps,
      nextLabel = _ref.nextLabel,
      hideStepImageOnDesktop = _ref.hideStepImageOnDesktop,
      onStepChange = _ref.onStepChange,
      rest = _objectWithoutProperties(_ref, ['steps', 'nextLabel', 'hideStepImageOnDesktop', 'onStepChange']);

  var _useState = (0, _react.useState)(0),
      activeStep = _useState[0],
      setActiveStep = _useState[1];

  var goToStep = function goToStep(index) {
    setActiveStep(index);
    onStepChange && onStepChange(steps[index]);
  };
  return _react2.default.createElement(
    _Flex.Flex,
    _extends({
      width: '100%',
      flex: '1 0 100%',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyItems: 'space-around',
      textAlign: 'left'
    }, rest),
    steps.map(function (step, index) {
      return _react2.default.createElement(_Step2.default, _extends({
        isActive: index === activeStep,
        key: index,
        index: index,
        isLast: index === steps.length - 1,
        goToStep: goToStep,
        nextLabel: nextLabel,
        hideStepImageOnDesktop: hideStepImageOnDesktop
      }, step));
    })
  );
}

Timeline.propTypes = process.env.NODE_ENV !== "production" ? {
  steps: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    description: _propTypes2.default.string,
    image: _propTypes2.default.oneOfType([_propTypes2.default.shape({
      mobile: _propTypes2.default.string,
      desktop: _propTypes2.default.string
    }), _propTypes2.default.string])
  })),
  nextLabel: _propTypes2.default.string
} : {};

Timeline.defaultProps = {
  nextLabel: 'Next'
};

Timeline.displayName = 'Timeline';
exports.default = Timeline;
module.exports = exports['default'];