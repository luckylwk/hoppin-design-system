function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Box } from '../Box';
import { Container } from '../Container';
import { Markdown } from '../Markdown';
import { ActionButtons, StepHeader } from './index';

var StepMd = function StepMd(_ref) {
  var title = _ref.title,
      lede = _ref.lede,
      body = _ref.body,
      actions = _ref.actions,
      onNavigate = _ref.onNavigate,
      displayMode = _ref.displayMode;
  var containerProps = displayMode === 'flex' ? {
    padding: 0
  } : {};
  return /*#__PURE__*/React.createElement(Container, _extends({
    height: "100%",
    width: "narrow",
    overflow: "scroll"
  }, containerProps), /*#__PURE__*/React.createElement(StepHeader, {
    title: title,
    lede: lede
  }), body && /*#__PURE__*/React.createElement(Markdown, null, body), /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1
  }), /*#__PURE__*/React.createElement(ActionButtons, {
    actions: actions,
    onNavigate: onNavigate
  }));
};

StepMd.displayName = 'StepMd';
export default StepMd;