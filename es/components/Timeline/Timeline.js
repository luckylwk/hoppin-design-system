var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Flex } from '../Flex';
import Step from './Step';

function Timeline(_ref) {
  var steps = _ref.steps,
      nextLabel = _ref.nextLabel,
      hideStepImageOnDesktop = _ref.hideStepImageOnDesktop,
      onStepChange = _ref.onStepChange,
      bulletSize = _ref.bulletSize,
      showTrack = _ref.showTrack,
      interactive = _ref.interactive,
      initAtStep = _ref.initAtStep,
      rest = _objectWithoutProperties(_ref, ['steps', 'nextLabel', 'hideStepImageOnDesktop', 'onStepChange', 'bulletSize', 'showTrack', 'interactive', 'initAtStep']);

  var _useState = useState(0),
      activeStep = _useState[0],
      setActiveStep = _useState[1];

  var goToStep = function goToStep(index) {
    setActiveStep(index);
    onStepChange && onStepChange(steps[index]);
  };

  useEffect(function () {
    if (initAtStep !== undefined && parseInt(initAtStep) !== 'NaN') {
      setActiveStep(parseInt(initAtStep));
    }
  });

  return React.createElement(
    Flex,
    _extends({
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyItems: 'space-around',
      textAlign: 'left'
    }, rest),
    steps.map(function (step, index) {
      return React.createElement(Step, _extends({
        isActive: index === activeStep,
        key: index,
        index: index,
        isLast: index === steps.length - 1,
        goToStep: goToStep,
        nextLabel: nextLabel,
        hideStepImageOnDesktop: hideStepImageOnDesktop,
        bulletSize: bulletSize,
        showTrack: showTrack,
        interactive: interactive
      }, step));
    })
  );
}

Timeline.propTypes = process.env.NODE_ENV !== "production" ? {
  steps: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.shape({
      mobile: PropTypes.string,
      desktop: PropTypes.string
    }), PropTypes.string])
  })),
  nextLabel: PropTypes.string,
  showTrack: PropTypes.bool,
  bulletSize: PropTypes.string,
  interactive: PropTypes.bool
} : {};

Timeline.defaultProps = {
  nextLabel: 'Next',
  showTrack: true,
  bulletSize: 'small',
  interactive: true,
  width: '1',
  flexGrow: 1
};

Timeline.displayName = 'Timeline';
export default Timeline;