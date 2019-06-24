'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  /*\n    Uncomment below to hide large background image on mobile.\n    Also remove both references to filter: blur()\n  */\n  /* display: none; */\n  filter: blur(8px);\n\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  bottom: -8px;\n  left: -8px;\n  z-index: 0;\n  background-image: url(', '); /* there\'s only one image URL */\n  background-size: cover;\n  background-position: center center;\n  box-shadow: inset 50em 0 25em -25em hsla(0, 0%, 0%, 0.3);\n\n  /* Add responsive media query to load desktop size image if we have it */\n  ', '\n'], ['\n  /*\n    Uncomment below to hide large background image on mobile.\n    Also remove both references to filter: blur()\n  */\n  /* display: none; */\n  filter: blur(8px);\n\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  bottom: -8px;\n  left: -8px;\n  z-index: 0;\n  background-image: url(', '); /* there\'s only one image URL */\n  background-size: cover;\n  background-position: center center;\n  box-shadow: inset 50em 0 25em -25em hsla(0, 0%, 0%, 0.3);\n\n  /* Add responsive media query to load desktop size image if we have it */\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  flex-direction: column;\n'], ['\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  flex-direction: column;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Flex = require('../Flex');

var _Box = require('../Box');

var _Heading = require('../Heading');

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DesktopImage = (0, _styledComponents2.default)(_Box.Box)(_templateObject, function (_ref) {
  var image = _ref.image;
  return image.desktop && image.mobile ? image.mobile // we have separate desktop and mobile images, start with mobile
  : image;
}, function (_ref2) {
  var image = _ref2.image;

  if (image.desktop) {
    return '@media (min-width: 832px) {\n          display: block;\n          background-image: url(' + image.desktop + ');\n          filter: none;\n        }';
  }
});

var TimelineWrapper = (0, _styledComponents2.default)(_Flex.Flex)(_templateObject2);
TimelineWrapper.defaultProps = {
  p: 3,
  bg: 'grey_light',
  minHeight: 500,
  display: 'flex'
};

function Timeline(_ref3) {
  var steps = _ref3.steps,
      nextLabel = _ref3.nextLabel,
      title = _ref3.title,
      subtitle = _ref3.subtitle,
      rest = _objectWithoutProperties(_ref3, ['steps', 'nextLabel', 'title', 'subtitle']);

  var _useState = (0, _react.useState)(0),
      activeStep = _useState[0],
      setActiveStep = _useState[1];

  return _react2.default.createElement(
    TimelineWrapper,
    rest,
    _react2.default.createElement(DesktopImage, { image: steps[activeStep].image }),
    _react2.default.createElement(
      _Flex.Flex,
      {
        contain: true,
        width: '100%',
        flex: '1 0 100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        'justift-items': 'space-around'
      },
      title && _react2.default.createElement(
        _Box.Box,
        { style: { zIndex: 2 }, mt: 3 },
        _react2.default.createElement(
          _Heading.Heading,
          { as: 'h2', color: 'white' },
          title
        ),
        subtitle && _react2.default.createElement(
          _Heading.Heading,
          { as: 'h5', color: 'white' },
          subtitle
        )
      ),
      steps.map(function (step, index) {
        return _react2.default.createElement(_Step2.default, _extends({
          isActive: index === activeStep,
          key: index,
          index: index,
          isLast: index === steps.length - 1,
          setActiveStep: setActiveStep,
          nextLabel: nextLabel
        }, step));
      })
    )
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