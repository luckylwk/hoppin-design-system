'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: block;\n  width: 100%;\n  height: 8em;\n  background-image: url(', '); /* there\'s only one image URL */\n  background-size: cover;\n  background-position: center center;\n'], ['\n  display: block;\n  width: 100%;\n  height: 8em;\n  background-image: url(', '); /* there\'s only one image URL */\n  background-size: cover;\n  background-position: center center;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  position: relative;\n  margin-left: 2.5em;\n  flex-grow: 1;\n  flex-direction: column;\n  max-width: 36em;\n  margin-bottom: ', ';\n\n  ', '\n  ', '\n\n  /* "track" on which the bullets sit */\n  ', '\n'], ['\n  position: relative;\n  margin-left: 2.5em;\n  flex-grow: 1;\n  flex-direction: column;\n  max-width: 36em;\n  margin-bottom: ', ';\n\n  ', '\n  ', '\n\n  /* "track" on which the bullets sit */\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  z-index: ', ';\n  top: ', ';\n  left: 0;\n  margin-top: calc(-', ' + .75rem);\n  margin-left: calc(-2 * ', ' - .75rem);\n  width: calc(', ' * 2);\n  height: calc(', ' * 2);\n  border-radius: 50%;\n  border: 2px solid ', '\n  color: ', ';\n  font-weight: ', ';\n  font-size: ', '\n  background: ', ';\n  box-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);\n'], ['\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  z-index: ', ';\n  top: ', ';\n  left: 0;\n  margin-top: calc(-', ' + .75rem);\n  margin-left: calc(-2 * ', ' - .75rem);\n  width: calc(', ' * 2);\n  height: calc(', ' * 2);\n  border-radius: 50%;\n  border: 2px solid ', '\n  color: ', ';\n  font-weight: ', ';\n  font-size: ', '\n  background: ', ';\n  box-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  border-radius: 5px;\n  border-top: 4px solid ', ';\n  background: ', ';\n  box-shadow: 0 15px 35px 0 rgba(43, 64, 78, 0.1),\n    0 5px 15px 0 rgba(0, 0, 0, 0.05);\n  margin-top: -', ';\n  overflow: hidden;\n'], ['\n  border-radius: 5px;\n  border-top: 4px solid ', ';\n  background: ', ';\n  box-shadow: 0 15px 35px 0 rgba(43, 64, 78, 0.1),\n    0 5px 15px 0 rgba(0, 0, 0, 0.05);\n  margin-top: -', ';\n  overflow: hidden;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  padding: ', ';\n'], ['\n  padding: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  ', ';\n\n  ', '\n'], ['\n  color: ', ';\n  ', ';\n\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Flex = require('../Flex');

var _Box = require('../Box');

var _Text = require('../Text');

var _Heading = require('../Heading');

var _Button = require('../Button');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MobileImage = (0, _styledComponents2.default)(_Box.Box)(_templateObject, function (_ref) {
  var image = _ref.image;
  return image.desktop && image.mobile ? image.mobile // we have separate desktop and mobile images, start with mobile
  : image;
});
MobileImage.displayName = 'MobileImage';

var StepContainer = (0, _styledComponents2.default)(_Flex.Flex)(_templateObject2, function (props) {
  return props.isLast ? 0 : props.theme.space[3];
}, function (props) {
  return props.isActive && 'flex-grow: 2;';
}, function (props) {
  return props.isLast && 'flex-grow: 0;';
}, function (props) {
  return !props.isLast && props.showTrack && '\n    &::after {\n      content: \'\';\n      position: absolute;\n      z-index: ' + props.index + ';\n      top: 1.3em;\n      margin-left: calc(-' + props.theme.space[props.bulletSize] + ' - 1rem);\n      width .5em;\n      height: calc(100% + ' + props.theme.space[3] + ');\n      background: ' + props.theme.colors.white + '\n      box-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);\n    }';
});
StepContainer.displayName = 'StepContainer';

var StepBullet = (0, _styledComponents2.default)(_Flex.Flex)(_templateObject3, function (props) {
  return props.index + 1;
}, function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.theme.space[props.bulletSize];
}, function (props) {
  return props.theme.space[props.bulletSize];
}, function (props) {
  return props.theme.space[props.bulletSize];
}, function (props) {
  return props.theme.space[props.bulletSize];
}, function (props) {
  return props.isActive ? props.theme.colors.primary.base : props.theme.colors.neutrals.light;
}, function (props) {
  return props.isActive ? props.theme.colors.primary.base : props.theme.colors.neutrals.light;
}, function (props) {
  return props.theme.fontWeights.bold;
}, function (props) {
  var fontSize = void 0;
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
  return props.theme.colors.white;
});
StepBullet.defaultProps = {
  bullet: ''
};
StepBullet.displayName = 'StepBullet';

var ActiveStepBox = (0, _styledComponents2.default)(_Box.Box)(_templateObject4, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.space[2];
});
ActiveStepBox.displayName = 'ActiveStepBox';

var StepContent = (0, _styledComponents2.default)(_Box.Box)(_templateObject5, function (props) {
  return props.isActive ? props.theme.space[2] : 0;
});
StepContent.displayName = 'StepContent';

var StepTitle = (0, _styledComponents2.default)(_Heading.Heading)(_templateObject6, function (props) {
  return props.isActive ? props.theme.colors.primary.base : 'inherit';
}, function (props) {
  return props.isActive && 'text-shadow: 0 15px 35px 0 rgba(43,64,78,0.10), 0 5px 15px 0 rgba(0,0,0,0.05);';
}, function (props) {
  return props.isLast && 'margin-bottom: 0;';
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
      rest = _objectWithoutProperties(_ref2, ['title', 'description', 'image', 'index', 'isActive', 'isLast', 'goToStep', 'nextLabel', 'hideStepImageOnDesktop', 'bullet', 'bulletSize', 'interactive']);

  var ContentWrapper = isActive ? ActiveStepBox : _Box.Box;
  return _react2.default.createElement(
    StepContainer,
    _extends({
      index: index,
      isActive: isActive,
      isLast: isLast,
      bulletSize: bulletSize
    }, rest),
    _react2.default.createElement(
      StepBullet,
      { index: index, isActive: isActive, bulletSize: bulletSize },
      bullet
    ),
    _react2.default.createElement(
      ContentWrapper,
      null,
      isActive && image && _react2.default.createElement(MobileImage, {
        image: image,
        display: ['block', 'block', hideStepImageOnDesktop ? 'none' : 'block']
      }),
      _react2.default.createElement(
        StepContent,
        { isActive: isActive },
        _react2.default.createElement(
          StepTitle,
          {
            as: 'h3',
            isActive: isActive,
            isLast: isLast,
            onClick: function onClick() {
              return interactive && goToStep(index);
            }
          },
          title
        ),
        isActive && _react2.default.createElement(
          _Text.Text,
          { display: 'block', color: 'neutrals.darker' },
          description
        ),
        interactive && isActive && !isLast && _react2.default.createElement(
          _Button.Button,
          {
            onClick: function onClick(e) {
              e.preventDefault();
              goToStep(index + 1);
            },
            mt: 2
          },
          nextLabel
        )
      )
    ),
    isActive && _react2.default.createElement(_Box.Box, { flexGrow: '2' })
  );
}

Step.displayName = 'Step';

exports.default = Step;
module.exports = exports['default'];