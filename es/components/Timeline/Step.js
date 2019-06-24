var _templateObject = _taggedTemplateLiteralLoose(['\n  display: block;\n  width: 100%;\n  height: 8em;\n  background-image: url(', '); /* there\'s only one image URL */\n  background-size: cover;\n  background-position: center center;\n\n  /* Add responsive media query to load desktop size image if we have it */\n  @media (min-width: 832px) {\n    display: none;\n  }\n'], ['\n  display: block;\n  width: 100%;\n  height: 8em;\n  background-image: url(', '); /* there\'s only one image URL */\n  background-size: cover;\n  background-position: center center;\n\n  /* Add responsive media query to load desktop size image if we have it */\n  @media (min-width: 832px) {\n    display: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  position: relative;\n  margin-left: 2.5em;\n  padding: ', ';\n  flex-grow: 1;\n  flex-direction: column;\n  max-width: 36em;\n\n  ', '\n  ', '\n\n  &::before {\n    content: \'\';\n    position: absolute;\n    z-index: ', ';\n    top: ', ';\n    left: 0;\n    margin-top: 0.2em;\n    margin-left: -2.3em;\n    width 1.1em;\n    height: 1.1em;\n    border-radius: 50%;\n    border: 2px solid ', '\n    background: ', '\n    box-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);\n  }\n\n  ', '\n'], ['\n  position: relative;\n  margin-left: 2.5em;\n  padding: ', ';\n  flex-grow: 1;\n  flex-direction: column;\n  max-width: 36em;\n\n  ', '\n  ', '\n\n  &::before {\n    content: \'\';\n    position: absolute;\n    z-index: ', ';\n    top: ', ';\n    left: 0;\n    margin-top: 0.2em;\n    margin-left: -2.3em;\n    width 1.1em;\n    height: 1.1em;\n    border-radius: 50%;\n    border: 2px solid ', '\n    background: ', '\n    box-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);\n  }\n\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  border-radius: 5px;\n  border-top: 4px solid ', ';\n  background: ', ';\n  box-shadow: 0 15px 35px 0 rgba(43, 64, 78, 0.1),\n    0 5px 15px 0 rgba(0, 0, 0, 0.05);\n'], ['\n  border-radius: 5px;\n  border-top: 4px solid ', ';\n  background: ', ';\n  box-shadow: 0 15px 35px 0 rgba(43, 64, 78, 0.1),\n    0 5px 15px 0 rgba(0, 0, 0, 0.05);\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  padding: ', ';\n'], ['\n  padding: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', '\n    ', ';\n\n  ', '\n'], ['\n  color: ', '\n    ', ';\n\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';

import { Flex } from '../Flex';
import { Box } from '../Box';
import { Text } from '../Text';
import { Heading } from '../Heading';
import { Button } from '../Button';
import styled from 'styled-components';

var MobileImage = styled(Box)(_templateObject, function (_ref) {
  var image = _ref.image;
  return image.desktop && image.mobile ? image.mobile // we have separate desktop and mobile images, start with mobile
  : image;
});

var StepContainer = styled(Flex)(_templateObject2, function (props) {
  return props.isActive ? 0 : props.theme.space[2];
}, function (props) {
  return props.isActive && 'flex-grow: 2;';
}, function (props) {
  return props.isLast && 'flex-grow: 0;';
}, function (props) {
  return props.index + 1;
}, function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.isActive ? props.theme.colors.primary : props.theme.colors.grey_light;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return !props.isLast && '\n    &::after {\n      content: \'\';\n      position: absolute;\n      z-index: ' + props.index + ';\n      top: 1.3em;\n      left: -1.87em;\n      width .5em;\n      height: 100%;\n      background: ' + props.theme.colors.white + '\n      box-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);\n    }';
});

var ActiveStepBox = styled(Box)(_templateObject3, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.white;
});

var StepContent = styled(Box)(_templateObject4, function (props) {
  return props.isActive ? props.theme.space[2] : 0;
});

var StepTitle = styled(Heading)(_templateObject5, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.isActive && '\n  color: ' + props.theme.colors.primary + ';\n  text-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);\n  ';
}, function (props) {
  return props.isLast && 'margin-bottom: 0;';
});

function Step(_ref2) {
  var title = _ref2.title,
      description = _ref2.description,
      image = _ref2.image,
      index = _ref2.index,
      isActive = _ref2.isActive,
      isLast = _ref2.isLast,
      setActiveStep = _ref2.setActiveStep,
      nextLabel = _ref2.nextLabel;

  var ContentWrapper = isActive ? ActiveStepBox : Box;
  return React.createElement(
    StepContainer,
    { index: index, isActive: isActive, isLast: isLast },
    React.createElement(
      ContentWrapper,
      null,
      isActive && React.createElement(MobileImage, { image: image }),
      React.createElement(
        StepContent,
        { isActive: isActive },
        React.createElement(
          StepTitle,
          {
            as: 'h3',
            isActive: isActive,
            isLast: isLast,
            onClick: function onClick(e) {
              return setActiveStep(index);
            }
          },
          title
        ),
        isActive && React.createElement(
          Text,
          { display: 'block' },
          description
        ),
        isActive && !isLast && React.createElement(
          Button,
          { onClick: function onClick(e) {
              return setActiveStep(index + 1);
            }, mt: 2 },
          nextLabel
        )
      )
    ),
    isActive && React.createElement(Box, { flexGrow: '2' })
  );
}

Step.displayName = 'Step';

export default Step;