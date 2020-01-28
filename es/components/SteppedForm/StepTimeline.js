var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Box } from '../Box';
import { Container } from '../Container';
import { Timeline } from '../Timeline';

import { ActionButtons, StepHeader } from './index';

var StepTimeline = function StepTimeline(_ref) {
  var title = _ref.title,
      lede = _ref.lede,
      steps = _ref.steps,
      options = _ref.options,
      actions = _ref.actions,
      onNavigate = _ref.onNavigate,
      displayMode = _ref.displayMode;

  var containerProps = displayMode === 'flex' ? { padding: 0 } : {};
  return React.createElement(
    Container,
    _extends({
      height: '100%',
      width: 'narrow',
      overflow: 'scroll'
    }, containerProps),
    React.createElement(StepHeader, { title: title, lede: lede }),
    React.createElement(Timeline, _extends({ steps: steps, flexGrow: 1 }, options)),
    React.createElement(Box, { flexGrow: 2 }),
    React.createElement(ActionButtons, { actions: actions, onNavigate: onNavigate })
  );
};

StepTimeline.displayName = 'StepTimeline';

export default StepTimeline;