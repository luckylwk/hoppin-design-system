function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  ", ";\n\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: 5px;\n  border-top: 4px solid ", ";\n  background: ", ";\n  box-shadow: 0 15px 35px 0 rgba(43, 64, 78, 0.1),\n    0 5px 15px 0 rgba(0, 0, 0, 0.05);\n  margin-top: -", ";\n  overflow: hidden;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  z-index: ", ";\n  top: ", ";\n  left: 0;\n  margin-top: calc(-", " + .1rem);\n  margin-left: calc(-2 * ", " - .75rem);\n  width: calc(", " * 2);\n  height: calc(", " * 2);\n  border-radius: 50%;\n  border: 2px solid ", ";\n  font-weight: ", ";\n  font-size: ", "\n  background: ", ";\n  box-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);\n\n  & span {\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  flex-grow: 1;\n  flex-direction: column;\n  max-width: 36em;\n  margin-bottom: ", ";\n  margin-left: calc(2 * ", " + .75rem);\n\n  ", "\n  ", "\n\n  /* \"track\" on which the bullets sit */\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100%;\n  height: 8em;\n  background-image: url(", "); /* there's only one image URL */\n  background-size: cover;\n  background-position: center center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import { Flex } from '../Flex';
import { Box } from '../Box';
import { Text } from '../Text';
import { Heading } from '../Heading';
import { Button } from '../Button';
import styled from 'styled-components';
var MobileImage = styled(Box)(_templateObject(), function (_ref) {
  var image = _ref.image;
  return image.desktop && image.mobile ? image.mobile // we have separate desktop and mobile images, start with mobile
  : image;
});
MobileImage.displayName = 'MobileImage';
var StepContainer = styled(Flex)(_templateObject2(), function (props) {
  return props.isLast ? 0 : props.theme.space[3];
}, function (props) {
  return props.theme.space[props.bulletSize];
}, function (props) {
  return props.isActive && "flex-grow: 2;";
}, function (props) {
  return props.isLast && "flex-grow: 0;";
}, function (props) {
  return !props.isLast && props.showTrack && "\n    &::after {\n      content: '';\n      position: absolute;\n      z-index: " + props.index + ";\n      top: 1.3em;\n      margin-left: calc(-" + props.theme.space[props.bulletSize] + " - 1rem);\n      width .5em;\n      height: calc(100% + " + props.theme.space[3] + ");\n      background: " + props.theme.colors.white + "\n      box-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);\n    }";
});
StepContainer.displayName = 'StepContainer';
var StepBullet = styled(Flex)(_templateObject3(), function (props) {
  return props.index + 1;
}, function (props) {
  return props.theme.space[3];
}, function (props) {
  return props.theme.space[props.bulletSize];
}, function (props) {
  return props.theme.space[props.bulletSize];
}, function (props) {
  return props.theme.space[props.bulletSize];
}, function (props) {
  return props.theme.space[props.bulletSize];
}, function (props) {
  return props.isActive ? props.theme.colors.primary.base : props.theme.colors.neutral.light;
}, function (props) {
  return props.theme.fontWeights.bold;
}, function (props) {
  var fontSize;

  switch (props.bulletSize) {
    case 'xlarge':
      fontSize = props.theme.fontSizes.h3;
      break;

    case 'large':
      fontSize = props.theme.fontSizes.h4;
      break;

    default:
      fontSize = props.theme.fontSizes.body;
  }

  return fontSize;
}, function (props) {
  return props.isActive ? props.theme.colors.primary.base : props.theme.colors.neutral.light;
}, function (props) {
  return props.theme.colors.white;
});
StepBullet.defaultProps = {
  bullet: ''
};
StepBullet.displayName = 'StepBullet';
var ActiveStepBox = styled(Box)(_templateObject4(), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.space[3];
});
ActiveStepBox.displayName = 'ActiveStepBox';
var StepContent = styled(Box)(_templateObject5(), function (props) {
  return props.isActive && props.showTrack ? props.theme.space[3] : 0;
});
StepContent.displayName = 'StepContent';
var StepTitle = styled(Heading)(_templateObject6(), function (props) {
  return props.isActive ? props.theme.colors.primary.base : 'inherit';
}, function (props) {
  return props.isActive && "text-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);";
}, function (props) {
  return props.isLast && "margin-bottom: 0;";
});
StepTitle.displayName = 'StepTitle';

function Step(_ref2) {
  var title = _ref2.title,
      description = _ref2.description,
      image = _ref2.image,
      index = _ref2.index,
      isActive = _ref2.isActive,
      isLast = _ref2.isLast,
      goToStep = _ref2.goToStep,
      nextLabel = _ref2.nextLabel,
      hideStepImageOnDesktop = _ref2.hideStepImageOnDesktop,
      bullet = _ref2.bullet,
      bulletSize = _ref2.bulletSize,
      interactive = _ref2.interactive,
      showTrack = _ref2.showTrack,
      rest = _objectWithoutPropertiesLoose(_ref2, ["title", "description", "image", "index", "isActive", "isLast", "goToStep", "nextLabel", "hideStepImageOnDesktop", "bullet", "bulletSize", "interactive", "showTrack"]);

  var ContentWrapper = isActive && showTrack ? ActiveStepBox : Box;
  return /*#__PURE__*/React.createElement(StepContainer, _extends({
    index: index,
    isActive: isActive,
    isLast: isLast,
    bulletSize: bulletSize,
    showTrack: showTrack
  }, rest), /*#__PURE__*/React.createElement(StepBullet, {
    index: index,
    isActive: isActive,
    bulletSize: bulletSize,
    showTrack: showTrack
  }, /*#__PURE__*/React.createElement("span", null, bullet)), /*#__PURE__*/React.createElement(ContentWrapper, null, isActive && image && /*#__PURE__*/React.createElement(MobileImage, {
    image: image,
    display: ['block', 'block', hideStepImageOnDesktop ? 'none' : 'block']
  }), /*#__PURE__*/React.createElement(StepContent, {
    isActive: isActive,
    showTrack: showTrack
  }, /*#__PURE__*/React.createElement(StepTitle, {
    as: "h3",
    isActive: isActive,
    isLast: isLast,
    onClick: function onClick() {
      return interactive && goToStep(index);
    }
  }, title), isActive && /*#__PURE__*/React.createElement(Text, {
    display: "block",
    color: showTrack ? 'neutral.darker' : 'inherit'
  }, description), interactive && isActive && !isLast && /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick(e) {
      e.preventDefault();
      goToStep(index + 1);
    },
    mt: 2
  }, nextLabel))), isActive && /*#__PURE__*/React.createElement(Box, {
    flexGrow: "2"
  }));
}

Step.displayName = 'Step';
export default Step;